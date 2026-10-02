'use client';

import React, { useState } from 'react';
import { useAuth } from '../lib/auth';
import { useI18n } from '../lib/i18n';
import {
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  UtensilsCrossed,
  Sparkles,
  LogOut,
  Mail,
} from 'lucide-react';

interface LoginPageViewProps {
  onSuccess?: () => void;
  onNavigateHome?: () => void;
}

export const LoginPageView: React.FC<LoginPageViewProps> = ({
  onSuccess,
  onNavigateHome,
}) => {
  const {
    user,
    signInWithCredentials,
    registerWithCredentials,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    signOut,
  } = useAuth();
  const { language, t } = useI18n();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [usernameOrId, setUsernameOrId] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGoogleAuth = async () => {
    setError(null);
    setLoading(true);
    try {
      await signInWithGoogle();
      setSuccessNotice('Signed in with Google! Redirecting to Leftover Chef...');
      setTimeout(() => {
        if (onSuccess) onSuccess();
        else if (onNavigateHome) onNavigateHome();
      }, 700);
    } catch (err: any) {
      setError(err?.message || 'Google sign in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessNotice(null);
    setLoading(true);

    try {
      if (mode === 'login') {
        const identifier = usernameOrId.trim();
        let res = await signInWithCredentials(identifier, password);
        // If not found by username/id and looks like an email, try email signin
        if (!res.success && identifier.includes('@')) {
          const emailRes = await signInWithEmail(identifier, password);
          if (emailRes.success) {
            res = { success: true };
          } else {
            res = { success: false, error: emailRes.error || res.error };
          }
        }
        if (!res.success) {
          setError(res.error || 'Invalid User ID / Username / Email or password. Please try again.');
        } else {
          setSuccessNotice('Successfully logged in! Welcome back.');
          setTimeout(() => {
            if (onSuccess) onSuccess();
            else if (onNavigateHome) onNavigateHome();
          }, 800);
        }
      } else {
        let res = await registerWithCredentials(usernameOrId, password, fullName, email);
        if (!res.success && email) {
          const emailRes = await signUpWithEmail(email, password, fullName);
          if (emailRes.success) {
            res = { success: true };
          }
        }
        if (!res.success) {
          setError(res.error || 'Failed to create user account. Please choose a different username.');
        } else {
          setSuccessNotice(`Account created successfully for @${usernameOrId.trim()}! Logged in.`);
          setTimeout(() => {
            if (onSuccess) onSuccess();
            else if (onNavigateHome) onNavigateHome();
          }, 900);
        }
      }
    } catch (err: any) {
      setError(err?.message || 'Authentication error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickFill = (u: string, p: string) => {
    setUsernameOrId(u);
    setPassword(p);
    setError(null);
  };

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background Culinary Visuals (Framing Sides & Edges) */}
      <div className="login-bg-atmosphere" aria-hidden="true">
        {/* Subtle culinary background texture */}
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="login-bg-texture"
        />

        {/* Ambient fresh herb green glow (top-left) */}
        <div className="login-ambient-green" />

        {/* Ambient warm spice terracotta glow (bottom-right) */}
        <div className="login-ambient-orange" />

        {/* Left Side Culinary Frame: Crisp Kitchen Produce, Vine Tomatoes, Fresh Herbs */}
        <img
          src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1000&q=80"
          alt=""
          className="login-edge-left"
        />

        {/* Upper-Left Layered Accent: Tomatoes & herbs */}
        <img
          src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=600&q=80"
          alt=""
          className="login-edge-floating login-float-left-1"
        />

        {/* Lower-Left Layered Accent: Crisp kitchen produce & greens */}
        <img
          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
          alt=""
          className="login-edge-floating login-float-left-2"
        />

        {/* Right Side Culinary Frame: Aromatic Cooking Spices, Chilli, Garlic, Spice Bowls */}
        <img
          src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1000&q=80"
          alt=""
          className="login-edge-right"
        />

        {/* Upper-Right Layered Accent: Vibrant Indian spices & turmeric */}
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
          alt=""
          className="login-edge-floating login-float-right-1"
        />

        {/* Lower-Right Layered Accent: Garlic bulbs & chillies */}
        <img
          src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=600&q=80"
          alt=""
          className="login-edge-floating login-float-right-2"
        />

        {/* Soft dark culinary vignette overlay protecting center readability */}
        <div className="login-center-vignette" />
      </div>

      {/* Center Interactive Content Area */}
      <div className="relative z-10 w-full max-w-[490px] mx-auto px-4 py-4 sm:py-6">
        {/* Header / Leftover Chef Branding */}
        <div className="text-center mb-6">
          <div
            onClick={onNavigateHome}
            className="inline-flex items-center gap-3 mb-3 cursor-pointer select-none group transition-transform duration-200 hover:scale-102"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                boxShadow: '0 8px 24px rgba(16, 185, 129, 0.35)',
              }}
            >
              <UtensilsCrossed size={22} className="text-[#ecfdf5]" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white block leading-none">
                LEFTOVER CHEF
              </span>
              <span className="text-[11px] font-bold text-[#10b981] tracking-wider block mt-1">
                SMART RECIPE FINDER & KITCHEN ASSISTANT
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-sm sm:text-base font-medium text-[#d1d5db] max-w-sm mx-auto mb-1">
            Turn your leftovers into delicious meals.
          </p>

          <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-2">
            {mode === 'login' ? 'Chef Login' : 'Create Chef Account'}
          </h1>
          <p className="text-xs sm:text-sm text-[#9ca3af] mt-1 max-w-sm mx-auto leading-relaxed">
            {mode === 'login'
              ? 'Sign in with your User ID, Username, or Email to access your kitchen pantry and personalized recipes.'
              : 'Register your personalized chef account to save ingredients, meal plans, and favorite recipes.'}
          </p>
        </div>

        {/* Main Glassmorphism Form Card */}
        <div className="login-card-container">
          {/* Toggle Mode Tabs */}
          <div className="login-mode-tabs">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError(null);
              }}
              className={`login-mode-tab ${mode === 'login' ? 'active' : ''}`}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('register');
                setError(null);
              }}
              className={`login-mode-tab ${mode === 'register' ? 'active' : ''}`}
            >
              Create New Account
            </button>
          </div>

          {/* Google OAuth Login Button */}
          <button
            type="button"
            onClick={handleGoogleAuth}
            disabled={loading}
            className="login-google-button"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="login-divider-row">
            <div className="login-divider-line" />
            <span className="login-divider-label">or with credentials / email</span>
            <div className="login-divider-line" />
          </div>

          {/* Error Notice */}
          {error && (
            <div
              style={{
                marginBottom: '16px',
                padding: '12px 14px',
                borderRadius: '12px',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.38)',
                color: '#fca5a5',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.8125rem',
                fontWeight: 500,
              }}
            >
              <AlertCircle size={18} style={{ flexShrink: 0, color: '#f87171' }} />
              <span>{error}</span>
            </div>
          )}

          {/* Success Notice */}
          {successNotice && (
            <div
              style={{
                marginBottom: '16px',
                padding: '12px 14px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.38)',
                color: '#86efac',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.8125rem',
                fontWeight: 600,
              }}
            >
              <CheckCircle2 size={18} style={{ flexShrink: 0, color: '#34d399' }} />
              <span>{successNotice}</span>
            </div>
          )}

          {/* Authentication Form */}
          <form onSubmit={handleSubmit}>
            {/* User ID / Username / Email Field */}
            <div className="login-field-group">
              <label className="login-field-label">
                User ID / Username / Email
              </label>
              <div className="login-field-input-box">
                <span className="login-field-icon">
                  <User size={18} />
                </span>
                <input
                  id="username-or-id-input"
                  name="usernameOrId"
                  type="text"
                  required
                  value={usernameOrId}
                  onChange={e => setUsernameOrId(e.target.value)}
                  placeholder="Enter User ID, Username, or Email"
                  className="login-field-input"
                />
              </div>
              <p className="login-field-hint">
                Case-insensitive login name, unique User ID, or registered email.
              </p>
            </div>

            {/* Full Name Field (Register Mode Only) */}
            {mode === 'register' && (
              <div className="login-field-group">
                <label className="login-field-label">
                  Full Name / Chef Alias
                </label>
                <div className="login-field-input-box">
                  <span className="login-field-icon">
                    <Sparkles size={18} />
                  </span>
                  <input
                    id="fullname-input"
                    name="fullName"
                    type="text"
                    required={mode === 'register'}
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="e.g. Deepika Sundaram"
                    className="login-field-input"
                  />
                </div>
              </div>
            )}

            {/* Email Field (Optional, Register Mode) */}
            {mode === 'register' && (
              <div className="login-field-group">
                <label className="login-field-label">
                  Email Address (Optional)
                </label>
                <div className="login-field-input-box">
                  <span className="login-field-icon">
                    <Mail size={18} />
                  </span>
                  <input
                    id="email-input"
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="youremail@example.com"
                    className="login-field-input"
                  />
                </div>
              </div>
            )}

            {/* Password Field with Show/Hide Password */}
            <div className="login-field-group">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label className="login-field-label" style={{ marginBottom: 0 }}>
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    fontSize: '0.75rem',
                    color: '#10b981',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  <span>{showPassword ? 'Hide' : 'Show password'}</span>
                </button>
              </div>
              <div className="login-field-input-box">
                <span className="login-field-icon">
                  <Lock size={18} />
                </span>
                <input
                  id="password-input"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your password (min 6 chars)"
                  className="login-field-input login-field-input-toggle"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="login-eye-toggle"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button with Warm Orange & Green Accent Gradient */}
            <div style={{ paddingTop: '8px' }}>
              <button
                id="login-submit-btn"
                type="submit"
                disabled={loading}
                className="login-btn-gradient"
              >
                <span>{loading ? 'Authenticating...' : mode === 'login' ? 'Log In to Leftover Chef' : 'Create Chef Account'}</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </form>

          {/* Quick Demo Credentials */}
          <div className="login-quick-section">
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                color: '#9ca3af',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '8px',
                textAlign: 'center',
              }}
            >
              Quick Test Accounts:
            </span>
            <div className="login-quick-grid">
              <button
                type="button"
                onClick={() => handleQuickFill('deepika', 'password123')}
                className="login-quick-card"
              >
                <span className="login-quick-name">Chef Deepika</span>
                <span className="login-quick-hint">deepika / password123</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickFill('arun', 'password123')}
                className="login-quick-card"
              >
                <span className="login-quick-name">Arun Kumar</span>
                <span className="login-quick-hint">arun / password123</span>
              </button>
            </div>
          </div>

          {/* Password Security Assurance Note */}
          <div className="login-security-notice">
            <ShieldCheck size={18} style={{ flexShrink: 0, color: '#10b981' }} />
            <span>
              Passwords are encrypted with SHA-256 and cryptographic salting. Plain text passwords are never stored or exposed.
            </span>
          </div>
        </div>

        {/* Current Active User Session Card */}
        {user && (
          <div className="login-session-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.fullName}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '9999px',
                    objectFit: 'cover',
                    border: '2px solid #10b981',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1rem',
                  }}
                >
                  {user.fullName ? user.fullName.charAt(0).toUpperCase() : 'C'}
                </div>
              )}
              <div>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#10b981',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    display: 'block',
                  }}
                >
                  Active User Session
                </span>
                <span
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    display: 'block',
                  }}
                >
                  {user.fullName}
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: '#9ca3af',
                    display: 'block',
                  }}
                >
                  User ID: <code style={{ color: '#34d399', fontWeight: 600 }}>{user.id}</code>
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                onClick={onNavigateHome || onSuccess}
                style={{
                  padding: '8px 14px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: 'none',
                  boxShadow: '0 4px 10px rgba(16, 185, 129, 0.3)',
                }}
              >
                Go to Kitchen →
              </button>
              <button
                type="button"
                onClick={signOut}
                style={{
                  padding: '8px 10px',
                  borderRadius: '10px',
                  background: 'rgba(239, 68, 68, 0.12)',
                  color: '#f87171',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <LogOut size={13} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
