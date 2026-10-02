'use client';

import React, { useState, useRef, useEffect } from 'react';
import { RecipeMatchResult } from '../types';
import { useI18n } from '../lib/i18n';
import { useAuth } from '../lib/auth';
import { speakRecipeStepByStep, stopSpeaking } from '../lib/speech';
import { getStableRecipeFoodImage, handleImageError } from '../lib/images';
import {
  Clock,
  Star,
  Heart,
  CheckCircle2,
  AlertTriangle,
  ChefHat,
  Volume2,
  VolumeX,
  ArrowRight,
} from 'lucide-react';

interface RecipeCardProps {
  matchResult: RecipeMatchResult;
  onSelect: () => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ matchResult, onSelect }) => {
  const { language, t } = useI18n();
  const { toggleFavorite, isFavorite } = useAuth();
  const { recipe, matchPercentage, missingIngredients, matchReasons } = matchResult;

  const isFav = isFavorite(recipe.id);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const cancelSpeechRef = useRef<(() => void) | null>(null);

  const recipeImage = getStableRecipeFoodImage(recipe);

  useEffect(() => {
    return () => {
      if (cancelSpeechRef.current) cancelSpeechRef.current();
    };
  }, []);

  const handleToggleVoice = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSpeaking) {
      if (cancelSpeechRef.current) {
        cancelSpeechRef.current();
        cancelSpeechRef.current = null;
      }
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      stopSpeaking();
      setIsSpeaking(true);
      const cancel = speakRecipeStepByStep(
        recipe,
        language,
        () => {},
        () => {
          setIsSpeaking(false);
          cancelSpeechRef.current = null;
        }
      );
      cancelSpeechRef.current = cancel;
    }
  };

  // Multilingual title and description
  const getLocalizedTitle = () => {
    if (language === 'ta' && recipe.titleTa) return recipe.titleTa;
    if (language === 'hi' && recipe.titleHi) return recipe.titleHi;
    return recipe.title;
  };

  const getLocalizedDesc = () => {
    if (language === 'ta' && recipe.descriptionTa) return recipe.descriptionTa;
    if (language === 'hi' && recipe.descriptionHi) return recipe.descriptionHi;
    return recipe.description;
  };

  return (
    <div
      onClick={onSelect}
      className="recipe-card group cursor-pointer"
      style={{
        backgroundColor: '#141a16',
        border: '1px solid #232c25',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
        transition: 'all 0.25s ease',
      }}
      role="article"
      aria-label={getLocalizedTitle()}
    >
      {/* 1. Controlled Small-to-Medium Image Container */}
      <div
        className="recipe-card-img-wrap"
        style={{
          position: 'relative',
          width: '100%',
          height: '142px',
          minHeight: '142px',
          maxHeight: '142px',
          overflow: 'hidden',
          backgroundColor: '#101713',
          flexShrink: 0,
        }}
      >
        <img
          src={recipeImage}
          alt={getLocalizedTitle()}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.4s ease',
          }}
          className="group-hover:scale-105"
          loading="lazy"
          onError={(e) => handleImageError(e, recipe.category)}
        />

        {/* Subtle Bottom Vignette for Overlay Legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(11, 15, 13, 0.8) 0%, rgba(0, 0, 0, 0.1) 50%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Top-Left Category / Cuisine Pill */}
        <div style={{ position: 'absolute', top: '8px', left: '8px', zIndex: 10 }}>
          <span
            style={{
              padding: '2px 8px',
              borderRadius: '9999px',
              fontSize: '10px',
              fontWeight: 700,
              backgroundColor: '#ffffff',
              color: '#111827',
              boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
              letterSpacing: '0.02em',
              display: 'inline-block',
            }}
          >
            {recipe.cuisine || recipe.category}
          </span>
        </div>

        {/* Top-Right Action Controls (Voice & Favorite) */}
        <div style={{ position: 'absolute', top: '8px', right: '8px', zIndex: 10, display: 'flex', gap: '6px' }}>
          {/* Voice Instructions Button */}
          <button
            onClick={handleToggleVoice}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '9999px',
              backgroundColor: isSpeaking ? '#ef4444' : 'rgba(20, 26, 22, 0.85)',
              backdropFilter: 'blur(4px)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            aria-label={isSpeaking ? t('recipe.stopVoice') : t('recipe.voiceInstructions')}
            title={isSpeaking ? t('recipe.stopVoice') : t('recipe.voiceInstructions')}
          >
            {isSpeaking ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </button>

          {/* Favorite Heart Toggle - Crisp White Circle with Red Heart */}
          <button
            onClick={e => {
              e.stopPropagation();
              toggleFavorite(recipe.id);
            }}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '9999px',
              backgroundColor: '#ffffff',
              color: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart size={14} fill={isFav ? '#ef4444' : '#ef4444'} className="text-[#ef4444]" />
          </button>
        </div>

        {/* Bottom-Left Match Percentage Pill */}
        <div style={{ position: 'absolute', bottom: '8px', left: '8px', zIndex: 10 }}>
          {matchPercentage === 100 ? (
            <span
              style={{
                backgroundColor: '#059669',
                color: '#ffffff',
                padding: '2px 8px',
                borderRadius: '9999px',
                fontSize: '10px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              <CheckCircle2 size={11} className="text-[#a7f3d0]" />
              {t('recipe.readyToCook')}
            </span>
          ) : (
            <span
              style={{
                backgroundColor: 'rgba(20, 26, 22, 0.88)',
                color: matchPercentage >= 70 ? '#34d399' : '#e5e7eb',
                padding: '2px 8px',
                borderRadius: '9999px',
                fontSize: '10px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              {matchPercentage}% Ready
            </span>
          )}
        </div>

        {/* Bottom-Right Cooking Time Pill */}
        <div style={{ position: 'absolute', bottom: '8px', right: '8px', zIndex: 10 }}>
          <span
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.72)',
              backdropFilter: 'blur(4px)',
              color: '#ffffff',
              padding: '2px 7px',
              borderRadius: '6px',
              fontSize: '10px',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '3px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
            }}
          >
            <Clock size={10} />
            {recipe.totalTimeMinutes}m
          </span>
        </div>
      </div>

      {/* 2. Compact, Balanced Card Body */}
      <div
        style={{
          padding: '12px 14px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {/* Match Reason Tag */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '6px' }}>
            {matchReasons.slice(0, 1).map((reason, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  padding: '2px 6px',
                  borderRadius: '5px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  color: '#34d399',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  lineHeight: '1.2',
                }}
              >
                {reason}
              </span>
            ))}
          </div>

          {/* Recipe Title - Bold White */}
          <h3
            style={{
              fontSize: '0.925rem',
              fontWeight: 700,
              color: '#f9fafb',
              lineHeight: '1.3',
              margin: '0 0 4px 0',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            title={getLocalizedTitle()}
          >
            {getLocalizedTitle()}
          </h3>

          {/* Description - 2 lines compact in soft grey */}
          <p
            className="line-clamp-2"
            style={{
              fontSize: '0.75rem',
              color: '#9ca3af',
              lineHeight: '1.4',
              margin: 0,
            }}
          >
            {getLocalizedDesc()}
          </p>
        </div>

        {/* 3. Footer: Missing Status & View Recipe Action */}
        <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid #232c25' }}>
          {/* Missing / Ready Indicator */}
          {missingIngredients.length > 0 ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '10.5px',
                color: '#fb923c',
                fontWeight: 600,
                padding: '2px 6px',
                borderRadius: '6px',
                backgroundColor: 'rgba(249, 115, 22, 0.12)',
                border: '1px solid rgba(249, 115, 22, 0.25)',
                marginBottom: '8px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              <AlertTriangle size={11} className="shrink-0 text-[#f97316]" />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                Need: {missingIngredients.map(m => m.name).slice(0, 2).join(', ')}
                {missingIngredients.length > 2 ? ` +${missingIngredients.length - 2}` : ''}
              </span>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '10.5px',
                color: '#34d399',
                fontWeight: 600,
                padding: '2px 6px',
                borderRadius: '6px',
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                marginBottom: '8px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              <ChefHat size={11} className="shrink-0 text-[#34d399]" />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                All ingredients ready in pantry!
              </span>
            </div>
          )}

          {/* Bottom Bar: Rating + Difficulty & "View" CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '11px',
              color: '#9ca3af',
              fontWeight: 500,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', color: '#f97316', fontWeight: 700 }}>
                <Star size={11} fill="#f97316" className="text-[#f97316]" />
                {recipe.rating.toFixed(1)}
              </span>
              <span>•</span>
              <span style={{ fontSize: '10.5px' }}>{recipe.difficulty}</span>
            </div>

            {/* View Recipe Action */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                fontSize: '11px',
                fontWeight: 600,
                color: '#d1d5db',
                padding: '3px 8px',
                borderRadius: '8px',
                transition: 'all 0.15s ease',
              }}
              className="group-hover:text-white group-hover:translate-x-0.5"
            >
              View <ArrowRight size={11} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
