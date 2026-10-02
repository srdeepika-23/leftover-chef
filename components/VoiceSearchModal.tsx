'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../lib/i18n';
import { SupportedLanguage } from '../types';
import { Mic, MicOff, X, AlertCircle, Volume2, Sparkles, Check, RefreshCw } from 'lucide-react';

interface VoiceSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (spokenText: string) => void;
}

export const VoiceSearchModal: React.FC<VoiceSearchModalProps> = ({
  isOpen,
  onClose,
  onSearch,
}) => {
  const { language, setLanguage, t } = useI18n();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(true);

  const recognitionRef = useRef<any>(null);
  const autoSubmitTimerRef = useRef<NodeJS.Timeout | null>(null);

  const supportedLanguages: { code: SupportedLanguage; label: string; native: string; tag: string }[] = [
    { code: 'en', label: 'English', native: 'English', tag: 'en-IN' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்', tag: 'ta-IN' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी', tag: 'hi-IN' },
  ];

  // Map app language to appropriate BCP-47 speech recognition language tag
  const getLanguageTag = (langCode: SupportedLanguage = language) => {
    switch (langCode) {
      case 'ta':
        return 'ta-IN';
      case 'hi':
        return 'hi-IN';
      default:
        return 'en-IN';
    }
  };

  const stopListening = () => {
    if (autoSubmitTimerRef.current) {
      clearTimeout(autoSubmitTimerRef.current);
      autoSubmitTimerRef.current = null;
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // Ignored
      }
    }
    setIsListening(false);
  };

  const startListeningWithLang = (langCode: SupportedLanguage) => {
    if (autoSubmitTimerRef.current) {
      clearTimeout(autoSubmitTimerRef.current);
      autoSubmitTimerRef.current = null;
    }
    setErrorMessage(null);
    setTranscript('');

    const SpeechRecognition =
      typeof window !== 'undefined'
        ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
        : null;

    if (!SpeechRecognition) {
      setIsSupported(false);
      setErrorMessage(t('voice.unsupported'));
      return;
    }

    try {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.onstart = null;
          recognitionRef.current.onresult = null;
          recognitionRef.current.onerror = null;
          recognitionRef.current.onend = null;
          recognitionRef.current.abort();
        } catch (e) {}
        recognitionRef.current = null;
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = getLanguageTag(langCode);

      recognition.onstart = () => {
        setIsListening(true);
        setErrorMessage(null);
      };

      recognition.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = 0; i < event.results.length; i++) {
          const chunk = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += chunk + ' ';
          } else {
            interimTranscript += chunk;
          }
        }

        const fullText = (finalTranscript + interimTranscript).trim();
        setTranscript(fullText);

        // Check if the latest segment is final
        const lastResult = event.results[event.results.length - 1];
        if (lastResult && lastResult.isFinal && fullText.length > 0) {
          if (autoSubmitTimerRef.current) clearTimeout(autoSubmitTimerRef.current);
          autoSubmitTimerRef.current = setTimeout(() => {
            onSearch(fullText);
            onClose();
          }, 1400);
        }
      };

      recognition.onerror = (event: any) => {
        setIsListening(false);
        if (event.error === 'not-allowed' || event.error === 'permission-denied') {
          setErrorMessage(t('voice.micDenied'));
        } else if (event.error !== 'no-speech') {
          setErrorMessage(`Speech recognition error: ${event.error}. Please try again.`);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      try {
        recognition.start();
      } catch (err: any) {
        console.warn('SpeechRecognition start error:', err);
      }
    } catch (err: any) {
      console.warn('SpeechRecognition initialization error:', err);
      setIsListening(false);
      setErrorMessage(t('voice.micDenied'));
    }
  };

  const handleLanguageSwitch = (newLang: SupportedLanguage) => {
    setLanguage(newLang);
  };

  useEffect(() => {
    if (!isOpen) {
      stopListening();
      setTranscript('');
      setErrorMessage(null);
      return;
    }

    startListeningWithLang(language);

    return () => {
      stopListening();
    };
  }, [isOpen, language]);

  if (!isOpen) return null;

  const currentTag = getLanguageTag(language);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content max-w-md p-6 sm:p-8 text-center"
        onClick={e => e.stopPropagation()}
        style={{ borderRadius: '28px' }}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#788c81] hover:text-[#1b4332] rounded-full hover:bg-[#f3ede2] transition-colors"
          aria-label="Close voice search"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="mb-4">
          <span className="badge-pill bg-[#e8f5e9] text-[#2d6a4f] border border-[#b7e4c7] inline-flex items-center gap-1.5 mb-2.5 text-xs font-bold">
            <Volume2 size={13} />
            Voice Input: {currentTag}
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1b4332]">
            {t('voice.title')}
          </h2>
          <p className="text-xs sm:text-sm text-[#788c81] mt-1 leading-relaxed">
            Speak ingredients in your preferred language. Recognized text remains in your selected language without translation.
          </p>
        </div>

        {/* English / Tamil / Hindi Language Selector Pills */}
        <div className="flex items-center justify-center gap-2 mb-5 p-1.5 rounded-2xl bg-[#faf7f2] border border-[#ece6d8]">
          {supportedLanguages.map(l => (
            <button
              key={l.code}
              onClick={() => handleLanguageSwitch(l.code)}
              className={`flex-1 py-1.5 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                language === l.code
                  ? 'bg-[#1b4332] text-white shadow-sm scale-102'
                  : 'bg-white text-[#4a5c53] hover:text-[#1b4332] hover:bg-[#f0fdf4] border border-[#e2dbcb]'
              }`}
            >
              <span>{l.native}</span>
              <span className="text-[10px] opacity-75">({l.tag})</span>
              {language === l.code && <Check size={12} className="ml-0.5" />}
            </button>
          ))}
        </div>

        {/* Big Interactive Pulse Mic */}
        <div className="py-4 flex flex-col items-center justify-center">
          <button
            onClick={() => (isListening ? stopListening() : startListeningWithLang(language))}
            className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${
              isListening
                ? 'listening-pulse bg-[#e76f51] text-white shadow-xl scale-105'
                : 'bg-[#f3ede2] text-[#1b4332] hover:bg-[#ebd6b5]'
            }`}
            aria-label={isListening ? 'Stop listening' : 'Start listening'}
          >
            {isListening ? <Mic size={42} /> : <MicOff size={36} />}
          </button>

          {/* Sound Wave Animation Bars */}
          {isListening && (
            <div className="flex items-center gap-1.5 h-8 mt-5">
              <div className="wave-bar" />
              <div className="wave-bar" />
              <div className="wave-bar" />
              <div className="wave-bar" />
              <div className="wave-bar" />
            </div>
          )}

          <p className="text-sm font-semibold text-[#1b4332] mt-4 min-h-6">
            {isListening ? (
              <span className="text-[#2d6a4f] flex items-center gap-1.5 justify-center">
                <span className="w-2 h-2 rounded-full bg-[#2d6a4f] animate-ping" />
                Listening in {supportedLanguages.find(l => l.code === language)?.native}...
              </span>
            ) : (
              'Tap microphone to speak'
            )}
          </p>

          {/* Live Transcript Display in Native Script */}
          {transcript && (
            <div className="mt-4 p-4 rounded-2xl bg-[#f0fdf4] border border-[#b7e4c7] max-w-sm w-full text-center shadow-xs">
              <span className="text-[11px] font-bold text-[#2d6a4f] block uppercase tracking-wider mb-1">
                Recognized Spoken Text ({currentTag}):
              </span>
              <p className="text-base font-extrabold text-[#192720]">
                "{transcript}"
              </p>
            </div>
          )}

          {/* Error Message Display */}
          {errorMessage && (
            <div className="mt-4 p-3.5 rounded-2xl bg-[#ffebee] border border-[#ffcdd2] text-[#c62828] text-xs flex items-center gap-2 max-w-sm w-full text-left">
              <AlertCircle size={18} className="shrink-0" />
              <div className="flex-1">
                <span>{errorMessage}</span>
                <button
                  onClick={() => startListeningWithLang(language)}
                  className="block text-xs font-bold text-[#c62828] underline mt-1"
                >
                  Retry microphone
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3 pt-3 border-t border-[#f3ede2]">
          {transcript ? (
            <button
              onClick={() => {
                if (autoSubmitTimerRef.current) clearTimeout(autoSubmitTimerRef.current);
                onSearch(transcript);
                onClose();
              }}
              className="btn-primary text-xs sm:text-sm py-2.5 px-6 font-bold shadow-md"
            >
              <Sparkles size={15} />
              <span>Search for "{transcript}"</span>
            </button>
          ) : (
            <button
              onClick={onClose}
              className="btn-secondary text-xs sm:text-sm py-2 px-5 font-semibold"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
