'use client';

import React, { useState } from 'react';
import { usePantry } from '../lib/pantry';
import { useI18n } from '../lib/i18n';
import { PantryItem } from '../types';
import {
  Refrigerator,
  Plus,
  Trash2,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Camera,
  Search,
  Sparkles
} from 'lucide-react';

interface PantryViewProps {
  onOpenScan: () => void;
  onCookWithPantry: () => void;
}

export const PantryView: React.FC<PantryViewProps> = ({
  onOpenScan,
  onCookWithPantry,
}) => {
  const {
    pantryItems,
    addPantryItem,
    removePantryItem,
    updatePantryItem,
    toggleAvailability,
    clearPantry,
    getItemExpiryStatus,
  } = usePantry();
  const { t } = useI18n();

  const [searchFilter, setSearchFilter] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('pcs');
  const [category, setCategory] = useState('Produce');
  const [expiryDate, setExpiryDate] = useState('');

  const commonStaples = [
    { name: 'Potato', category: 'Produce', unit: 'pcs', qty: 4 },
    { name: 'Onion', category: 'Produce', unit: 'pcs', qty: 3 },
    { name: 'Tomato', category: 'Produce', unit: 'pcs', qty: 4 },
    { name: 'Egg', category: 'Protein', unit: 'pcs', qty: 6 },
    { name: 'Rice', category: 'Grains', unit: 'kg', qty: 1 },
    { name: 'Paneer', category: 'Dairy', unit: 'g', qty: 200 },
    { name: 'Garlic', category: 'Produce', unit: 'pod', qty: 1 },
    { name: 'Ginger', category: 'Produce', unit: 'inch', qty: 2 },
  ];

  const handleCreateItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addPantryItem({
      name: name.trim(),
      quantity: Number(quantity) || 1,
      unit,
      category,
      isAvailable: true,
      expiryDate: expiryDate || undefined,
    });

    setName('');
    setQuantity(1);
    setExpiryDate('');
    setShowAddForm(false);
  };

  const handleQuickAdd = (staple: typeof commonStaples[0]) => {
    addPantryItem({
      name: staple.name,
      quantity: staple.qty,
      unit: staple.unit,
      category: staple.category,
      isAvailable: true,
    });
  };

  const filteredItems = pantryItems.filter(item =>
    item.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#ece6d8]">
        <div>
          <div className="flex items-center gap-2">
            <Refrigerator size={24} className="text-[#1b4332]" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332]">
              {t('pantry.title')}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#788c81] mt-1">
            {t('pantry.subtitle')}
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={onOpenScan}
            className="btn-accent text-xs py-2 px-4 font-bold flex-1 sm:flex-initial"
          >
            <Camera size={15} />
            Scan Fridge
          </button>
          <button
            onClick={() => setShowAddForm(true)}
            className="btn-primary text-xs py-2 px-4 font-bold flex-1 sm:flex-initial"
          >
            <Plus size={15} />
            {t('pantry.addItem')}
          </button>
        </div>
      </div>

      {/* Quick Add Staples Bar */}
      <div className="my-5 p-4 rounded-2xl bg-white border border-[#ece6d8] shadow-sm">
        <span className="text-xs font-bold text-[#788c81] block mb-2">
          {t('pantry.quickAddCommon')}
        </span>
        <div className="flex flex-wrap gap-2">
          {commonStaples.map((staple, i) => (
            <button
              key={i}
              onClick={() => handleQuickAdd(staple)}
              className="badge-pill bg-[#faf7f2] border border-[#e2dbcb] hover:border-[#52b788] hover:bg-[#f0fdf4] text-[#1b4332] text-xs py-1.5 px-3 transition-colors active:scale-95"
            >
              + {staple.name} ({staple.qty} {staple.unit})
            </button>
          ))}
        </div>
      </div>

      {/* Modal / Add Item Form */}
      {showAddForm && (
        <div className="modal-overlay" onClick={() => setShowAddForm(false)}>
          <div
            className="modal-content max-w-md p-6"
            onClick={e => e.stopPropagation()}
            style={{ borderRadius: '24px' }}
          >
            <h3 className="text-lg font-bold text-[#1b4332] mb-4">
              {t('pantry.addItem')}
            </h3>

            <form onSubmit={handleCreateItem} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#4a5c53] block mb-1">
                  {t('pantry.ingredientName')} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Potato, Milk, Tomato, Paneer"
                  className="w-full bg-[#faf7f2] border border-[#e2dbcb] rounded-xl px-3 py-2 text-sm text-[#192720] outline-none focus:border-[#52b788]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#4a5c53] block mb-1">
                    {t('pantry.quantity')}
                  </label>
                  <input
                    type="number"
                    min="0.25"
                    step="0.25"
                    value={quantity}
                    onChange={e => setQuantity(Number(e.target.value))}
                    className="w-full bg-[#faf7f2] border border-[#e2dbcb] rounded-xl px-3 py-2 text-sm text-[#192720] outline-none focus:border-[#52b788]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#4a5c53] block mb-1">
                    {t('pantry.unit')}
                  </label>
                  <select
                    value={unit}
                    onChange={e => setUnit(e.target.value)}
                    className="w-full bg-[#faf7f2] border border-[#e2dbcb] rounded-xl px-3 py-2 text-sm text-[#192720] outline-none focus:border-[#52b788]"
                  >
                    <option value="pcs">pcs</option>
                    <option value="g">g</option>
                    <option value="kg">kg</option>
                    <option value="cups">cups</option>
                    <option value="tbsp">tbsp</option>
                    <option value="ml">ml</option>
                    <option value="litres">litres</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#4a5c53] block mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className="w-full bg-[#faf7f2] border border-[#e2dbcb] rounded-xl px-3 py-2 text-sm text-[#192720] outline-none focus:border-[#52b788]"
                >
                  <option value="Produce">Produce (Vegetables & Fruits)</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Protein">Protein & Eggs</option>
                  <option value="Grains">Grains & Rice</option>
                  <option value="Pantry">Pantry Staples</option>
                  <option value="Spices">Spices</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#4a5c53] block mb-1">
                  {t('pantry.expiryDate')}
                </label>
                <input
                  type="date"
                  value={expiryDate}
                  onChange={e => setExpiryDate(e.target.value)}
                  className="w-full bg-[#faf7f2] border border-[#e2dbcb] rounded-xl px-3 py-2 text-sm text-[#192720] outline-none focus:border-[#52b788]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="btn-secondary text-xs py-2 px-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary text-xs py-2 px-5 font-bold"
                >
                  {t('pantry.save')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Search and Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 my-4">
        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3.5 top-3 text-[#788c81]" />
          <input
            type="text"
            value={searchFilter}
            onChange={e => setSearchFilter(e.target.value)}
            placeholder="Search your pantry..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-[#e2dbcb] text-xs text-[#192720] outline-none focus:border-[#52b788]"
          />
        </div>

        {pantryItems.length > 0 && (
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={clearPantry}
              className="text-xs font-semibold text-[#788c81] hover:text-[#e63946] transition-colors"
            >
              {t('pantry.clearAll')}
            </button>
            <button
              onClick={onCookWithPantry}
              className="btn-primary text-xs py-2 px-4 font-bold"
            >
              <Sparkles size={14} />
              Cook With My Ingredients
            </button>
          </div>
        )}
      </div>

      {/* Pantry Items Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#ece6d8] my-4">
          <Refrigerator size={44} className="mx-auto text-[#788c81] opacity-40 mb-3" />
          <h3 className="text-base font-bold text-[#1b4332]">
            {t('pantry.empty')}
          </h3>
          <p className="text-xs text-[#788c81] mt-1 max-w-md mx-auto">
            Add ingredients you bought or scan with your camera to discover exact dishes you can cook right now.
          </p>
          <button
            onClick={() => setShowAddForm(true)}
            className="btn-primary text-xs py-2 px-5 font-bold mt-4"
          >
            <Plus size={14} /> Add First Item
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 my-4">
          {filteredItems.map(item => {
            const exp = getItemExpiryStatus(item);

            return (
              <div
                key={item.id}
                className={`p-4 rounded-2xl border transition-all ${
                  item.isAvailable
                    ? 'bg-white border-[#ece6d8] shadow-sm'
                    : 'bg-[#faf7f2] border-[#e2dbcb] opacity-60'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#192720] leading-snug">
                      {item.name}
                    </h4>
                    <span className="text-[11px] font-semibold text-[#788c81] block mt-0.5">
                      {item.category}
                    </span>
                  </div>

                  <button
                    onClick={() => removePantryItem(item.id)}
                    className="text-[#788c81] hover:text-[#e63946] p-1 transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>

                {/* Quantity and Availability toggle */}
                <div className="mt-3 flex items-center justify-between pt-3 border-t border-[#f3ede2]">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() =>
                        updatePantryItem(item.id, {
                          quantity: Math.max(0.5, item.quantity - 1),
                        })
                      }
                      className="w-6 h-6 rounded-lg bg-[#f3ede2] text-[#1b4332] font-bold text-xs flex items-center justify-center hover:bg-[#ebd6b5]"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-[#1b4332] min-w-10 text-center">
                      {item.quantity} {item.unit}
                    </span>
                    <button
                      onClick={() =>
                        updatePantryItem(item.id, { quantity: item.quantity + 1 })
                      }
                      className="w-6 h-6 rounded-lg bg-[#f3ede2] text-[#1b4332] font-bold text-xs flex items-center justify-center hover:bg-[#ebd6b5]"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => toggleAvailability(item.id)}
                    className={`text-[11px] font-bold py-1 px-2.5 rounded-full flex items-center gap-1 transition-colors ${
                      item.isAvailable
                        ? 'bg-[#e8f5e9] text-[#2d6a4f]'
                        : 'bg-[#ffebee] text-[#c62828]'
                    }`}
                  >
                    {item.isAvailable ? (
                      <>
                        <CheckCircle size={12} />
                        {t('pantry.available')}
                      </>
                    ) : (
                      <>
                        <XCircle size={12} />
                        {t('pantry.unavailable')}
                      </>
                    )}
                  </button>
                </div>

                {/* Expiry Badge */}
                {item.expiryDate && (
                  <div className="mt-2.5 pt-2 border-t border-[#f3ede2] flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1 text-[#788c81]">
                      <Calendar size={12} />
                      {item.expiryDate}
                    </span>

                    {exp.status === 'expiring_soon' && (
                      <span className="text-[#e76f51] font-bold flex items-center gap-1">
                        <AlertTriangle size={12} />
                        {exp.daysRemaining === 0 ? 'Today!' : `${exp.daysRemaining}d left`}
                      </span>
                    )}

                    {exp.status === 'expired' && (
                      <span className="text-[#e63946] font-bold">Expired</span>
                    )}

                    {exp.status === 'fresh' && (
                      <span className="text-[#2d6a4f] font-semibold">Fresh</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
