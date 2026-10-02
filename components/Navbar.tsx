'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useI18n } from '../lib/i18n';
import { useAuth } from '../lib/auth';
import { usePantry } from '../lib/pantry';
import { useShopping } from '../lib/shopping';
import { SupportedLanguage } from '../types';
import {
  UtensilsCrossed,
  Globe,
  User,
  ShoppingBag,
  Refrigerator,
  Calendar,
  Sparkles,
  ChevronDown,
  LogOut,
  Heart,
  Check,
  Home,
  LayoutGrid,
  Search
} from 'lucide-react';

interface NavbarProps {
  onOpenAuth: () => void;
  onOpenProfile: () => void;
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuth,
  onOpenProfile,
  activeTab,
  setActiveTab,
}) => {
  const { language, setLanguage, t } = useI18n();
  const { user, signOut } = useAuth();
  const { expiringItems } = usePantry();
  const { shoppingItems } = useShopping();

  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const pendingShoppingCount = shoppingItems.filter(i => !i.isPurchased).length;

  const languages: { code: SupportedLanguage; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'hi', name: 'हिन्दी' },
  ];

  return (
    <header
      className="sticky top-0 z-50 transition-all"
      style={{
        backgroundColor: 'rgba(11, 15, 13, 0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #1f2822',
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2">
        {/* Logo */}
        <div
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none group shrink-0"
        >
          <div
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105 shrink-0"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <UtensilsCrossed size={16} className="text-[#ecfdf5] sm:hidden" />
            <UtensilsCrossed size={18} className="text-[#ecfdf5] hidden sm:block" />
          </div>
          <div>
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-white block leading-none">
              LEFTOVER CHEF
            </span>
            <span className="hidden sm:block text-[10px] font-semibold text-[#9ca3af] tracking-wider mt-0.5">
              SMART RECIPE FINDER
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="navbar-desktop-nav">
          <button
            onClick={() => setActiveTab('home')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: 'transparent',
              color: activeTab === 'home' ? '#f97316' : '#d1d5db',
              borderBottom: activeTab === 'home' ? '2px solid #f97316' : '2px solid transparent',
            }}
            className="hover:text-[#f97316]"
          >
            <Home size={15} className={activeTab === 'home' ? 'text-[#f97316]' : 'text-[#9ca3af]'} />
            {t('nav.home') || 'Home'}
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: 'transparent',
              color: activeTab === 'categories' ? '#f97316' : '#d1d5db',
              borderBottom: activeTab === 'categories' ? '2px solid #f97316' : '2px solid transparent',
            }}
            className="hover:text-[#f97316]"
          >
            <LayoutGrid size={15} className={activeTab === 'categories' ? 'text-[#f97316]' : 'text-[#9ca3af]'} />
            Categories
          </button>
          <button
            onClick={() => setActiveTab('search')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: 'transparent',
              color: activeTab === 'search' ? '#f97316' : '#d1d5db',
              borderBottom: activeTab === 'search' ? '2px solid #f97316' : '2px solid transparent',
            }}
            className="hover:text-[#f97316]"
          >
            <Search size={15} className={activeTab === 'search' ? 'text-[#f97316]' : 'text-[#9ca3af]'} />
            Smart Search
          </button>
          <button
            onClick={() => setActiveTab('pantry')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: 'transparent',
              color: activeTab === 'pantry' ? '#f97316' : '#d1d5db',
              borderBottom: activeTab === 'pantry' ? '2px solid #f97316' : '2px solid transparent',
            }}
            className="hover:text-[#f97316]"
          >
            <Refrigerator size={15} className={activeTab === 'pantry' ? 'text-[#f97316]' : 'text-[#9ca3af]'} />
            {t('nav.pantry')}
            {expiringItems.length > 0 && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] inline-block ml-0.5" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('mealPlan')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: 'transparent',
              color: activeTab === 'mealPlan' ? '#f97316' : '#d1d5db',
              borderBottom: activeTab === 'mealPlan' ? '2px solid #f97316' : '2px solid transparent',
            }}
            className="hover:text-[#f97316]"
          >
            <Calendar size={15} className={activeTab === 'mealPlan' ? 'text-[#f97316]' : 'text-[#9ca3af]'} />
            {t('nav.mealPlan')}
          </button>
          <button
            onClick={() => setActiveTab('shoppingList')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: 'transparent',
              color: activeTab === 'shoppingList' ? '#f97316' : '#d1d5db',
              borderBottom: activeTab === 'shoppingList' ? '2px solid #f97316' : '2px solid transparent',
            }}
            className="hover:text-[#f97316] relative"
          >
            <ShoppingBag size={15} className={activeTab === 'shoppingList' ? 'text-[#f97316]' : 'text-[#9ca3af]'} />
            {t('nav.shoppingList')}
            {pendingShoppingCount > 0 && (
              <span className="bg-[#f97316] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full ml-0.5">
                {pendingShoppingCount}
              </span>
            )}
          </button>
        </nav>

        {/* Right Actions: Language Switcher & Profile */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Language Switcher */}
          <div className="language-selector-wrapper">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="language-selector-btn"
              aria-label="Language selector"
              aria-expanded={langMenuOpen}
            >
              <Globe size={15} className="text-[#10b981] shrink-0" />
              <span>
                {languages.find(l => l.code === language)?.name || 'English'}
              </span>
              <ChevronDown
                size={14}
                className={`text-[#9ca3af] transition-transform duration-200 shrink-0 ${
                  langMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {langMenuOpen && (
              <>
                <div
                  className="language-dropdown-backdrop"
                  onClick={() => setLangMenuOpen(false)}
                />

                <div
                  id="language-dropdown-menu"
                  className="language-dropdown-menu animate-in"
                >
                  {languages.map(l => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => {
                        setLanguage(l.code);
                        setLangMenuOpen(false);
                      }}
                      className={`language-dropdown-item ${
                        language === l.code ? 'active' : ''
                      }`}
                    >
                      <span>{l.name}</span>
                      {language === l.code && (
                        <Check size={16} className="text-[#10b981] shrink-0 stroke-[2.5]" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* User Profile / Auth */}
          <div className="relative">
            {user ? (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center text-xs font-bold shadow-md hover:scale-105 transition-all border border-[#10b981]/40"
                  aria-label="User menu"
                >
                  {user.avatarUrl ? (
                    <img
                      src={user.avatarUrl}
                      alt={user.fullName}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <User size={16} className="text-white" />
                  )}
                </button>

                {userMenuOpen && (
                  <>
                    <div
                      className="user-dropdown-backdrop"
                      onClick={() => setUserMenuOpen(false)}
                    />
                    <div
                      className="user-dropdown-menu"
                      onMouseLeave={() => setUserMenuOpen(false)}
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: '44px',
                        marginTop: '4px',
                        width: '210px',
                        backgroundColor: '#141a16',
                        borderRadius: '16px',
                        boxShadow: '0 20px 40px -8px rgba(0, 0, 0, 0.75), 0 4px 12px rgba(0, 0, 0, 0.5)',
                        border: '1px solid #232c25',
                        padding: '6px 0',
                        zIndex: 50,
                        color: '#ffffff',
                        fontFamily: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      }}
                    >
                      <div
                        className="user-dropdown-header"
                        style={{
                          padding: '10px 16px 8px 16px',
                          borderBottom: '1px solid #232c25',
                        }}
                      >
                        <p
                          className="user-dropdown-name"
                          style={{
                            fontSize: '0.8125rem',
                            fontWeight: 700,
                            color: '#ffffff',
                            margin: 0,
                            lineHeight: 1.3,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {user.fullName || user.username || 'Chef'}
                        </p>
                        {user.username && (
                          <p
                            className="user-dropdown-handle"
                            style={{
                              fontSize: '0.6875rem',
                              fontWeight: 600,
                              color: '#10b981',
                              margin: '2px 0 0 0',
                              lineHeight: 1.3,
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            @{user.username}
                          </p>
                        )}
                        <p
                          className="user-dropdown-id"
                          style={{
                            fontSize: '0.625rem',
                            fontFamily: 'monospace',
                            color: '#d1d5db',
                            margin: '2px 0 0 0',
                            lineHeight: 1.3,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          User ID: {user.id}
                        </p>
                        {user.email && (
                          <p
                            className="user-dropdown-email"
                            style={{
                              fontSize: '0.6875rem',
                              color: '#d1d5db',
                              margin: '2px 0 0 0',
                              lineHeight: 1.3,
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {user.email}
                          </p>
                        )}
                      </div>

                      <button
                        onClick={() => {
                          onOpenProfile();
                          setUserMenuOpen(false);
                        }}
                        className="user-dropdown-item"
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '8px 16px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          background: 'transparent',
                          border: 'none',
                        }}
                      >
                        <User size={14} color="#d1d5db" />
                        <span style={{ color: '#ffffff' }}>{t('nav.profile')}</span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveTab('favorites');
                          setUserMenuOpen(false);
                        }}
                        className="user-dropdown-item"
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '8px 16px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          background: 'transparent',
                          border: 'none',
                        }}
                      >
                        <Heart size={14} color="#d1d5db" />
                        <span style={{ color: '#ffffff' }}>{t('nav.favorites')}</span>
                      </button>

                      <div
                        className="user-dropdown-divider"
                        style={{
                          borderTop: '1px solid #232c25',
                          margin: '4px 0',
                        }}
                      />

                      <button
                        onClick={() => {
                          signOut();
                          setUserMenuOpen(false);
                        }}
                        className="user-dropdown-item-danger"
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '8px 16px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: '#f87171',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          background: 'transparent',
                          border: 'none',
                        }}
                      >
                        <LogOut size={14} color="#f87171" />
                        <span style={{ color: '#f87171' }}>{t('nav.signOut')}</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <button
                onClick={() => {
                  if (typeof setActiveTab === 'function') {
                    setActiveTab('login');
                  } else {
                    onOpenAuth();
                  }
                }}
                className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center text-xs font-bold shadow-md hover:scale-105 transition-all border border-[#10b981]/40"
                title={t('nav.signIn') || 'Sign In'}
                aria-label="Sign In"
              >
                <User size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
