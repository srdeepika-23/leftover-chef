'use client';

import React, { useState, useRef, useEffect } from 'react';
import { RecipeMatchResult, MealDay, MealSlot } from '../types';
import { useI18n, getLocalizedIngredientName } from '../lib/i18n';
import { useAuth } from '../lib/auth';
import { useShopping } from '../lib/shopping';
import { useMealPlan } from '../lib/mealplan';
import {
  speakRecipeStepByStep,
  speakRecipeIngredients,
  speakText,
  stopSpeaking,
  VoiceInstructionController
} from '../lib/speech';
import { getStableRecipeFoodImage, handleImageError } from '../lib/images';
import {
  X,
  Clock,
  Users,
  Flame,
  Star,
  Heart,
  Share2,
  Printer,
  ShoppingBag,
  Play,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Check,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface RecipeDetailModalProps {
  matchResult: RecipeMatchResult | null;
  onClose: () => void;
  onStartCooking: () => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  matchResult,
  onClose,
  onStartCooking,
}) => {
  const { language, t } = useI18n();
  const { toggleFavorite, isFavorite } = useAuth();
  const { addRecipeMissingIngredients } = useShopping();
  const { addRecipeToMealPlan } = useMealPlan();

  const [copiedLink, setCopiedLink] = useState(false);
  const [addedShoppingNotice, setAddedShoppingNotice] = useState<string | null>(null);
  const [showMealPlanPicker, setShowMealPlanPicker] = useState(false);
  const [mealPlanDay, setMealPlanDay] = useState<MealDay>('monday');
  const [mealPlanSlot, setMealPlanSlot] = useState<MealSlot>('dinner');
  const [mealPlanSuccess, setMealPlanSuccess] = useState(false);

  // Voice Instructions & Ingredients State
  const [isSpeakingSteps, setIsSpeakingSteps] = useState(false);
  const [isSpeakingIngredients, setIsSpeakingIngredients] = useState(false);
  const [currentSpeakingStep, setCurrentSpeakingStep] = useState<number | null>(null);
  const voiceControllerRef = useRef<VoiceInstructionController | null>(null);
  const cancelIngredientsRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    return () => {
      if (voiceControllerRef.current) voiceControllerRef.current.cancel();
      if (cancelIngredientsRef.current) cancelIngredientsRef.current();
      stopSpeaking();
    };
  }, [matchResult]);

  if (!matchResult) return null;

  const { recipe, matchPercentage, availableIngredients, missingIngredients } = matchResult;
  const isFav = isFavorite(recipe.id);
  const modalImage = getStableRecipeFoodImage(recipe);

  const localizedTitle =
    (language === 'ta' && recipe.titleTa) ||
    (language === 'hi' && recipe.titleHi) ||
    recipe.title;

  const localizedDesc =
    (language === 'ta' && recipe.descriptionTa) ||
    (language === 'hi' && recipe.descriptionHi) ||
    recipe.description;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: `Check out this recipe for ${recipe.title} on Leftover Chef!`,
          url: window.location.href,
        });
        return;
      } catch (e) {
        // Fallback to clipboard
      }
    }
    // Clipboard fallback
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAddMissingToShopping = () => {
    const count = addRecipeMissingIngredients(recipe.title, missingIngredients);
    setAddedShoppingNotice(`Added ${count} items to shopping list!`);
    setTimeout(() => setAddedShoppingNotice(null), 3000);
  };

  const handleSaveMealPlan = () => {
    addRecipeToMealPlan(mealPlanDay, mealPlanSlot, recipe);
    setMealPlanSuccess(true);
    setTimeout(() => {
      setMealPlanSuccess(false);
      setShowMealPlanPicker(false);
    }, 1500);
  };

  const handleToggleIngredientsVoice = () => {
    if (isSpeakingIngredients) {
      if (cancelIngredientsRef.current) {
        cancelIngredientsRef.current();
        cancelIngredientsRef.current = null;
      }
      stopSpeaking();
      setIsSpeakingIngredients(false);
      return;
    }

    // Stop any step speech first
    if (voiceControllerRef.current) {
      voiceControllerRef.current.cancel();
      voiceControllerRef.current = null;
    }
    stopSpeaking();
    setIsSpeakingSteps(false);
    setCurrentSpeakingStep(null);

    setIsSpeakingIngredients(true);
    const cancel = speakRecipeIngredients(recipe, language, {
      onStart: () => setIsSpeakingIngredients(true),
      onEnd: () => {
        setIsSpeakingIngredients(false);
        cancelIngredientsRef.current = null;
      },
      onError: () => {
        setIsSpeakingIngredients(false);
        cancelIngredientsRef.current = null;
      },
    });
    cancelIngredientsRef.current = cancel;
  };

  const handleToggleVoiceInstructions = () => {
    if (isSpeakingIngredients) {
      if (cancelIngredientsRef.current) {
        cancelIngredientsRef.current();
        cancelIngredientsRef.current = null;
      }
      stopSpeaking();
      setIsSpeakingIngredients(false);
    }

    if (isSpeakingSteps) {
      if (voiceControllerRef.current) {
        voiceControllerRef.current.cancel();
        voiceControllerRef.current = null;
      }
      stopSpeaking();
      setIsSpeakingSteps(false);
      setCurrentSpeakingStep(null);
    } else {
      stopSpeaking();
      setIsSpeakingSteps(true);
      const controller = speakRecipeStepByStep(
        recipe,
        language,
        (stepNum) => setCurrentSpeakingStep(stepNum),
        () => {
          setIsSpeakingSteps(false);
          setCurrentSpeakingStep(null);
          voiceControllerRef.current = null;
        }
      );
      voiceControllerRef.current = controller;
    }
  };

  const handleNextVoiceStep = () => {
    if (voiceControllerRef.current) {
      voiceControllerRef.current.next();
    }
  };

  const handlePrevVoiceStep = () => {
    if (voiceControllerRef.current) {
      voiceControllerRef.current.prev();
    }
  };

  const handleSpeakSingleStep = (stepNum: number, text: string) => {
    if (isSpeakingIngredients) {
      if (cancelIngredientsRef.current) {
        cancelIngredientsRef.current();
        cancelIngredientsRef.current = null;
      }
      stopSpeaking();
      setIsSpeakingIngredients(false);
    }

    if (currentSpeakingStep === stepNum && isSpeakingSteps) {
      if (voiceControllerRef.current) {
        voiceControllerRef.current.cancel();
        voiceControllerRef.current = null;
      }
      stopSpeaking();
      setIsSpeakingSteps(false);
      setCurrentSpeakingStep(null);
      return;
    }

    if (voiceControllerRef.current) {
      voiceControllerRef.current.cancel();
      voiceControllerRef.current = null;
    }
    stopSpeaking();
    setCurrentSpeakingStep(stepNum);
    setIsSpeakingSteps(true);
    speakText(
      text,
      language,
      () => {},
      () => {
        setIsSpeakingSteps(false);
        setCurrentSpeakingStep(null);
      }
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content max-w-3xl"
        onClick={e => e.stopPropagation()}
        style={{ borderRadius: '28px' }}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass flex items-center justify-center text-[#1b4332] hover:bg-white transition-colors shadow-md"
          aria-label="Close recipe details"
        >
          <X size={20} />
        </button>

        {/* Hero Header Image - Controlled Small-to-Medium Height */}
        <div
          className="relative w-full overflow-hidden bg-[#0f2b20]"
          style={{ height: '210px', minHeight: '210px', maxHeight: '210px', position: 'relative', width: '100%', overflow: 'hidden' }}
        >
          <img
            src={modalImage}
            alt={localizedTitle}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => handleImageError(e, recipe.category)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)' }} />

          {/* Quick Floating Actions on Hero */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="badge-pill bg-[#1b4332] text-white py-1 px-3 text-xs font-bold shadow-md">
              {matchPercentage}% In Pantry
            </span>
            <span className="badge-pill bg-white/90 text-[#1b4332] py-1 px-3 text-xs font-semibold shadow-md">
              {recipe.cuisine}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight drop-shadow-md">
              {localizedTitle}
            </h2>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 text-xs sm:text-sm font-medium text-white/90">
              <span className="flex items-center gap-1.5">
                <Clock size={15} /> Prep: {recipe.prepTimeMinutes}m • Cook: {recipe.cookTimeMinutes}m
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={15} /> {recipe.servings} Servings
              </span>
              <span className="flex items-center gap-1.5 text-[#f4a261] font-bold">
                <Star size={15} fill="#f4a261" /> {recipe.rating.toFixed(1)} ({recipe.ratingCount})
              </span>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Action Button Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#ece6d8]">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={onStartCooking}
                className="btn-accent py-2.5 px-5 text-sm font-bold shadow-md"
              >
                <Play size={16} />
                {t('recipe.startCooking')}
              </button>

              <button
                onClick={handleToggleVoiceInstructions}
                className={`py-2.5 px-4 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all ${
                  isSpeakingSteps
                    ? 'bg-[#e63946] text-white animate-pulse'
                    : 'bg-[#1b4332] text-white hover:bg-[#2d6a4f]'
                }`}
                title={isSpeakingSteps ? t('recipe.stopVoice') : t('recipe.voiceInstructions')}
              >
                {isSpeakingSteps ? <VolumeX size={15} /> : <Volume2 size={15} />}
                {isSpeakingSteps ? t('recipe.stopVoice') : t('recipe.voiceInstructions')}
              </button>

              <button
                onClick={() => setShowMealPlanPicker(!showMealPlanPicker)}
                className="btn-secondary py-2.5 px-4 text-xs font-semibold"
              >
                <Calendar size={15} />
                {t('recipe.addToMealPlan')}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleFavorite(recipe.id)}
                className={`p-2.5 rounded-full border border-[#e2dbcb] transition-colors ${isFav ? 'bg-[#ffebee] text-[#e63946] border-[#ffcdd2]' : 'bg-white text-[#4a5c53]'
                  }`}
                title={t('recipe.saveFavorite')}
              >
                <Heart size={18} fill={isFav ? '#e63946' : 'none'} />
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 rounded-full border border-[#e2dbcb] bg-white text-[#4a5c53] hover:text-[#1b4332] transition-colors"
                title={t('recipe.share')}
              >
                <Share2 size={18} />
              </button>

              <button
                onClick={handlePrint}
                className="p-2.5 rounded-full border border-[#e2dbcb] bg-white text-[#4a5c53] hover:text-[#1b4332] transition-colors"
                title={t('recipe.print')}
              >
                <Printer size={18} />
              </button>
            </div>
          </div>

          {copiedLink && (
            <div className="p-2.5 rounded-xl bg-[#e8f5e9] text-[#2d6a4f] text-xs font-semibold text-center">
              Link copied to clipboard!
            </div>
          )}

          {/* Meal Plan Quick Add Inline Popover */}
          {showMealPlanPicker && (
            <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#e2dbcb] space-y-3">
              <h4 className="text-xs font-bold text-[#1b4332] uppercase tracking-wider">
                Plan this meal:
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <select
                  value={mealPlanDay}
                  onChange={e => setMealPlanDay(e.target.value as MealDay)}
                  className="bg-white border border-[#e2dbcb] rounded-xl px-3 py-1.5 text-xs text-[#1b4332] font-semibold"
                >
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                  <option value="sunday">Sunday</option>
                </select>

                <select
                  value={mealPlanSlot}
                  onChange={e => setMealPlanSlot(e.target.value as MealSlot)}
                  className="bg-white border border-[#e2dbcb] rounded-xl px-3 py-1.5 text-xs text-[#1b4332] font-semibold"
                >
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                </select>

                <button
                  onClick={handleSaveMealPlan}
                  className="btn-primary text-xs py-1.5 px-4 font-bold"
                >
                  {mealPlanSuccess ? (
                    <span className="flex items-center gap-1">
                      <Check size={14} /> Added!
                    </span>
                  ) : (
                    'Confirm Slot'
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-sm sm:text-base text-[#4a5c53] leading-relaxed">
            {localizedDesc}
          </p>

          {/* Allergen Warning Banner */}
          {recipe.allergens && recipe.allergens.length > 0 ? (
            <div className="p-3.5 rounded-2xl bg-[#fff3e0] border border-[#ffe0b2] text-[#e76f51] flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
              <AlertTriangle size={18} className="shrink-0" />
              <span>
                {t('recipe.allergens')} <strong>{recipe.allergens.join(', ')}</strong>. Please verify if you have severe allergies.
              </span>
            </div>
          ) : (
            <div className="p-3 rounded-2xl bg-[#f0fdf4] border border-[#d8f3dc] text-[#2d6a4f] text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 size={16} />
              <span>{t('recipe.noAllergens')}</span>
            </div>
          )}

          {/* INGREDIENTS SECTION: Available vs Missing */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-bold text-[#1b4332]">
                Ingredients ({recipe.ingredients.length})
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleIngredientsVoice}
                  className={`text-xs font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                    isSpeakingIngredients
                      ? 'bg-[#ffebee] text-[#e63946] border border-[#ffcdd2] animate-pulse shadow-sm'
                      : 'bg-[#f0fdf4] text-[#2d6a4f] border border-[#d8f3dc] hover:bg-[#d8f3dc]'
                  }`}
                  title={isSpeakingIngredients ? t('recipe.stopIngredients') : t('recipe.listenIngredients')}
                  aria-label={isSpeakingIngredients ? t('recipe.stopIngredients') : t('recipe.listenIngredients')}
                >
                  {isSpeakingIngredients ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  <span>{isSpeakingIngredients ? t('recipe.stopIngredients') : t('recipe.listenIngredients')}</span>
                </button>
                {missingIngredients.length > 0 && (
                  <button
                    onClick={handleAddMissingToShopping}
                    className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5 font-bold text-[#e76f51] border-[#fbd3c7] hover:bg-[#feece6]"
                  >
                    <ShoppingBag size={13} />
                    {t('recipe.addToShopping')} ({missingIngredients.length})
                  </button>
                )}
              </div>
            </div>

            {addedShoppingNotice && (
              <div className="p-2.5 rounded-xl bg-[#e8f5e9] text-[#2d6a4f] text-xs font-semibold text-center animate-in">
                {addedShoppingNotice}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Ready In Kitchen */}
              <div className="p-4 rounded-2xl bg-[#f0fdf4] border border-[#d8f3dc]">
                <h4 className="text-xs font-bold text-[#2d6a4f] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 size={15} />
                  {t('recipe.available')} ({availableIngredients.length})
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#192720]">
                  {availableIngredients.map(ing => (
                    <li key={ing.id} className="flex items-center justify-between border-b border-[#e8f5e9] pb-1.5">
                      <span className="font-medium">{getLocalizedIngredientName(ing, language)}</span>
                      <span className="text-[#4a5c53] font-semibold">{ing.quantity} {ing.unit}</span>
                    </li>
                  ))}
                  {availableIngredients.length === 0 && (
                    <p className="text-xs text-[#788c81] italic">None of these ingredients are currently in your pantry.</p>
                  )}
                </ul>
              </div>

              {/* Missing Ingredients */}
              <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#ece6d8]">
                <h4 className="text-xs font-bold text-[#e76f51] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <AlertTriangle size={15} />
                  {t('recipe.missing')} ({missingIngredients.length})
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#192720]">
                  {missingIngredients.map(ing => (
                    <li key={ing.id} className="flex items-center justify-between border-b border-[#f3ede2] pb-1.5">
                      <span className="font-medium text-[#788c81]">{getLocalizedIngredientName(ing, language)}</span>
                      <span className="text-[#e76f51] font-semibold">{ing.quantity} {ing.unit}</span>
                    </li>
                  ))}
                  {missingIngredients.length === 0 && (
                    <p className="text-xs text-[#2d6a4f] font-semibold flex items-center gap-1">
                      <Check size={14} /> You have all ingredients to cook this dish right now!
                    </p>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* STEP-BY-STEP INSTRUCTIONS */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <h3 className="text-lg font-bold text-[#1b4332]">
                {t('recipe.instructions')}
              </h3>

              <div className="flex flex-wrap items-center gap-2">
                {isSpeakingSteps && (
                  <div className="flex items-center gap-1 bg-[#1b4332] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#52b788] animate-ping mr-1" />
                    <span className="truncate max-w-[180px]">
                      {currentSpeakingStep
                        ? t('recipe.speakingStep', { current: currentSpeakingStep, total: recipe.instructions.length })
                        : (language === 'ta' ? 'அறிமுகம் ஒலிக்கிறது...' : language === 'hi' ? 'शुरुआत हो रही है...' : 'Starting voice...')}
                    </span>
                    <button
                      onClick={handlePrevVoiceStep}
                      className="ml-1 p-1 hover:bg-white/20 rounded-full transition-colors"
                      title={t('recipe.prevStep')}
                      aria-label={t('recipe.prevStep')}
                    >
                      <ChevronLeft size={13} />
                    </button>
                    <button
                      onClick={handleNextVoiceStep}
                      className="p-1 hover:bg-white/20 rounded-full transition-colors"
                      title={t('recipe.nextStep')}
                      aria-label={t('recipe.nextStep')}
                    >
                      <ChevronRight size={13} />
                    </button>
                  </div>
                )}

                <button
                  onClick={handleToggleVoiceInstructions}
                  className={`text-xs font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                    isSpeakingSteps
                      ? 'bg-[#ffebee] text-[#e63946] border border-[#ffcdd2] hover:bg-[#ffcdd2]'
                      : 'bg-[#f0fdf4] text-[#2d6a4f] border border-[#d8f3dc] hover:bg-[#d8f3dc]'
                  }`}
                  title={isSpeakingSteps ? t('recipe.stopVoice') : t('recipe.voiceInstructions')}
                  aria-label={isSpeakingSteps ? t('recipe.stopVoice') : t('recipe.voiceInstructions')}
                >
                  {isSpeakingSteps ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  <span>{isSpeakingSteps ? t('recipe.stopVoice') : t('recipe.voiceInstructions')}</span>
                </button>
              </div>
            </div>
            <ol className="space-y-2.5">
              {recipe.instructions.map(inst => {
                const isCurrentStep = currentSpeakingStep === inst.step;
                const text =
                  (language === 'ta' && inst.instructionTa) ||
                  (language === 'hi' && inst.instructionHi) ||
                  inst.instruction;

                return (
                  <li
                    key={inst.step}
                    className={`flex items-start gap-3 p-3 rounded-2xl transition-all ${
                      isCurrentStep
                        ? 'bg-[#e8f5e9] border border-[#2d6a4f]/30 shadow-sm'
                        : 'hover:bg-[#faf7f2]'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                        isCurrentStep ? 'bg-[#2d6a4f] text-white animate-pulse' : 'bg-[#1b4332] text-white'
                      }`}
                    >
                      {inst.step}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base text-[#192720] leading-relaxed">
                        {text}
                      </p>
                    </div>
                    <button
                      onClick={() => handleSpeakSingleStep(inst.step, text)}
                      className={`p-1.5 rounded-full transition-colors shrink-0 ${
                        isCurrentStep
                          ? 'text-[#2d6a4f] bg-[#d8f3dc]'
                          : 'text-[#788c81] hover:text-[#1b4332] hover:bg-[#f3ede2]'
                      }`}
                      title={isCurrentStep ? 'Stop' : 'Listen to this step'}
                      aria-label={`Listen to step ${inst.step}`}
                    >
                      {isCurrentStep ? <VolumeX size={15} /> : <Volume2 size={15} />}
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* ESTIMATED NUTRITION BREAKDOWN */}
          <div className="p-5 rounded-2xl bg-white border border-[#ece6d8] shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-[#1b4332]">
                {t('recipe.nutrition')}
              </h4>
              <span className="text-[11px] text-[#788c81]">
                {t('recipe.nutritionDisclaimer')}
              </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-[#faf7f2]">
                <span className="text-[11px] text-[#788c81] font-semibold block">{t('recipe.calories')}</span>
                <span className="text-base font-extrabold text-[#1b4332]">{recipe.nutrition.calories}</span>
                <span className="text-[10px] text-[#788c81] block">kcal</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#faf7f2]">
                <span className="text-[11px] text-[#788c81] font-semibold block">{t('recipe.protein')}</span>
                <span className="text-base font-extrabold text-[#1b4332]">{recipe.nutrition.protein}g</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#faf7f2]">
                <span className="text-[11px] text-[#788c81] font-semibold block">{t('recipe.carbs')}</span>
                <span className="text-base font-extrabold text-[#1b4332]">{recipe.nutrition.carbohydrates}g</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#faf7f2]">
                <span className="text-[11px] text-[#788c81] font-semibold block">{t('recipe.fat')}</span>
                <span className="text-base font-extrabold text-[#1b4332]">{recipe.nutrition.fat}g</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#faf7f2]">
                <span className="text-[11px] text-[#788c81] font-semibold block">{t('recipe.fiber')}</span>
                <span className="text-base font-extrabold text-[#1b4332]">{recipe.nutrition.fiber || 0}g</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#faf7f2]">
                <span className="text-[11px] text-[#788c81] font-semibold block">{t('recipe.sugar')}</span>
                <span className="text-base font-extrabold text-[#1b4332]">{recipe.nutrition.sugar || 0}g</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
