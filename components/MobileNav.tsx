'use client';

import React from 'react';
import { useI18n } from '../lib/i18n';
import { usePantry } from '../lib/pantry';
import { useShopping } from '../lib/shopping';
import { Home, Search, Camera, Refrigerator, Heart, User, LayoutGrid } from 'lucide-react';

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
  onOpenScan: () => void;
  onOpenProfile: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenScan,
  onOpenProfile,
}) => {
  const { t } = useI18n();
  const { expiringItems } = usePantry();
  const { shoppingItems } = useShopping();

  return (
    <nav className="mobile-bottom-nav md:hidden px-1" aria-label="Mobile Navigation">
      <button
        onClick={() => setActiveTab('home')}
        className={`flex flex-col items-center justify-center flex-1 h-full py-1 transition-all ${
          activeTab === 'home' ? 'text-[#f97316]' : 'text-[#9ca3af] hover:text-[#f97316]'
        }`}
      >
        <Home size={19} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
        <span className="text-[10px] font-bold mt-0.5">{t('nav.home')}</span>
        {activeTab === 'home' && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-0.5" />
        )}
      </button>

      <button
        onClick={() => setActiveTab('categories')}
        className={`flex flex-col items-center justify-center flex-1 h-full py-1 transition-all ${
          activeTab === 'categories' ? 'text-[#f97316]' : 'text-[#9ca3af] hover:text-[#f97316]'
        }`}
      >
        <LayoutGrid size={19} strokeWidth={activeTab === 'categories' ? 2.5 : 2} />
        <span className="text-[10px] font-bold mt-0.5">Categories</span>
        {activeTab === 'categories' && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-0.5" />
        )}
      </button>

      <button
        onClick={() => setActiveTab('search')}
        className={`flex flex-col items-center justify-center flex-1 h-full py-1 transition-all ${
          activeTab === 'search' ? 'text-[#f97316]' : 'text-[#9ca3af] hover:text-[#f97316]'
        }`}
      >
        <Search size={20} strokeWidth={activeTab === 'search' ? 2.5 : 2} />
        <span className="text-[10px] font-bold mt-0.5">{t('nav.search')}</span>
        {activeTab === 'search' && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-0.5" />
        )}
      </button>

      {/* Floating Center Scan Button */}
      <button
        onClick={onOpenScan}
        className="flex flex-col items-center justify-center -mt-6 group"
        aria-label="Scan Ingredients"
      >
        <div
          className="rounded-full flex items-center justify-center text-white shadow-xl ring-4 ring-[#141a16] transition-transform duration-200 group-hover:scale-105 active:scale-95"
          style={{
            width: '52px',
            height: '52px',
            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            boxShadow: '0 8px 24px rgba(249, 115, 22, 0.45)',
          }}
        >
          <Camera size={24} />
        </div>
        <span className="text-[10px] font-extrabold text-[#f97316] mt-1">
          {t('nav.scan')}
        </span>
      </button>

      <button
        onClick={() => setActiveTab('pantry')}
        className={`flex flex-col items-center justify-center flex-1 h-full py-1 relative transition-all ${
          activeTab === 'pantry' ? 'text-[#f97316]' : 'text-[#9ca3af] hover:text-[#f97316]'
        }`}
      >
        <Refrigerator size={20} strokeWidth={activeTab === 'pantry' ? 2.5 : 2} />
        <span className="text-[10px] font-bold mt-0.5">{t('nav.pantry')}</span>
        {expiringItems.length > 0 && (
          <span className="absolute top-1.5 right-3 w-2 h-2 rounded-full bg-[#f97316] animate-ping" />
        )}
        {activeTab === 'pantry' && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-0.5" />
        )}
      </button>

      <button
        onClick={() => setActiveTab('favorites')}
        className={`flex flex-col items-center justify-center flex-1 h-full py-1 transition-all ${
          activeTab === 'favorites' ? 'text-[#f97316]' : 'text-[#9ca3af] hover:text-[#f97316]'
        }`}
      >
        <Heart size={20} strokeWidth={activeTab === 'favorites' ? 2.5 : 2} />
        <span className="text-[10px] font-bold mt-0.5">{t('nav.favorites')}</span>
        {activeTab === 'favorites' && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-0.5" />
        )}
      </button>

      <button
        onClick={onOpenProfile}
        className="flex flex-col items-center justify-center flex-1 h-full py-1 text-[#9ca3af] hover:text-[#f97316] transition-colors"
      >
        <User size={20} />
        <span className="text-[10px] font-bold mt-0.5">{t('nav.profile')}</span>
      </button>
    </nav>
  );
};
