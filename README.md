# Leftover Chef 🍳

**Leftover Chef** is a production-grade, public food discovery and smart recipe matching web application designed to eliminate food waste by intelligently finding dishes you can cook with the ingredients currently in your kitchen.

---

## 🌟 Core Features

### 1. 🔍 Smart Search & Transparent Ranking Engine
- **Intent Understanding**: Understands dishes, ingredients, meal types, cuisines, dietary requests, and negative constraints (e.g., *"potato snacks"*, *"without onion"*, *"high protein vegetarian"*).
- **Transparent Relevance Scoring**: Every recipe card displays honest reasons why it was matched:
  - *100% Ready to Cook* / *95% Ingredients Ready*
  - *Matches your search*
  - *Only 1 item missing: Coriander*
  - *Ready in 20 min*
  - *Vegetarian*
- **Related Alternatives**: If no exact matches are found, it offers closely related alternatives and suggestions to add small pantry staples.

### 2. 🌐 Multi-Language Architecture (English, தமிழ், हिन्दी)
- Full internationalization support across:
  - **English (`en`)**
  - **Tamil (`ta` - தமிழ்)**
  - **Hindi (`hi` - हिन्दी)**
- Complete localization of UI, navigation, recipe titles, descriptions, instructions, pantry, and error states.
- Persistent language switching accessible via the navbar, profile settings, and onboarding.

### 3. 🎙️ Real Voice Recognition (Web Speech API)
- Speech recognition tailored to the active language: `en-IN`, `ta-IN`, `hi-IN`.
- Real-time listening states, waveform audio visualizer, transcript feedback, and friendly fallbacks.

### 4. 📷 Smart Food & Fridge Scanner
- Browser Camera API (`navigator.mediaDevices.getUserMedia`) for live snapshot capture or photo upload.
- Visual ingredient detection with an editable review checklist before adding to pantry or searching dishes.

### 5. 🧊 Pantry & Expiry Tracking System
- Add, edit, remove, and track ingredients with units (`pcs`, `g`, `kg`, `cups`, `tbsp`, `ml`, `litres`).
- Expiry date monitoring with status badges: **Fresh**, **Expiring Soon** (<= 3 days), and **Expired**.
- 1-click **"Cook with Expiring Items"** recommendation banner.

### 6. 🧑‍🍳 Distraction-Free Cooking Mode
- Full-screen high-contrast step-by-step cooking guide.
- **Voice Readout (Text-To-Speech)** using browser speech synthesis in English, Tamil, or Hindi.
- Large legible typography, progress tracking, and celebratory confetti upon completion.

### 7. 📅 Weekly Meal Planner & Smart Shopping List
- **Meal Planner**: Monday to Sunday planner for Breakfast, Lunch, Dinner, and Snacks.
- **Shopping List**: 1-click *"Add missing ingredients from recipe to shopping list"* with checkboxes and custom items.

### 8. 🔐 Authentication & Profile Architecture
- **Dedicated Chef Login Page** (`/login`):
  - User ID / Username field
  - Password field with interactive Show/Hide password toggle
  - Secure cryptographic password hashing with SHA-256 and unique 16-byte random salt
  - Separate user accounts & user-specific profile sessions (e.g. `@deepika`, `@arun`, and new chef registrations)
  - Passwords are never stored or exposed in plain text
- Dual-mode authentication:
  - Credentials login with distinct User ID/Username
  - Supabase Auth with Google OAuth (`"Continue with Google"`) and Email/Password
  - Safe persistent local session storage with separate user identities
  - Custom profiles storing dietary tags, allergies, skill level, and favorite cuisines

### 9. 🍱 15 Curated Food Categories
- Clear organization into 15 food categories:
  - **Breakfast**, **Lunch**, **Dinner**, **Snacks**, **Tiffin**, **Rice Dishes**, **Curries**, **Vegetarian**, **Non-Vegetarian**, **Chinese**, **South Indian**, **North Indian**, **Desserts**, **Sweets**, **Healthy Food**
- Multi-category mapping (e.g., *Idli* $\to$ Breakfast, Tiffin, South Indian) with **zero-duplicate recipe rendering**
- In-category quick search and filtering

---

## 🏗️ Project Architecture

```
deepika.leftover/
├── app/
│   ├── layout.tsx            # App router root layout, SEO metadata, PWA viewport
│   ├── page.tsx              # Main dashboard, search results, tabs, and interactive modals
│   └── login/
│       └── page.tsx          # Dedicated user login & registration page
├── components/
│   ├── Navbar.tsx            # Top header with persistent i18n switcher & user profile
│   ├── MobileNav.tsx         # Mobile floating bottom bar with scan action
│   ├── HeroSection.tsx       # Rotating placeholder search bar, voice & scan triggers
│   ├── CategorySection.tsx   # Food categories exploration & zero-duplicate recipe cards
│   ├── LoginPageView.tsx     # Clean login & registration view with show/hide password
│   ├── RecipeCard.tsx        # Recipe card with transparent scoring reasons
│   ├── RecipeDetailModal.tsx # Full recipe modal (nutrition, allergens, missing items)
│   ├── CookingModeModal.tsx  # Distraction-free voice-assisted cooking view
│   ├── VoiceSearchModal.tsx  # Web Speech API voice search modal
│   ├── CameraScanModal.tsx   # Live camera snapshot & ingredient detector
│   ├── ExpiryBanner.tsx      # Expiring ingredients alert banner
│   ├── FilterDrawer.tsx      # Filter modal (Categories, Cuisines, Allergens, Time)
│   ├── PantryView.tsx        # Kitchen pantry inventory & quantity manager
│   ├── MealPlannerView.tsx   # Weekly calendar meal planner
│   ├── ShoppingListView.tsx  # Grocery list with missing ingredient importer
│   ├── AuthModal.tsx         # Authentication modal
│   └── UserProfileModal.tsx  # Chef preferences, dietary, allergy, and sign-out settings
├── lib/
│   ├── ai/                   # AI & NLP abstraction layer
│   ├── search/               # Multi-factor recipe matching, ranking, and categories
│   ├── i18n/                 # Multilingual context (en, ta, hi)
│   ├── auth/                 # Production authentication context & cryptographic security
│   ├── pantry/               # Pantry & expiry management context
│   ├── mealplan/             # Meal planning context
│   └── shopping/             # Shopping list context
├── data/
│   └── seedRecipes.ts        # 60 authentic realistic recipes with complete EN/TA/HI voice instructions
├── locales/
│   ├── en.json               # English translations
│   ├── ta.json               # Tamil translations
│   └── hi.json               # Hindi translations
├── styles/
│   └── globals.css           # Food-tech design system (deep green, warm cream, coral accent)
├── supabase/
│   └── schema.sql            # Complete PostgreSQL schema, RLS policies, and indexes
└── public/
    └── manifest.json         # PWA Web App manifest
```

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Build production bundle
npm run build

# 3. Start local server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your web browser.
