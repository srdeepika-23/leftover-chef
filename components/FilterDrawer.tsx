'use client';

import React from 'react';
import { SearchFilters, FoodCategory, Cuisine, DietaryTag, Allergen, Difficulty } from '../types';
import { useI18n } from '../lib/i18n';
import { X, SlidersHorizontal, Check, RefreshCw } from 'lucide-react';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: SearchFilters;
  setFilters: React.Dispatch<React.SetStateAction<SearchFilters>>;
  onReset: () => void;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  setFilters,
  onReset,
}) => {
  const { t } = useI18n();

  if (!isOpen) return null;

  const categories: (FoodCategory | 'All')[] = [
    'All',
    'Breakfast',
    'Lunch',
    'Dinner',
    'Snacks',
    'Desserts',
    'Drinks',
    'Soups',
    'Salads',
    'Rice dishes',
    'Pasta',
    'Noodles',
    'Curries',
    'Baking',
    'Healthy food',
    'Quick meals',
  ];

  const cuisines: (Cuisine | 'All')[] = [
    'All',
    'South Indian',
    'North Indian',
    'Asian',
    'Italian',
    'Mexican',
    'American',
    'Mediterranean',
  ];

  const dietaryOptions: DietaryTag[] = [
    'Vegetarian',
    'Vegan',
    'Eggetarian',
    'High Protein',
    'Gluten-Free',
    'Healthy food',
    'Quick meals',
  ];

  const allergenOptions: Allergen[] = [
    'Peanuts',
    'Tree nuts',
    'Milk',
    'Egg',
    'Soy',
    'Wheat',
    'Sesame',
  ];

  const difficultyOptions: (Difficulty | 'All')[] = ['All', 'Easy', 'Medium', 'Hard'];

  const toggleDietary = (tag: DietaryTag) => {
    const current = filters.dietary || [];
    const next = current.includes(tag) ? current.filter(t => t !== tag) : [...current, tag];
    setFilters(prev => ({ ...prev, dietary: next }));
  };

  const toggleAllergen = (allergen: Allergen) => {
    const current = filters.excludedAllergens || [];
    const next = current.includes(allergen)
      ? current.filter(a => a !== allergen)
      : [...current, allergen];
    setFilters(prev => ({ ...prev, excludedAllergens: next }));
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content max-w-lg p-6 max-h-[85vh] flex flex-col justify-between"
        onClick={e => e.stopPropagation()}
        style={{ borderRadius: '28px' }}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#ece6d8]">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={20} className="text-[#1b4332]" />
              <h2 className="text-lg font-bold text-[#1b4332]">{t('search.filterTitle')}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#f3ede2] text-[#788c81]"
              aria-label="Close filters"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-5 py-4 overflow-y-auto max-h-[60vh] pr-1">
            {/* 100% Pantry Match Only Toggle */}
            <div className="p-3.5 rounded-2xl bg-[#f0fdf4] border border-[#d8f3dc] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#1b4332] block">
                  {t('search.pantryOnly')}
                </span>
                <span className="text-[11px] text-[#4a5c53]">
                  Hide recipes requiring missing grocery items
                </span>
              </div>
              <input
                type="checkbox"
                checked={Boolean(filters.onlyAvailableInPantry)}
                onChange={e =>
                  setFilters(prev => ({ ...prev, onlyAvailableInPantry: e.target.checked }))
                }
                className="w-5 h-5 accent-[#2d6a4f] rounded cursor-pointer"
              />
            </div>

            {/* Food Categories */}
            <div>
              <label className="text-xs font-bold text-[#1b4332] uppercase tracking-wider block mb-2">
                Food Category
              </label>
              <div className="flex flex-wrap gap-1.5">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilters(prev => ({ ...prev, category: cat }))}
                    className={`badge-pill text-xs py-1.5 px-3 transition-colors ${
                      (filters.category || 'All') === cat
                        ? 'bg-[#1b4332] text-white'
                        : 'bg-white border border-[#e2dbcb] text-[#4a5c53] hover:bg-[#f3ede2]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Cuisines */}
            <div>
              <label className="text-xs font-bold text-[#1b4332] uppercase tracking-wider block mb-2">
                Cuisine Style
              </label>
              <div className="flex flex-wrap gap-1.5">
                {cuisines.map(cui => (
                  <button
                    key={cui}
                    onClick={() => setFilters(prev => ({ ...prev, cuisine: cui }))}
                    className={`badge-pill text-xs py-1.5 px-3 transition-colors ${
                      (filters.cuisine || 'All') === cui
                        ? 'bg-[#1b4332] text-white'
                        : 'bg-white border border-[#e2dbcb] text-[#4a5c53] hover:bg-[#f3ede2]'
                    }`}
                  >
                    {cui}
                  </button>
                ))}
              </div>
            </div>

            {/* Dietary Preferences */}
            <div>
              <label className="text-xs font-bold text-[#1b4332] uppercase tracking-wider block mb-2">
                {t('search.dietaryPreferences')}
              </label>
              <div className="flex flex-wrap gap-1.5">
                {dietaryOptions.map(tag => {
                  const selected = filters.dietary?.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleDietary(tag)}
                      className={`badge-pill text-xs py-1.5 px-3 flex items-center gap-1 transition-colors ${
                        selected
                          ? 'bg-[#2d6a4f] text-white'
                          : 'bg-white border border-[#e2dbcb] text-[#4a5c53]'
                      }`}
                    >
                      {selected && <Check size={12} />}
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Exclude Allergens */}
            <div>
              <label className="text-xs font-bold text-[#e76f51] uppercase tracking-wider block mb-2">
                {t('search.allergySafety')}
              </label>
              <div className="flex flex-wrap gap-1.5">
                {allergenOptions.map(allergen => {
                  const excluded = filters.excludedAllergens?.includes(allergen);
                  return (
                    <button
                      key={allergen}
                      onClick={() => toggleAllergen(allergen)}
                      className={`badge-pill text-xs py-1.5 px-3 flex items-center gap-1 transition-colors ${
                        excluded
                          ? 'bg-[#e76f51] text-white'
                          : 'bg-white border border-[#fbd3c7] text-[#e76f51]'
                      }`}
                    >
                      {excluded && <Check size={12} />}
                      Exclude {allergen}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Max Cooking Time */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-[#1b4332] uppercase tracking-wider">
                  {t('search.maxTime')}
                </label>
                <span className="text-xs font-bold text-[#2d6a4f]">
                  {filters.maxCookTimeMinutes ? `${filters.maxCookTimeMinutes} mins` : t('search.anyTime')}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={filters.maxCookTimeMinutes || 60}
                onChange={e =>
                  setFilters(prev => ({ ...prev, maxCookTimeMinutes: Number(e.target.value) }))
                }
                className="w-full accent-[#1b4332] cursor-pointer"
              />
            </div>

            {/* Difficulty */}
            <div>
              <label className="text-xs font-bold text-[#1b4332] uppercase tracking-wider block mb-2">
                {t('search.difficulty')}
              </label>
              <div className="flex gap-2">
                {difficultyOptions.map(diff => (
                  <button
                    key={diff}
                    onClick={() => setFilters(prev => ({ ...prev, difficulty: diff }))}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-xl border transition-colors ${
                      (filters.difficulty || 'All') === diff
                        ? 'bg-[#1b4332] text-white border-[#1b4332]'
                        : 'bg-white border-[#e2dbcb] text-[#4a5c53]'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="pt-4 border-t border-[#ece6d8] flex items-center justify-between gap-3">
          <button
            onClick={onReset}
            className="btn-secondary text-xs py-2.5 px-4 font-semibold text-[#788c81]"
          >
            <RefreshCw size={13} />
            {t('search.clearFilters')}
          </button>
          <button
            onClick={onClose}
            className="btn-primary text-xs py-2.5 px-6 font-bold flex-1 justify-center"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};
