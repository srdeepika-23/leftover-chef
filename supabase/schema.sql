-- Leftover Chef: Production-Ready Relational Database Schema (PostgreSQL / Supabase)

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For high-performance fuzzy and text searching

-- 2. ENUMS
CREATE TYPE difficulty_level AS ENUM ('Easy', 'Medium', 'Hard');
CREATE TYPE meal_day_enum AS ENUM ('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday');
CREATE TYPE meal_slot_enum AS ENUM ('breakfast', 'lunch', 'dinner', 'snack');

-- 3. PROFILES (Extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  preferred_language VARCHAR(5) DEFAULT 'en' CHECK (preferred_language IN ('en', 'ta', 'hi')),
  cooking_skill VARCHAR(20) DEFAULT 'Intermediate',
  max_cooking_time_minutes INT DEFAULT 45,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. CATEGORIES & CUISINES
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  name_ta TEXT,
  name_hi TEXT,
  slug TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS public.cuisines (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  name_ta TEXT,
  name_hi TEXT,
  slug TEXT NOT NULL UNIQUE
);

-- 5. ALLERGENS & DIETARY TAGS
CREATE TABLE IF NOT EXISTS public.allergens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  description TEXT
);

CREATE TABLE IF NOT EXISTS public.dietary_tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE
);

-- 6. INGREDIENTS MASTER CATALOG
CREATE TABLE IF NOT EXISTS public.ingredients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  name_ta TEXT,
  name_hi TEXT,
  category VARCHAR(50) DEFAULT 'Produce',
  default_unit VARCHAR(20) DEFAULT 'g',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. RECIPES
CREATE TABLE IF NOT EXISTS public.recipes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  title_ta TEXT NOT NULL,
  title_hi TEXT NOT NULL,
  description TEXT NOT NULL,
  description_ta TEXT NOT NULL,
  description_hi TEXT NOT NULL,
  image_url TEXT NOT NULL,
  cuisine_id UUID REFERENCES public.cuisines(id) ON DELETE SET NULL,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  prep_time_minutes INT NOT NULL DEFAULT 10,
  cook_time_minutes INT NOT NULL DEFAULT 15,
  total_time_minutes INT NOT NULL DEFAULT 25,
  servings INT NOT NULL DEFAULT 2,
  difficulty difficulty_level NOT NULL DEFAULT 'Easy',
  rating NUMERIC(3, 2) DEFAULT 4.8,
  rating_count INT DEFAULT 1,
  -- Nutrition (estimated)
  calories INT DEFAULT 250,
  protein_grams NUMERIC(5, 1) DEFAULT 8.0,
  carbs_grams NUMERIC(5, 1) DEFAULT 35.0,
  fat_grams NUMERIC(5, 1) DEFAULT 10.0,
  fiber_grams NUMERIC(5, 1) DEFAULT 4.0,
  sugar_grams NUMERIC(5, 1) DEFAULT 2.0,
  is_custom_ai BOOLEAN DEFAULT FALSE,
  author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. RECIPE INGREDIENTS (Join table with quantity and optional flags)
CREATE TABLE IF NOT EXISTS public.recipe_ingredients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  recipe_id UUID NOT NULL REFERENCES public.recipes(id) ON DELETE CASCADE,
  ingredient_id UUID NOT NULL REFERENCES public.ingredients(id) ON DELETE CASCADE,
  quantity NUMERIC(6, 2) NOT NULL,
  unit VARCHAR(20) NOT NULL,
  is_optional BOOLEAN DEFAULT FALSE,
  UNIQUE(recipe_id, ingredient_id)
);

-- 9. RECIPE INSTRUCTIONS
CREATE TABLE IF NOT EXISTS public.recipe_instructions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  recipe_id UUID NOT NULL REFERENCES public.recipes(id) ON DELETE CASCADE,
  step_number INT NOT NULL,
  instruction TEXT NOT NULL,
  instruction_ta TEXT,
  instruction_hi TEXT,
  timer_minutes INT,
  UNIQUE(recipe_id, step_number)
);

-- 10. RECIPE ALLERGENS & DIETARY TAGS JOIN
CREATE TABLE IF NOT EXISTS public.recipe_allergens (
  recipe_id UUID NOT NULL REFERENCES public.recipes(id) ON DELETE CASCADE,
  allergen_id UUID NOT NULL REFERENCES public.allergens(id) ON DELETE CASCADE,
  PRIMARY KEY (recipe_id, allergen_id)
);

CREATE TABLE IF NOT EXISTS public.recipe_dietary_tags (
  recipe_id UUID NOT NULL REFERENCES public.recipes(id) ON DELETE CASCADE,
  dietary_tag_id UUID NOT NULL REFERENCES public.dietary_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (recipe_id, dietary_tag_id)
);

-- 11. USER PANTRY ITEMS (Authenticated user kitchen tracker)
CREATE TABLE IF NOT EXISTS public.pantry_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  ingredient_id UUID REFERENCES public.ingredients(id) ON DELETE SET NULL,
  custom_name TEXT NOT NULL,
  quantity NUMERIC(6, 2) DEFAULT 1.0,
  unit VARCHAR(20) DEFAULT 'pcs',
  category VARCHAR(50) DEFAULT 'Produce',
  is_available BOOLEAN DEFAULT TRUE,
  expiry_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. FAVORITES
CREATE TABLE IF NOT EXISTS public.favorites (
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  recipe_id UUID NOT NULL REFERENCES public.recipes(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY(user_id, recipe_id)
);

-- 13. WEEKLY MEAL PLANS
CREATE TABLE IF NOT EXISTS public.meal_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  recipe_id UUID NOT NULL REFERENCES public.recipes(id) ON DELETE CASCADE,
  day meal_day_enum NOT NULL,
  slot meal_slot_enum NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, day, slot)
);

-- 14. SHOPPING LIST ITEMS
CREATE TABLE IF NOT EXISTS public.shopping_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  recipe_id UUID REFERENCES public.recipes(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  quantity NUMERIC(6, 2) DEFAULT 1.0,
  unit VARCHAR(20) DEFAULT 'pcs',
  category VARCHAR(50) DEFAULT 'Produce',
  is_purchased BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 15. SEARCH HISTORY
CREATE TABLE IF NOT EXISTS public.search_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  query TEXT NOT NULL,
  searched_at TIMESTAMPTZ DEFAULT NOW()
);

-- 16. INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_recipes_title_trgm ON public.recipes USING gin (title gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_recipes_title_ta ON public.recipes (title_ta);
CREATE INDEX IF NOT EXISTS idx_recipes_title_hi ON public.recipes (title_hi);
CREATE INDEX IF NOT EXISTS idx_pantry_user_id ON public.pantry_items (user_id);
CREATE INDEX IF NOT EXISTS idx_pantry_expiry ON public.pantry_items (expiry_date);
CREATE INDEX IF NOT EXISTS idx_recipe_ingredients_recipe ON public.recipe_ingredients (recipe_id);
CREATE INDEX IF NOT EXISTS idx_favorites_user ON public.favorites (user_id);
CREATE INDEX IF NOT EXISTS idx_meal_plans_user ON public.meal_plans (user_id);

-- 17. ROW LEVEL SECURITY (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pantry_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meal_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shopping_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can manage own pantry" ON public.pantry_items FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own favorites" ON public.favorites FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own meal plans" ON public.meal_plans FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own shopping items" ON public.shopping_items FOR ALL USING (auth.uid() = user_id);
