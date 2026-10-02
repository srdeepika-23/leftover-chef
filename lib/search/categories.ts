import { Recipe, AppFoodCategory } from '../../types';

export interface CategoryMeta {
  id: AppFoodCategory;
  name: string;
  nameTa: string;
  nameHi: string;
  icon: string;
  description: string;
  gradient: string;
}

export const APP_CATEGORIES: CategoryMeta[] = [
  {
    id: 'Breakfast',
    name: 'Breakfast',
    nameTa: 'காலை உணவு',
    nameHi: 'नाश्ता',
    icon: '🥞',
    description: 'Crispy dosas, fluffy idlis, poha & wholesome morning starters',
    gradient: 'from-[#ffedd5] to-[#fed7aa]',
  },
  {
    id: 'Lunch',
    name: 'Lunch',
    nameTa: 'மதிய உணவு',
    nameHi: 'दोपहर का खाना',
    icon: '🍛',
    description: 'Hearty gravies, full meals, rice varieties & curries',
    gradient: 'from-[#dcfce7] to-[#bbf7d0]',
  },
  {
    id: 'Dinner',
    name: 'Dinner',
    nameTa: 'இரவு உணவு',
    nameHi: 'रात का खाना',
    icon: '🍲',
    description: 'Light tiffins, comforting rotis, dal & soothing dinners',
    gradient: 'from-[#e0e7ff] to-[#c7d2fe]',
  },
  {
    id: 'Snacks',
    name: 'Snacks',
    nameTa: 'சிற்றுண்டி / ஸ்நாக்ஸ்',
    nameHi: 'स्नैक्स',
    icon: '🥟',
    description: 'Crunchy pakoras, bondas, samosas & evening tea companions',
    gradient: 'from-[#fef3c7] to-[#fde68a]',
  },
  {
    id: 'Tiffin',
    name: 'Tiffin',
    nameTa: 'டிபன் வகைகள்',
    nameHi: 'टिफिन रेसिपीज',
    icon: '🫓',
    description: 'Authentic idli, dosa, uthappam, paniyaram, upma & poori',
    gradient: 'from-[#fae8ff] to-[#f5d0fe]',
  },
  {
    id: 'Rice Dishes',
    name: 'Rice Dishes',
    nameTa: 'சாத வகைகள்',
    nameHi: 'चावल के व्यंजन',
    icon: '🍚',
    description: 'Fragrant biryanis, pulaos, curd rice, lemon rice & fried rice',
    gradient: 'from-[#ecfccb] to-[#d9f99d]',
  },
  {
    id: 'Curries',
    name: 'Curries',
    nameTa: 'குழம்பு & கறி வகைகள்',
    nameHi: 'करी और ग्रेवी',
    icon: '🥘',
    description: 'Rich sambar, vatha kuzhambu, paneer gravy, salna & kurma',
    gradient: 'from-[#ffe4e6] to-[#fecdd3]',
  },
  {
    id: 'Vegetarian',
    name: 'Vegetarian',
    nameTa: 'சைவ உணவுகள்',
    nameHi: 'शाकाहारी',
    icon: '🥦',
    description: '100% pure vegetarian, vegetable & dairy delights',
    gradient: 'from-[#d1fae5] to-[#a7f3d0]',
  },
  {
    id: 'Non-Vegetarian',
    name: 'Non-Vegetarian',
    nameTa: 'அசைவ உணவுகள்',
    nameHi: 'माँसाहारी',
    icon: '🍗',
    description: 'Authentic chicken sukka, mutton biryani, fish curry & eggs',
    gradient: 'from-[#fee2e2] to-[#fca5a5]',
  },
  {
    id: 'Chinese',
    name: 'Chinese',
    nameTa: 'சைனீஸ் உணவுகள்',
    nameHi: 'चाइनीज डिशेज',
    icon: '🥢',
    description: 'Wok-tossed veg fried rice, hakka noodles & stir fries',
    gradient: 'from-[#ffedd5] to-[#fed7aa]',
  },
  {
    id: 'South Indian',
    name: 'South Indian',
    nameTa: 'தென்னிந்திய உணவுகள்',
    nameHi: 'साउथ इंडियन',
    icon: '🥥',
    description: 'Tamil Nadu, Kerala & Chettinad traditional heritage recipes',
    gradient: 'from-[#ccfbf1] to-[#99f6e4]',
  },
  {
    id: 'North Indian',
    name: 'North Indian',
    nameTa: 'வட இந்திய உணவுகள்',
    nameHi: 'नॉर्थ इंडियन',
    icon: '🫓',
    description: 'Paneer butter masala, chole bhature, dal makhani & rotis',
    gradient: 'from-[#fef9c3] to-[#fef08a]',
  },
  {
    id: 'Desserts',
    name: 'Desserts',
    nameTa: 'இனிப்புகள் (டெசர்ட்)',
    nameHi: 'डेसर्ट',
    icon: '🍨',
    description: 'Paal payasam, rava kesari, gulab jamun, halwa & treats',
    gradient: 'from-[#fce7f3] to-[#fbcfe8]',
  },
  {
    id: 'Sweets',
    name: 'Sweets',
    nameTa: 'பாரம்பரிய இனிப்புகள்',
    nameHi: 'पारंपरिक मिठाइयाँ',
    icon: '🍯',
    description: 'Traditional Indian festive sweets & milk puddings',
    gradient: 'from-[#fff7ed] to-[#ffedd5]',
  },
  {
    id: 'Healthy Food',
    name: 'Healthy Food',
    nameTa: 'ஆரோக்கிய உணவுகள்',
    nameHi: 'पौष्टिक आहार',
    icon: '🥗',
    description: 'Nutrient-rich, high-fiber, low-calorie mindful cooking',
    gradient: 'from-[#e0f2fe] to-[#bae6fd]',
  },
];

