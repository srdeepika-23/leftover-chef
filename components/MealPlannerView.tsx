'use client';

import React from 'react';
import { useMealPlan } from '../lib/mealplan';
import { useI18n } from '../lib/i18n';
import { getStableRecipeFoodImage, handleImageError } from '../lib/images';
import { MealDay, MealSlot } from '../types';
import { Calendar, Trash2, Plus, Sparkles, ChefHat } from 'lucide-react';

interface MealPlannerViewProps {
  onFindRecipesForSlot: (slot: MealSlot) => void;
}

export const MealPlannerView: React.FC<MealPlannerViewProps> = ({
  onFindRecipesForSlot,
}) => {
  const { mealPlans, removeMealPlanEntry, clearMealPlans, getSlotRecipe } = useMealPlan();
  const { t } = useI18n();

  const days: MealDay[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  const slots: MealSlot[] = ['breakfast', 'lunch', 'dinner', 'snack'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#ece6d8]">
        <div>
          <div className="flex items-center gap-2">
            <Calendar size={24} className="text-[#1b4332]" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332]">
              {t('mealPlan.title')}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#788c81] mt-1">
            {t('mealPlan.subtitle')}
          </p>
        </div>

        {mealPlans.length > 0 && (
          <button
            onClick={clearMealPlans}
            className="btn-secondary text-xs py-2 px-4 font-semibold text-[#e63946] border-[#ffcdd2] hover:bg-[#ffebee]"
          >
            <Trash2 size={14} />
            {t('mealPlan.clearWeek')}
          </button>
        )}
      </div>

      {/* Week Grid */}
      <div className="my-6 space-y-6">
        {days.map(day => (
          <div
            key={day}
            className="p-5 rounded-3xl bg-white border border-[#ece6d8] shadow-sm"
          >
            <h3 className="font-extrabold text-base text-[#1b4332] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#52b788]" />
              {t(`mealPlan.days.${day}`)}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {slots.map(slot => {
                const entry = getSlotRecipe(day, slot);

                return (
                  <div
                    key={slot}
                    className="p-3.5 rounded-2xl bg-[#faf7f2] border border-[#e2dbcb] flex flex-col justify-between min-h-[110px]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#788c81]">
                        {t(`mealPlan.slots.${slot}`)}
                      </span>
                      {entry && (
                        <button
                          onClick={() => removeMealPlanEntry(entry.id)}
                          className="text-[#788c81] hover:text-[#e63946] p-0.5"
                          title="Remove recipe"
                        >
                          <Trash2 size={13} />
                        </button>
                      )}
                    </div>

                    {entry ? (
                      <div className="flex items-center gap-2.5">
                        <img
                          src={getStableRecipeFoodImage({
                            id: entry.recipeId,
                            title: entry.recipeTitle,
                            imageUrl: entry.recipeImage,
                          })}
                          alt={entry.recipeTitle}
                          className="w-12 h-12 rounded-xl object-cover shrink-0 shadow-sm"
                          onError={(e) =>
                            handleImageError(e, slot === 'breakfast' ? 'Breakfast' : 'Dinner')
                          }
                        />
                        <p className="text-xs font-bold text-[#192720] leading-snug line-clamp-2">
                          {entry.recipeTitle}
                        </p>
                      </div>
                    ) : (
                      <button
                        onClick={() => onFindRecipesForSlot(slot)}
                        className="flex items-center justify-center gap-1.5 py-3 text-xs font-semibold text-[#2d6a4f] hover:text-[#1b4332] hover:bg-white rounded-xl transition-all border border-dashed border-[#b7e4c7]"
                      >
                        <Plus size={14} />
                        <span>Add {slot}</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
