'use client';

import { SupportedLanguage, Recipe } from '../../types';
import { getLocalizedIngredientName } from '../i18n';

let cachedVoices: SpeechSynthesisVoice[] = [];
let keepAliveTimer: ReturnType<typeof setInterval> | null = null;

function clearKeepAlive() {
  if (keepAliveTimer) {
    clearInterval(keepAliveTimer);
    keepAliveTimer = null;
  }
}

function startKeepAlive() {
  clearKeepAlive();
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    keepAliveTimer = setInterval(() => {
      if (window.speechSynthesis && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      } else {
        clearKeepAlive();
      }
    }, 9000);
  }
}

/**
 * Initializes and caches browser speech synthesis voices.
 */
export function initSpeechVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve([]);
      return;
    }

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        cachedVoices = voices;
        resolve(voices);
      }
    };

    const immediate = window.speechSynthesis.getVoices();
    if (immediate && immediate.length > 0) {
      cachedVoices = immediate;
      resolve(immediate);
    }

    window.speechSynthesis.onvoiceschanged = () => {
      loadVoices();
    };

    // Fallback timeout in case onvoiceschanged does not fire immediately
    setTimeout(() => {
      loadVoices();
      resolve(cachedVoices);
    }, 600);
  });
}

/**
 * Normalizes a language tag (e.g. "ta_IN" -> "ta-in").
 */
function normalizeLang(langStr: string): string {
  return (langStr || '').toLowerCase().replace(/_/g, '-');
}

/**
 * Finds the most authentic native voice for the given language (Tamil, Hindi, or English).
 * Prioritizes natural/neural/cloud voices for crystal clear human speech.
 */
export function getLanguageVoice(lang: SupportedLanguage): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;

  const liveVoices = window.speechSynthesis.getVoices();
  const voices = liveVoices && liveVoices.length > 0 ? liveVoices : cachedVoices;
  if (!voices || voices.length === 0) return null;

  if (lang === 'ta') {
    // Tier 1: Natural / Online / Cloud Indian Tamil voices (e.g. Microsoft Pallavi / Valluvar Online (Natural) - Tamil (India), Google தமிழ்)
    const naturalTaIn = voices.find(v => {
      const l = normalizeLang(v.lang);
      const n = v.name.toLowerCase();
      const isTamil = l.startsWith('ta') || n.includes('tamil') || n.includes('தமிழ்');
      const isNatural = n.includes('natural') || n.includes('online') || n.includes('google') || n.includes('pallavi') || n.includes('valluvar');
      const isIndia = l === 'ta-in' || n.includes('india') || n.includes('இந்தியா');
      return isTamil && isNatural && isIndia;
    });
    if (naturalTaIn) return naturalTaIn;

    // Tier 2: Any Natural / Online / Cloud Tamil voice
    const naturalTa = voices.find(v => {
      const l = normalizeLang(v.lang);
      const n = v.name.toLowerCase();
      const isTamil = l.startsWith('ta') || n.includes('tamil') || n.includes('தமிழ்');
      const isNatural = n.includes('natural') || n.includes('online') || n.includes('google') || n.includes('pallavi') || n.includes('valluvar');
      return isTamil && isNatural;
    });
    if (naturalTa) return naturalTa;

    // Tier 3: Any exact ta-IN or Indian Tamil locale voice
    const localeTaIn = voices.find(v => {
      const l = normalizeLang(v.lang);
      const n = v.name.toLowerCase();
      const isTamil = l.startsWith('ta') || n.includes('tamil') || n.includes('தமிழ்');
      const isIndia = l === 'ta-in' || n.includes('india') || n.includes('இந்தியா');
      return isTamil && isIndia;
    });
    if (localeTaIn) return localeTaIn;

    // Tier 4: Any exact ta or Tamil locale voice
    const localeTa = voices.find(v => {
      const l = normalizeLang(v.lang);
      return l === 'ta-in' || l.startsWith('ta');
    });
    if (localeTa) return localeTa;

    // Tier 5: Any voice containing Tamil naming or script
    const nameTa = voices.find(v => {
      const n = v.name.toLowerCase();
      return n.includes('tamil') || n.includes('தமிழ்') || n.includes('வள்ளுவர்') || n.includes('பல்லவி');
    });
    if (nameTa) return nameTa;
  }

  if (lang === 'hi') {
    // Tier 1: Natural / Online / Cloud Hindi voices
    const naturalHi = voices.find(v => {
      const l = normalizeLang(v.lang);
      const n = v.name.toLowerCase();
      return (
        (l.startsWith('hi') || n.includes('hindi') || n.includes('हिन्दी')) &&
        (n.includes('natural') || n.includes('online') || n.includes('google') || n.includes('swara') || n.includes('madhur'))
      );
    });
    if (naturalHi) return naturalHi;

    // Tier 2: Any exact hi-IN or Hindi locale voice
    const localeHi = voices.find(v => {
      const l = normalizeLang(v.lang);
      return l === 'hi-in' || l.startsWith('hi');
    });
    if (localeHi) return localeHi;

    // Tier 3: Any voice containing Hindi naming or script
    const nameHi = voices.find(v => {
      const n = v.name.toLowerCase();
      return n.includes('hindi') || n.includes('हिन्दी') || n.includes('स्वरा') || n.includes('मधुर');
    });
    if (nameHi) return nameHi;
  }

  // English: Prioritize Natural Indian English, then en-IN, then standard natural English
  const naturalEnIn = voices.find(v => {
    const l = normalizeLang(v.lang);
    const n = v.name.toLowerCase();
    return (
      l.startsWith('en') &&
      (l === 'en-in' || n.includes('india')) &&
      (n.includes('natural') || n.includes('online') || n.includes('google') || n.includes('neerja') || n.includes('prabhat'))
    );
  });
  if (naturalEnIn) return naturalEnIn;

  const enIn = voices.find(v => normalizeLang(v.lang) === 'en-in');
  if (enIn) return enIn;

  const naturalEn = voices.find(v => {
    const l = normalizeLang(v.lang);
    const n = v.name.toLowerCase();
    return l.startsWith('en') && (n.includes('natural') || n.includes('online') || n.includes('google'));
  });
  if (naturalEn) return naturalEn;

  const anyEn = voices.find(v => normalizeLang(v.lang).startsWith('en'));
  return anyEn || null;
}

