'use client';

import React, { useState, useEffect } from 'react';
import { Recipe } from '../types';
import { useI18n } from '../lib/i18n';
import { speakText, stopSpeaking } from '../lib/speech';
import confetti from 'canvas-confetti';
import {
  X,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Timer,
  ChefHat
} from 'lucide-react';

interface CookingModeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CookingModeModal: React.FC<CookingModeModalProps> = ({
  recipe,
  isOpen,
  onClose,
}) => {
  const { language, t } = useI18n();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const stopSpeech = () => {
    stopSpeaking();
    setIsSpeaking(false);
  };

  useEffect(() => {
    if (!isOpen) {
      stopSpeech();
      setCurrentStepIndex(0);
    }
  }, [isOpen]);

  if (!isOpen || !recipe) return null;

  const totalSteps = recipe.instructions.length;
  const currentStep = recipe.instructions[currentStepIndex];

  const currentInstructionText =
    (language === 'ta' && currentStep.instructionTa) ||
    (language === 'hi' && currentStep.instructionHi) ||
    currentStep.instruction;

  const speakCurrentStep = () => {
    if (isSpeaking) {
      stopSpeech();
      return;
    }

    let prefix = `Step ${currentStepIndex + 1}. `;
    if (language === 'ta') {
      prefix = `படி ${currentStepIndex + 1}, `;
    } else if (language === 'hi') {
      prefix = `चरण ${currentStepIndex + 1}. `;
    }

    speakText(
      prefix + currentInstructionText,
      language,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false)
    );
  };

  const handleNext = () => {
    stopSpeech();
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      // Completed all steps! Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handlePrev = () => {
    stopSpeech();
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 100);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0a1f16] text-white flex flex-col justify-between p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <ChefHat size={26} className="text-[#52b788]" />
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-wide truncate max-w-[240px] sm:max-w-md">
              {recipe.title}
            </h2>
            <span className="text-xs text-[#74c69d] font-semibold">
              {t('cookingMode.step', { current: currentStepIndex + 1, total: totalSteps })}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* TTS Read Aloud Button */}
          <button
            onClick={speakCurrentStep}
            className={`btn-secondary py-2 px-3 sm:px-4 text-xs font-bold transition-all border-none ${
              isSpeaking
                ? 'bg-[#e76f51] text-white animate-pulse'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            title="Read instruction aloud"
          >
            {isSpeaking ? (
              <>
                <VolumeX size={16} />
                <span className="hidden sm:inline">{t('cookingMode.stopSpeaking')}</span>
              </>
            ) : (
              <>
                <Volume2 size={16} />
                <span className="hidden sm:inline">{t('cookingMode.speakStep')}</span>
              </>
            )}
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Exit cooking mode"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Animated Step Progress Bar */}
      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden my-4">
        <div
          className="bg-gradient-to-r from-[#52b788] to-[#f4a261] h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Center Step Area (Large Legible Text) */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto px-4 text-center my-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#52b788]/20 text-[#52b788] text-2xl font-black mb-6">
          {currentStep.step}
        </div>

        <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold leading-snug sm:leading-tight tracking-tight text-white mb-6">
          {currentInstructionText}
        </h3>

        {currentStep.timerMinutes && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 text-[#f4a261] text-sm font-bold mt-2">
            <Timer size={18} />
            <span>Recommended cook time: ~{currentStep.timerMinutes} mins</span>
          </div>
        )}
      </div>

      {/* Bottom Sticky Navigation Controls */}
      <div className="max-w-xl w-full mx-auto flex items-center justify-between gap-4 pt-4 border-t border-white/10">
        <button
          onClick={handlePrev}
          disabled={currentStepIndex === 0}
          className={`flex-1 py-4 px-6 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            currentStepIndex === 0
              ? 'bg-white/5 text-white/30 cursor-not-allowed'
              : 'bg-white/10 text-white hover:bg-white/20 active:scale-98'
          }`}
        >
          <ChevronLeft size={18} />
          <span>{t('cookingMode.prev')}</span>
        </button>

        {currentStepIndex === totalSteps - 1 ? (
          <button
            onClick={() => {
              handleNext();
              setTimeout(onClose, 2000);
            }}
            className="flex-1 py-4 px-6 rounded-2xl text-sm font-bold bg-[#2d6a4f] text-white hover:bg-[#40916c] flex items-center justify-center gap-2 shadow-lg active:scale-98"
          >
            <CheckCircle size={18} />
            <span>{t('cookingMode.finish')}</span>
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex-1 py-4 px-6 rounded-2xl text-sm font-bold bg-[#e76f51] text-white hover:bg-[#d65a3b] flex items-center justify-center gap-2 shadow-lg active:scale-98"
          >
            <span>{t('cookingMode.next')}</span>
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
};