/**
 * Returns all categories a recipe belongs to.
 * A recipe can belong to multiple categories without creating duplicates.
 * Example:
 * - Idli -> Breakfast, Tiffin, South Indian, Vegetarian
 * - Fried Rice -> Lunch, Dinner, Chinese, Rice Dishes
 * - Gulab Jamun -> Desserts, Sweets, Vegetarian
 */
export function getRecipeCategories(recipe: Recipe): AppFoodCategory[] {
  const cats = new Set<AppFoodCategory>();

  // Use explicit categories if present on the recipe
  if (Array.isArray(recipe.categories)) {
    recipe.categories.forEach(c => cats.add(c as AppFoodCategory));
  }

  const titleLower = (recipe.title || '').toLowerCase();
  const descLower = (recipe.description || '').toLowerCase();
  const cuisine = recipe.cuisine;
  const category = recipe.category;
  const dietary = recipe.dietaryTags || [];

  // 1. Cuisine mapping
  if (cuisine === 'South Indian') cats.add('South Indian');
  if (cuisine === 'North Indian') cats.add('North Indian');
  if (
    cuisine === 'Asian' ||
    titleLower.includes('chinese') ||
    titleLower.includes('fried rice') ||
    titleLower.includes('noodles') ||
    titleLower.includes('manchurian')
  ) {
    cats.add('Chinese');
  }

  // 2. Dietary mapping
  const isNonVeg =
    dietary.includes('Non-Vegetarian') ||
    titleLower.includes('chicken') ||
    titleLower.includes('mutton') ||
    titleLower.includes('fish') ||
    titleLower.includes('prawn') ||
    titleLower.includes('meen') ||
    titleLower.includes('egg ') ||
    titleLower.includes('muttai') ||
    titleLower.includes('meat') ||
    recipe.ingredients.some(i => i.category === 'Meat' || i.category === 'Fish');

  if (isNonVeg) {
    cats.add('Non-Vegetarian');
  } else {
    cats.add('Vegetarian');
  }

  // 3. Tiffin mapping (Idli, Dosa, Paniyaram, Upma, Poori, Parotta, etc.)
  const isTiffin =
    titleLower.includes('idli') ||
    titleLower.includes('dosa') ||
    titleLower.includes('uthappam') ||
    titleLower.includes('paniyaram') ||
    titleLower.includes('upma') ||
    titleLower.includes('poori') ||
    titleLower.includes('chapati') ||
    titleLower.includes('paratha') ||
    titleLower.includes('kichadi') ||
    titleLower.includes('pongal') ||
    titleLower.includes('adai') ||
    titleLower.includes('appam') ||
    titleLower.includes('parotta');

  if (isTiffin) {
    cats.add('Tiffin');
    cats.add('Breakfast');
    cats.add('Dinner');
  }

  // 4. Meal time mapping
  if (category === 'Breakfast' || titleLower.includes('toast') || titleLower.includes('pancake')) {
    cats.add('Breakfast');
  }

  if (
    category === 'Lunch' ||
    titleLower.includes('curry') ||
    titleLower.includes('kuzhambu') ||
    titleLower.includes('biryani') ||
    titleLower.includes('pulao') ||
    titleLower.includes('rice') ||
    titleLower.includes('dal')
  ) {
    cats.add('Lunch');
  }

  if (
    category === 'Dinner' ||
    titleLower.includes('curry') ||
    titleLower.includes('roti') ||
    titleLower.includes('naan') ||
    titleLower.includes('biryani')
  ) {
    cats.add('Dinner');
  }

  // 5. Snacks mapping
  if (
    category === 'Snacks' ||
    titleLower.includes('snack') ||
    titleLower.includes('pakora') ||
    titleLower.includes('bonda') ||
    titleLower.includes('vadai') ||
    titleLower.includes('vada') ||
    titleLower.includes('samosa') ||
    titleLower.includes('chaat') ||
    titleLower.includes('cutlet') ||
    titleLower.includes('fry') ||
    titleLower.includes('crispy')
  ) {
    cats.add('Snacks');
  }

  // 6. Rice dishes mapping
  if (
    category === 'Rice dishes' ||
    titleLower.includes('rice') ||
    titleLower.includes('biryani') ||
    titleLower.includes('pulao') ||
    titleLower.includes('khichdi') ||
    titleLower.includes('pongal') ||
    recipe.ingredients.some(i => i.name.toLowerCase().includes('rice') && !i.name.toLowerCase().includes('flour'))
  ) {
    cats.add('Rice Dishes');
  }

  // 7. Curries mapping
  if (
    category === 'Curries' ||
    titleLower.includes('curry') ||
    titleLower.includes('kuzhambu') ||
    titleLower.includes('sambar') ||
    titleLower.includes('rasam') ||
    titleLower.includes('gravy') ||
    titleLower.includes('masala') ||
    titleLower.includes('dal') ||
    titleLower.includes('salna') ||
    titleLower.includes('kurma') ||
    titleLower.includes('thokku')
  ) {
    cats.add('Curries');
  }

  // 8. Desserts & Sweets mapping
  if (
    category === 'Desserts' ||
    titleLower.includes('sweet') ||
    titleLower.includes('payasam') ||
    titleLower.includes('kesari') ||
    titleLower.includes('halwa') ||
    titleLower.includes('gulab jamun') ||
    titleLower.includes('kheer') ||
    titleLower.includes('pudding') ||
    titleLower.includes('cake')
  ) {
    cats.add('Desserts');
    cats.add('Sweets');
  }

  // 9. Healthy food mapping
  if (
    dietary.includes('Healthy food') ||
    dietary.includes('Gluten-Free') ||
    dietary.includes('High Protein') ||
    category === 'Healthy food' ||
    category === 'Salads' ||
    titleLower.includes('salad') ||
    titleLower.includes('ragi') ||
    titleLower.includes('millet') ||
    titleLower.includes('sprouts') ||
    titleLower.includes('soup')
  ) {
    cats.add('Healthy Food');
  }

  return Array.from(cats);
}

/**
 * Filters a recipe array by category while preserving single unique instances per recipe.
 */
export function filterRecipesByCategory(
  recipes: Recipe[],
  selectedCategory: AppFoodCategory | 'All'
): Recipe[] {
  if (!selectedCategory || selectedCategory === 'All') {
    return recipes;
  }
  return recipes.filter(r => {
    const cats = getRecipeCategories(r);
    return cats.includes(selectedCategory);
  });
}
