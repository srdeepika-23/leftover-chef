'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ShoppingItem, RecipeIngredient } from '../../types';

interface ShoppingContextType {
  shoppingItems: ShoppingItem[];
  addItem: (item: Omit<ShoppingItem, 'id' | 'isPurchased' | 'addedAt'>) => void;
  addRecipeMissingIngredients: (recipeTitle: string, ingredients: RecipeIngredient[]) => number;
  togglePurchased: (id: string) => void;
  removeItem: (id: string) => void;
  clearPurchased: () => void;
  clearAll: () => void;
}

const ShoppingContext = createContext<ShoppingContextType | null>(null);

export const ShoppingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('leftover_chef_shopping');
    if (saved) {
      try {
        setShoppingItems(JSON.parse(saved));
        return;
      } catch (e) {
        console.error('Failed to parse shopping list', e);
      }
    }
  }, []);

  const saveItems = (items: ShoppingItem[]) => {
    setShoppingItems(items);
    localStorage.setItem('leftover_chef_shopping', JSON.stringify(items));
  };

  const addItem = (item: Omit<ShoppingItem, 'id' | 'isPurchased' | 'addedAt'>) => {
    const newItem: ShoppingItem = {
      ...item,
      id: 'shop-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      isPurchased: false,
      addedAt: new Date().toISOString(),
    };
    saveItems([...shoppingItems, newItem]);
  };

  const addRecipeMissingIngredients = (
    recipeTitle: string,
    ingredients: RecipeIngredient[]
  ): number => {
    let addedCount = 0;
    const newItems: ShoppingItem[] = [];

    for (const ing of ingredients) {
      // Prevent duplicate additions
      const exists = shoppingItems.some(
        item => item.name.toLowerCase() === ing.name.toLowerCase() && !item.isPurchased
      );

      if (!exists) {
        newItems.push({
          id: 'shop-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
          recipeTitle,
          name: ing.name,
          quantity: ing.quantity,
          unit: ing.unit,
          category: ing.category,
          isPurchased: false,
          addedAt: new Date().toISOString(),
        });
        addedCount++;
      }
    }

    if (newItems.length > 0) {
      saveItems([...shoppingItems, ...newItems]);
    }
    return addedCount;
  };

  const togglePurchased = (id: string) => {
    const updated = shoppingItems.map(item =>
      item.id === id ? { ...item, isPurchased: !item.isPurchased } : item
    );
    saveItems(updated);
  };

  const removeItem = (id: string) => {
    const updated = shoppingItems.filter(item => item.id !== id);
    saveItems(updated);
  };

  const clearPurchased = () => {
    const updated = shoppingItems.filter(item => !item.isPurchased);
    saveItems(updated);
  };

  const clearAll = () => {
    saveItems([]);
  };

  return (
    <ShoppingContext.Provider
      value={{
        shoppingItems,
        addItem,
        addRecipeMissingIngredients,
        togglePurchased,
        removeItem,
        clearPurchased,
        clearAll,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShopping = (): ShoppingContextType => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error('useShopping must be used within a ShoppingProvider');
  }
  return context;
};
