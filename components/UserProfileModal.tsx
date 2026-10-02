'use client';

import React, { useState } from 'react';
import { useAuth } from '../lib/auth';
import { useI18n } from '../lib/i18n';
import { DietaryTag, Allergen, Cuisine, SupportedLanguage } from '../types';
import { X, User, Check, Globe, Shield, ChefHat, Clock, LogOut } from 'lucide-react';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { user, updateProfile, signOut } = useAuth();
  const { language, setLanguage, t } = useI18n();

  const [fullName, setFullName] = useState(user?.fullName || '');
  const [dietary, setDietary] = useState<DietaryTag[]>(user?.dietaryPreferences || []);
  const [allergies, setAllergies] = useState<Allergen[]>(user?.allergies || []);
  const [cuisines, setCuisines] = useState<Cuisine[]>(user?.favoriteCuisines || []);
  const [cookingSkill, setCookingSkill] = useState<'Beginner' | 'Intermediate' | 'Advanced'>(
    user?.cookingSkill || 'Intermediate'
  );
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen || !user) return null;

  const dietaryTags: DietaryTag[] = [
    'Vegetarian',
    'Vegan',
    'Eggetarian',
    'High Protein',
    'Gluten-Free',
    'Healthy food',
  ];

  const allergensList: Allergen[] = [
    'Peanuts',
    'Tree nuts',
    'Milk',
    'Egg',
    'Soy',
    'Wheat',
    'Sesame',
  ];

  const cuisinesList: Cuisine[] = [
    'South Indian',
    'North Indian',
    'Asian',
    'Italian',
    'Mexican',
    'American',
    'Mediterranean',
  ];

  const toggleDietary = (tag: DietaryTag) => {
    setDietary(prev => (prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]));
  };

  const toggleAllergen = (allergen: Allergen) => {
    setAllergies(prev =>
      prev.includes(allergen) ? prev.filter(a => a !== allergen) : [...prev, allergen]
    );
  };

  const toggleCuisine = (cui: Cuisine) => {
    setCuisines(prev => (prev.includes(cui) ? prev.filter(c => c !== cui) : [...prev, cui]));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile({
      fullName,
      dietaryPreferences: dietary,
      allergies,
      favoriteCuisines: cuisines,
      cookingSkill,
      language,
    });
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content max-w-xl p-6 sm:p-8"
        onClick={e => e.stopPropagation()}
        style={{ borderRadius: '28px' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#788c81] hover:text-[#1b4332] rounded-full hover:bg-[#f3ede2]"
          aria-label="Close profile"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#1b4332] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
              {fullName.charAt(0) || (user.username ? user.username.charAt(0).toUpperCase() : 'C')}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1b4332]">
                {fullName || user.username || t('profile.title')}
              </h2>
              <div className="flex flex-wrap items-center gap-2 mt-0.5">
                {user.username && (
                  <span className="text-xs font-semibold text-[#2d6a4f] bg-[#e8f5e9] px-2 py-0.5 rounded-md">
                    @{user.username}
                  </span>
                )}
                <span className="text-xs font-mono text-[#788c81]">
                  User ID: {user.id}
                </span>
              </div>
              {user.email && <p className="text-xs text-[#788c81] mt-0.5">{user.email}</p>}
            </div>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="text-xs font-bold text-[#4a5c53] block mb-1">
              {t('auth.name')}
            </label>
            <input
              type="text"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className="w-full bg-[#faf7f2] border border-[#e2dbcb] rounded-xl px-3.5 py-2 text-sm text-[#192720] outline-none focus:border-[#52b788]"
            />
          </div>

          {/* App Language */}
          <div>
            <label className="text-xs font-bold text-[#4a5c53] block mb-1 flex items-center gap-1.5">
              <Globe size={14} />
              {t('profile.language')}
            </label>
            <div className="flex gap-2">
              {[
                { code: 'en', label: 'English' },
                { code: 'ta', label: 'தமிழ் (Tamil)' },
                { code: 'hi', label: 'हिन्दी (Hindi)' },
              ].map(l => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLanguage(l.code as SupportedLanguage)}
                  className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-xl border transition-colors ${
                    language === l.code
                      ? 'bg-[#1b4332] text-white border-[#1b4332]'
                      : 'bg-white border-[#e2dbcb] text-[#4a5c53]'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dietary Preferences */}
          <div>
            <label className="text-xs font-bold text-[#4a5c53] block mb-1.5">
              {t('profile.diet')}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {dietaryTags.map(tag => {
                const selected = dietary.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleDietary(tag)}
                    className={`badge-pill text-xs py-1.5 px-3 flex items-center gap-1 transition-colors ${
                      selected
                        ? 'bg-[#2d6a4f] text-white'
                        : 'bg-[#faf7f2] border border-[#e2dbcb] text-[#4a5c53]'
                    }`}
                  >
                    {selected && <Check size={12} />}
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Allergies */}
          <div>
            <label className="text-xs font-bold text-[#e76f51] block mb-1.5 flex items-center gap-1">
              <Shield size={14} />
              {t('profile.allergies')}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {allergensList.map(allergen => {
                const excluded = allergies.includes(allergen);
                return (
                  <button
                    key={allergen}
                    type="button"
                    onClick={() => toggleAllergen(allergen)}
                    className={`badge-pill text-xs py-1.5 px-3 flex items-center gap-1 transition-colors ${
                      excluded
                        ? 'bg-[#e76f51] text-white'
                        : 'bg-[#faf7f2] border border-[#fbd3c7] text-[#e76f51]'
                    }`}
                  >
                    {excluded && <Check size={12} />}
                    Exclude {allergen}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cooking Skill */}
          <div>
            <label className="text-xs font-bold text-[#4a5c53] block mb-1 flex items-center gap-1">
              <ChefHat size={14} />
              {t('profile.skill')}
            </label>
            <div className="flex gap-2">
              {(['Beginner', 'Intermediate', 'Advanced'] as const).map(sk => (
                <button
                  key={sk}
                  type="button"
                  onClick={() => setCookingSkill(sk)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-xl border transition-colors ${
                    cookingSkill === sk
                      ? 'bg-[#1b4332] text-white border-[#1b4332]'
                      : 'bg-white border-[#e2dbcb] text-[#4a5c53]'
                  }`}
                >
                  {sk}
                </button>
              ))}
            </div>
          </div>

          {savedNotice && (
            <div className="p-3 rounded-xl bg-[#e8f5e9] text-[#2d6a4f] text-xs font-bold text-center animate-in">
              {t('profile.savedSuccess')}
            </div>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-[#ece6d8]">
            <button
              type="button"
              onClick={async () => {
                await signOut();
                onClose();
              }}
              className="text-xs font-bold text-[#e63946] hover:bg-[#ffebee] py-2 px-3 rounded-xl transition-all flex items-center gap-1.5"
            >
              <LogOut size={14} />
              <span>{t('nav.signOut')}</span>
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary text-xs py-2 px-4"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary text-xs py-2.5 px-6 font-bold"
              >
                {t('profile.saveChanges')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
