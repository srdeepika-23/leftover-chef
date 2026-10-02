'use client';

import { UserProfile } from '../../types';

export interface StoredAccount {
  id: string; // Unique User ID (e.g. usr_deepika or usr_1727...)
  username: string; // Username for login (case-insensitive)
  passwordHash: string; // Cryptographic SHA-256 hash (never plain text)
  salt: string; // Unique cryptographic salt
  fullName: string;
  email: string;
  avatarUrl?: string;
  profile: UserProfile;
  createdAt: string;
}

const ACCOUNTS_STORAGE_KEY = 'leftover_chef_accounts';
const SESSION_STORAGE_KEY = 'leftover_chef_user_session';

/**
 * Generates a random cryptographic salt.
 */
export function generateSalt(): string {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    const bytes = new Uint8Array(16);
    window.crypto.getRandomValues(bytes);
    return Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
  }
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Computes SHA-256 hash of password + salt using browser Web Crypto API.
 * Passwords are never stored in plain text.
 */
export async function hashPassword(password: string, salt: string): Promise<string> {
  const text = `${salt}:${password}`;
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
  // Fallback simple hash for non-browser/test environments
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return 'fallback_' + Math.abs(hash).toString(16);
}

/**
 * Retrieves all registered user accounts from persistent storage.
 */
export function getStoredAccounts(): StoredAccount[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error('Failed to load accounts from storage', e);
  }
  return [];
}

/**
 * Saves all user accounts to persistent storage.
 */
export function saveStoredAccounts(accounts: StoredAccount[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
  } catch (e) {
    console.error('Failed to save accounts to storage', e);
  }
}

/**
 * Seeds default demonstration accounts with hashed passwords if storage is empty.
 * Each user has their own distinct identity, User ID, and hashed password.
 */
export async function initDefaultAccounts(): Promise<void> {
  if (typeof window === 'undefined') return;
  const existing = getStoredAccounts();
  if (existing.length > 0) return;

  const salt1 = generateSalt();
  const hash1 = await hashPassword('password123', salt1);

  const salt2 = generateSalt();
  const hash2 = await hashPassword('password123', salt2);

  const defaultAccounts: StoredAccount[] = [
    {
      id: 'chef_deepika',
      username: 'deepika',
      passwordHash: hash1,
      salt: salt1,
      fullName: 'Chef Deepika',
      email: 'deepika@leftoverchef.app',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      createdAt: new Date().toISOString(),
      profile: {
        id: 'chef_deepika',
        username: 'deepika',
        email: 'deepika@leftoverchef.app',
        fullName: 'Chef Deepika',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        language: 'ta',
        dietaryPreferences: ['Vegetarian', 'Healthy food'],
        allergies: [],
        favoriteCuisines: ['South Indian', 'North Indian'],
        cookingSkill: 'Advanced',
        favoriteRecipeIds: ['rec-01', 'rec-04', 'rec-53', 'rec-59'],
        createdAt: new Date().toISOString(),
      },
    },
    {
      id: 'chef_arun',
      username: 'arun',
      passwordHash: hash2,
      salt: salt2,
      fullName: 'Arun Kumar',
      email: 'arun@leftoverchef.app',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      createdAt: new Date().toISOString(),
      profile: {
        id: 'chef_arun',
        username: 'arun',
        email: 'arun@leftoverchef.app',
        fullName: 'Arun Kumar',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        language: 'en',
        dietaryPreferences: ['High Protein'],
        allergies: [],
        favoriteCuisines: ['South Indian', 'Asian'],
        cookingSkill: 'Intermediate',
        favoriteRecipeIds: ['rec-02', 'rec-95', 'rec-96'],
        createdAt: new Date().toISOString(),
      },
    },
  ];

  saveStoredAccounts(defaultAccounts);
}

/**
 * Authenticates a user by User ID or Username and Password.
 * Securely verifies password hash using salt. Never stores or displays plain text passwords.
 */
export async function authenticateUser(
  usernameOrId: string,
  plainPassword: string
): Promise<{ success: boolean; user?: UserProfile; error?: string }> {
  await initDefaultAccounts();

  const query = usernameOrId.trim();
  if (!query) {
    return { success: false, error: 'Please enter your User ID or Username.' };
  }
  if (!plainPassword) {
    return { success: false, error: 'Please enter your password.' };
  }

  const accounts = getStoredAccounts();
  const queryLower = query.toLowerCase();

  // Find by username (case-insensitive) or exact User ID
  const account = accounts.find(
    acc => acc.username.toLowerCase() === queryLower || acc.id.toLowerCase() === queryLower
  );

  if (!account) {
    return { success: false, error: 'No account found with this User ID or Username.' };
  }

  // Verify hash
  const computedHash = await hashPassword(plainPassword, account.salt);
  if (computedHash !== account.passwordHash) {
    return { success: false, error: 'Incorrect password. Please try again.' };
  }

  // Store active session
  if (typeof window !== 'undefined') {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(account.profile));
  }

  return { success: true, user: account.profile };
}

/**
 * Registers a new unique user account with securely hashed password and custom User ID.
 */
export async function registerUser(
  username: string,
  plainPassword: string,
  fullName: string,
  email?: string
): Promise<{ success: boolean; user?: UserProfile; error?: string }> {
  await initDefaultAccounts();

  const cleanUsername = username.trim().toLowerCase().replace(/\s+/g, '_');
  if (!cleanUsername || cleanUsername.length < 3) {
    return { success: false, error: 'Username must be at least 3 characters long.' };
  }

  if (!plainPassword || plainPassword.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters long.' };
  }

  const accounts = getStoredAccounts();
  const exists = accounts.some(
    acc => acc.username.toLowerCase() === cleanUsername || acc.id.toLowerCase() === cleanUsername
  );

  if (exists) {
    return { success: false, error: `The username "${cleanUsername}" is already taken. Please choose another.` };
  }

  const salt = generateSalt();
  const passwordHash = await hashPassword(plainPassword, salt);
  const userId = 'usr_' + cleanUsername;
  const userEmail = email?.trim() || `${cleanUsername}@leftoverchef.user`;
  const displayName = fullName.trim() || username.trim();

  const newProfile: UserProfile = {
    id: userId,
    username: cleanUsername,
    email: userEmail,
    fullName: displayName,
    language: (typeof window !== 'undefined' && localStorage.getItem('leftover_chef_lang') as any) || 'en',
    dietaryPreferences: [],
    allergies: [],
    favoriteCuisines: ['South Indian'],
    cookingSkill: 'Beginner',
    favoriteRecipeIds: [],
    createdAt: new Date().toISOString(),
  };

  const newAccount: StoredAccount = {
    id: userId,
    username: cleanUsername,
    passwordHash,
    salt,
    fullName: displayName,
    email: userEmail,
    profile: newProfile,
    createdAt: new Date().toISOString(),
  };

  accounts.push(newAccount);
  saveStoredAccounts(accounts);

  if (typeof window !== 'undefined') {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(newProfile));
  }

  return { success: true, user: newProfile };
}
