export type SupportedLanguage = 'en' | 'ta' | 'hi';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type Cuisine =
  | 'South Indian'
  | 'North Indian'
  | 'Asian'
  | 'Italian'
  | 'Mexican'
  | 'American'
  | 'Mediterranean'
  | 'Global';

export type FoodCategory =
  | 'Breakfast'
  | 'Lunch'
  | 'Dinner'
  | 'Snacks'
  | 'Desserts'
  | 'Drinks'
  | 'Soups'
  | 'Salads'
  | 'Rice dishes'
  | 'Pasta'
  | 'Noodles'
  | 'Bread'
  | 'Curries'
  | 'Street food'
  | 'Baking'
  | 'Healthy food'
  | 'High protein'
  | 'Vegetarian'
  | 'Vegan'
  | 'Quick meals';

export type AppFoodCategory =
  | 'Breakfast'
  | 'Lunch'
  | 'Dinner'
  | 'Snacks'
  | 'Tiffin'
  | 'Rice Dishes'
  | 'Curries'
  | 'Vegetarian'
  | 'Non-Vegetarian'
  | 'Chinese'
  | 'South Indian'
  | 'North Indian'
  | 'Desserts'
  | 'Sweets'
  | 'Healthy Food';

export type DietaryTag =
  | 'Vegetarian'
  | 'Vegan'
  | 'Eggetarian'
  | 'Non-Vegetarian'
  | 'Gluten-Free'
  | 'Dairy-Free'
  | 'Low Sugar'
  | 'High Protein'
  | 'Keto-Friendly'
  | 'Healthy food'
  | 'Quick meals';

export type Allergen =
  | 'Peanuts'
  | 'Tree nuts'
  | 'Milk'
  | 'Egg'
  | 'Soy'
  | 'Wheat'
  | 'Shellfish'
  | 'Fish'
  | 'Sesame';

export interface NutritionInfo {
  calories: number; // kcal
  protein: number; // g
  carbohydrates: number; // g
  fat: number; // g
  fiber?: number; // g
  sugar?: number; // g
  isEstimated: boolean;
}

export interface RecipeIngredient {
  id: string;
  name: string;
  nameTa?: string;
  nameHi?: string;
  quantity: number | string;
  unit: string;
  category: 'Produce' | 'Dairy' | 'Pantry' | 'Spices' | 'Protein' | 'Grains' | 'Bakery' | 'Meat' | 'Fish' | 'Other';
  optional?: boolean;
}

export interface InstructionStep {
  step: number;
  instruction: string;
  instructionTa?: string;
  instructionHi?: string;
  timerMinutes?: number;
}

export interface Recipe {
  id: string;
  title: string;
  titleTa: string;
  titleHi: string;
  description: string;
  descriptionTa: string;
  descriptionHi: string;
  imageUrl: string;
  cuisine: Cuisine;
  category: FoodCategory;
  categories?: (AppFoodCategory | string)[];
  dietaryTags: DietaryTag[];
  allergens: Allergen[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  totalTimeMinutes: number;
  servings: number;
  difficulty: Difficulty;
  rating: number;
  ratingCount: number;
  ingredients: RecipeIngredient[];
  instructions: InstructionStep[];
  nutrition: NutritionInfo;
  author?: string;
  sourceUrl?: string;
  isCustomAi?: boolean;
  cookingTips?: string[];
  substitutions?: Record<string, string>;
}

export type ExpiryStatus = 'fresh' | 'expiring_soon' | 'expired';

export interface PantryItem {
  id: string;
  name: string;
  nameTa?: string;
  nameHi?: string;
  quantity: number;
  unit: string;
  category: string;
  isAvailable: boolean;
  expiryDate?: string; // YYYY-MM-DD
  addedAt: string;
}

export interface UserProfile {
  id: string; // Unique User ID
  username?: string; // Username for login
  email: string;
  fullName: string;
  avatarUrl?: string;
  language: SupportedLanguage;
  dietaryPreferences: DietaryTag[];
  allergies: Allergen[];
  favoriteCuisines: Cuisine[];
  cookingSkill: 'Beginner' | 'Intermediate' | 'Advanced';
  preferredMaxCookTime?: number;
  favoriteRecipeIds: string[];
  createdAt: string;
}

export interface ShoppingItem {
  id: string;
  recipeId?: string;
  recipeTitle?: string;
  name: string;
  quantity: number | string;
  unit: string;
  category: string;
  isPurchased: boolean;
  addedAt: string;
}

export type MealDay = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
export type MealSlot = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface MealPlanEntry {
  id: string;
  day: MealDay;
  slot: MealSlot;
  recipeId: string;
  recipeTitle: string;
  recipeImage: string;
}

export interface RecipeMatchResult {
  recipe: Recipe;
  matchPercentage: number;
  availableIngredientsCount: number;
  totalRequiredIngredientsCount: number;
  availableIngredients: RecipeIngredient[];
  missingIngredients: RecipeIngredient[];
  matchReasons: string[];
  isExactNameMatch: boolean;
  containsAllergen: boolean;
  score: number;
}

export interface SearchFilters {
  query: string;
  category?: FoodCategory | 'All';
  cuisine?: Cuisine | 'All';
  dietary?: DietaryTag[];
  excludedAllergens?: Allergen[];
  maxCookTimeMinutes?: number;
  difficulty?: Difficulty | 'All';
  onlyAvailableInPantry?: boolean;
  sortBy?: 'relevance' | 'matchRate' | 'cookingTime' | 'rating';
}