/**
 * Returns the appropriate BCP-47 tag for speech synthesis.
 */
export function getLanguageTag(lang: SupportedLanguage): string {
  switch (lang) {
    case 'ta':
      return 'ta-IN';
    case 'hi':
      return 'hi-IN';
    default:
      return 'en-IN';
  }
}

/**
 * Recommended speech rates for optimal comprehension per language.
 * Tamil is tuned to 0.78 for a calm, natural, Google-Assistant-like pace
 * with clear syllable articulation, eliminating any rushed or robotic feel.
 * English (0.95) and Hindi (0.90) preserve their standard pacing.
 */
export function getDefaultSpeechRate(lang: SupportedLanguage): number {
  switch (lang) {
    case 'ta':
      return 0.77; // Calm, Google-Assistant-like natural speaking pace (0.75 - 0.80)
    case 'hi':
      return 0.90; // Natural pacing for Hindi culinary vocabulary
    default:
      return 0.95; // Crisp English pacing
  }
}

/**
 * Formats text for human-like Text-to-Speech synthesis with natural pauses and cadence.
 * For Tamil, ensures proper punctuation spacing, clause breath points, and step-pause markers so speech is slow and clear.
 */
export function formatSpeechText(text: string, lang: SupportedLanguage): string {
  if (!text) return '';

  let cleaned = text
    .replace(/[*_#`~[\]]/g, '') // Remove markdown artifacts if any
    .replace(/\s+/g, ' ')
    .trim();

  if (lang === 'ta') {
    // 1. Ensure step prefix has a comma for a natural breath pause after the step number
    cleaned = cleaned.replace(/^(படி\s*\d+)[.:,]?(\s*)/i, '$1, ');

    // 2. Ensure comma, period, colon, semicolon have clean trailing space so Web Speech pauses naturally
    cleaned = cleaned
      .replace(/([.,:;!?])(?=[^\s])/g, '$1 ')
      .replace(/\s*,\s*/g, ', ')
      .replace(/\s*\.\s*/g, '. ')
      .replace(/\s*:\s*/g, ': ')
      .replace(/\s*;\s*/g, '; ');

    // 3. Add natural breathing pauses around Tamil transition, sequence and action conjunctions
    cleaned = cleaned
      .replace(/(\s+)(அதன்\s*பிறகு|அதன்\s*பின்)(\s+)/g, ', $2, ')
      .replace(/(\s+)(பின்னர்|பிறகு)(\s+)/g, ', $2, ')
      .replace(/(\s+)(மற்றும்)(\s+)/g, ', $2 ')
      .replace(/(\s+)(இறுதியாக)(\s+)/g, ', $2, ');

    // 4. Clean up any doubled commas or conflicting punctuation combinations
    cleaned = cleaned
      .replace(/\.\s*,/g, '. ')
      .replace(/,\s*\./g, '. ')
      .replace(/,\s*,+/g, ', ')
      .replace(/\.\s*\.+/g, '. ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  return cleaned;
}

/**
 * Speaks a single text string using the appropriate language and voice.
 */
export function speakText(
  text: string,
  lang: SupportedLanguage,
  optionsOrOnStart?:
    | (() => void)
    | {
        rate?: number;
        pitch?: number;
        onStart?: () => void;
        onEnd?: () => void;
        onError?: (err?: any) => void;
      },
  onEndParam?: () => void
): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  stopSpeaking();

  const options =
    typeof optionsOrOnStart === 'object' && optionsOrOnStart !== null
      ? optionsOrOnStart
      : undefined;

  const onStart =
    typeof optionsOrOnStart === 'function' ? optionsOrOnStart : options?.onStart;
  const onEnd =
    typeof optionsOrOnStart === 'function' ? onEndParam : options?.onEnd;
  const onError = options?.onError;

  const formattedText = formatSpeechText(text, lang);
  const utterance = new SpeechSynthesisUtterance(formattedText);
  utterance.lang = getLanguageTag(lang);

  const matchedVoice = getLanguageVoice(lang);
  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  const defaultRate = getDefaultSpeechRate(lang);
  let effectiveRate = options?.rate ?? defaultRate;
  if (lang === 'ta') {
    // For Tamil, ensure speech rate is locked to a calm, clear, comfortable pace (0.75 - 0.80)
    if (!options?.rate || options.rate > 0.82) {
      effectiveRate = 0.77;
    }
  }
  utterance.rate = effectiveRate;
  utterance.pitch = options?.pitch ?? 1.0;

  utterance.onstart = () => {
    startKeepAlive();
    if (onStart) onStart();
  };

  utterance.onend = () => {
    clearKeepAlive();
    if (onEnd) onEnd();
  };

  utterance.onerror = (e: any) => {
    clearKeepAlive();
    // Ignore routine cancellations when user interrupts or skips
    if (e?.error === 'canceled' || e?.error === 'interrupted') {
      return;
    }
    if (onError) onError(e);
    if (onEnd) onEnd();
  };

  // Crucial Chromium un-stall fix: resume before speak
  try {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  } catch (e) {}

  window.speechSynthesis.speak(utterance);
}

/**
 * Stops all currently active speech synthesis in the browser.
 */
export function stopSpeaking(): void {
  clearKeepAlive();
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    } catch (e) {}
  }
}

export interface VoiceInstructionController {
  (): void; // Can be called directly as cancel()
  cancel: () => void;
  next: () => void;
  prev: () => void;
  pause: () => void;
  resume: () => void;
}

/**
 * Reads out the complete cooking instructions of a recipe step-by-step.
 */
export function speakRecipeStepByStep(
  recipe: Recipe,
  lang: SupportedLanguage,
  callbackOrOptions?:
    | ((stepNumber: number) => void)
    | {
        onStepChange?: (stepNumber: number) => void;
        onEnd?: () => void;
        onStateChange?: (speaking: boolean) => void;
      },
  onEndParam?: () => void
): VoiceInstructionController {
  const dummyController: any = () => {};
  dummyController.cancel = () => {};
  dummyController.next = () => {};
  dummyController.prev = () => {};
  dummyController.pause = () => {};
  dummyController.resume = () => {};

  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return dummyController;
  }

  stopSpeaking();

  const onStepChange =
    typeof callbackOrOptions === 'function'
      ? callbackOrOptions
      : callbackOrOptions?.onStepChange;

  const onEnd =
    typeof callbackOrOptions === 'function'
      ? onEndParam
      : callbackOrOptions?.onEnd;

  const onStateChange =
    typeof callbackOrOptions === 'object'
      ? callbackOrOptions.onStateChange
      : undefined;

  let isCancelled = false;
  let timerId: ReturnType<typeof setTimeout> | null = null;
  let currentIndex = -1; // -1 represents the intro announcement
  const steps = recipe.instructions;

  if (onStateChange) onStateChange(true);

  // Friendly culinary intro
  const getIntroText = (): string => {
    if (lang === 'ta') {
      const name = recipe.titleTa || recipe.title;
      return `${name} சமையல் முறை, படிப்படியாக தொடங்குவோம்.`;
    }
    if (lang === 'hi') {
      const name = recipe.titleHi || recipe.title;
      return `${name} बनाने की विधि। आइए चरणबद्ध तरीके से शुरू करते हैं।`;
    }
    return `Cooking ${recipe.title}. Step by step instructions.`;
  };

  // Friendly celebratory outro
  const getOutroText = (): string => {
    if (lang === 'ta') {
      const name = recipe.titleTa || recipe.title;
      return `${name} தயார்! சுவைத்து மகிழுங்கள்.`;
    }
    if (lang === 'hi') {
      const name = recipe.titleHi || recipe.title;
      return `${name} बनकर तैयार है! आनंद लें।`;
    }
    return `${recipe.title} is ready! Enjoy your meal.`;
  };

  const speakCurrent = () => {
    if (isCancelled) {
      if (onStateChange) onStateChange(false);
      return;
    }

    if (timerId) clearTimeout(timerId);

    // If past all steps, speak outro and finish
    if (currentIndex >= steps.length) {
      const outroText = getOutroText();
      speakText(outroText, lang, {
        onEnd: () => {
          if (onStateChange) onStateChange(false);
          if (onEnd) onEnd();
        }
      });
      return;
    }

    // Step -1: Introduction
    if (currentIndex === -1) {
      const introText = getIntroText();
      speakText(introText, lang, {
        onEnd: () => {
          if (!isCancelled) {
            currentIndex = 0;
            // Short calm pause after title before starting step 1: 1200ms for Tamil, 600ms for others
            const introDelay = lang === 'ta' ? 1200 : 600;
            timerId = setTimeout(speakCurrent, introDelay);
          }
        },
        onError: () => {
          if (!isCancelled) {
            currentIndex = 0;
            timerId = setTimeout(speakCurrent, 400);
          }
        }
      });
      return;
    }

    // Regular step
    const currentStep = steps[currentIndex];
    const stepNumber = currentStep.step || (currentIndex + 1);
    if (onStepChange) onStepChange(stepNumber);

    let stepPrefix = `Step ${stepNumber}. `;
    if (lang === 'ta') {
      stepPrefix = `படி ${stepNumber}, `; // Comma creates a natural breath between the step number and the instruction
    } else if (lang === 'hi') {
      stepPrefix = `चरण ${stepNumber}. `;
    }

    const stepText =
      (lang === 'ta' && currentStep.instructionTa) ||
      (lang === 'hi' && currentStep.instructionHi) ||
      currentStep.instruction;

    const fullUtteranceText = stepPrefix + stepText;

    speakText(fullUtteranceText, lang, {
      onEnd: () => {
        if (!isCancelled) {
          currentIndex++;
          // Calm, comfortable pause between steps: 1400ms for Tamil, 800ms for others
          const stepDelay = lang === 'ta' ? 1400 : 800;
          timerId = setTimeout(speakCurrent, stepDelay);
        }
      },
      onError: () => {
        if (!isCancelled) {
          currentIndex++;
          const errDelay = lang === 'ta' ? 800 : 600;
          timerId = setTimeout(speakCurrent, errDelay);
        }
      }
    });
  };

  // Begin speech execution
  speakCurrent();

  const cancelFn = () => {
    isCancelled = true;
    if (timerId) clearTimeout(timerId);
    stopSpeaking();
    if (onStateChange) onStateChange(false);
  };

  const controller: any = cancelFn;
  controller.cancel = cancelFn;
  controller.next = () => {
    if (currentIndex < steps.length - 1) {
      if (timerId) clearTimeout(timerId);
      stopSpeaking();
      currentIndex = Math.max(0, currentIndex + 1);
      speakCurrent();
    }
  };
  controller.prev = () => {
    if (currentIndex > 0) {
      if (timerId) clearTimeout(timerId);
      stopSpeaking();
      currentIndex = Math.max(0, currentIndex - 1);
      speakCurrent();
    }
  };
  controller.pause = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
  };
  controller.resume = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
    }
  };

  return controller as VoiceInstructionController;
}

