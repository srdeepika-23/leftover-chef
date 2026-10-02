'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MealPlanEntry, MealDay, MealSlot, Recipe } from '../../types';
import { getStableRecipeFoodImage } from '../images';

interface MealPlanContextType {
  mealPlans: MealPlanEntry[];
  addRecipeToMealPlan: (day: MealDay, slot: MealSlot, recipe: Recipe) => void;
  removeMealPlanEntry: (id: string) => void;
  clearMealPlans: () => void;
  getSlotRecipe: (day: MealDay, slot: MealSlot) => MealPlanEntry | undefined;
}

const MealPlanContext = createContext<MealPlanContextType | null>(null);

const DEFAULT_MEALS: MealPlanEntry[] = [
  {
    id: 'mp-01',
    day: 'monday',
    slot: 'breakfast',
    recipeId: 'rec-11',
    recipeTitle: 'Crispy South Indian Masala Dosa',
    recipeImage: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'mp-02',
    day: 'monday',
    slot: 'lunch',
    recipeId: 'rec-04',
    recipeTitle: 'Authentic South Indian Sambar',
    recipeImage: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'mp-03',
    day: 'tuesday',
    slot: 'dinner',
    recipeId: 'rec-07',
    recipeTitle: 'Restaurant Style Paneer Butter Masala',
    recipeImage: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80',
  }
];

export const MealPlanProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mealPlans, setMealPlans] = useState<MealPlanEntry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('leftover_chef_mealplans');
    if (saved) {
      try {
        setMealPlans(JSON.parse(saved));
        return;
      } catch (e) {
        console.error('Failed to parse meal plan from storage', e);
      }
    }
    setMealPlans(DEFAULT_MEALS);
    localStorage.setItem('leftover_chef_mealplans', JSON.stringify(DEFAULT_MEALS));
  }, []);

  const savePlans = (plans: MealPlanEntry[]) => {
    setMealPlans(plans);
    localStorage.setItem('leftover_chef_mealplans', JSON.stringify(plans));
  };

  const addRecipeToMealPlan = (day: MealDay, slot: MealSlot, recipe: Recipe) => {
    // Remove any existing recipe in this exact slot
    const filtered = mealPlans.filter(p => !(p.day === day && p.slot === slot));
    const newEntry: MealPlanEntry = {
      id: 'mp-' + Date.now(),
      day,
      slot,
      recipeId: recipe.id,
      recipeTitle: recipe.title,
      recipeImage: getStableRecipeFoodImage(recipe),
    };
    savePlans([...filtered, newEntry]);
  };

  const removeMealPlanEntry = (id: string) => {
    savePlans(mealPlans.filter(p => p.id !== id));
  };

  const clearMealPlans = () => {
    savePlans([]);
  };

  const getSlotRecipe = (day: MealDay, slot: MealSlot): MealPlanEntry | undefined => {
    return mealPlans.find(p => p.day === day && p.slot === slot);
  };

  return (
    <MealPlanContext.Provider
      value={{
        mealPlans,
        addRecipeToMealPlan,
        removeMealPlanEntry,
        clearMealPlans,
        getSlotRecipe,
      }}
    >
      {children}
    </MealPlanContext.Provider>
  );
};

export const useMealPlan = (): MealPlanContextType => {
  const context = useContext(MealPlanContext);
  if (!context) {
    throw new Error('useMealPlan must be used within a MealPlanProvider');
  }
  return context;
};
