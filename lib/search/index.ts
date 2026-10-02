import {
  Recipe,
  RecipeMatchResult,
  SearchFilters,
  PantryItem,
  Allergen,
  DietaryTag,
  RecipeIngredient
} from '../../types';
import { SEED_RECIPES } from '../../data/seedRecipes';
import { understandFoodSearch, SearchIntent } from '../ai';

function normalizeString(str: string): string {
  return str.toLowerCase().trim().replace(/[^\w\s\u0B80-\u0BFF\u0900-\u097F]/gi, '');
}

/**
 * Checks if a pantry item matches a recipe ingredient across English, Tamil, and Hindi names.
 */
function isIngredientAvailable(
  recipeIng: RecipeIngredient,
  pantryItems: PantryItem[]
): boolean {
  const normName = normalizeString(recipeIng.name);
  const normTa = recipeIng.nameTa ? normalizeString(recipeIng.nameTa) : '';
  const normHi = recipeIng.nameHi ? normalizeString(recipeIng.nameHi) : '';

  return pantryItems.some(p => {
    if (!p.isAvailable) return false;
    const pName = normalizeString(p.name);
    return (
      normName.includes(pName) ||
      pName.includes(normName) ||
      (normTa && pName.includes(normTa)) ||
      (normHi && pName.includes(normHi))
    );
  });
}

/**
 * Primary ranking algorithm that scores, ranks, and deduplicates recipes transparently.
 */