/**
 * Speaks all ingredients of a recipe in the user's selected language.
 */
export function speakRecipeIngredients(
  recipe: Recipe,
  lang: SupportedLanguage,
  options?: {
    onStart?: () => void;
    onEnd?: () => void;
    onError?: (err?: any) => void;
  }
): () => void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return () => {};
  }

  const items = recipe.ingredients.map(ing => {
    const localizedName = getLocalizedIngredientName(ing, lang);
    return `${ing.quantity} ${ing.unit} ${localizedName}`;
  });

  let fullSpeech = '';
  if (lang === 'ta') {
    const dishName = recipe.titleTa || recipe.title;
    fullSpeech = `${dishName} செய்வதற்கு தேவையான பொருட்கள்: ${items.join(', ')}.`;
  } else if (lang === 'hi') {
    const dishName = recipe.titleHi || recipe.title;
    fullSpeech = `${dishName} के लिए आवश्यक सामग्री: ${items.join(', ')}.`;
  } else {
    fullSpeech = `Ingredients required for ${recipe.title}: ${items.join(', ')}.`;
  }

  speakText(fullSpeech, lang, {
    rate: getDefaultSpeechRate(lang),
    onStart: options?.onStart,
    onEnd: options?.onEnd,
    onError: options?.onError,
  });

  return () => {
    stopSpeaking();
    if (options?.onEnd) options.onEnd();
  };
}
