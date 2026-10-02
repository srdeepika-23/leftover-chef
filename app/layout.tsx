import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import { I18nProvider } from '../lib/i18n';
import { AuthProvider } from '../lib/auth';
import { PantryProvider } from '../lib/pantry';
import { ShoppingProvider } from '../lib/shopping';
import { MealPlanProvider } from '../lib/mealplan';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1b4332',
};

export const metadata: Metadata = {
  title: 'Leftover Chef • Turn Kitchen Ingredients Into Delicious Meals',
  description:
    'Intelligent zero-waste recipe finder. Tell Leftover Chef what ingredients you have in your fridge, and discover delicious home-cooked meals right now.',
  applicationName: 'Leftover Chef',
  authors: [{ name: 'Leftover Chef Team' }],
  keywords: [
    'recipes',
    'leftover food',
    'recipe finder',
    'pantry recipes',
    'Indian cooking',
    'South Indian recipes',
    'zero food waste',
    'easy dinner',
  ],
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://leftoverchef.app',
    siteName: 'Leftover Chef',
    title: 'Leftover Chef • Smart Recipe Discovery',
    description: 'Find real recipes using only the ingredients already in your kitchen.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Leftover Chef',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leftover Chef',
    description: 'Turn ingredients into delicious recipes. Waste nothing.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍳</text></svg>" />
      </head>
      <body>
        <I18nProvider>
          <AuthProvider>
            <PantryProvider>
              <ShoppingProvider>
                <MealPlanProvider>
                  {children}
                </MealPlanProvider>
              </ShoppingProvider>
            </PantryProvider>
          </AuthProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
