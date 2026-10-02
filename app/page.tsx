'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../components/Navbar';
import { MobileNav } from '../components/MobileNav';
import { HeroSection } from '../components/HeroSection';
import { RecipeCard } from '../components/RecipeCard';
import { RecipeDetailModal } from '../components/RecipeDetailModal';
import { CookingModeModal } from '../components/CookingModeModal';
import { VoiceSearchModal } from '../components/VoiceSearchModal';
import { CameraScanModal } from '../components/CameraScanModal';
import { FilterDrawer } from '../components/FilterDrawer';
import { AuthModal } from '../components/AuthModal';
import { UserProfileModal } from '../components/UserProfileModal';
import { PantryView } from '../components/PantryView';
import { MealPlannerView } from '../components/MealPlannerView';
import { ShoppingListView } from '../components/ShoppingListView';
import { CarouselSection } from '../components/CarouselSection';
import { CategorySection } from '../components/CategorySection';
import { LoginPageView } from '../components/LoginPageView';

import { useI18n } from '../lib/i18n';
import { useAuth } from '../lib/auth';
import { usePantry } from '../lib/pantry';
import { matchAndRankRecipes } from '../lib/search';
import { generateRecipeFromIngredients, getStableRecipeImage, FALLBACK_FOOD_IMAGE } from '../lib/ai';
import { initSpeechVoices } from '../lib/speech';
import { SEED_RECIPES } from '../data/seedRecipes';
import {
  RecipeMatchResult,
  SearchFilters,
  Recipe,
  MealSlot,
  FoodCategory,
  AppFoodCategory,
} from '../types';
import { APP_CATEGORIES, getRecipeCategories } from '../lib/search/categories';

import {
  SlidersHorizontal,
  Sparkles,
  ArrowUpDown,
  Search,
  X,
  ChefHat,
  Heart,
  PlusCircle,
  Lightbulb,
  CheckCircle2,
  RefreshCw,
  Mic,
  Camera
} from 'lucide-react';

