'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PantryItem, ExpiryStatus } from '../../types';

interface PantryContextType {
  pantryItems: PantryItem[];
  addPantryItem: (item: Omit<PantryItem, 'id' | 'addedAt'>) => void;
  addMultipleItems: (names: string[]) => void;
  updatePantryItem: (id: string, updates: Partial<PantryItem>) => void;
  removePantryItem: (id: string) => void;
  toggleAvailability: (id: string) => void;
  clearPantry: () => void;
  getItemExpiryStatus: (item: PantryItem) => { status: ExpiryStatus; daysRemaining?: number };
  expiringItems: { item: PantryItem; daysRemaining: number }[];
}

const PantryContext = createContext<PantryContextType | null>(null);

export const PantryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pantryItems, setPantryItems] = useState<PantryItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('leftover_chef_pantry');
    if (saved) {
      try {
        const parsed: PantryItem[] = JSON.parse(saved);
        // Only keep ingredients explicitly added by the user (filter out any legacy sample items)
        const userAddedItems = Array.isArray(parsed)
          ? parsed.filter(i => !['p-01', 'p-02', 'p-03', 'p-04', 'p-05'].includes(i.id))
          : [];
        setPantryItems(userAddedItems);
        localStorage.setItem('leftover_chef_pantry', JSON.stringify(userAddedItems));
        return;
      } catch (e) {
        console.error('Failed to parse pantry from storage', e);
      }
    }
    // Clean empty pantry on start - never pre-fill default ingredients
    setPantryItems([]);
    localStorage.setItem('leftover_chef_pantry', JSON.stringify([]));
  }, []);

  const savePantry = (items: PantryItem[]) => {
    setPantryItems(items);
    localStorage.setItem('leftover_chef_pantry', JSON.stringify(items));
  };

  const addPantryItem = (item: Omit<PantryItem, 'id' | 'addedAt'>) => {
    const newItem: PantryItem = {
      ...item,
      id: 'p-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      addedAt: new Date().toISOString(),
    };
    savePantry([...pantryItems, newItem]);
  };

  const addMultipleItems = (names: string[]) => {
    const newItems: PantryItem[] = names
      .filter(n => n.trim().length > 0)
      .map(name => ({
        id: 'p-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        name: name.trim(),
        quantity: 1,
        unit: 'item',
        category: 'Produce',
        isAvailable: true,
        addedAt: new Date().toISOString(),
      }));

    savePantry([...pantryItems, ...newItems]);
  };

  const updatePantryItem = (id: string, updates: Partial<PantryItem>) => {
    const updated = pantryItems.map(item =>
      item.id === id ? { ...item, ...updates } : item
    );
    savePantry(updated);
  };

  const removePantryItem = (id: string) => {
    const filtered = pantryItems.filter(item => item.id !== id);
    savePantry(filtered);
  };

  const toggleAvailability = (id: string) => {
    const updated = pantryItems.map(item =>
      item.id === id ? { ...item, isAvailable: !item.isAvailable } : item
    );
    savePantry(updated);
  };

  const clearPantry = () => {
    savePantry([]);
  };

  const getItemExpiryStatus = (
    item: PantryItem
  ): { status: ExpiryStatus; daysRemaining?: number } => {
    if (!item.expiryDate) {
      return { status: 'fresh' };
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expiry = new Date(item.expiryDate);
    expiry.setHours(0, 0, 0, 0);

    const diffTime = expiry.getTime() - today.getTime();
    const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (daysRemaining < 0) {
      return { status: 'expired', daysRemaining };
    }
    if (daysRemaining <= 3) {
      return { status: 'expiring_soon', daysRemaining };
    }
    return { status: 'fresh', daysRemaining };
  };

  const expiringItems = pantryItems
    .filter(i => i.isAvailable && i.expiryDate)
    .map(item => {
      const exp = getItemExpiryStatus(item);
      return {
        item,
        daysRemaining: exp.daysRemaining ?? 99,
        status: exp.status,
      };
    })
    .filter(i => i.status === 'expiring_soon' || i.status === 'expired')
    .sort((a, b) => a.daysRemaining - b.daysRemaining);

  return (
    <PantryContext.Provider
      value={{
        pantryItems,
        addPantryItem,
        addMultipleItems,
        updatePantryItem,
        removePantryItem,
        toggleAvailability,
        clearPantry,
        getItemExpiryStatus,
        expiringItems,
      }}
    >
      {children}
    </PantryContext.Provider>
  );
};

export const usePantry = (): PantryContextType => {
  const context = useContext(PantryContext);
  if (!context) {
    throw new Error('usePantry must be used within a PantryProvider');
  }
  return context;
};
