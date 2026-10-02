'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage } from '../../types';
import enTranslations from '../../locales/en.json';
import taTranslations from '../../locales/ta.json';
import hiTranslations from '../../locales/hi.json';

interface I18nContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (path: string, params?: Record<string, string | number>) => string;
}

const translationsMap: Record<SupportedLanguage, any> = {
  en: enTranslations,
  ta: taTranslations,
  hi: hiTranslations,
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>('en');

  useEffect(() => {
    // Load persisted language preference
    const savedLang = localStorage.getItem('leftover_chef_lang') as SupportedLanguage;
    if (savedLang && (savedLang === 'en' || savedLang === 'ta' || savedLang === 'hi')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('leftover_chef_lang', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  const t = (path: string, params?: Record<string, string | number>): string => {
    const keys = path.split('.');
    let value: any = translationsMap[language];

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        // Fallback to English if missing in target translation
        let fallbackValue: any = translationsMap['en'];
        for (const fbKey of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fbKey in fallbackValue) {
            fallbackValue = fallbackValue[fbKey];
          } else {
            return path;
          }
        }
        value = fallbackValue;
        break;
      }
    }

    if (typeof value !== 'string') {
      return path;
    }

    // Replace parameter interpolations e.g. {count}, {percent}
    if (params) {
      let interpolated = value;
      for (const [pKey, pVal] of Object.entries(params)) {
        interpolated = interpolated.replace(new RegExp(`\\{${pKey}\\}`, 'g'), String(pVal));
      }
      return interpolated;
    }

    return value;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

export { getLocalizedIngredientName } from './ingredientTranslations';