export async function matchAndRankRecipes(
  recipes: Recipe[] = SEED_RECIPES,
  filters: SearchFilters,
  pantryItems: PantryItem[] = [],
  favoriteRecipeIds: string[] = []
): Promise<{
  bestMatches: RecipeMatchResult[];
  relatedAlternatives: RecipeMatchResult[];
  searchIntent?: SearchIntent;
}> {
  // 1. DEDUPLICATION: Ensure every dish appears strictly ONCE by ID and normalized title
  const seenIds = new Set<string>();
  const seenTitles = new Set<string>();
  const uniquePool: Recipe[] = [];

  for (const r of recipes) {
    if (!r || !r.id || !r.title) continue;
    const normTitle = r.title.toLowerCase().trim();
    if (!seenIds.has(r.id) && !seenTitles.has(normTitle)) {
      seenIds.add(r.id);
      seenTitles.add(normTitle);
      uniquePool.push(r);
    }
  }

  const queryRaw = filters.query ? filters.query.trim() : '';
  const queryLower = queryRaw.toLowerCase();
  const intent = queryRaw ? await understandFoodSearch(queryRaw) : undefined;

  // Split query into significant search tokens (e.g. "potato", "chicken", "parotta", "egg")
  const queryTokens = queryLower
    .split(/\s+/)
    .map(t => t.trim())
    .filter(t => t.length > 1 && !['and', 'with', 'for', 'the', 'in', 'of'].includes(t));

  const results: RecipeMatchResult[] = [];

  for (const recipe of uniquePool) {
    // A. Strict Allergy Check: If recipe contains an excluded allergen, exclude completely!
    if (filters.excludedAllergens && filters.excludedAllergens.length > 0) {
      const hasExcludedAllergen = recipe.allergens.some(a =>
        filters.excludedAllergens?.includes(a)
      );
      if (hasExcludedAllergen) continue;
    }

    // B. Strict Negative Ingredient Check from NLP intent (e.g. "without onion")
    if (intent?.negativeIngredients && intent.negativeIngredients.length > 0) {
      const hasNegative = recipe.ingredients.some(ing => {
        const ingName = ing.name.toLowerCase();
        return intent.negativeIngredients?.some(neg => ingName.includes(neg));
      });
      if (hasNegative) continue;
    }

    // C. Category & Cuisine Filtering
    if (filters.category && filters.category !== 'All' && recipe.category !== filters.category) {
      continue;
    }

    if (filters.cuisine && filters.cuisine !== 'All' && recipe.cuisine !== filters.cuisine) {
      continue;
    }

    // D. Dietary Tags filter
    if (filters.dietary && filters.dietary.length > 0) {
      const matchesAllDietary = filters.dietary.every(d => recipe.dietaryTags.includes(d));
      if (!matchesAllDietary) continue;
    }

    // E. Max cooking time
    if (filters.maxCookTimeMinutes && recipe.totalTimeMinutes > filters.maxCookTimeMinutes) {
      continue;
    }

    // F. Difficulty filter
    if (filters.difficulty && filters.difficulty !== 'All' && recipe.difficulty !== filters.difficulty) {
      continue;
    }

    // --- INGREDIENT AVAILABILITY CALCULATION ---
    const availableIngredients: RecipeIngredient[] = [];
    const missingIngredients: RecipeIngredient[] = [];

    for (const ing of recipe.ingredients) {
      if (isIngredientAvailable(ing, pantryItems)) {
        availableIngredients.push(ing);
      } else {
        missingIngredients.push(ing);
      }
    }

    const totalRequired = recipe.ingredients.length;
    const matchPercentage =
      totalRequired > 0
        ? Math.round((availableIngredients.length / totalRequired) * 100)
        : 100;

    if (filters.onlyAvailableInPantry && matchPercentage < 100) {
      continue;
    }

    // --- TRANSPARENT SCORING & RELEVANCE CALCULATION ---
    let score = 0;
    const reasons: string[] = [];

    const titleNorm = recipe.title.toLowerCase();
    const titleTaNorm = (recipe.titleTa || '').toLowerCase();
    const titleHiNorm = (recipe.titleHi || '').toLowerCase();

    // Check 1: Dish Title Match
    const isDirectTitleMatch = Boolean(
      queryLower &&
      (titleNorm.includes(queryLower) ||
        titleTaNorm.includes(queryLower) ||
        titleHiNorm.includes(queryLower) ||
        queryTokens.some(token => titleNorm.includes(token)))
    );

    if (isDirectTitleMatch) {
      score += 600;
      reasons.push('Matches dish name');
    }

    // Check 2: Ingredient Relevance Match
    let matchedIngredientsCount = 0;
    const matchedIngNames: string[] = [];

    for (const ing of recipe.ingredients) {
      const ingEn = ing.name.toLowerCase();
      const ingTa = (ing.nameTa || '').toLowerCase();
      const ingHi = (ing.nameHi || '').toLowerCase();

      const matchesToken = queryTokens.some(token =>
        ingEn.includes(token) || (ingTa && ingTa.includes(token)) || (ingHi && ingHi.includes(token))
      );

      const matchesIntent = (intent?.extractedIngredients || []).some(ext =>
        ingEn.includes(ext)
      );

      if (matchesToken || matchesIntent) {
        matchedIngredientsCount++;
        matchedIngNames.push(ing.name);
      }
    }

    if (matchedIngredientsCount > 0) {
      // Award high relevance score for every ingredient match
      score += 400 + matchedIngredientsCount * 150;
      reasons.push(`Contains ${matchedIngNames.slice(0, 2).join(', ')}`);
    }

    // If a search query was entered, but the dish neither matches the title NOR has any searched ingredients:
    const isRelevantToQuery = !queryLower || isDirectTitleMatch || matchedIngredientsCount > 0;

    if (queryLower && !isRelevantToQuery) {
      // Recipe does NOT contain the searched term or ingredient
      score -= 500;
    }

    // Factor 3: Pantry Availability Bonus
    if (pantryItems.length > 0) {
      score += (matchPercentage / 100) * 150;
      if (matchPercentage === 100) {
        reasons.push('100% ingredients ready');
      } else if (matchPercentage >= 75) {
        reasons.push(`${matchPercentage}% pantry match`);
      } else if (missingIngredients.length <= 2 && missingIngredients.length > 0) {
        reasons.push(`Only ${missingIngredients.length} missing: ${missingIngredients[0].name}`);
      }
    }

    // Factor 4: Quick cooking time bonus
    if (recipe.totalTimeMinutes <= 20) {
      if (reasons.length < 3) reasons.push(`Ready in ${recipe.totalTimeMinutes}m`);
      score += 20;
    }

    // Factor 5: Dietary clarity
    if (recipe.dietaryTags.includes('Vegetarian')) {
      if (reasons.length < 3) reasons.push('Vegetarian');
    }
    if (recipe.dietaryTags.includes('High Protein')) {
      if (reasons.length < 3) reasons.push('High Protein');
    }

    // Factor 6: User Favorites bonus
    if (favoriteRecipeIds.includes(recipe.id)) {
      score += 50;
    }

    // Rating quality bonus
    score += (recipe.rating / 5) * 20;

    results.push({
      recipe,
      matchPercentage,
      availableIngredientsCount: availableIngredients.length,
      totalRequiredIngredientsCount: totalRequired,
      availableIngredients,
      missingIngredients,
      matchReasons: reasons.slice(0, 3),
      isExactNameMatch: isDirectTitleMatch,
      containsAllergen: false,
      score,
    });
  }

  // --- SORTING ---
  results.sort((a, b) => {
    if (filters.sortBy === 'matchRate') {
      return b.matchPercentage - a.matchPercentage;
    }
    if (filters.sortBy === 'cookingTime') {
      return a.recipe.totalTimeMinutes - b.recipe.totalTimeMinutes;
    }
    if (filters.sortBy === 'rating') {
      return b.recipe.rating - a.recipe.rating;
    }
    // Default: strict relevance score
    return b.score - a.score;
  });

  // When a search query is provided, show ALL recipes that actually matched the query (score > 0)
  // Do NOT include unrelated dishes just to fill up the list
  if (queryLower) {
    const matchingRecipes = results.filter(r => r.score > 0);
    return {
      bestMatches: matchingRecipes,
      relatedAlternatives: matchingRecipes.length === 0 ? results.slice(0, 6) : [],
      searchIntent: intent,
    };
  }

  // When browsing all recipes without a search query, return all matching filters
  return {
    bestMatches: results,
    relatedAlternatives: [],
    searchIntent: intent,
  };
}
