'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSectionProps {
  title: string;
  subtitle?: string;
  badge?: string;
  viewAllAction?: () => void;
  viewAllLabel?: string;
  children: React.ReactNode;
}

export const CarouselSection: React.FC<CarouselSectionProps> = ({
  title,
  subtitle,
  badge,
  viewAllAction,
  viewAllLabel,
  children,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="my-5 sm:my-7 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header with Title, Badge & Navigation Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-3.5 sm:mb-4">
        <div>
          {badge && (
            <span className="text-[10px] sm:text-[11px] font-bold text-[#10b981] uppercase tracking-wider block mb-0.5">
              {badge}
            </span>
          )}
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs text-[#9ca3af] mt-0.5 max-w-xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
          {viewAllAction && (
            <button
              onClick={viewAllAction}
              style={{
                color: '#f97316',
                fontWeight: 600,
                fontSize: '0.825rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
              className="hover:underline mr-1.5 py-1 px-1.5 transition-colors"
            >
              {viewAllLabel || 'View All'} →
            </button>
          )}

          {/* Desktop Navigation Arrows */}
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`w-8 h-8 rounded-lg border border-[#232c25] flex items-center justify-center transition-all ${
              canScrollLeft
                ? 'bg-[#141a16] text-[#e5e7eb] hover:bg-[#059669] hover:text-white hover:border-[#059669] shadow-sm cursor-pointer active:scale-95'
                : 'bg-[#141a16]/40 text-[#4b5563] cursor-not-allowed opacity-40'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`w-8 h-8 rounded-lg border border-[#232c25] flex items-center justify-center transition-all ${
              canScrollRight
                ? 'bg-[#141a16] text-[#e5e7eb] hover:bg-[#059669] hover:text-white hover:border-[#059669] shadow-sm cursor-pointer active:scale-95'
                : 'bg-[#141a16]/40 text-[#4b5563] cursor-not-allowed opacity-40'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Smooth Horizontal Scrolling Container with Touch / Swipe Support */}
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto pb-3 pt-0.5 scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {children}
        </div>

        {/* Subtle Right Fade Gradient Cue for Smooth Horizontal Scrolling */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-3 w-10 bg-gradient-to-l from-[#0b0f0d] to-transparent pointer-events-none transition-opacity duration-300 hidden sm:block" />
        )}
      </div>
    </section>
  );
};
