'use client';

import React, { useState } from 'react';
import { useAuth } from '../lib/auth';
import { useI18n } from '../lib/i18n';
import { X, Lock, Mail, User, AlertCircle, ArrowRight, ShieldCheck, Eye, EyeOff } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const {
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    signInWithCredentials,
    registerWithCredentials
  } = useAuth();
  const { t } = useI18n();

  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [usernameOrId, setUsernameOrId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === 'signin') {
        const identifier = usernameOrId.trim() || email.trim();
        const res = await signInWithCredentials(identifier, password);
        if (!res.success) {
          // If identifier contains @, also try email fallback
          if (identifier.includes('@')) {
            const emailRes = await signInWithEmail(identifier, password);
            if (!emailRes.success) {
              setError(res.error || emailRes.error || 'Failed to sign in. Please verify your credentials.');
            } else {
              onClose();
            }
          } else {
            setError(res.error || 'Invalid User ID / Username or password.');
          }
        } else {
          onClose();
        }
      } else {
        const username = usernameOrId.trim() || (email ? email.split('@')[0] : 'chef');
        const res = await registerWithCredentials(username, password, fullName || username, email);
        if (!res.success) {
          setError(res.error || 'Failed to create user account.');
        } else {
          onClose();
        }
      }
    } catch (err: any) {
      setError(err?.message || 'Authentication error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError(null);
    setLoading(true);
    try {
      await signInWithGoogle();
      onClose();
    } catch (e: any) {
      setError(e?.message || 'Google OAuth failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content max-w-md p-6 sm:p-8"
        onClick={e => e.stopPropagation()}
        style={{ borderRadius: '28px' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#788c81] hover:text-[#1b4332] rounded-full hover:bg-[#f3ede2]"
          aria-label="Close authentication"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] border border-[#d8f3dc] text-[#1b4332] flex items-center justify-center mx-auto mb-3">
            <Lock size={22} className="text-[#2d6a4f]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1b4332]">
            {mode === 'signin' ? t('auth.signInTitle') : t('auth.signUpTitle')}
          </h2>
          <p className="text-xs text-[#788c81] mt-1">
            Save your pantry, favorite recipes, and weekly meal plans.
          </p>
        </div>

        {/* OAuth: Continue with Google */}
        <div className="mb-5">
          <button
            type="button"
            onClick={handleGoogleAuth}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-2xl border border-[#e2dbcb] bg-white hover:bg-[#faf7f2] font-semibold text-xs sm:text-sm text-[#192720] shadow-sm transition-all"
          >
            {/* Google G Logo SVG */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.96 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>{t('auth.google')}</span>
          </button>
        </div>

        <div className="relative flex items-center justify-center mb-5">
          <div className="border-t border-[#ece6d8] w-full" />
          <span className="bg-white px-3 text-[11px] font-semibold text-[#788c81] absolute">
            {t('auth.or')}
          </span>
        </div>

        {/* Credential Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'signup' ? (
            <>
              <div>
                <label className="text-xs font-bold text-[#4a5c53] block mb-1">
                  User ID / Username
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-3 text-[#788c81]" />
                  <input
                    type="text"
                    required
                    value={usernameOrId}
                    onChange={e => setUsernameOrId(e.target.value)}
                    placeholder="e.g. chef_priya"
                    className="w-full pl-9 pr-3 py-2 bg-[#faf7f2] border border-[#e2dbcb] rounded-xl text-xs sm:text-sm text-[#192720] outline-none focus:border-[#52b788]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#4a5c53] block mb-1">
                  {t('auth.name')}
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-3 text-[#788c81]" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="Deepika"
                    className="w-full pl-9 pr-3 py-2 bg-[#faf7f2] border border-[#e2dbcb] rounded-xl text-xs sm:text-sm text-[#192720] outline-none focus:border-[#52b788]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#4a5c53] block mb-1">
                  {t('auth.email')} (Optional)
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-3 text-[#788c81]" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="chef@example.com"
                    className="w-full pl-9 pr-3 py-2 bg-[#faf7f2] border border-[#e2dbcb] rounded-xl text-xs sm:text-sm text-[#192720] outline-none focus:border-[#52b788]"
                  />
                </div>
              </div>
            </>
          ) : (
            <div>
              <label className="text-xs font-bold text-[#4a5c53] block mb-1">
                User ID / Username
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-3 text-[#788c81]" />
                <input
                  type="text"
                  required
                  value={usernameOrId}
                  onChange={e => setUsernameOrId(e.target.value)}
                  placeholder="e.g. deepika or chef_deepika"
                  className="w-full pl-9 pr-3 py-2 bg-[#faf7f2] border border-[#e2dbcb] rounded-xl text-xs sm:text-sm text-[#192720] outline-none focus:border-[#52b788]"
                />
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-[#4a5c53]">
                {t('auth.password')}
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[11px] font-semibold text-[#2d6a4f] hover:underline flex items-center gap-1"
              >
                {showPassword ? <EyeOff size={13} /> : <Eye size={13} />}
                <span>{showPassword ? 'Hide password' : 'Show password'}</span>
              </button>
            </div>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-3 text-[#788c81]" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                minLength={6}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-10 py-2 bg-[#faf7f2] border border-[#e2dbcb] rounded-xl text-xs sm:text-sm text-[#192720] outline-none focus:border-[#52b788]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-[#788c81] hover:text-[#1b4332]"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-[#ffebee] border border-[#ffcdd2] text-[#c62828] text-xs flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center text-xs sm:text-sm py-2.5 font-bold shadow-md"
          >
            <span>{mode === 'signin' ? t('auth.submitSignIn') : t('auth.submitSignUp')}</span>
            <ArrowRight size={15} />
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => {
              setError(null);
              setMode(mode === 'signin' ? 'signup' : 'signin');
            }}
            className="text-xs font-bold text-[#2d6a4f] hover:underline"
          >
            {mode === 'signin' ? t('auth.dontHaveAccount') : t('auth.alreadyHaveAccount')}
          </button>
        </div>

        {/* Security Rule Assurance */}
        <div className="mt-4 pt-3 border-t border-[#f3ede2] flex items-center justify-center gap-1.5 text-[11px] text-[#788c81]">
          <ShieldCheck size={14} className="text-[#2d6a4f]" />
          <span>Secure authentication • Passwords are never exposed</span>
        </div>
      </div>
    </div>
  );
};
