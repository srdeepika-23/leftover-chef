'use client';

import React, { useState, useEffect } from 'react';
import { useI18n } from '../lib/i18n';
import { Search, Mic, Camera, Sparkles, ArrowRight, ChefHat } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  onOpenVoice: () => void;
  onOpenScan: () => void;
  onQuickAddIngredient: (ingredient: string) => void;
  onGenerateAiRecipe?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onOpenVoice,
  onOpenScan,
  onQuickAddIngredient,
  onGenerateAiRecipe,
}) => {
  const { t, language } = useI18n();
  const [searchInput, setSearchInput] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholders = [
    t('hero.placeholder1'),
    t('hero.placeholder2'),
    t('hero.placeholder3'),
    t('hero.placeholder4'),
  ];

  // Naturally rotating placeholder effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(prev => (prev + 1) % placeholders.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
    } else {
      onSearch('');
    }
  };

  const quickStaples = [
    { label: 'Potato', emoji: '🥔', ta: 'உருளைக்கிழங்கு', hi: 'आलू' },
    { label: 'Onion', emoji: '🧅', ta: 'வெங்காயம்', hi: 'प्याज' },
    { label: 'Tomato', emoji: '🍅', ta: 'தக்காளி', hi: 'टमाटर' },
    { label: 'Egg', emoji: '🥚', ta: 'முட்டை', hi: 'अंडा' },
    { label: 'Rice', emoji: '🍚', ta: 'சாதம்', hi: 'चावल' },
    { label: 'Paneer', emoji: '🧀', ta: 'பன்னீர்', hi: 'पनीर' },
    { label: 'Bread', emoji: '🍞', ta: 'ரொட்டி', hi: 'ब्रेड' },
    { label: 'Garlic', emoji: '🧄', ta: 'பூண்டு', hi: 'लहसुन' },
  ];

  const getStapleLabel = (staple: typeof quickStaples[0]) => {
    if (language === 'ta') return staple.ta;
    if (language === 'hi') return staple.hi;
    return staple.label;
  };

  return (
    <section className="relative pt-6 pb-7 sm:pt-8 sm:pb-9 overflow-hidden border-b border-[#1f2822]">
      {/* Clean, modern, premium food-themed background with side decorative food imagery */}
      <div className="hero-bg-container" aria-hidden="true">
        {/* Base subtle culinary backdrop */}
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1600&q=80"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.05,
            filter: 'saturate(0.4)',
            pointerEvents: 'none',
          }}
        />

        {/* Ambient fresh herb green glow on the left */}
        <div
          style={{
            position: 'absolute',
            top: '-2rem',
            left: '-3rem',
            width: '24rem',
            height: '24rem',
            borderRadius: '9999px',
            opacity: 0.28,
            filter: 'blur(60px)',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Ambient warm spice terracotta glow on the right */}
        <div
          style={{
            position: 'absolute',
            top: '-2rem',
            right: '-3rem',
            width: '24rem',
            height: '24rem',
            borderRadius: '9999px',
            opacity: 0.26,
            filter: 'blur(60px)',
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.22) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* LEFT SIDE CULINARY FRAME: Fresh Vegetables, Onions, Tomatoes, Herbs */}
        <img
          src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1000&q=80"
          alt=""
          className="hero-edge-panel hero-edge-left"
        />

        {/* Upper-Left Layered Accent: Vine tomatoes and fresh herbs */}
        <img
          src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=600&q=80"
          alt=""
          className="hero-decor-floating hero-decor-floating-left-top"
        />

        {/* Lower-Left Layered Accent: Crisp kitchen produce & greens */}
        <img
          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
          alt=""
          className="hero-decor-floating hero-decor-floating-left-bottom"
        />

        {/* RIGHT SIDE CULINARY FRAME: Cooking Spices, Red Chilli, Pepper, Garlic, Spice Bowls */}
        <img
          src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1000&q=80"
          alt=""
          className="hero-edge-panel hero-edge-right"
        />

        {/* Upper-Right Layered Accent: Bowls of vibrant Indian spices & turmeric */}
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
          alt=""
          className="hero-decor-floating hero-decor-floating-right-top"
        />

        {/* Lower-Right Layered Accent: Whole garlic, red chillies, black peppercorns */}
        <img
          src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=600&q=80"
          alt=""
          className="hero-decor-floating hero-decor-floating-right-bottom"
        />

        {/* Soft dark culinary gradient overlay ensuring crystal-clear readability in center */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 65% 85% at 50% 50%, rgba(11, 15, 13, 0.98) 0%, rgba(11, 15, 13, 0.88) 50%, rgba(11, 15, 13, 0.22) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Decorative Yellow Sticky Note on Left */}
      <div className="sticky-note-left">
        Good Food<br />
        No Waste<br />
        Happier You!<br />
        <span style={{ fontSize: '1rem', color: '#ef4444' }}>❤️</span>
      </div>

      {/* Decorative Calligraphy on Right */}
      <div className="calligraphy-right">
        Turn<br />
        Leftovers<br />
        into<br />
        Delicious<br />
        Meals
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
        {/* Anti-Food Waste Badge - Compact */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#064e3b]/50 border border-[#059669]/50 text-[#4ade80] text-[11px] sm:text-xs font-semibold mb-2.5 shadow-sm">
          <span>🌿 Zero Food Waste • Cook Smart • Eat Better</span>
        </div>

        {/* Hero Title & Subtitle - Crisp white with highlighted kitchen */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
          {language === 'ta' ? (
            <>
              உங்கள் <span style={{ color: '#f97316' }}>சமையலறையில்</span> என்ன பொருட்கள் உள்ளன?
            </>
          ) : language === 'hi' ? (
            <>
              आपकी <span style={{ color: '#f97316' }}>रसोई</span> में क्या सामग्री है?
            </>
          ) : (
            <>
              What do you have in your <span style={{ color: '#f97316' }}>kitchen?</span>
            </>
          )}
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-[#9ca3af] max-w-lg mx-auto leading-relaxed">
          {language === 'en'
            ? 'Tell Leftover Chef what ingredients you have, and discover delicious dishes you can cook right now with zero food waste.'
            : t('hero.subtitle')}
        </p>

        {/* Hero Search Bar Box - Dark Glass Pill with Orange Arrow Submit */}
        <div className="mt-4 sm:mt-5 max-w-lg mx-auto">
          <form
            onSubmit={handleFormSubmit}
            className="relative flex items-center rounded-full p-1 sm:p-1.5 shadow-lg border border-white/15 hover:border-[#10b981]/60 focus-within:border-[#10b981] focus-within:ring-2 focus-within:ring-[#10b981]/20 transition-all duration-200"
            style={{
              backgroundColor: 'rgba(20, 26, 22, 0.88)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="pl-3 sm:pl-3.5 text-[#9ca3af] shrink-0">
              <Search size={16} />
            </div>

            <input
              type="text"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              placeholder={placeholders[placeholderIndex] || 'e.g. Tomato, Onion, Potato, Egg, Rice...'}
              className="search-pill-input flex-1 px-3 py-1.5"
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
              }}
              aria-label="Search dishes or ingredients"
            />

            {/* Quick Action Icons: Mic, Camera, and Circular Orange Arrow Submit */}
            <div className="flex items-center gap-1 pr-1 shrink-0">
              <button
                type="button"
                onClick={onOpenVoice}
                className="w-7 h-7 rounded-full flex items-center justify-center text-[#9ca3af] hover:text-[#f97316] hover:bg-white/10 transition-colors"
                title={t('hero.voiceButton')}
                aria-label="Voice Search"
              >
                <Mic size={15} />
              </button>

              <button
                type="button"
                onClick={onOpenScan}
                className="w-7 h-7 rounded-full flex items-center justify-center text-[#9ca3af] hover:text-[#10b981] hover:bg-white/10 transition-colors"
                title={t('hero.scanButton')}
                aria-label="Camera Scan"
              >
                <Camera size={15} />
              </button>

              <button
                type="submit"
                style={{
                  width: '32px',
                  height: '32px',
                  minWidth: '32px',
                  minHeight: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#f97316',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(249, 115, 22, 0.4)',
                }}
                className="hover:bg-[#ea580c] transition-all active:scale-95 shrink-0"
                title={t('hero.searchButton') || 'Search'}
                aria-label="Search"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        </div>

        {/* Quick Add Staples Chips with Emojis */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 max-w-lg mx-auto">
          <span className="text-[11px] font-semibold text-[#9ca3af] mr-1">
            {t('hero.quickIngredients').replace(/:\s*$/, '')}:
          </span>
          {quickStaples.map((staple, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onQuickAddIngredient(staple.label)}
              style={{
                backgroundColor: 'rgba(20, 26, 22, 0.85)',
                border: '1px solid #232c25',
                borderRadius: '9999px',
                padding: '3px 10px',
                fontSize: '11px',
                fontWeight: 600,
                color: '#e5e7eb',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              className="hover:border-[#10b981] hover:text-white active:scale-95 shadow-sm"
            >
              <span>{staple.emoji}</span>
              <span>{getStapleLabel(staple)}</span>
            </button>
          ))}
        </div>

        {/* Main Action Buttons - Emerald & Orange Pills */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleFormSubmit}
            className="btn-primary h-10 px-5 sm:px-6 rounded-full font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Search size={15} />
            <span>{t('hero.searchButton') || 'Find Recipes'}</span>
          </button>

          {onGenerateAiRecipe && (
            <button
              type="button"
              onClick={onGenerateAiRecipe}
              className="btn-accent h-10 px-5 sm:px-6 rounded-full font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Sparkles size={15} />
              <span>Generate Custom AI Dish</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

