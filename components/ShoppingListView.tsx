'use client';

import React, { useState } from 'react';
import { useShopping } from '../lib/shopping';
import { useI18n } from '../lib/i18n';
import { ShoppingBag, Plus, Trash2, CheckCircle2, Circle } from 'lucide-react';

export const ShoppingListView: React.FC = () => {
  const { shoppingItems, addItem, togglePurchased, removeItem, clearPurchased, clearAll } =
    useShopping();
  const { t } = useI18n();

  const [customName, setCustomName] = useState('');
  const [customQty, setCustomQty] = useState('1');
  const [customUnit, setCustomUnit] = useState('pcs');

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;

    addItem({
      name: customName.trim(),
      quantity: customQty,
      unit: customUnit,
      category: 'General',
    });

    setCustomName('');
    setCustomQty('1');
  };

  const purchasedCount = shoppingItems.filter(i => i.isPurchased).length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#ece6d8]">
        <div>
          <div className="flex items-center gap-2">
            <ShoppingBag size={24} className="text-[#1b4332]" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332]">
              {t('shoppingList.title')}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#788c81] mt-1">
            {t('shoppingList.subtitle')}
          </p>
        </div>

        {shoppingItems.length > 0 && (
          <div className="flex items-center gap-2">
            {purchasedCount > 0 && (
              <button
                onClick={clearPurchased}
                className="text-xs font-semibold text-[#788c81] hover:text-[#e63946] px-2 py-1"
              >
                {t('shoppingList.clearPurchased')} ({purchasedCount})
              </button>
            )}
            <button
              onClick={clearAll}
              className="btn-secondary text-xs py-2 px-3.5 font-semibold text-[#e63946] border-[#ffcdd2] hover:bg-[#ffebee]"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Add Custom Item Input Bar */}
      <form
        onSubmit={handleAddCustom}
        className="my-6 p-4 rounded-2xl bg-white border border-[#ece6d8] shadow-sm flex flex-wrap items-center gap-3"
      >
        <input
          type="text"
          required
          value={customName}
          onChange={e => setCustomName(e.target.value)}
          placeholder="Add custom item (e.g. Milk, Curry Leaves, Olive Oil)..."
          className="flex-1 min-w-[200px] bg-[#faf7f2] border border-[#e2dbcb] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#192720] outline-none focus:border-[#52b788]"
        />

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={customQty}
            onChange={e => setCustomQty(e.target.value)}
            placeholder="Qty"
            className="w-16 bg-[#faf7f2] border border-[#e2dbcb] rounded-xl px-2.5 py-2 text-xs sm:text-sm text-[#192720] outline-none text-center"
          />

          <select
            value={customUnit}
            onChange={e => setCustomUnit(e.target.value)}
            className="bg-[#faf7f2] border border-[#e2dbcb] rounded-xl px-2.5 py-2 text-xs sm:text-sm text-[#192720] outline-none"
          >
            <option value="pcs">pcs</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="bunch">bunch</option>
            <option value="tbsp">tbsp</option>
            <option value="pack">pack</option>
          </select>

          <button
            type="submit"
            className="btn-primary text-xs py-2 px-4 font-bold shrink-0"
          >
            <Plus size={14} /> {t('shoppingList.addItem')}
          </button>
        </div>
      </form>

      {/* Shopping List Items */}
      {shoppingItems.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#ece6d8] my-4">
          <ShoppingBag size={44} className="mx-auto text-[#788c81] opacity-40 mb-3" />
          <h3 className="text-base font-bold text-[#1b4332]">
            {t('shoppingList.empty')}
          </h3>
          <p className="text-xs text-[#788c81] mt-1 max-w-sm mx-auto">
            When you find a recipe you want to cook, tap "Add Missing to Shopping List" and your items will appear here automatically.
          </p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {shoppingItems.map(item => (
            <div
              key={item.id}
              className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                item.isPurchased
                  ? 'bg-[#faf7f2] border-[#e2dbcb] opacity-50 line-through'
                  : 'bg-white border-[#ece6d8] shadow-sm'
              }`}
            >
              <div
                onClick={() => togglePurchased(item.id)}
                className="flex items-center gap-3 cursor-pointer flex-1"
              >
                {item.isPurchased ? (
                  <CheckCircle2 size={20} className="text-[#2d6a4f] shrink-0" />
                ) : (
                  <Circle size={20} className="text-[#788c81] shrink-0" />
                )}

                <div>
                  <span className="text-sm font-bold text-[#192720] block">
                    {item.name}
                  </span>
                  {item.recipeTitle && (
                    <span className="text-[10px] text-[#788c81] block">
                      For: {item.recipeTitle}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="badge-pill bg-[#faf7f2] border border-[#e2dbcb] text-[#1b4332] text-xs font-bold py-1 px-2.5">
                  {item.quantity} {item.unit}
                </span>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-[#788c81] hover:text-[#e63946] p-1"
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
