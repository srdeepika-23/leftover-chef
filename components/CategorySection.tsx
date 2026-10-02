'use client';

import React, { useState, useMemo } from 'react';
import { Recipe, AppFoodCategory, RecipeMatchResult } from '../types';
import { APP_CATEGORIES, getRecipeCategories, filterRecipesByCategory } from '../lib/search/categories';
import { RecipeCard } from './RecipeCard';
import { useI18n } from '../lib/i18n';
import {
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  UtensilsCrossed,
  X
} from 'lucide-react';

interface CategorySectionProps {
  recipes: Recipe[];
  selectedCategory: AppFoodCategory | 'All';
  onSelectCategory: (category: AppFoodCategory | 'All') => void;
  onSelectRecipe: (matchResult: RecipeMatchResult) => void;
  availablePantryIngredients?: string[];
  favoriteRecipeIds?: string[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  recipes,
  selectedCategory,
  onSelectCategory,
  onSelectRecipe,
  availablePantryIngredients = [],
  favoriteRecipeIds = [],
}) => {
  const { language } = useI18n();
  const [internalSearch, setInternalSearch] = useState('');

  // Pre-calculate count of recipes per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    recipes.forEach(r => {
      const cats = getRecipeCategories(r);
      cats.forEach(c => {
        counts[c] = (counts[c] || 0) + 1;
      });
    });
    return counts;
  }, [recipes]);

  // Filter recipes by category and search keyword
  const filteredRecipes = useMemo(() => {
    let result = filterRecipesByCategory(recipes, selectedCategory);

    if (internalSearch.trim()) {
      const q = internalSearch.toLowerCase().trim();
      result = result.filter(r => {
        const titleMatch = r.title.toLowerCase().includes(q) ||
          (r.titleTa && r.titleTa.toLowerCase().includes(q)) ||
          (r.titleHi && r.titleHi.toLowerCase().includes(q));
        const ingMatch = r.ingredients.some(i =>
          i.name.toLowerCase().includes(q) ||
          (i.nameTa && i.nameTa.toLowerCase().includes(q)) ||
          (i.nameHi && i.nameHi.toLowerCase().includes(q))
        );
        return titleMatch || ingMatch;
      });
    }

    // Ensure strictly unique recipes by ID
    const seen = new Set<string>();
    return result.filter(r => {
      if (seen.has(r.id)) return false;
      seen.add(r.id);
      return true;
    });
  }, [recipes, selectedCategory, internalSearch]);

  const activeCategoryMeta = useMemo(() => {
    if (selectedCategory === 'All') return null;
    return APP_CATEGORIES.find(c => c.id === selectedCategory) || null;
  }, [selectedCategory]);

  const getCategoryName = (c: typeof APP_CATEGORIES[0]) => {
    if (language === 'ta' && c.nameTa) return c.nameTa;
    if (language === 'hi' && c.nameHi) return c.nameHi;
    return c.name;
  };

  const helperWrapMatch = (recipe: Recipe): RecipeMatchResult => {
    const available = recipe.ingredients.filter(ing =>
      availablePantryIngredients.some(p =>
        p.toLowerCase().includes(ing.name.toLowerCase()) ||
        ing.name.toLowerCase().includes(p.toLowerCase())
      )
    );
    const missing = recipe.ingredients.filter(ing => !available.some(a => a.id === ing.id));
    const matchPct = Math.round((available.length / (recipe.ingredients.length || 1)) * 100);

    return {
      recipe,
      matchPercentage: availablePantryIngredients.length > 0 ? matchPct : 100,
      availableIngredientsCount: available.length,
      totalRequiredIngredientsCount: recipe.ingredients.length,
      availableIngredients: available,
      missingIngredients: missing,
      matchReasons: [
        recipe.cuisine,
        `${recipe.totalTimeMinutes}m total`,
        recipe.difficulty,
      ],
      isExactNameMatch: false,
      containsAllergen: false,
      score: 100,
    };
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4 sm:my-6">
      {/* Category Section Header - Medium Sizing */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2.5 mb-3.5">
        <div>
          <span className="badge-pill bg-[#2d6a4f]/10 text-[#2d6a4f] text-[10px] sm:text-[11px] font-bold py-0.5 px-2 mb-1 inline-flex items-center gap-1.5 border border-[#2d6a4f]/20">
            <Sparkles size={11} />
            Food Categories
          </span>
          <h2 className="text-base sm:text-lg font-bold text-[#1b4332] tracking-tight">
            Explore Dishes by Category
          </h2>
          <p className="text-xs text-[#788c81] mt-0.5 max-w-lg">
            Select any category to view all authentic dishes. Dishes can belong to multiple categories without duplicates.
          </p>
        </div>

        {/* Quick Filter Search Input - Medium */}
        <div className="relative w-full md:w-64">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#788c81]" />
          <input
            type="text"
            value={internalSearch}
            onChange={e => setInternalSearch(e.target.value)}
            placeholder="Filter within category..."
            className="w-full pl-8 pr-7 py-1.5 bg-white border border-[#ece6d8] rounded-xl text-xs sm:text-sm text-[#192720] placeholder-[#94a39b] font-medium focus:outline-none focus:border-[#2d6a4f] transition-all shadow-sm"
          />
          {internalSearch && (
            <button
              onClick={() => setInternalSearch('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#788c81] hover:text-[#1b4332] p-1"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Categories Selector Chips Carousel / Wrap Grid */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 pt-0.5 scroll-smooth no-scrollbar mb-3.5 sm:mb-4">
        {/* All Categories Option */}
        <button
          onClick={() => onSelectCategory('All')}
          className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 cursor-pointer shadow-2xs ${
            selectedCategory === 'All'
              ? 'bg-[#1b4332] text-white ring-1 ring-[#52b788]/40'
              : 'bg-white text-[#4a5c53] border border-[#ece6d8] hover:bg-[#f3ede2] hover:text-[#1b4332]'
          }`}
        >
          <span>🍽️</span>
          <span>All Recipes</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
            selectedCategory === 'All' ? 'bg-white/20 text-white' : 'bg-[#faf7f2] text-[#788c81]'
          }`}>
            {recipes.length}
          </span>
        </button>

        {/* 15 Explicit Categories */}
        {APP_CATEGORIES.map(category => {
          const isSelected = selectedCategory === category.id;
          const count = categoryCounts[category.id] || 0;
          const displayName = getCategoryName(category);

          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 cursor-pointer shadow-2xs ${
                isSelected
                  ? 'bg-[#1b4332] text-white ring-1 ring-[#52b788]/40 shadow-xs'
                  : 'bg-white text-[#4a5c53] border border-[#ece6d8] hover:bg-[#f3ede2] hover:text-[#1b4332]'
              }`}
            >
              <span className="text-sm">{category.icon}</span>
              <span>{displayName}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                isSelected ? 'bg-white/20 text-white' : 'bg-[#faf7f2] text-[#788c81]'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Category Banner Info - Medium */}
      {activeCategoryMeta && (
        <div className="mb-4 p-3 sm:p-4 rounded-xl bg-white border border-[#ece6d8] shadow-sm flex items-center justify-between gap-3 animate-in">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#faf7f2] border border-[#ece6d8] flex items-center justify-center text-xl shadow-inner shrink-0">
              {activeCategoryMeta.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-[#1b4332]">
                  {getCategoryName(activeCategoryMeta)}
                </h3>
                <span className="text-[11px] font-semibold text-[#2d6a4f] bg-[#e8f5e9] px-2 py-0.5 rounded-full">
                  {filteredRecipes.length} dishes
                </span>
              </div>
              <p className="text-xs text-[#788c81] mt-0.5">
                {activeCategoryMeta.description}
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectCategory('All')}
            className="text-xs font-bold text-[#788c81] hover:text-[#1b4332] underline p-1 shrink-0"
          >
            Clear Filter
          </button>
        </div>
      )}

      {/* Results Grid - Medium Proportional Cards */}
      {filteredRecipes.length > 0 ? (
        <div className="recipe-grid">
          {filteredRecipes.map(recipe => {
            const match = helperWrapMatch(recipe);
            return (
              <div key={`cat-${recipe.id}`} className="h-full">
                <RecipeCard
                  matchResult={match}
                  onSelect={() => onSelectRecipe(match)}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#ece6d8] p-8 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-[#faf7f2] border border-[#ece6d8] text-[#788c81] flex items-center justify-center mx-auto mb-3 text-2xl">
            🔍
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#1b4332]">
            No recipes matched in this category
          </h3>
          <p className="text-xs sm:text-sm text-[#788c81] mt-1 max-w-md mx-auto">
            Try resetting your search query or choosing another category filter.
          </p>
          <button
            onClick={() => {
              setInternalSearch('');
              onSelectCategory('All');
            }}
            className="btn-secondary text-xs py-2 px-4 font-bold mt-4"
          >
            Show All Recipes
          </button>
        </div>
      )}
    </section>
  );
};