export default function HomePage() {
  const { t, language } = useI18n();
  const { user, isLoading } = useAuth();
  const { pantryItems, addMultipleItems } = usePantry();
  const router = useRouter();

  // Authentication Entry Guard:
  // When there is NO authenticated user/session, http://localhost:3000 MUST redirect to /login.
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/login');
    }
  }, [isLoading, user, router]);

  // Navigation State
  const [activeTab, setActiveTab] = useState<
    'home' | 'categories' | 'search' | 'pantry' | 'mealPlan' | 'shoppingList' | 'favorites' | 'login'
  >('home');
  const [selectedAppCategory, setSelectedAppCategory] = useState<AppFoodCategory | 'All'>('All');

  useEffect(() => {
    initSpeechVoices();
  }, []);

  // Search & Filter State
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    category: 'All',
    cuisine: 'All',
    dietary: [],
    excludedAllergens: [],
    sortBy: 'relevance',
    onlyAvailableInPantry: false,
  });

  const [recentSearches, setRecentSearches] = useState<string[]>([
    'potato snacks',
    'sambar',
    'paneer',
    'easy dinner',
  ]);

  // Results State
  const [searchResults, setSearchResults] = useState<{
    bestMatches: RecipeMatchResult[];
    relatedAlternatives: RecipeMatchResult[];
  }>({ bestMatches: [], relatedAlternatives: [] });

  const [isSearching, setIsSearching] = useState(false);

  // Modal Dialog States
  const [selectedRecipeMatch, setSelectedRecipeMatch] = useState<RecipeMatchResult | null>(null);
  const [cookingRecipe, setCookingRecipe] = useState<Recipe | null>(null);
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const [cameraModalOpen, setCameraModalOpen] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  // Custom AI Generated Recipe State
  const [aiGenerating, setAiGenerating] = useState(false);
  const [customAiRecipe, setCustomAiRecipe] = useState<Recipe | null>(null);

  // Trigger ranking whenever filters, pantry, or user changes
  useEffect(() => {
    let isMounted = true;
    setIsSearching(true);

    const availablePantry = pantryItems.filter(p => p.isAvailable);
    const favIds = user?.favoriteRecipeIds || [];

    // Include custom AI recipe in pool if present
    const recipePool = customAiRecipe ? [customAiRecipe, ...SEED_RECIPES] : SEED_RECIPES;

    matchAndRankRecipes(recipePool, filters, availablePantry, favIds).then(results => {
      if (isMounted) {
        setSearchResults({
          bestMatches: results.bestMatches,
          relatedAlternatives: results.relatedAlternatives,
        });
        setIsSearching(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [filters, pantryItems, user?.favoriteRecipeIds, customAiRecipe]);

  // Handle Search Input from Hero or Search Bar
  const handleExecuteSearch = (queryText: string) => {
    setFilters(prev => ({ ...prev, query: queryText }));
    if (queryText.trim() && !recentSearches.includes(queryText.trim())) {
      setRecentSearches(prev => [queryText.trim(), ...prev.slice(0, 4)]);
    }
    setActiveTab('search');
  };

  // Quick Add Ingredient to Search Query
  const handleQuickAddIngredient = (ingredient: string) => {
    const current = filters.query ? `${filters.query} ${ingredient}` : ingredient;
    handleExecuteSearch(current);
  };

  // Cook With Expiring Items from Banner
  const handleCookExpiring = (ingredientName: string) => {
    handleExecuteSearch(ingredientName);
  };

  // Trigger Custom AI Recipe Generation
  const handleGenerateAiRecipe = async () => {
    const ingredientNames = pantryItems.filter(p => p.isAvailable).map(p => p.name);
    if (ingredientNames.length === 0) {
      alert('Please add at least 1 ingredient to your pantry first!');
      return;
    }

    setAiGenerating(true);
    try {
      const draft = await generateRecipeFromIngredients(ingredientNames);
      const stableRecipeImage = getStableRecipeImage(draft.title, ingredientNames);
      const stableRecipeId = 'ai-recipe-' + draft.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const newRecipe: Recipe = {
        id: stableRecipeId,
        title: draft.title,
        titleTa: `${draft.title} (AI பரிந்துரை)`,
        titleHi: `${draft.title} (AI शेफ रेसिपी)`,
        description: draft.description,
        descriptionTa: draft.description,
        descriptionHi: draft.description,
        imageUrl: stableRecipeImage || FALLBACK_FOOD_IMAGE,
        cuisine: 'Global',
        category: 'Quick meals',
        dietaryTags: ['Vegetarian', 'Quick meals'],
        allergens: [],
        prepTimeMinutes: 5,
        cookTimeMinutes: draft.cookingTimeMinutes,
        totalTimeMinutes: draft.cookingTimeMinutes + 5,
        servings: draft.servings,
        difficulty: 'Easy',
        rating: 5.0,
        ratingCount: 1,
        ingredients: draft.ingredients.map((ing, i) => ({
          id: `ai-ing-${i}`,
          name: ing.name,
          quantity: ing.quantity,
          unit: ing.unit,
          category: 'Produce',
        })),
        instructions: draft.instructions.map((ins, i) => ({
          step: i + 1,
          instruction: ins,
          instructionTa: ins,
          instructionHi: ins,
        })),
        nutrition: {
          calories: 280,
          protein: 8,
          carbohydrates: 34,
          fat: 10,
          fiber: 4,
          sugar: 3,
          isEstimated: true,
        },
        isCustomAi: true,
      };

      setCustomAiRecipe(newRecipe);
      setSelectedRecipeMatch({
        recipe: newRecipe,
        matchPercentage: 100,
        availableIngredientsCount: newRecipe.ingredients.length,
        totalRequiredIngredientsCount: newRecipe.ingredients.length,
        availableIngredients: newRecipe.ingredients,
        missingIngredients: [],
        matchReasons: ['Tailored to your exact pantry ingredients', 'Invented in seconds by AI'],
        isExactNameMatch: true,
        containsAllergen: false,
        score: 999,
      });
    } catch (e) {
      console.error('Error generating AI recipe', e);
      alert('Unable to generate custom dish right now. Please try again.');
    } finally {
      setAiGenerating(false);
    }
  };

  const handleResetFilters = () => {
    setFilters({
      query: '',
      category: 'All',
      cuisine: 'All',
      dietary: [],
      excludedAllergens: [],
      sortBy: 'relevance',
      onlyAvailableInPantry: false,
      maxCookTimeMinutes: undefined,
      difficulty: 'All',
    });
  };

  // Filtered Favorites View
  const favoriteMatches = useMemo(() => {
    const favIds = user?.favoriteRecipeIds || [];
    return searchResults.bestMatches.filter(r => favIds.includes(r.recipe.id));
  }, [searchResults.bestMatches, user?.favoriteRecipeIds]);

  // Dynamic categories with live counts from SEED_RECIPES
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    SEED_RECIPES.forEach(r => {
      const cats = getRecipeCategories(r);
      cats.forEach(c => {
        counts[c] = (counts[c] || 0) + 1;
      });
    });
    return counts;
  }, []);

  // Curated collections for responsive home carousels
  const southIndianRecipes = useMemo(() => {
    return SEED_RECIPES.filter(
      r => r.cuisine === 'South Indian' || getRecipeCategories(r).includes('South Indian')
    ).slice(0, 10);
  }, []);

  const quickMealRecipes = useMemo(() => {
    return SEED_RECIPES.filter(r => r.totalTimeMinutes <= 25).slice(0, 10);
  }, []);

  const popularIndianRecipes = useMemo(() => {
    return SEED_RECIPES.filter(
      r => r.cuisine === 'North Indian' || r.cuisine === 'South Indian'
    ).slice(0, 10);
  }, []);

  const healthyRecipes = useMemo(() => {
    return SEED_RECIPES.filter(
      r =>
        getRecipeCategories(r).includes('Healthy Food') ||
        r.dietaryTags.some(t => /healthy|vegan|salad|low carb|gluten-free/i.test(t)) ||
        r.category === 'Salads' ||
        r.category === 'Soups'
    ).slice(0, 10);
  }, []);

  const sweetRecipes = useMemo(() => {
    return SEED_RECIPES.filter(
      r =>
        getRecipeCategories(r).includes('Desserts') ||
        getRecipeCategories(r).includes('Sweets') ||
        r.category === 'Desserts'
    ).slice(0, 10);
  }, []);

  const helperWrapMatch = (recipe: Recipe): RecipeMatchResult => ({
    recipe,
    matchPercentage: 100,
    availableIngredientsCount: recipe.ingredients.length,
    totalRequiredIngredientsCount: recipe.ingredients.length,
    availableIngredients: recipe.ingredients,
    missingIngredients: [],
    matchReasons: [`${recipe.cuisine} Heritage`, `${recipe.totalTimeMinutes}m cook time`],
    isExactNameMatch: false,
    containsAllergen: false,
    score: 100,
  });

  // Guard against showing unauthenticated UI before redirect
  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf7f2]">
        <div className="text-center p-6">
          <div className="w-12 h-12 border-4 border-[#2d6a4f]/20 border-t-[#2d6a4f] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm font-bold text-[#1b4332]">
            {isLoading ? 'Loading Leftover Chef...' : 'Redirecting to Chef Login...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f0d] text-[#f3f4f6] pb-20 md:pb-8">
      {/* Top Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenProfile={() => setProfileModalOpen(true)}
      />

      {/* MAIN VIEW CONTROLLER */}
      {activeTab === 'home' && (
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection
            onSearch={handleExecuteSearch}
            onOpenVoice={() => setVoiceModalOpen(true)}
            onOpenScan={() => setCameraModalOpen(true)}
            onQuickAddIngredient={handleQuickAddIngredient}
            onGenerateAiRecipe={handleGenerateAiRecipe}
          />

          {/* AI Custom Recipe Generator Callout Banner */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-5 sm:my-6">
            <div
              className="rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 border border-[#059669]/30 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #071f16 0%, #0d3828 100%)',
                color: '#ffffff',
                boxShadow: '0 8px 30px -4px rgba(0, 0, 0, 0.6)',
              }}
            >
              <div className="max-w-xl z-10">
                <span className="badge-pill bg-[#f97316]/20 text-[#fb923c] border border-[#f97316]/30 text-[11px] font-bold py-0.5 px-2.5 mb-1.5 inline-flex items-center gap-1.5">
                  <Sparkles size={12} />
                  AI Recipe Crafter
                </span>
                <h2 className="text-base sm:text-lg font-bold tracking-tight text-white">
                  Have random leftover ingredients?
                </h2>
                <p className="text-xs text-[#a7f3d0] mt-1 leading-relaxed">
                  Our smart cooking engine invents customized step-by-step recipes specifically utilizing whatever ingredients you have in your kitchen with zero waste.
                </p>
              </div>

              <div className="flex items-center gap-4 z-10 shrink-0">
                {/* Food Plate Preview Thumbnail */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    minWidth: '56px',
                    minHeight: '56px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid rgba(16, 185, 129, 0.45)',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.5)',
                    flexShrink: 0,
                  }}
                  className="hidden sm:block"
                >
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80"
                    alt="Recipe preview"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <button
                  onClick={handleGenerateAiRecipe}
                  disabled={aiGenerating}
                  className="btn-accent text-xs sm:text-sm py-2.5 px-5 font-semibold shrink-0 rounded-full min-h-[38px] flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  {aiGenerating ? (
                    <span className="flex items-center gap-2">
                      <RefreshCw size={15} className="animate-spin" /> Crafting Recipe...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <ChefHat size={16} /> Generate Custom AI Dish
                    </span>
                  )}
                </button>
              </div>
            </div>
          </section>

          {/* Popular Categories Carousel */}
          <CarouselSection
            title="🍴 Explore Food Categories"
            subtitle="Discover wholesome recipes curated by category"
            viewAllAction={() => {
              setSelectedAppCategory('All');
              setActiveTab('categories');
            }}
            viewAllLabel="View All Categories"
          >
            {APP_CATEGORIES.map(cat => {
              const count = categoryCounts[cat.id] || 0;
              const displayName = language === 'ta' ? cat.nameTa : language === 'hi' ? cat.nameHi : cat.name;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedAppCategory(cat.id);
                    setActiveTab('categories');
                  }}
                  style={{
                    width: '112px',
                    minWidth: '112px',
                    maxWidth: '112px',
                    padding: '12px 8px',
                    borderRadius: '16px',
                    backgroundColor: '#141a16',
                    border: '1px solid #232c25',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:border-[#059669] hover:bg-[#1a221d] group active:scale-95"
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#1a221d',
                      marginBottom: '6px',
                      border: '1px solid #232c25',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                      transition: 'all 0.2s ease',
                    }}
                    className="group-hover:scale-110 group-hover:border-[#059669] group-hover:bg-[#071f16]"
                  >
                    <span style={{ fontSize: '1.35rem' }}>
                      {cat.icon}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f9fafb', textAlign: 'center', lineHeight: '1.2' }}>
                    {displayName}
                  </span>
                  <span style={{ fontSize: '0.675rem', fontWeight: 500, color: '#9ca3af', marginTop: '2px' }}>
                    {count} dishes
                  </span>
                </button>
              );
            })}
          </CarouselSection>

          {/* South Indian Specialties & Tamil Nadu Heritage Carousel */}
          <CarouselSection
            title="🔥 South Indian Specialties & Tamil Nadu Classics"
            subtitle="Crispy dosas, fluffy idlis, traditional kuzhambu, spicy biryanis, and festive sweets"
            viewAllAction={() => {
              setFilters(prev => ({ ...prev, cuisine: 'South Indian', query: '' }));
              setActiveTab('search');
            }}
            viewAllLabel="Explore All South Indian"
          >
            {southIndianRecipes.map(recipe => {
              const match = helperWrapMatch(recipe);
              return (
                <div
                  key={`south-${recipe.id}`}
                  className="carousel-card-item"
                  style={{
                    width: '235px',
                    minWidth: '235px',
                    maxWidth: '235px',
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <RecipeCard
                    matchResult={match}
                    onSelect={() => setSelectedRecipeMatch(match)}
                  />
                </div>
              );
            })}
          </CarouselSection>

          {/* Quick 20-Minute Dishes Carousel */}
          <CarouselSection
            badge="Fast & Fresh"
            title="⚡ Quick 20-Minute Leftover Transformations"
            subtitle="Speedy poriyals, snacks, and upmas perfect for busy days"
            viewAllAction={() => {
              setFilters(prev => ({ ...prev, maxCookTimeMinutes: 25, query: '' }));
              setActiveTab('search');
            }}
            viewAllLabel="View Quick Meals"
          >
            {quickMealRecipes.map(recipe => {
              const match = helperWrapMatch(recipe);
              return (
                <div
                  key={`quick-${recipe.id}`}
                  className="carousel-card-item"
                  style={{
                    width: '235px',
                    minWidth: '235px',
                    maxWidth: '235px',
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <RecipeCard
                    matchResult={match}
                    onSelect={() => setSelectedRecipeMatch(match)}
                  />
                </div>
              );
            })}
          </CarouselSection>

          {/* Popular Indian Favorites Carousel */}
          <CarouselSection
            badge="Classic Aromas"
            title="🍛 Popular Indian Favorites"
            subtitle="Beloved traditional curries, aromatic biryanis, and classic comforts"
            viewAllAction={() => {
              setFilters(prev => ({ ...prev, cuisine: 'All', query: 'Indian' }));
              setActiveTab('search');
            }}
            viewAllLabel="Explore Indian Dishes"
          >
            {popularIndianRecipes.map(recipe => {
              const match = helperWrapMatch(recipe);
              return (
                <div
                  key={`indian-${recipe.id}`}
                  className="carousel-card-item"
                  style={{
                    width: '235px',
                    minWidth: '235px',
                    maxWidth: '235px',
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <RecipeCard
                    matchResult={match}
                    onSelect={() => setSelectedRecipeMatch(match)}
                  />
                </div>
              );
            })}
          </CarouselSection>

          {/* Fresh & Healthy Choices Carousel */}
          <CarouselSection
            badge="Nutrient Rich"
            title="🥗 Fresh & Healthy Choices"
            subtitle="Nutritious, fiber-rich, and wholesome dishes to fuel your day"
            viewAllAction={() => {
              setFilters(prev => ({ ...prev, dietary: ['Vegetarian', 'Vegan'], query: '' }));
              setActiveTab('search');
            }}
            viewAllLabel="View Healthy Recipes"
          >
            {healthyRecipes.map(recipe => {
              const match = helperWrapMatch(recipe);
              return (
                <div
                  key={`healthy-${recipe.id}`}
                  className="carousel-card-item"
                  style={{
                    width: '235px',
                    minWidth: '235px',
                    maxWidth: '235px',
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <RecipeCard
                    matchResult={match}
                    onSelect={() => setSelectedRecipeMatch(match)}
                  />
                </div>
              );
            })}
          </CarouselSection>

          {/* Sweet Cravings Carousel */}
          <CarouselSection
            badge="Sweet Treats"
            title="🍯 Sweet Cravings"
            subtitle="Delicious traditional payasams, halwas, and festive sweets"
            viewAllAction={() => {
              setFilters(prev => ({ ...prev, category: 'Desserts', query: '' }));
              setActiveTab('search');
            }}
            viewAllLabel="Explore Sweet Cravings"
          >
            {sweetRecipes.map(recipe => {
              const match = helperWrapMatch(recipe);
              return (
                <div
                  key={`sweet-${recipe.id}`}
                  className="carousel-card-item"
                  style={{
                    width: '235px',
                    minWidth: '235px',
                    maxWidth: '235px',
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <RecipeCard
                    matchResult={match}
                    onSelect={() => setSelectedRecipeMatch(match)}
                  />
                </div>
              );
            })}
          </CarouselSection>

          {/* Recommended Ready to Cook Recipes Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6 sm:my-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-4 sm:mb-5">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#2d6a4f] uppercase tracking-wider block mb-0.5">
                  Kitchen Matched
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-[#1b4332] tracking-tight">
                  Top Recommended Recipes For You
                </h2>
                <p className="text-xs text-[#788c81] mt-0.5 max-w-xl">
                  Dishes matched to make the best use of your pantry ingredients and minimize food waste
                </p>
              </div>
              <button
                onClick={() => setActiveTab('search')}
                className="btn-secondary text-xs sm:text-sm py-1.5 px-3.5 sm:px-4 font-semibold rounded-xl self-start sm:self-auto shadow-2xs"
              >
                See All Matches
              </button>
            </div>

            <div className="recipe-grid">
              {searchResults.bestMatches.slice(0, 8).map(match => (
                <RecipeCard
                  key={match.recipe.id}
                  matchResult={match}
                  onSelect={() => setSelectedRecipeMatch(match)}
                />
              ))}
            </div>
          </section>
        </main>
      )}

      {/* CATEGORIES VIEW */}
      {activeTab === 'categories' && (
        <CategorySection
          recipes={SEED_RECIPES}
          selectedCategory={selectedAppCategory}
          onSelectCategory={setSelectedAppCategory}
          onSelectRecipe={match => setSelectedRecipeMatch(match)}
          availablePantryIngredients={pantryItems.filter(p => p.isAvailable).map(p => p.name)}
          favoriteRecipeIds={user?.favoriteRecipeIds || []}
        />
      )}

      {/* SEARCH / RESULTS VIEW */}
      {activeTab === 'search' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 w-full">
          {/* Top Search Controls Bar */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Search size={20} className="absolute left-4 top-3.5 text-[#788c81]" />
                <input
                  type="text"
                  value={filters.query}
                  onChange={e => setFilters(prev => ({ ...prev, query: e.target.value }))}
                  placeholder="Search dish or ingredients (e.g. potato, biryani, chocolate dessert)..."
                  className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-[#e2dbcb] text-sm sm:text-base text-[#192720] font-medium outline-none focus:border-[#52b788] shadow-sm transition-all"
                />
                {filters.query && (
                  <button
                    onClick={() => setFilters(prev => ({ ...prev, query: '' }))}
                    className="absolute right-3.5 top-3.5 text-[#788c81] hover:text-[#1b4332]"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              {/* Voice Search Button */}
              <button
                onClick={() => setVoiceModalOpen(true)}
                className="w-11 h-11 rounded-2xl bg-white border border-[#e2dbcb] hover:border-[#52b788] text-[#e76f51] flex items-center justify-center shrink-0 shadow-sm transition-all active:scale-95"
                title="Voice Search"
                aria-label="Voice Search"
              >
                <Mic size={20} />
              </button>

              {/* Camera Scanner Button */}
              <button
                onClick={() => setCameraModalOpen(true)}
                className="w-11 h-11 rounded-2xl bg-white border border-[#e2dbcb] hover:border-[#2d6a4f] text-[#2d6a4f] hover:bg-[#d8f3dc]/40 flex items-center justify-center shrink-0 shadow-sm transition-all active:scale-95"
                title="Scan Ingredients with Camera"
                aria-label="Camera Scan"
              >
                <Camera size={20} />
              </button>

              {/* Filters Drawer Trigger */}
              <button
                onClick={() => setFilterDrawerOpen(true)}
                className="btn-secondary py-3 px-5 text-xs sm:text-sm font-bold shrink-0 flex items-center gap-2 rounded-2xl shadow-sm"
              >
                <SlidersHorizontal size={16} />
                <span>Filters</span>
                {(filters.category !== 'All' ||
                  filters.cuisine !== 'All' ||
                  (filters.dietary && filters.dietary.length > 0) ||
                  filters.onlyAvailableInPantry) && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e76f51]" />
                  )}
              </button>
            </div>

            {/* Recent Searches Chips */}
            {recentSearches.length > 0 && (
              <div className="flex items-center gap-2 overflow-x-auto text-xs text-[#788c81] py-1">
                <span className="font-semibold shrink-0">Recent:</span>
                {recentSearches.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleExecuteSearch(s)}
                    className="badge-pill bg-white border border-[#e2dbcb] hover:bg-[#f0fdf4] text-[#4a5c53] shrink-0 font-medium py-1 px-3 shadow-2xs"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Results Count & Sorting Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 pb-2 border-b border-[#ece6d8]">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#1b4332]">
                  {t('search.resultsFound', { count: searchResults.bestMatches.length })}
                </h2>
                {filters.query && (
                  <span className="text-xs text-[#788c81]">
                    Matching: "{filters.query}"
                  </span>
                )}
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#788c81] font-semibold flex items-center gap-1">
                  <ArrowUpDown size={13} /> {t('search.sortBy')}:
                </span>
                <select
                  value={filters.sortBy || 'relevance'}
                  onChange={e =>
                    setFilters(prev => ({
                      ...prev,
                      sortBy: e.target.value as any,
                    }))
                  }
                  className="bg-white border border-[#e2dbcb] rounded-xl px-2.5 py-1.5 text-xs text-[#192720] font-semibold outline-none"
                >
                  <option value="relevance">{t('search.sortRelevance')}</option>
                  <option value="matchRate">{t('search.sortMatchRate')}</option>
                  <option value="cookingTime">{t('search.sortTime')}</option>
                  <option value="rating">{t('search.sortRating')}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          {isSearching ? (
            <div className="text-center py-20">
              <RefreshCw size={32} className="animate-spin text-[#2d6a4f] mx-auto mb-3" />
              <p className="text-sm font-semibold text-[#1b4332]">Finding best recipes for your kitchen...</p>
            </div>
          ) : searchResults.bestMatches.length > 0 ? (
            <div className="recipe-grid my-6 sm:my-8">
              {searchResults.bestMatches.map(match => (
                <RecipeCard
                  key={match.recipe.id}
                  matchResult={match}
                  onSelect={() => setSelectedRecipeMatch(match)}
                />
              ))}
            </div>
          ) : (
            /* No Exact Results State with Related Alternatives */
            <div className="my-10 space-y-10">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#ece6d8] text-center max-w-xl mx-auto shadow-sm">
                <ChefHat size={48} className="mx-auto text-[#788c81] opacity-40 mb-3" />
                <h3 className="text-lg sm:text-xl font-bold text-[#1b4332]">
                  {t('search.noExactResults')}
                </h3>
                <p className="text-xs sm:text-sm text-[#788c81] mt-2 leading-relaxed">
                  {t('search.addMissingTip')}
                </p>
                <button
                  onClick={handleResetFilters}
                  className="btn-primary text-xs sm:text-sm py-2.5 px-6 font-bold mt-5"
                >
                  {t('search.clearFilters')}
                </button>
              </div>

              {/* Closely Related Alternatives */}
              {searchResults.relatedAlternatives.length > 0 && (
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1b4332] mb-4 flex items-center gap-2">
                    <Lightbulb size={20} className="text-[#f4a261]" />
                    {t('search.relatedAlternatives')}
                  </h3>
                  <div className="recipe-grid">
                    {searchResults.relatedAlternatives.map(match => (
                      <RecipeCard
                        key={match.recipe.id}
                        matchResult={match}
                        onSelect={() => setSelectedRecipeMatch(match)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      )}

      {/* PANTRY VIEW */}
      {activeTab === 'pantry' && (
        <PantryView
          onOpenScan={() => setCameraModalOpen(true)}
          onCookWithPantry={() => {
            setFilters(prev => ({ ...prev, query: '', onlyAvailableInPantry: false }));
            setActiveTab('search');
          }}
        />
      )}

      {/* MEAL PLANNER VIEW */}
      {activeTab === 'mealPlan' && (
        <MealPlannerView
          onFindRecipesForSlot={(slot: MealSlot) => {
            let cat: FoodCategory = 'Lunch';
            if (slot === 'breakfast') cat = 'Breakfast';
            if (slot === 'dinner') cat = 'Dinner';
            if (slot === 'snack') cat = 'Snacks';
            setFilters(prev => ({ ...prev, category: cat, query: '' }));
            setActiveTab('search');
          }}
        />
      )}

      {/* SHOPPING LIST VIEW */}
      {activeTab === 'shoppingList' && (
        <ShoppingListView />
      )}

      {/* FAVORITES VIEW */}
      {activeTab === 'favorites' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div className="flex items-center gap-2 pb-6 border-b border-[#ece6d8] mb-6">
            <Heart size={24} className="text-[#e63946]" fill="#e63946" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332]">
              {t('nav.favorites')} ({favoriteMatches.length})
            </h1>
          </div>

          {favoriteMatches.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-[#ece6d8]">
              <Heart size={44} className="mx-auto text-[#788c81] opacity-30 mb-3" />
              <h3 className="text-base font-bold text-[#1b4332]">No saved favorites yet</h3>
              <p className="text-xs text-[#788c81] mt-1">
                Tap the heart button on any recipe card to save it to your personal cookbook.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favoriteMatches.map(match => (
                <RecipeCard
                  key={match.recipe.id}
                  matchResult={match}
                  onSelect={() => setSelectedRecipeMatch(match)}
                />
              ))}
            </div>
          )}
        </main>
      )}

      {/* LOGIN PAGE VIEW */}
      {activeTab === 'login' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <LoginPageView
            onSuccess={() => setActiveTab('home')}
            onNavigateHome={() => setActiveTab('home')}
          />
        </main>
      )}

      {/* MODALS */}
      <RecipeDetailModal
        matchResult={selectedRecipeMatch}
        onClose={() => setSelectedRecipeMatch(null)}
        onStartCooking={() => {
          if (selectedRecipeMatch) {
            setCookingRecipe(selectedRecipeMatch.recipe);
          }
        }}
      />

      <CookingModeModal
        recipe={cookingRecipe}
        isOpen={Boolean(cookingRecipe)}
        onClose={() => setCookingRecipe(null)}
      />

      <VoiceSearchModal
        isOpen={voiceModalOpen}
        onClose={() => setVoiceModalOpen(false)}
        onSearch={handleExecuteSearch}
      />

      <CameraScanModal
        isOpen={cameraModalOpen}
        onClose={() => setCameraModalOpen(false)}
        onSearchWithIngredients={ingredients => {
          handleExecuteSearch(ingredients.join(' '));
        }}
      />

      <FilterDrawer
        isOpen={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
        filters={filters}
        setFilters={setFilters}
        onReset={handleResetFilters}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <UserProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />

      {/* Mobile Floating Bottom Bar */}
      <MobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenScan={() => setCameraModalOpen(true)}
        onOpenProfile={() => setProfileModalOpen(true)}
      />
    </div>
  );
}
