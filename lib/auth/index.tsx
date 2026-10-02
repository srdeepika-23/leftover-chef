'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, SupportedLanguage, DietaryTag, Allergen, Cuisine } from '../../types';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import {
  authenticateUser,
  registerUser,
  initDefaultAccounts,
  getStoredAccounts
} from './security';

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  signInWithCredentials: (usernameOrId: string, password: string) => Promise<{ success: boolean; error?: string }>;
  registerWithCredentials: (username: string, password: string, fullName: string, email?: string) => Promise<{ success: boolean; error?: string }>;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  signUpWithEmail: (email: string, pass: string, fullName: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  toggleFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const DEFAULT_PROFILE: UserProfile = {
  id: 'guest-chef-01',
  email: 'guest@leftoverchef.app',
  fullName: 'Guest Chef',
  language: 'en',
  dietaryPreferences: ['Vegetarian'],
  allergies: [],
  favoriteCuisines: ['South Indian', 'North Indian', 'Italian'],
  cookingSkill: 'Intermediate',
  favoriteRecipeIds: ['rec-01', 'rec-04', 'rec-07', 'rec-11'],
  createdAt: new Date().toISOString(),
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);

  useEffect(() => {
    // Check if Supabase keys exist in env
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const client = createClient(supabaseUrl, supabaseKey);
        setSupabase(client);

        // Check active session from Supabase
        client.auth.getSession().then(({ data: { session } }) => {
          if (session?.user) {
            setUser({
              id: session.user.id,
              email: session.user.email || '',
              fullName: session.user.user_metadata?.full_name || 'Leftover Chef User',
              language: 'en',
              dietaryPreferences: [],
              allergies: [],
              favoriteCuisines: [],
              cookingSkill: 'Intermediate',
              favoriteRecipeIds: [],
              createdAt: session.user.created_at,
            });
          } else {
            loadLocalUser();
          }
          setIsLoading(false);
        });
        return;
      } catch (e) {
        console.warn('Supabase initialization fallback:', e);
      }
    }

    loadLocalUser();
    setIsLoading(false);
  }, []);

  const loadLocalUser = async () => {
    await initDefaultAccounts();
    const saved = localStorage.getItem('leftover_chef_user_session');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.id && parsed.id !== 'guest-chef-01') {
          setUser(parsed);
          return;
        }
      } catch (e) {
        console.error('Failed to parse stored user profile', e);
      }
    }
    // No active user session - do NOT automatically use guest-chef-01
    setUser(null);
    localStorage.removeItem('leftover_chef_user_session');
  };

  const signInWithCredentials = async (
    usernameOrId: string,
    pass: string
  ): Promise<{ success: boolean; error?: string }> => {
    const res = await authenticateUser(usernameOrId, pass);
    if (!res.success || !res.user) {
      return { success: false, error: res.error || 'Authentication failed' };
    }
    setUser(res.user);
    return { success: true };
  };

  const registerWithCredentials = async (
    username: string,
    pass: string,
    fullName: string,
    email?: string
  ): Promise<{ success: boolean; error?: string }> => {
    const res = await registerUser(username, pass, fullName, email);
    if (!res.success || !res.user) {
      return { success: false, error: res.error || 'Registration failed' };
    }
    setUser(res.user);
    return { success: true };
  };

  const signInWithGoogle = async () => {
    if (supabase) {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: typeof window !== 'undefined' ? window.location.origin : '',
        },
      });
      return;
    }

    // Local secure OAuth emulation
    const googleProfile: UserProfile = {
      id: 'google-user-' + Date.now(),
      email: 'chef.demo@google.com',
      fullName: 'Google User (Deepika)',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      language: (localStorage.getItem('leftover_chef_lang') as SupportedLanguage) || 'en',
      dietaryPreferences: ['Vegetarian'],
      allergies: [],
      favoriteCuisines: ['South Indian', 'Italian'],
      cookingSkill: 'Intermediate',
      favoriteRecipeIds: ['rec-01', 'rec-04', 'rec-11'],
      createdAt: new Date().toISOString(),
    };
    setUser(googleProfile);
    localStorage.setItem('leftover_chef_user_session', JSON.stringify(googleProfile));
  };

  const signInWithEmail = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    if (supabase) {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password: pass });
      if (error) return { success: false, error: error.message };
      if (data.user) {
        setUser({
          id: data.user.id,
          email: data.user.email || email,
          fullName: data.user.user_metadata?.full_name || email.split('@')[0],
          language: 'en',
          dietaryPreferences: [],
          allergies: [],
          favoriteCuisines: [],
          cookingSkill: 'Intermediate',
          favoriteRecipeIds: [],
          createdAt: data.user.created_at,
        });
      }
      return { success: true };
    }

    if (!email || !pass || pass.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters long.' };
    }

    const emailProfile: UserProfile = {
      id: 'usr-' + Date.now(),
      email,
      fullName: email.split('@')[0],
      language: (localStorage.getItem('leftover_chef_lang') as SupportedLanguage) || 'en',
      dietaryPreferences: ['Vegetarian'],
      allergies: [],
      favoriteCuisines: ['South Indian', 'North Indian'],
      cookingSkill: 'Intermediate',
      favoriteRecipeIds: ['rec-01', 'rec-04'],
      createdAt: new Date().toISOString(),
    };
    setUser(emailProfile);
    localStorage.setItem('leftover_chef_user_session', JSON.stringify(emailProfile));
    return { success: true };
  };

  const signUpWithEmail = async (email: string, pass: string, fullName: string): Promise<{ success: boolean; error?: string }> => {
    if (supabase) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password: pass,
        options: { data: { full_name: fullName } },
      });
      if (error) return { success: false, error: error.message };
      return { success: true };
    }

    if (!email || !pass || pass.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters.' };
    }

    const newProfile: UserProfile = {
      id: 'usr-' + Date.now(),
      email,
      fullName: fullName || email.split('@')[0],
      language: (localStorage.getItem('leftover_chef_lang') as SupportedLanguage) || 'en',
      dietaryPreferences: [],
      allergies: [],
      favoriteCuisines: [],
      cookingSkill: 'Beginner',
      favoriteRecipeIds: [],
      createdAt: new Date().toISOString(),
    };
    setUser(newProfile);
    localStorage.setItem('leftover_chef_user_session', JSON.stringify(newProfile));
    return { success: true };
  };

  const signOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
    localStorage.removeItem('leftover_chef_user_session');
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return;
    const updated = { ...user, ...updates };
    setUser(updated);
    localStorage.setItem('leftover_chef_user_session', JSON.stringify(updated));
  };

  const toggleFavorite = (recipeId: string) => {
    if (!user) return;
    const isFav = user.favoriteRecipeIds.includes(recipeId);
    const newFavorites = isFav
      ? user.favoriteRecipeIds.filter(id => id !== recipeId)
      : [...user.favoriteRecipeIds, recipeId];

    updateProfile({ favoriteRecipeIds: newFavorites });
  };

  const isFavorite = (recipeId: string): boolean => {
    return Boolean(user?.favoriteRecipeIds.includes(recipeId));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signInWithCredentials,
        registerWithCredentials,
        signInWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        signOut,
        updateProfile,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
