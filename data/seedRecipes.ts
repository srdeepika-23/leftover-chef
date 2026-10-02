import { Recipe } from '../types';

export const SEED_RECIPES: Recipe[] = [
  // 1-25
  {
    id: 'rec-01',
    title: 'Potato & Onion Crispy Pakora',
    titleTa: 'உருளைக்கிழங்கு வெங்காய பக்கோடா',
    titleHi: 'आलू और प्याज के कुरकुरे पकोड़े',
    description: 'Golden, crispy, and spiced Indian fritters made with thinly sliced potatoes, onions, and gram flour.',
    descriptionTa: 'மெலிதாக நறுக்கிய உருளைக்கிழங்கு மற்றும் வெங்காயத்துடன் கடலை மாவு சேர்த்து செய்யப்படும் மிருதுவான மாலை நேர பக்கோடா.',
    descriptionHi: 'बारीक कटे आलू और प्याज को बेसन और मसालों के साथ मिलाकर बनाए गए कुरकुरे और स्वादिष्ट पकोड़े।',
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Snacks',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Quick meals'],
    allergens: [],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    totalTimeMinutes: 25,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.8,
    ratingCount: 142,
    ingredients: [
      { id: 'ing-01', name: 'Potato', nameTa: 'உருளைக்கிழங்கு', nameHi: 'आलू', quantity: 2, unit: 'medium', category: 'Produce' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 2, unit: 'medium', category: 'Produce' },
      { id: 'ing-03', name: 'Gram Flour (Besan)', nameTa: 'கடலை மாவு', nameHi: 'बेसन', quantity: 1, unit: 'cup', category: 'Pantry' },
      { id: 'ing-04', name: 'Green Chilli', nameTa: 'பச்சை மிளகாய்', nameHi: 'हरी मिर्च', quantity: 2, unit: 'pcs', category: 'Produce' },
      { id: 'ing-05', name: 'Ginger', nameTa: 'இஞ்சி', nameHi: 'अदरक', quantity: 1, unit: 'inch', category: 'Produce' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 1, unit: 'sprig', category: 'Produce' },
      { id: 'ing-07', name: 'Red Chilli Powder', nameTa: 'மிளகாய் தூள்', nameHi: 'लाल मिर्च पाउडर', quantity: 1, unit: 'tsp', category: 'Spices' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'नमक', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { id: 'ing-09', name: 'Cooking Oil', nameTa: 'சமையல் எண்ணெய்', nameHi: 'तेल', quantity: 2, unit: 'cups (for frying)', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Thinly slice onions and potatoes. Finely chop green chillies, ginger, and curry leaves.', instructionTa: 'வெங்காயம் மற்றும் உருளைக்கிழங்கை மெலிதாக நறுக்கவும்.', instructionHi: 'प्याज और आलू को पतला काट लें।' },
      { step: 2, instruction: 'In a mixing bowl, combine sliced potatoes, onions, green chillies, ginger, spices, and salt.', instructionTa: 'ஒரு பாத்திரத்தில் நறுக்கிய காய்கறிகள் மற்றும் மசாலா சேர்க்கவும்.', instructionHi: 'एक बड़े कटोरे में सब्जियां और मसाले मिलाएं।' },
      { step: 3, instruction: 'Add gram flour gradually and sprinkle 1-2 tablespoons of water to coat in a stiff batter.', instructionTa: 'கடலை மாவு சேர்த்து கெட்டியாக கலக்கவும்.', instructionHi: 'बेसन डालकर गाढ़ा मिश्रण तैयार करें।' },
      { step: 4, instruction: 'Heat oil in a kadai or deep pan on medium heat.', instructionTa: 'எண்ணெய் சூடாக்கவும்.', instructionHi: 'कड़ाही में मध्यम आंच पर तेल गरम करें।' },
      { step: 5, instruction: 'Drop small clusters of batter into hot oil and deep fry until crispy and golden brown.', instructionTa: 'சூடான எண்ணெயில் பொன்னிறமாக பொரித்தெடுக்கவும்.', instructionHi: 'गरम तेल में डालकर सुनहरा होने तक तलें।' },
      { step: 6, instruction: 'Drain on paper towels and serve piping hot with mint chutney or tomato sauce.', instructionTa: 'சட்னியுடன் சூடாக பரிமாறவும்.', instructionHi: 'गरमागरम हरी चटनी के साथ परोसें।' }
    ],
    nutrition: { calories: 240, protein: 6, carbohydrates: 32, fat: 10, fiber: 4, sugar: 2, isEstimated: true }
  },
  {
    id: 'rec-02',
    title: 'Potato & Egg Stir-Fry (Aloo Anda Bhurji)',
    titleTa: 'உருளைக்கிழங்கு முட்டை பொரியல்',
    titleHi: 'आलू और अंडा भुर्जी',
    description: 'Quick protein-packed skillet dish with tender spiced potatoes, sautéed onions, and fluffy scrambled eggs.',
    descriptionTa: 'மென்மையான உருளைக்கிழங்கு, வெங்காயம் மற்றும் முட்டை சேர்த்து எளிதாக செய்யப்படும் புரதம் நிறைந்த பொரியல்.',
    descriptionHi: 'आलू, प्याज और अंडों को भारतीय मसालों के साथ भूनकर बनाई जाने वाली झटपट और पौष्टिक भुर्जी।',
    imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80',
    cuisine: 'North Indian',
    category: 'Breakfast',
    dietaryTags: ['Eggetarian', 'High Protein', 'Gluten-Free', 'Quick meals'],
    allergens: ['Egg'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 15,
    totalTimeMinutes: 20,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.7,
    ratingCount: 98,
    ingredients: [
      { id: 'ing-01', name: 'Potato', nameTa: 'உருளைக்கிழங்கு', nameHi: 'आलू', quantity: 2, unit: 'boiled or diced', category: 'Produce' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'chopped', category: 'Produce' },
      { id: 'ing-10', name: 'Egg', nameTa: 'முட்டை', nameHi: 'अंडा', quantity: 3, unit: 'large', category: 'Protein' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 1, unit: 'chopped', category: 'Produce' },
      { id: 'ing-12', name: 'Turmeric Powder', nameTa: 'மஞ்சள் தூள்', nameHi: 'हल्दी पाउडर', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-07', name: 'Red Chilli Powder', nameTa: 'மிளகாய் தூள்', nameHi: 'लाल मिर्च पाउडर', quantity: 0.75, unit: 'tsp', category: 'Spices' },
      { id: 'ing-13', name: 'Cumin Seeds', nameTa: 'சீரகம்', nameHi: 'जीरा', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'नमक', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { id: 'ing-09', name: 'Cooking Oil', nameTa: 'சமையல் எண்ணெய்', nameHi: 'तेल', quantity: 1.5, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Dice potatoes into small cubes. Beat eggs in a small bowl with a pinch of salt.', instructionTa: 'உருளைக்கிழங்கை நறுக்கி முட்டையை அடிக்கவும்.', instructionHi: 'आलू काटें और अंडों को फेंट लें।' },
      { step: 2, instruction: 'Heat oil in a pan, add cumin seeds and let them sizzle.', instructionTa: 'சீரகம் தாளிக்கவும்.', instructionHi: 'जीरा चटकाएं।' },
      { step: 3, instruction: 'Add chopped onions, tomatoes, and spices. Sauté for 3 minutes.', instructionTa: 'வெங்காயம், தக்காளி, மசாலா வதக்கவும்.', instructionHi: 'प्याज, टमाटर और मसाले भूनें।' },
      { step: 4, instruction: 'Add diced potatoes and cook for 5 minutes until tender.', instructionTa: 'உருளைக்கிழங்கு சேர்த்து வதக்கவும்.', instructionHi: 'आलू डालकर पकाएं।' },
      { step: 5, instruction: 'Pour beaten eggs and scramble gently until cooked through. Serve hot with roti.', instructionTa: 'முட்டை ஊற்றி கிளறி சுடச்சுட பரிமாறவும்.', instructionHi: 'अंडे डालकर भुर्जी बनाएं और परोसें।' }
    ],
    nutrition: { calories: 310, protein: 18, carbohydrates: 24, fat: 15, fiber: 3, sugar: 3, isEstimated: true }
  },
  {
    id: 'rec-03',
    title: 'South Indian Potato Podimas',
    titleTa: 'தென்னிந்திய உருளைக்கிழங்கு பொடிமாஸ்',
    titleHi: 'साउथ इंडियन आलू पोडिमास',
    description: 'A comforting Tamil Nadu style mashed potato stir-fry tempered with mustard seeds, urad dal, ginger, and lemon juice.',
    descriptionTa: 'கடுகு, உளுந்து, இஞ்சி, பச்சை மிளகாய் மற்றும் எலுமிச்சை சாறு தாளித்து செய்யப்படும் சுவையான உருளைக்கிழங்கு பொடிமாஸ்.',
    descriptionHi: 'उबले आलू को राई, उड़द दाल, अदरक और नींबू का तड़का देकर बनाई जाने वाली पारंपरिक सूखी सब्जी।',
    imageUrl: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Lunch',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Quick meals'],
    allergens: [],
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    totalTimeMinutes: 20,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.9,
    ratingCount: 165,
    ingredients: [
      { id: 'ing-01', name: 'Potato', nameTa: 'உருளைக்கிழங்கு', nameHi: 'आलू', quantity: 3, unit: 'large boiled', category: 'Produce' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'finely chopped', category: 'Produce' },
      { id: 'ing-04', name: 'Green Chilli', nameTa: 'பச்சை மிளகாய்', nameHi: 'हरी मिर्च', quantity: 2, unit: 'chopped', category: 'Produce' },
      { id: 'ing-05', name: 'Ginger', nameTa: 'இஞ்சி', nameHi: 'अदरक', quantity: 1, unit: 'tsp grated', category: 'Produce' },
      { id: 'ing-14', name: 'Mustard Seeds', nameTa: 'கடுகு', nameHi: 'राई', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-15', name: 'Urad Dal', nameTa: 'உளுத்தம் பருப்பு', nameHi: 'उड़द दाल', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 1, unit: 'sprig', category: 'Produce' },
      { id: 'ing-12', name: 'Turmeric Powder', nameTa: 'மஞ்சள் தூள்', nameHi: 'हल्दी पाउडर', quantity: 0.25, unit: 'tsp', category: 'Spices' },
      { id: 'ing-16', name: 'Lemon Juice', nameTa: 'எலுமிச்சை சாறு', nameHi: 'नींबू का रस', quantity: 1, unit: 'tbsp', category: 'Produce' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'நमक', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { id: 'ing-09', name: 'Cooking Oil', nameTa: 'சமையல் எண்ணெய்', nameHi: 'तेल', quantity: 1, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Crumble boiled potatoes roughly. Heat oil in a pan and splutter mustard seeds and urad dal.', instructionTa: 'உருளைக்கிழங்கை உதிர்த்து கடுகு, உளுந்து தாளிக்கவும்.', instructionHi: 'आलू मैश करें, राई व उड़द दाल तड़काएं।' },
      { step: 2, instruction: 'Add chillies, ginger, curry leaves, and chopped onions. Sauté until soft.', instructionTa: 'இஞ்சி, மிளகாய், வெங்காயம் வதக்கவும்.', instructionHi: 'अदरक, मिर्च, प्याज भूनें।' },
      { step: 3, instruction: 'Add turmeric, salt, and crumbled potatoes. Mix on low flame for 3 minutes.', instructionTa: 'உருளைக்கிழங்கு சேர்த்து கிளறவும்.', instructionHi: 'आलू डालकर धीमी आंच पर मिलाएं।' },
      { step: 4, instruction: 'Turn off heat, stir in lemon juice, and serve with hot Rasam rice.', instructionTa: 'எலுமிச்சை சாறு பிழிந்து ரச சாதத்துடன் பரிமாறவும்.', instructionHi: 'नींबू का रस डालकर रसम चावल के साथ परोसें।' }
    ],
    nutrition: { calories: 195, protein: 4, carbohydrates: 35, fat: 5, fiber: 4, sugar: 2, isEstimated: true }
  },
  {
    id: 'rec-04',
    title: 'Authentic South Indian Sambar',
    titleTa: 'பாரம்பரிய தென்னிந்திய சாம்பார்',
    titleHi: 'पारंपरिक दक्षिण भारतीय सांभर',
    description: 'Hearty lentil and vegetable stew slow-cooked with toor dal, tamarind, shallots, and freshly ground sambar spices.',
    descriptionTa: 'துவரம் பருப்பு, சின்ன வெங்காயம், தக்காளி மற்றும் நறுமண சாம்பார் தூள் சேர்த்து செய்யப்படும் தென்னிந்திய நறுமண சாம்பார்.',
    descriptionHi: 'अरहर दाल, इमली, छोटे प्याज (सांभर प्याज) और खुशबूदार मसालों से बना गाढ़ा और स्वादिष्ट सांभर।',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Curries',
    dietaryTags: ['Vegetarian', 'Vegan', 'High Protein', 'Gluten-Free'],
    allergens: [],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    totalTimeMinutes: 40,
    servings: 4,
    difficulty: 'Medium',
    rating: 4.95,
    ratingCount: 310,
    ingredients: [
      { id: 'ing-17', name: 'Toor Dal (Pigeon Peas)', nameTa: 'துவரம் பருப்பு', nameHi: 'अरहर दाल', quantity: 0.75, unit: 'cup', category: 'Pantry' },
      { id: 'ing-02', name: 'Shallots / Onions', nameTa: 'சின்ன வெங்காயம்', nameHi: 'सांभर प्याज', quantity: 10, unit: 'whole peeled', category: 'Produce' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 2, unit: 'chopped', category: 'Produce' },
      { id: 'ing-18', name: 'Tamarind Paste', nameTa: 'புளி கரைசல்', nameHi: 'इमली का गूदा', quantity: 1.5, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-19', name: 'Sambar Powder', nameTa: 'சாம்பார் பொடி', nameHi: 'सांभर मसाला', quantity: 2, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-14', name: 'Mustard Seeds', nameTa: 'கடுகு', nameHi: 'राई', quantity: 1, unit: 'tsp', category: 'Spices' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 2, unit: 'sprigs', category: 'Produce' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'நमक', quantity: 1.5, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Cook toor dal until soft and mash smoothly.', instructionTa: 'பருப்பை வேகவைத்து மசிக்கவும்.', instructionHi: 'दाल उबालकर मैश करें।' },
      { step: 2, instruction: 'Boil vegetables with tamarind extract, sambar powder, and salt.', instructionTa: 'காய்கறிகளை புளித்தண்ணீர் மற்றும் சாம்பார் தூளுடன் வேகவைக்கவும்.', instructionHi: 'सब्जियों को इमली पानी और सांभर मसाले में उबालें।' },
      { step: 3, instruction: 'Add mashed dal, simmer for 5 minutes, and finish with a mustard seed tadka.', instructionTa: 'பருப்பு சேர்த்து கொதிக்கவைத்து கடுகு தாளிக்கவும்.', instructionHi: 'दाल मिलाएं और राई का तड़का लगाएं।' }
    ],
    nutrition: { calories: 180, protein: 9, carbohydrates: 28, fat: 3, fiber: 6, sugar: 4, isEstimated: true }
  },
  {
    id: 'rec-05',
    title: 'Easy Egg Fried Rice',
    titleTa: 'சுவையான முட்டை பிரைட் ரைஸ்',
    titleHi: 'एग फ्राइड राइस',
    description: 'Perfect recipe for using leftover cold cooked rice! High heat wok-tossed with eggs, onions, soy sauce, and scallions.',
    descriptionTa: 'மீதமான சாதத்தை வைத்து 10 நிமிடத்தில் செய்யப்படும் சுவையான ஹோட்டல் ஸ்டைல் முட்டை பிரைட் ரைஸ்.',
    descriptionHi: 'बचे हुए चावल से सिर्फ 10 मिनट में बनने वाला लाजवाब चाइनीज स्टाइल एग फ्राइड राइस।',
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Asian',
    category: 'Rice dishes',
    dietaryTags: ['Eggetarian', 'High Protein', 'Quick meals'],
    allergens: ['Egg', 'Soy'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    totalTimeMinutes: 15,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.85,
    ratingCount: 220,
    ingredients: [
      { id: 'ing-21', name: 'Cooked Rice (Cold/Leftover)', nameTa: 'வடித்த சாதம்', nameHi: 'पका हुआ चावल', quantity: 3, unit: 'cups', category: 'Grains' },
      { id: 'ing-10', name: 'Egg', nameTa: 'முட்டை', nameHi: 'अंडा', quantity: 3, unit: 'large', category: 'Protein' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'finely chopped', category: 'Produce' },
      { id: 'ing-22', name: 'Garlic', nameTa: 'பூண்டு', nameHi: 'लहसुन', quantity: 4, unit: 'cloves minced', category: 'Produce' },
      { id: 'ing-23', name: 'Soy Sauce', nameTa: 'சோயா சாஸ்', nameHi: 'सोया सॉस', quantity: 1.5, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-24', name: 'Black Pepper Powder', nameTa: 'மிளகு தூள்', nameHi: 'काली मिर्च पाउडर', quantity: 0.75, unit: 'tsp', category: 'Spices' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'நमक', quantity: 0.5, unit: 'tsp', category: 'Pantry' },
      { id: 'ing-09', name: 'Cooking Oil', nameTa: 'சமையல் எண்ணெய்', nameHi: 'तेल', quantity: 2, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Scramble eggs quickly in hot wok and set aside.', instructionTa: 'முட்டையை பொரித்து தனியாக வைக்கவும்.', instructionHi: 'अंडे की भुर्जी बनाकर अलग रखें।' },
      { step: 2, instruction: 'Stir fry garlic and onions on high heat.', instructionTa: 'பூண்டு, வெங்காயம் வதக்கவும்.', instructionHi: 'लहसुन और प्याज भूनें।' },
      { step: 3, instruction: 'Add cold rice, soy sauce, and black pepper. Toss for 2 minutes.', instructionTa: 'சாதம், சோயா சாஸ் சேர்த்து கிளறவும்.', instructionHi: 'चावल और सोया सॉस डालकर टॉस करें।' },
      { step: 4, instruction: 'Fold in scrambled eggs and serve hot.', instructionTa: 'முட்டை சேர்த்து பரிமாறவும்.', instructionHi: 'अंडे मिलाकर परोसें।' }
    ],
    nutrition: { calories: 380, protein: 15, carbohydrates: 52, fat: 12, fiber: 2, sugar: 1, isEstimated: true }
  },
  {
    id: 'rec-06',
    title: 'Comforting Tomato Pepper Rasam',
    titleTa: 'தக்காளி மிளகு ரசம்',
    titleHi: 'टमाटर काली मिर्च रसम',
    description: 'Immunity-boosting South Indian soup prepared with ripe tomatoes, crushed black peppercorns, garlic, cumin, and fresh cilantro.',
    descriptionTa: 'பழுத்த தக்காளி, மிளகு, சீரகம், பூண்டு மற்றும் கொத்தமல்லி சேர்த்து மணக்க மணக்க செய்யப்படும் ஆரோக்கியமான ரசம்.',
    descriptionHi: 'पके टमाटर, काली मिर्च, लहसुन और जीरे से बना पाचक और सुगंधित दक्षिण भारतीय सूप।',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Soups',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Healthy food', 'Quick meals'],
    allergens: [],
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    totalTimeMinutes: 15,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.9,
    ratingCount: 180,
    ingredients: [
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 3, unit: 'ripe mashed', category: 'Produce' },
      { id: 'ing-22', name: 'Garlic', nameTa: 'பூண்டு', nameHi: 'लहसुन', quantity: 6, unit: 'cloves crushed', category: 'Produce' },
      { id: 'ing-24', name: 'Black Peppercorns', nameTa: 'மிளகு', nameHi: 'काली मिर्च', quantity: 1, unit: 'tbsp crushed', category: 'Spices' },
      { id: 'ing-13', name: 'Cumin Seeds', nameTa: 'சீரகம்', nameHi: 'जीरा', quantity: 1, unit: 'tsp crushed', category: 'Spices' },
      { id: 'ing-18', name: 'Tamarind Paste', nameTa: 'புளி கரைசல்', nameHi: 'इमली का पानी', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'நमक', quantity: 1, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Crush garlic, peppercorns, and cumin seeds coarsely.', instructionTa: 'பூண்டு, மிளகு, சீரகம் இடிக்கவும்.', instructionHi: 'लहसुन, काली मिर्च, जीरा कूटें।' },
      { step: 2, instruction: 'Mash tomatoes with tamarind water, spices, salt, and 2.5 cups water.', instructionTa: 'தக்காளியை மசாலாவுடன் கரைக்கவும்.', instructionHi: 'टमाटर और मसाले पानी में मिलाएं।' },
      { step: 3, instruction: 'Heat ghee, temper mustard seeds and curry leaves, pour liquid, and switch off as soon as froth appears.', instructionTa: 'கடுகு தாளித்து ரசம் ஊற்றி நுரை கட்டியதும் அணைக்கவும்.', instructionHi: 'तड़का लगाएं और झाग आते ही गैस बंद करें।' }
    ],
    nutrition: { calories: 65, protein: 2, carbohydrates: 11, fat: 2, fiber: 3, sugar: 4, isEstimated: true }
  },
  {
    id: 'rec-07',
    title: 'Restaurant Style Paneer Butter Masala',
    titleTa: 'பன்னீர் பட்டர் மசாலா',
    titleHi: 'पनीर बटर मसाला',
    description: 'Silky, rich, and creamy North Indian curry with soft paneer cubes simmered in a mildly sweet tomato cashew gravy.',
    descriptionTa: 'வெண்ணெய், தக்காளி மற்றும் முந்திரி விழுதில் மென்மையான பன்னீர் துண்டுகள் சேர்த்து செய்யப்படும் சுவையான பன்னீர் மசாலா.',
    descriptionHi: 'मखमली और मलाईदार टमाटर-काजू ग्रेवी में पके हुए मुलायम पनीर के टुकड़े।',
    imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    cuisine: 'North Indian',
    category: 'Curries',
    dietaryTags: ['Vegetarian', 'High Protein', 'Gluten-Free'],
    allergens: ['Milk', 'Tree nuts'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    totalTimeMinutes: 30,
    servings: 3,
    difficulty: 'Medium',
    rating: 4.95,
    ratingCount: 420,
    ingredients: [
      { id: 'ing-25', name: 'Paneer (Cottage Cheese)', nameTa: 'பன்னீர்', nameHi: 'पनीर', quantity: 250, unit: 'g cubed', category: 'Dairy' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 4, unit: 'pureed', category: 'Produce' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'pureed', category: 'Produce' },
      { id: 'ing-26', name: 'Butter', nameTa: 'வெண்ணெய்', nameHi: 'मक्खन', quantity: 2, unit: 'tbsp', category: 'Dairy' },
      { id: 'ing-27', name: 'Fresh Cream', nameTa: 'கிரீம் (பாலாடை)', nameHi: 'मलाई / क्रीम', quantity: 3, unit: 'tbsp', category: 'Dairy' },
      { id: 'ing-28', name: 'Cashews', nameTa: 'முந்திரி', nameHi: 'काजू', quantity: 10, unit: 'soaked & pasted', category: 'Produce' },
      { id: 'ing-07', name: 'Kashmiri Chilli Powder', nameTa: 'காஷ்மீரி மிளகாய் தூள்', nameHi: 'कश्मीरी लाल मिर्च', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-29', name: 'Garam Masala', nameTa: 'கரம் மசாலா', nameHi: 'गरम मसाला', quantity: 0.5, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      { step: 1, instruction: 'Sauté onion and ginger garlic paste in butter. Add tomato puree and chilli powder until butter separates.', instructionTa: 'வெண்ணெயில் வெங்காயம், தக்காளி விழுது வதக்கவும்.', instructionHi: 'मक्खन में प्याज और टमाटर प्यूरी भूनें।' },
      { step: 2, instruction: 'Stir in cashew paste and 0.5 cup water. Simmer until velvety.', instructionTa: 'முந்திரி விழுது சேர்த்து கொதிக்கவிடவும்.', instructionHi: 'काजू पेस्ट डालकर ग्रेवी गाढ़ी करें।' },
      { step: 3, instruction: 'Add paneer cubes, cream, kasuri methi, and garam masala. Cook 3 minutes and serve with naan.', instructionTa: 'பன்னீர், கிரீம் சேர்த்து 3 நிமிடம் கழித்து பரிமாறவும்.', instructionHi: 'पनीर और मलाई मिलाकर 3 मिनट पकाएं।' }
    ],
    nutrition: { calories: 390, protein: 16, carbohydrates: 18, fat: 28, fiber: 3, sugar: 6, isEstimated: true }
  },
  {
    id: 'rec-08',
    title: 'Italian Pasta Aglio e Olio',
    titleTa: 'இத்தாலியன் பாஸ்தா அக்லியோ இ ஓலியோ',
    titleHi: 'इटैलियन पास्ता आलियो ए ओलियो',
    description: 'A traditional Neapolitan pasta dish of spaghetti tossed with gently sautéed garlic, extra virgin olive oil, and chilli flakes.',
    descriptionTa: 'ஆலிவ் எண்ணெய், பொடியாக நறுக்கிய பூண்டு, மிளகாய் தூவலுடன் செய்யப்படும் சுவையான பாரம்பரிய இத்தாலிய பாஸ்தா.',
    descriptionHi: 'अतिरिक्त वर्जिन जैतून का तेल, भूना हुआ लहसुन और चिली फ्लेक्स के साथ बना स्वादिष्ट और क्लासिक पास्ता।',
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Italian',
    category: 'Pasta',
    dietaryTags: ['Vegetarian', 'Vegan', 'Quick meals'],
    allergens: ['Wheat'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 12,
    totalTimeMinutes: 17,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.8,
    ratingCount: 154,
    ingredients: [
      { id: 'ing-31', name: 'Spaghetti Pasta', nameTa: 'பாஸ்தா', nameHi: 'पास्ता', quantity: 200, unit: 'g', category: 'Pantry' },
      { id: 'ing-22', name: 'Garlic', nameTa: 'பூண்டு', nameHi: 'लहसुन', quantity: 8, unit: 'cloves thinly sliced', category: 'Produce' },
      { id: 'ing-32', name: 'Extra Virgin Olive Oil', nameTa: 'ஆலிவ் எண்ணெய்', nameHi: 'ऑलिव ऑयल', quantity: 4, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-33', name: 'Red Chilli Flakes', nameTa: 'மிளகாய் வற்றல் தூவல்', nameHi: 'चिली फ्लेक्स', quantity: 1, unit: 'tsp', category: 'Spices' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'நमक', quantity: 1, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Boil pasta al dente in salted water. Reserve 1/2 cup pasta water, drain pasta.', instructionTa: 'பாஸ்தாவை வேகவைத்து தண்ணீரை வடிக்கவும்.', instructionHi: 'पास्ता उबालें और पानी छान लें।' },
      { step: 2, instruction: 'Sauté sliced garlic and chilli flakes gently in warm olive oil.', instructionTa: 'ஆலிவ் எண்ணெயில் பூண்டு, மிளகாய் வதக்கவும்.', instructionHi: 'तेल में लहसुन और चिली फ्लेक्स भूनें।' },
      { step: 3, instruction: 'Toss pasta with reserved water to emulsify. Garnish with parsley and serve immediately.', instructionTa: 'பாஸ்தாவை சேர்த்து கிளறி பரிமாறவும்.', instructionHi: 'पास्ता मिलाकर गरमागरम परोसें।' }
    ],
    nutrition: { calories: 360, protein: 9, carbohydrates: 48, fat: 14, fiber: 3, sugar: 2, isEstimated: true }
  },
  {
    id: 'rec-09',
    title: 'Smoky Black Bean & Corn Tacos',
    titleTa: 'மெக்சிகன் பீன்ஸ் & சோளம் டகோஸ்',
    titleHi: 'ब्लैक बीन और कॉर्न मैक्सिकन टैकोस',
    description: 'Vibrant Mexican tacos filled with seasoned black beans, sweet corn, diced tomatoes, onion, and lime-kissed salsa.',
    descriptionTa: 'காரசாரமான கருப்பு பீன்ஸ், சோளம், தக்காளி, எலுமிச்சை சாறு சேர்த்து மொறுமொறுப்பான டகோஸில் வைத்து செய்யப்படும் உணவு.',
    descriptionHi: 'मसालेदार बीन्स, स्वीट कॉर्न, टमाटर, प्याज और नींबू के रस से भरे स्वादिष्ट व कुरकुरे मैक्सिकन टैकोस।',
    imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Mexican',
    category: 'Dinner',
    dietaryTags: ['Vegetarian', 'Vegan', 'High Protein', 'Healthy food'],
    allergens: ['Wheat'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    totalTimeMinutes: 20,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.85,
    ratingCount: 130,
    ingredients: [
      { id: 'ing-35', name: 'Black Beans or Rajma', nameTa: 'பீன்ஸ் அல்லது ராஜ்மா', nameHi: 'बीन्स या राजमा', quantity: 1, unit: 'cup cooked', category: 'Pantry' },
      { id: 'ing-36', name: 'Sweet Corn', nameTa: 'மக்காச்சோளம்', nameHi: 'स्वीट कॉर्न', quantity: 0.5, unit: 'cup boiled', category: 'Produce' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'diced', category: 'Produce' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 2, unit: 'diced', category: 'Produce' },
      { id: 'ing-37', name: 'Taco Shells / Tortillas', nameTa: 'டகோ ரொட்டி', nameHi: 'टैको शैल', quantity: 4, unit: 'pcs', category: 'Bakery' },
      { id: 'ing-16', name: 'Lime Juice', nameTa: 'எலுமிச்சை சாறு', nameHi: 'नींबू का रस', quantity: 1, unit: 'tbsp', category: 'Produce' }
    ],
    instructions: [
      { step: 1, instruction: 'Sauté beans and corn with cumin and spices.', instructionTa: 'பீன்ஸ், சோளத்தை வதக்கவும்.', instructionHi: 'बीन्स और कॉर्न को मसालों के साथ भूनें।' },
      { step: 2, instruction: 'Toss diced tomato and onion with lime juice for fresh salsa.', instructionTa: 'தக்காளி சல்சா தயாரிக்கவும்.', instructionHi: 'टमाटर-प्याज का साल्सा बनाएं।' },
      { step: 3, instruction: 'Fill warm tacos with bean mix and top with salsa.', instructionTa: 'டகோவில் நிரப்பி பரிமாறவும்.', instructionHi: 'टैको में भरकर परोसें।' }
    ],
    nutrition: { calories: 290, protein: 12, carbohydrates: 46, fat: 6, fiber: 9, sugar: 4, isEstimated: true }
  },
  {
    id: 'rec-10',
    title: 'Creamy Garlic Hummus with Warm Pita',
    titleTa: 'பூண்டு ஹம்முஸ் மற்றும் பிடா ரொட்டி',
    titleHi: 'क्रीमी गार्लिक हमस और पीटा ब्रेड',
    description: 'Velvety Mediterranean chickpea dip blended with tahini, roasted garlic, lemon juice, and rich olive oil.',
    descriptionTa: 'வெள்ளை கொண்டைக்கடலை, பூண்டு, எலுமிச்சை சாறு மற்றும் ஆலிவ் எண்ணெய் கொண்டு செய்யப்படும் மென்மையான மத்தியதரைக்கடல் ஹம்முஸ்.',
    descriptionHi: 'सफेद काबुली चने, भुना लहसुन, नींबू का रस और ऑलिव ऑयल से बना सेहतमंद और स्वादिष्ट हमस।',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Mediterranean',
    category: 'Snacks',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'High Protein', 'Healthy food'],
    allergens: ['Sesame'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    totalTimeMinutes: 10,
    servings: 4,
    difficulty: 'Easy',
    rating: 4.9,
    ratingCount: 205,
    ingredients: [
      { id: 'ing-38', name: 'Chickpeas (Boiled)', nameTa: 'கொண்டைக்கடலை', nameHi: 'उबले काबुली चने', quantity: 1.5, unit: 'cups', category: 'Pantry' },
      { id: 'ing-39', name: 'Tahini', nameTa: 'எள்ளு விழுது', nameHi: 'तिल का पेस्ट', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-22', name: 'Garlic', nameTa: 'பூண்டு', nameHi: 'लहसुन', quantity: 2, unit: 'cloves', category: 'Produce' },
      { id: 'ing-16', name: 'Lemon Juice', nameTa: 'எலுமிச்சை சாறு', nameHi: 'नींबू का रस', quantity: 2, unit: 'tbsp', category: 'Produce' },
      { id: 'ing-32', name: 'Olive Oil', nameTa: 'ஆலிவ் எண்ணெய்', nameHi: 'ऑलिव ऑयल', quantity: 3, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Blend chickpeas, tahini, garlic, lemon juice, and salt with cold water until silky.', instructionTa: 'மிக்ஸியில் நைஸாக அரைக்கவும்.', instructionHi: 'मिक्सी में चिकना होने तक पीसें।' },
      { step: 2, instruction: 'Drizzle with extra virgin olive oil and serve with warm pita or veggies.', instructionTa: 'ஆலிவ் எண்ணெய் ஊற்றி பரிமாறவும்.', instructionHi: 'ऑलिव ऑयल डालकर ब्रेड के साथ परोसें।' }
    ],
    nutrition: { calories: 230, protein: 8, carbohydrates: 20, fat: 14, fiber: 6, sugar: 1, isEstimated: true }
  },
  {
    id: 'rec-11',
    title: 'Crispy South Indian Masala Dosa',
    titleTa: 'மொருமொரு உருளைக்கிழங்கு மசாலா தோசை',
    titleHi: 'क्रिस्पी मसाला डोसा',
    description: 'Crispy golden rice and lentil crepe stuffed with a mildly spiced savoury potato onion filling, served with coconut chutney.',
    descriptionTa: 'மொருமொருப்பான பொன்னிற தோசையில் காரசார உருளைக்கிழங்கு மசாலா வைத்து சுடச்சுட பரிமாறப்படும் மசாலா தோசை.',
    descriptionHi: 'कुरकुरा डोसा जिसके अंदर भरा जाता है खुशबूदार और स्वादिष्ट आलू का मसाला, नारियल चटनी के साथ सर्व करें।',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Breakfast',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    allergens: [],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    totalTimeMinutes: 25,
    servings: 2,
    difficulty: 'Medium',
    rating: 4.98,
    ratingCount: 512,
    ingredients: [
      { id: 'ing-40', name: 'Dosa Batter', nameTa: 'தோசை மாவு', nameHi: 'डोसा बैटर', quantity: 2, unit: 'cups', category: 'Pantry' },
      { id: 'ing-01', name: 'Potato', nameTa: 'உருளைக்கிழங்கு', nameHi: 'आलू', quantity: 3, unit: 'boiled & mashed', category: 'Produce' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'sliced', category: 'Produce' },
      { id: 'ing-14', name: 'Mustard Seeds', nameTa: 'கடுகு', nameHi: 'राई', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-12', name: 'Turmeric Powder', nameTa: 'மஞ்சள் தூள்', nameHi: 'हल्दी पाउडर', quantity: 0.5, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      { step: 1, instruction: 'Sauté onions with mustard, curry leaves, turmeric, and mix with mashed potatoes.', instructionTa: 'வெங்காயம், மசாலா வதக்கி உருளைக்கிழங்குடன் கலக்கவும்.', instructionHi: 'प्याज और मसाले भूनकर आलू में मिलाएं।' },
      { step: 2, instruction: 'Spread batter thinly on a hot tawa, roast with oil until crisp, fill with potato masala, fold and serve.', instructionTa: 'தோசை ஊற்றி மசாலா வைத்து மடிக்கவும்.', instructionHi: 'तवे पर डोसा फैलाएं, आलू भरें और सर्व करें।' }
    ],
    nutrition: { calories: 340, protein: 7, carbohydrates: 54, fat: 11, fiber: 5, sugar: 2, isEstimated: true }
  },
  {
    id: 'rec-12',
    title: 'Homestyle North Indian Aloo Gobi',
    titleTa: 'ஆலூ கோபி (உருளைக்கிழங்கு காலிஃபிளவர் மசாலா)',
    titleHi: 'ढाबा स्टाइल आलू गोभी की सब्जी',
    description: 'Classic dry spiced curry of tender cauliflower florets and potatoes cooked with cumin, turmeric, coriander, and garam masala.',
    descriptionTa: 'காலிஃபிளவர் மற்றும் உருளைக்கிழங்கு சேர்த்து வட இந்திய மசாலாக்களுடன் வதக்கி செய்யப்படும் சுவையான மசாலா கறி.',
    descriptionHi: 'आलू और फूलगोभी को जीरा, हल्दी, धनिया पाउडर और गरम मसाले के साथ भूनी गई लाजवाब सूखी सब्जी।',
    imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    cuisine: 'North Indian',
    category: 'Curries',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Healthy food'],
    allergens: [],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    totalTimeMinutes: 30,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.82,
    ratingCount: 190,
    ingredients: [
      { id: 'ing-01', name: 'Potato', nameTa: 'உருளைக்கிழங்கு', nameHi: 'आलू', quantity: 2, unit: 'cubed', category: 'Produce' },
      { id: 'ing-41', name: 'Cauliflower (Gobi)', nameTa: 'காலிஃபிளவர்', nameHi: 'फूलगोभी', quantity: 1, unit: 'head cut to florets', category: 'Produce' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'chopped', category: 'Produce' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 1, unit: 'chopped', category: 'Produce' }
    ],
    instructions: [
      { step: 1, instruction: 'Sauté cumin, onions, and ginger. Add potato and cauliflower.', instructionTa: 'சீரகம், வெங்காயம் மற்றும் காய்கறி வதக்கவும்.', instructionHi: 'जीरा, प्याज, आलू और गोभी भूनें।' },
      { step: 2, instruction: 'Add spices, cover and cook on low heat for 15 minutes until tender.', instructionTa: 'மசாலா சேர்த்து மூடி வேகவிடவும்.', instructionHi: 'मसाले डालकर ढककर 15 मिनट पकाएं।' }
    ],
    nutrition: { calories: 210, protein: 5, carbohydrates: 26, fat: 10, fiber: 6, sugar: 4, isEstimated: true }
  },
  {
    id: 'rec-13',
    title: 'South Indian Ven Pongal with Ghee',
    titleTa: 'நெய் மணக்கும் வெண் பொங்கல்',
    titleHi: 'घी वाली दक्षिण भारतीय वेन पोंगल',
    description: 'Comfort in a bowl — soft rice and yellow moong dal cooked to porridge consistency and tempered with fragrant ghee, peppercorns, cumin, and cashews.',
    descriptionTa: 'பச்சரிசி, பாசிப்பருப்பு வேகவைத்து நெய், மிளகு, சீரகம், முந்திரி தாளித்து செய்யப்படும் சுவையான கோவில் வெண் பொங்கல்.',
    descriptionHi: 'चावल और मूंग दाल से बनी मुलायम खिचड़ी, जिसे देसी घी, काली मिर्च, जीरा और काजू का शानदार तड़का दिया जाता है।',
    imageUrl: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Breakfast',
    dietaryTags: ['Vegetarian', 'High Protein', 'Gluten-Free'],
    allergens: ['Milk', 'Tree nuts'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 20,
    totalTimeMinutes: 25,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.96,
    ratingCount: 340,
    ingredients: [
      { id: 'ing-43', name: 'Raw Rice', nameTa: 'பச்சரிசி', nameHi: 'चावल', quantity: 1, unit: 'cup', category: 'Grains' },
      { id: 'ing-44', name: 'Moong Dal', nameTa: 'பாசிப்பருப்பு', nameHi: 'मूंग दाल', quantity: 0.33, unit: 'cup', category: 'Pantry' },
      { id: 'ing-45', name: 'Desi Ghee', nameTa: 'நெய்', nameHi: 'देसी घी', quantity: 3, unit: 'tbsp', category: 'Dairy' },
      { id: 'ing-24', name: 'Black Peppercorns & Cumin', nameTa: 'மிளகு & சீரகம்', nameHi: 'काली मिर्च और जीरा', quantity: 1, unit: 'tsp each', category: 'Spices' },
      { id: 'ing-28', name: 'Cashews', nameTa: 'முந்திரி', nameHi: 'काजू', quantity: 10, unit: 'split', category: 'Produce' }
    ],
    instructions: [
      { step: 1, instruction: 'Pressure cook washed rice and dal with 4 cups water until soft.', instructionTa: 'அரிசி பருப்பை குழைய வேகவைக்கவும்.', instructionHi: 'चावल और दाल को कुकर में अच्छी तरह गला लें।' },
      { step: 2, instruction: 'Fry cashews, pepper, cumin, and ginger in ghee; pour sizzling over pongal.', instructionTa: 'நெய்யில் தாளித்து பொங்கலில் கொட்டவும்.', instructionHi: 'घी में काजू, काली मिर्च, जीरे का तड़का पोंगल में डालें।' }
    ],
    nutrition: { calories: 350, protein: 10, carbohydrates: 50, fat: 13, fiber: 3, sugar: 1, isEstimated: true }
  },
  {
    id: 'rec-14',
    title: 'Tangy South Indian Lemon Rice',
    titleTa: 'சுவையான எலுமிச்சை சாதம்',
    titleHi: 'खट्टा नींबू चावल (लेमन राइस)',
    description: 'Refreshing turmeric-hued rice infused with fresh lemon juice, crunchy peanuts, mustard seeds, and curry leaves.',
    descriptionTa: 'எலுமிச்சை சாறு, வேர்க்கடலை, கடுகு மற்றும் கறிவேப்பிலை தாளித்து செய்யப்படும் நறுமண எலுமிச்சை சாதம்.',
    descriptionHi: 'नींबू का रस, भुनी मूंगफली, राई और कढ़ी पत्ते का तड़का देकर बना खुशबूदार और चटपटा चावल।',
    imageUrl: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Rice dishes',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Quick meals'],
    allergens: ['Peanuts'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    totalTimeMinutes: 15,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.88,
    ratingCount: 175,
    ingredients: [
      { id: 'ing-21', name: 'Cooked Rice', nameTa: 'வடித்த சாதம்', nameHi: 'पका हुआ चावल', quantity: 3, unit: 'cups', category: 'Grains' },
      { id: 'ing-16', name: 'Lemon Juice', nameTa: 'எலுமிச்சை சாறு', nameHi: 'नींबू का रस', quantity: 3, unit: 'tbsp', category: 'Produce' },
      { id: 'ing-46', name: 'Peanuts', nameTa: 'வேர்க்கடலை', nameHi: 'मूंगफली', quantity: 2, unit: 'tbsp', category: 'Produce' },
      { id: 'ing-14', name: 'Mustard Seeds & Curry Leaves', nameTa: 'கடுகு & கறிவேப்பிலை', nameHi: 'राई और कढ़ी पत्ता', quantity: 1, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      { step: 1, instruction: 'Roast peanuts, mustard seeds, chillies, and turmeric in oil.', instructionTa: 'வேர்க்கடலை மற்றும் கடுகு தாளிக்கவும்.', instructionHi: 'मूंगफली और राई का तड़का लगाएं।' },
      { step: 2, instruction: 'Stir in lemon juice, pour over rice and toss gently.', instructionTa: 'எலுமிச்சை சாறு ஊற்றி சாதத்தில் கலக்கவும்.', instructionHi: 'नींबू का रस मिलाकर चावल में मिलाएं।' }
    ],
    nutrition: { calories: 310, protein: 7, carbohydrates: 48, fat: 11, fiber: 3, sugar: 2, isEstimated: true }
  },
  {
    id: 'rec-15',
    title: 'Quick 2-Minute Chocolate Mug Cake',
    titleTa: '2 நிமிட சாக்லேட் மக் கேக்',
    titleHi: '2-मिनट चॉकलेट मग केक',
    description: 'Instant rich and gooey single-serve chocolate cake made right inside a coffee mug in the microwave.',
    descriptionTa: 'கப் காபி கப்பில் மாவு, கோகோ தூள், பால் சேர்த்து மைக்ரோவேவில் 2 நிமிடத்தில் செய்யப்படும் சுவையான சாக்லேட் கேக்.',
    descriptionHi: 'सिर्फ 2 मिनट में माइक्रोवेव में मग के अंदर बनने वाला लाजवाब और चॉकलेटी सॉफ्ट केक।',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    cuisine: 'American',
    category: 'Desserts',
    dietaryTags: ['Vegetarian', 'Quick meals'],
    allergens: ['Milk', 'Wheat'],
    prepTimeMinutes: 3,
    cookTimeMinutes: 2,
    totalTimeMinutes: 5,
    servings: 1,
    difficulty: 'Easy',
    rating: 4.86,
    ratingCount: 290,
    ingredients: [
      { id: 'ing-47', name: 'Flour (Maida or Wheat)', nameTa: 'மாவு', nameHi: 'आटा / मैदा', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-48', name: 'Cocoa Powder', nameTa: 'கோகோ தூள்', nameHi: 'कोको पाउडर', quantity: 1.5, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-49', name: 'Sugar', nameTa: 'சர்க்கரை', nameHi: 'चीनी', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-51', name: 'Milk', nameTa: 'பால்', nameHi: 'दूध', quantity: 3, unit: 'tbsp', category: 'Dairy' },
      { id: 'ing-09', name: 'Butter/Oil', nameTa: 'வெண்ணெய்', nameHi: 'मक्खन', quantity: 1, unit: 'tbsp', category: 'Dairy' }
    ],
    instructions: [
      { step: 1, instruction: 'Whisk dry ingredients in a microwaveable mug, stir in milk and butter.', instructionTa: 'மக் கப்பில் மாவு, கோகோ, பால், வெண்ணெய் கலக்கவும்.', instructionHi: 'मग में सब मिलाकर फेंटें।' },
      { step: 2, instruction: 'Microwave on high for 70 seconds. Let rest 1 minute and enjoy.', instructionTa: '70 வினாடிகள் மைக்ரோவேவில் வைக்கவும்.', instructionHi: 'माइक्रोवेव में 70 सेकंड पकाएं।' }
    ],
    nutrition: { calories: 280, protein: 4, carbohydrates: 42, fat: 12, fiber: 3, sugar: 22, isEstimated: true }
  },
  {
    id: 'rec-16',
    title: 'North Indian Restaurant Style Dal Tadka',
    titleTa: 'தால் தட்கா (பருப்பு தாளிப்பு)',
    titleHi: 'दाल तड़का (ढाबा स्टाइल)',
    description: 'Creamy cooked yellow lentils infused with garlic, cumin, tomatoes, and finished with a smoky ghee and red chilli tadka.',
    descriptionTa: 'துவரம் பருப்பு வேகவைத்து பூண்டு, சீரகம், தக்காளி மற்றும் நெய் மிளகாய் தாளித்து செய்யப்படும் வட இந்திய தால் தட்கா.',
    descriptionHi: 'अरहर दाल को टमाटर, लहसुन और प्याज के साथ पकाकर ऊपर से देसी घी और साबुत लाल मिर्च का खुशबूदार तड़का।',
    imageUrl: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=800&q=80',
    cuisine: 'North Indian',
    category: 'Curries',
    dietaryTags: ['Vegetarian', 'High Protein', 'Gluten-Free'],
    allergens: ['Milk'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    totalTimeMinutes: 30,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.92,
    ratingCount: 380,
    ingredients: [
      { id: 'ing-17', name: 'Toor Dal', nameTa: 'துவரம் பருப்பு', nameHi: 'अरहर दाल', quantity: 1, unit: 'cup', category: 'Pantry' },
      { id: 'ing-02', name: 'Onion & Garlic', nameTa: 'வெங்காயம் & பூண்டு', nameHi: 'प्याज और लहसुन', quantity: 1, unit: 'cup chopped', category: 'Produce' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 2, unit: 'chopped', category: 'Produce' },
      { id: 'ing-45', name: 'Desi Ghee', nameTa: 'நெய்', nameHi: 'देसी घी', quantity: 2, unit: 'tbsp', category: 'Dairy' }
    ],
    instructions: [
      { step: 1, instruction: 'Pressure cook dal until soft. Sauté onions, garlic, and tomatoes in ghee.', instructionTa: 'பருப்பை வேகவைத்து மசாலாவுடன் வதக்கவும்.', instructionHi: 'दाल उबालें और प्याज-टमाटर भूनें।' },
      { step: 2, instruction: 'Simmer dal with vegetables, then top with a sizzling cumin-chilli ghee tadka.', instructionTa: 'நெய்யில் சீரகம் தாளித்து பருப்பில் ஊற்றவும்.', instructionHi: 'ऊपर से जीरा और मिर्च का घी वाला तड़का लगाएं।' }
    ],
    nutrition: { calories: 230, protein: 11, carbohydrates: 30, fat: 8, fiber: 5, sugar: 2, isEstimated: true }
  },
  {
    id: 'rec-17',
    title: 'Creamy Macaroni and Cheese',
    titleTa: 'மேக் அண்ட் சீஸ் (சீஸ் பாஸ்தா)',
    titleHi: 'क्रीमी मैक एंड चीज',
    description: 'All-American comforting pasta baked in a velvety cheddar cheese sauce with a crispy golden crust.',
    descriptionTa: 'செடார் சீஸ், பால் மற்றும் வெண்ணெய் கலந்த கிரீமி சாஸில் வேகவைத்த சுவையான மேக் அண்ட் சீஸ் பாஸ்தா.',
    descriptionHi: 'मखमली चीज सॉस में पकी हुई मैकरोनी पास्ता, जिसे ऊपर से क्रिस्पी बेक किया जाता है।',
    imageUrl: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    cuisine: 'American',
    category: 'Pasta',
    dietaryTags: ['Vegetarian'],
    allergens: ['Milk', 'Wheat'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    totalTimeMinutes: 25,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.88,
    ratingCount: 310,
    ingredients: [
      { id: 'ing-53', name: 'Macaroni Pasta', nameTa: 'பாஸ்தா', nameHi: 'मैकरोनी', quantity: 250, unit: 'g', category: 'Pantry' },
      { id: 'ing-26', name: 'Butter & Flour', nameTa: 'வெண்ணெய் & மைதா', nameHi: 'मक्खन और मैदा', quantity: 2, unit: 'tbsp each', category: 'Dairy' },
      { id: 'ing-51', name: 'Milk', nameTa: 'பால்', nameHi: 'दूध', quantity: 2, unit: 'cups', category: 'Dairy' },
      { id: 'ing-54', name: 'Cheddar Cheese', nameTa: 'சீஸ்', nameHi: 'चीज', quantity: 1.5, unit: 'cups shredded', category: 'Dairy' }
    ],
    instructions: [
      { step: 1, instruction: 'Boil macaroni al dente. Make roux with butter, flour, and milk until thick.', instructionTa: 'பாஸ்தாவை வேகவைத்து பாலில் கிரீம் சாஸ் செய்யவும்.', instructionHi: 'पास्ता उबालें और मक्खन-दूध से व्हाइट सॉस बनाएं।' },
      { step: 2, instruction: 'Stir in cheese until melted, fold in macaroni and serve hot.', instructionTa: 'சீஸ் சேர்த்து பாஸ்தாவை கலந்து பரிமாறவும்.', instructionHi: 'चीज और पास्ता मिलाकर गरमागरम परोसें।' }
    ],
    nutrition: { calories: 420, protein: 16, carbohydrates: 45, fat: 20, fiber: 2, sugar: 4, isEstimated: true }
  },
  {
    id: 'rec-18',
    title: 'Street-Style Vegetable Hakka Noodles',
    titleTa: 'வெஜ் ஹக்கா நூடுல்ஸ்',
    titleHi: 'वेज हक्का नूडल्स',
    description: 'Smoky Indo-Chinese stir-fried noodles with julienned vegetables, soy sauce, vinegar, and garlic.',
    descriptionTa: 'காய்கறிகள், பூண்டு மற்றும் சாஸ்களுடன் அதிக தீயில் வதக்கி செய்யப்படும் சுவையான வெஜ் ஹக்கா நூடுல்ஸ்.',
    descriptionHi: 'लंबी कटी ताज़ा सब्जियों, लहसुन और चाइनीज सॉस के साथ तेज आंच पर भूने गए स्वादिष्ट नूडल्स।',
    imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Asian',
    category: 'Noodles',
    dietaryTags: ['Vegetarian', 'Vegan', 'Quick meals'],
    allergens: ['Soy', 'Wheat'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    totalTimeMinutes: 20,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.87,
    ratingCount: 260,
    ingredients: [
      { id: 'ing-55', name: 'Noodles', nameTa: 'நூடுல்ஸ்', nameHi: 'नूडल्स', quantity: 200, unit: 'g', category: 'Pantry' },
      { id: 'ing-56', name: 'Cabbage & Carrot', nameTa: 'முட்டைக்கோஸ் & கேரட்', nameHi: 'पत्तागोभी और गाजर', quantity: 1.5, unit: 'cups', category: 'Produce' },
      { id: 'ing-23', name: 'Soy Sauce & Vinegar', nameTa: 'சோயா சாஸ் & வினிகர்', nameHi: 'सोया सॉस और सिरका', quantity: 1.5, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Boil noodles al dente and rinse cold. Sauté veggies in smoking wok for 2 minutes.', instructionTa: 'நூடுல்ஸை வேகவைத்து காய்கறிகளை வதக்கவும்.', instructionHi: 'नूडल्स उबालें, सब्जियां तेज आंच पर भूनें।' },
      { step: 2, instruction: 'Add noodles, soy sauce, vinegar, pepper, and toss vigorously.', instructionTa: 'சாஸ்களுடன் சேர்த்து கிளறவும்.', instructionHi: 'सॉस डालकर अच्छी तरह टॉस करें।' }
    ],
    nutrition: { calories: 340, protein: 8, carbohydrates: 58, fat: 9, fiber: 4, sugar: 3, isEstimated: true }
  },
  {
    id: 'rec-19',
    title: 'Classic Neapolitan Margherita Pizza',
    titleTa: 'மார்கரிட்டா பீட்சா',
    titleHi: 'मार्गेरीटा पिज्जा',
    description: 'Crispy stone-baked pizza topped with aromatic crushed San Marzano tomato sauce, fresh mozzarella cheese, and sweet basil leaves.',
    descriptionTa: 'தக்காளி சாஸ், மொசரெல்லா சீஸ் மற்றும் துளசி இலைகளுடன் மொறுமொறுப்பாக பேக் செய்யப்படும் பீட்சா.',
    descriptionHi: 'ताजा टमाटर की चटनी, मोज़ेरेला चीज और तुलसी के पत्तों से बना क्लासिक इटैलियन पिज्जा।',
    imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Italian',
    category: 'Baking',
    dietaryTags: ['Vegetarian'],
    allergens: ['Milk', 'Wheat'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    totalTimeMinutes: 27,
    servings: 2,
    difficulty: 'Medium',
    rating: 4.94,
    ratingCount: 410,
    ingredients: [
      { id: 'ing-59', name: 'Pizza Base', nameTa: 'பீட்சா பேஸ்', nameHi: 'पिज्जा बेस', quantity: 1, unit: 'pc', category: 'Bakery' },
      { id: 'ing-11', name: 'Tomato Sauce', nameTa: 'தக்காளி சாஸ்', nameHi: 'टमाटर सॉस', quantity: 0.5, unit: 'cup', category: 'Pantry' },
      { id: 'ing-60', name: 'Mozzarella Cheese', nameTa: 'மொசரெல்லா சீஸ்', nameHi: 'मोज़ेरेला चीज', quantity: 150, unit: 'g', category: 'Dairy' },
      { id: 'ing-61', name: 'Fresh Basil', nameTa: 'துளசி', nameHi: 'तुलसी के पत्ते', quantity: 8, unit: 'leaves', category: 'Produce' }
    ],
    instructions: [
      { step: 1, instruction: 'Spread tomato sauce on pizza base, top with cheese and oregano.', instructionTa: 'பீட்சா பேஸில் சாஸ் மற்றும் சீஸ் வைக்கவும்.', instructionHi: 'बेस पर सॉस और चीज फैलाएं।' },
      { step: 2, instruction: 'Bake at 220°C for 12 minutes until bubbly and crisp. Garnish with fresh basil.', instructionTa: '12 நிமிடம் பேக் செய்து துளசி இலை தூவவும்.', instructionHi: '12 मिनट बेक करें और तुलसी पत्ता डालें।' }
    ],
    nutrition: { calories: 380, protein: 15, carbohydrates: 42, fat: 17, fiber: 3, sugar: 3, isEstimated: true }
  },
  {
    id: 'rec-20',
    title: 'Refreshing Indian Mango Lassi',
    titleTa: 'மாம்பழ லஸ்ஸி',
    titleHi: 'मैंगो लस्सी',
    description: 'Thick, creamy, and chilled traditional Indian yogurt drink blended with sweet ripe mangoes and fragrant cardamom.',
    descriptionTa: 'தித்திக்கும் மாம்பழம், கெட்டித் தயிர், ஏலக்காய் சேர்த்து செய்யப்படும் குளிர்ச்சியான மாம்பழ லஸ்ஸி.',
    descriptionHi: 'मीठे पके आम, गाढ़े दही और इलायची पाउडर से बना ठंडा और ताजगी भरा भारतीय पेय।',
    imageUrl: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
    cuisine: 'North Indian',
    category: 'Drinks',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Quick meals'],
    allergens: ['Milk'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    totalTimeMinutes: 5,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.96,
    ratingCount: 370,
    ingredients: [
      { id: 'ing-62', name: 'Ripe Mango Pulp', nameTa: 'மாம்பழம்', nameHi: 'पका आम', quantity: 1.5, unit: 'cups', category: 'Produce' },
      { id: 'ing-63', name: 'Thick Curd / Yogurt', nameTa: 'தயிர்', nameHi: 'दही', quantity: 1.5, unit: 'cups', category: 'Dairy' },
      { id: 'ing-49', name: 'Sugar & Cardamom', nameTa: 'சர்க்கரை & ஏலக்காய்', nameHi: 'चीनी और इलायची', quantity: 2, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Blend mango pulp, curd, sugar, cardamom, and ice cubes until creamy and smooth. Serve chilled.', instructionTa: 'மிக்ஸியில் நுரைக்க அடித்து குளிர வைத்து பருகவும்.', instructionHi: 'सभी सामग्री को मिक्सी में फेंटें और ठंडा परोसें।' }
    ],
    nutrition: { calories: 210, protein: 7, carbohydrates: 38, fat: 4, fiber: 2, sugar: 32, isEstimated: true }
  },
  {
    id: 'rec-21',
    title: 'South Indian Curd Rice with Mustard Tadka',
    titleTa: 'தாளித்த தயிர் சாதம் (தயிர் சோறு)',
    titleHi: 'तड़का कर्ड राइस (दही चावल)',
    description: 'Soothing tempered yogurt rice finished with mustard seeds, ginger, green chillies, curry leaves, and pomegranate arils.',
    descriptionTa: 'குழைந்த சாதத்தில் கெட்டித் தயிர், பால் சேர்த்து கடுகு, இஞ்சி, பச்சை மிளகாய், மாதுளை தாளித்து செய்யப்படும் குளுமையான தயிர் சாதம்.',
    descriptionHi: 'मुलायम पके चावल में दही, दूध और राई, अदरक, हरी मिर्च व अनार के दानों का तड़का दिया हुआ पाचक भोजन।',
    imageUrl: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Rice dishes',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Healthy food', 'Quick meals'],
    allergens: ['Milk'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 5,
    totalTimeMinutes: 10,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.95,
    ratingCount: 320,
    ingredients: [
      { id: 'ing-21', name: 'Cooked Rice', nameTa: 'சாதம்', nameHi: 'चावल', quantity: 2, unit: 'cups', category: 'Grains' },
      { id: 'ing-63', name: 'Curd (Yogurt)', nameTa: 'தயிர்', nameHi: 'दही', quantity: 1.5, unit: 'cups', category: 'Dairy' },
      { id: 'ing-14', name: 'Mustard Seeds & Ginger', nameTa: 'கடுகு & இஞ்சி', nameHi: 'राई और अदरक', quantity: 1, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      { step: 1, instruction: 'Mash rice with curd, milk, and salt. Temper mustard, ginger, green chillies in oil and fold in.', instructionTa: 'சாதத்தில் தயிர் கலந்து கடுகு, இஞ்சி தாளித்து பரிமாறவும்.', instructionHi: 'चावल में दही मिलाएं और राई का तड़का लगाएं।' }
    ],
    nutrition: { calories: 250, protein: 7, carbohydrates: 42, fat: 6, fiber: 2, sugar: 4, isEstimated: true }
  },
  {
    id: 'rec-22',
    title: 'Crispy Falafel Wrap with Creamy Tahini',
    titleTa: 'ஃபலாஃபல் ரோல்',
    titleHi: 'कुरकुरा फलाफल रैप',
    description: 'Crispy herbed chickpea patties wrapped in warm flatbread with fresh lettuce, cucumber, tomatoes, and garlic tahini sauce.',
    descriptionTa: 'கொண்டைக்கடலை மற்றும் மூலிகைகளால் பொரித்த ஃபலாஃபல் உருண்டைகளை ரொட்டியில் காய்கறிகளுடன் வைத்து செய்யப்படும் சுவையான ரோல்.',
    descriptionHi: 'कुरकुरे काबुली चने के कबाब को पीटा ब्रेड में ताजी सलाद और लहसुन-ताहिनी सॉस के साथ लपेटकर बनाया गया रैप।',
    imageUrl: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Mediterranean',
    category: 'Lunch',
    dietaryTags: ['Vegetarian', 'Vegan', 'High Protein', 'Healthy food'],
    allergens: ['Sesame', 'Wheat'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    totalTimeMinutes: 30,
    servings: 2,
    difficulty: 'Medium',
    rating: 4.88,
    ratingCount: 160,
    ingredients: [
      { id: 'ing-38', name: 'Chickpeas', nameTa: 'கொண்டைக்கடலை', nameHi: 'काबुली चने', quantity: 1.5, unit: 'cups', category: 'Pantry' },
      { id: 'ing-22', name: 'Garlic & Parsley', nameTa: 'பூண்டு & கொத்தமல்லி', nameHi: 'लहसुन और धनिया', quantity: 0.5, unit: 'cup', category: 'Produce' },
      { id: 'ing-37', name: 'Pita Bread / Roti', nameTa: 'ரொட்டி', nameHi: 'पीटा ब्रेड', quantity: 2, unit: 'pcs', category: 'Bakery' }
    ],
    instructions: [
      { step: 1, instruction: 'Grind chickpeas with garlic and herbs coarsely, form small patties, and fry until golden crisp.', instructionTa: 'கொண்டைக்கடலையை அரைத்து வடை போல் பொரிக்கவும்.', instructionHi: 'चने और मसालों की टिक्की बनाकर तलें।' },
      { step: 2, instruction: 'Wrap in warm flatbread with tomatoes, lettuce, and tahini sauce.', instructionTa: 'ரொட்டியில் வைத்து சுருட்டவும்.', instructionHi: 'ब्रेड में सलाद और सॉस के साथ रोल करें।' }
    ],
    nutrition: { calories: 380, protein: 14, carbohydrates: 50, fat: 14, fiber: 8, sugar: 3, isEstimated: true }
  },
  {
    id: 'rec-23',
    title: 'Mediterranean Shakshuka with Poached Eggs',
    titleTa: 'ஷக்ஷூகா (தக்காளி முட்டை உணவு)',
    titleHi: 'शकशूका (टमाटर और पोच्ड एग्स)',
    description: 'Gently poached eggs in a simmering sauce of crushed tomatoes, sweet bell peppers, onions, garlic, and warm spices.',
    descriptionTa: 'தக்காளி, குடைமிளகாய், பூண்டு மற்றும் மசாலாக்களுடன் கடாயில் முட்டையை உடைத்து ஊற்றி வேகவைக்கப்படும் மத்திய தரைக்கடல் உணவு.',
    descriptionHi: 'टमाटर, शिमला मिर्च, प्याज और लहसुन की खुशबूदार ग्रेवी में हल्के पके हुए अंडे।',
    imageUrl: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Mediterranean',
    category: 'Breakfast',
    dietaryTags: ['Eggetarian', 'High Protein', 'Gluten-Free', 'Healthy food'],
    allergens: ['Egg'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 15,
    totalTimeMinutes: 20,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.92,
    ratingCount: 280,
    ingredients: [
      { id: 'ing-10', name: 'Eggs', nameTa: 'முட்டை', nameHi: 'अंडे', quantity: 3, unit: 'large', category: 'Protein' },
      { id: 'ing-11', name: 'Tomatoes', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 4, unit: 'ripe chopped', category: 'Produce' },
      { id: 'ing-66', name: 'Bell Pepper (Capsicum)', nameTa: 'குடைமிளகாய்', nameHi: 'शिमला मिर्च', quantity: 1, unit: 'diced', category: 'Produce' }
    ],
    instructions: [
      { step: 1, instruction: 'Simmer peppers and tomatoes with garlic and spices until rich.', instructionTa: 'தக்காளி, மிளகாய் மசாலாவுடன் வதக்கவும்.', instructionHi: 'टमाटर और शिमला मिर्च को पकाएं।' },
      { step: 2, instruction: 'Crack eggs directly into the sauce, cover and cook 6 minutes until whites set.', instructionTa: 'முட்டையை உடைத்து ஊற்றி மூடி வேகவிடவும்.', instructionHi: 'अंडे तोड़कर डालें और ढककर 6 मिनट पकाएं।' }
    ],
    nutrition: { calories: 260, protein: 14, carbohydrates: 15, fat: 16, fiber: 4, sugar: 7, isEstimated: true }
  },
  {
    id: 'rec-24',
    title: 'Punjabi Dhaba Chana Masala',
    titleTa: 'பஞ்சாபி சன்னா மசாலா',
    titleHi: 'पंजाबी चना मसाला (छोले)',
    description: 'Wholesome white chickpeas simmered in a dark, robust, and tangy onion-tomato gravy with aromatic Punjabi spices.',
    descriptionTa: 'வெள்ளை கொண்டைக்கடலை, தக்காளி, வெங்காயம் மற்றும் காரசார பஞ்சாபி மசாலாக்களுடன் செய்யப்படும் சுவையான சன்னா மசாலா.',
    descriptionHi: 'काबुली चने को प्याज, टमाटर, अनारदाना और खुशबूदार पंजाबी मसालों के साथ पकाया गया लोकप्रिय व्यंजन।',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    cuisine: 'North Indian',
    category: 'Curries',
    dietaryTags: ['Vegetarian', 'Vegan', 'High Protein', 'Gluten-Free'],
    allergens: [],
    prepTimeMinutes: 10,
    cookTimeMinutes: 25,
    totalTimeMinutes: 35,
    servings: 4,
    difficulty: 'Medium',
    rating: 4.93,
    ratingCount: 390,
    ingredients: [
      { id: 'ing-38', name: 'Chickpeas (Boiled)', nameTa: 'கொண்டைக்கடலை', nameHi: 'उबले काबुली चने', quantity: 2, unit: 'cups', category: 'Pantry' },
      { id: 'ing-02', name: 'Onion & Tomato Puree', nameTa: 'வெங்காயம் & தக்காளி விழுது', nameHi: 'प्याज और टमाटर प्यूरी', quantity: 2, unit: 'cups', category: 'Produce' },
      { id: 'ing-67', name: 'Chole Masala Powder', nameTa: 'சென்னா மசாலா', nameHi: 'छोले मसाला', quantity: 1.5, unit: 'tbsp', category: 'Spices' }
    ],
    instructions: [
      { step: 1, instruction: 'Sauté onion and tomato puree with chole spices until fragrant and deep red.', instructionTa: 'மசாலாவுடன் வெங்காயம் தக்காளி வதக்கவும்.', instructionHi: 'मसालों के साथ प्याज-टमाटर भूनें।' },
      { step: 2, instruction: 'Add boiled chickpeas and water, simmer 15 minutes, mash a few to thicken.', instructionTa: 'கொண்டைக்கடலை சேர்த்து கொதிக்கவிடவும்.', instructionHi: 'चने डालकर 15 मिनट उबालें।' }
    ],
    nutrition: { calories: 290, protein: 12, carbohydrates: 44, fat: 8, fiber: 10, sugar: 5, isEstimated: true }
  },
  {
    id: 'rec-25',
    title: 'Indian Masala Chai (Spiced Tea)',
    titleTa: 'நறுமண மசாலா டீ',
    titleHi: 'मसाला चाय',
    description: 'Authentic Indian milk tea brewed with strong black tea leaves, crushed ginger, cardamom pods, and warming cinnamon.',
    descriptionTa: 'இஞ்சி, ஏலக்காய், பட்டை மற்றும் தேயிலை சேர்த்து பாலில் காய்ச்சி செய்யப்படும் நறுமண மசாலா டீ.',
    descriptionHi: 'ताजा अदरक, हरी इलायची, दालचीनी और कड़क चायपत्ती को दूध के साथ उबालकर बनाई गई असली भारतीय मसाला चाय।',
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    cuisine: 'North Indian',
    category: 'Drinks',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Quick meals'],
    allergens: ['Milk'],
    prepTimeMinutes: 2,
    cookTimeMinutes: 8,
    totalTimeMinutes: 10,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.98,
    ratingCount: 650,
    ingredients: [
      { id: 'ing-68', name: 'Water & Milk', nameTa: 'தண்ணீர் & பால்', nameHi: 'पानी और दूध', quantity: 2, unit: 'cups total', category: 'Dairy' },
      { id: 'ing-69', name: 'Tea Leaves', nameTa: 'தேயிலை', nameHi: 'चायपत्ती', quantity: 2, unit: 'tsp', category: 'Pantry' },
      { id: 'ing-05', name: 'Ginger & Cardamom', nameTa: 'இஞ்சி & ஏலக்காய்', nameHi: 'अदरक और इलायची', quantity: 1, unit: 'tbsp crushed', category: 'Spices' },
      { id: 'ing-49', name: 'Sugar', nameTa: 'சர்க்கரை', nameHi: 'चीनी', quantity: 2, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Boil water with crushed ginger and cardamom for 2 minutes.', instructionTa: 'தண்ணீரில் இஞ்சி, ஏலக்காய் கொதிக்கவிடவும்.', instructionHi: 'पानी में अदरक और इलायची उबालें।' },
      { step: 2, instruction: 'Add tea leaves, milk, and sugar; bring to rolling boil 3 times and strain.', instructionTa: 'பால், தேயிலை, சர்க்கரை சேர்த்து காய்ச்சி வடிகட்டவும்.', instructionHi: 'दूध, चायपत्ती डालकर उबालें और छानें।' }
    ],
    nutrition: { calories: 85, protein: 3, carbohydrates: 12, fat: 3, fiber: 0, sugar: 10, isEstimated: true }
  },
  // 26-52
  {
    id: 'rec-26',
    title: 'Creamy Garlic Butter Mushroom Risotto',
    titleTa: 'காளான் ரிசொட்டோ சாதம்',
    titleHi: 'मशरूम रिसोट्टो',
    description: 'Slow-simmered Italian arborio rice with earthy pan-seared mushrooms, garlic, vegetable broth, and parmesan.',
    descriptionTa: 'காளான், பூண்டு மற்றும் வெண்ணெயுடன் மெதுவாக கிளறி வேகவைக்கப்படும் சுவையான இத்தாலிய அரிசி உணவு.',
    descriptionHi: 'मशरूम, लहसुन और मक्खन में धीमी आंच पर पकाया गया लाजवाब क्रीमी इटैलियन चावल।',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Italian',
    category: 'Rice dishes',
    dietaryTags: ['Vegetarian', 'Gluten-Free'],
    allergens: ['Milk'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 25,
    totalTimeMinutes: 35,
    servings: 2,
    difficulty: 'Medium',
    rating: 4.88,
    ratingCount: 140,
    ingredients: [
      { id: 'ing-70', name: 'Mushrooms', nameTa: 'காளான்', nameHi: 'मशरूम', quantity: 200, unit: 'g sliced', category: 'Produce' },
      { id: 'ing-43', name: 'Arborio or Basmati Rice', nameTa: 'அரிசி', nameHi: 'चावल', quantity: 1, unit: 'cup', category: 'Grains' },
      { id: 'ing-26', name: 'Butter', nameTa: 'வெண்ணெய்', nameHi: 'मक्खन', quantity: 2, unit: 'tbsp', category: 'Dairy' },
      { id: 'ing-22', name: 'Garlic', nameTa: 'பூண்டு', nameHi: 'लहसुन', quantity: 4, unit: 'cloves minced', category: 'Produce' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'finely chopped', category: 'Produce' }
    ],
    instructions: [
      { step: 1, instruction: 'Sauté mushrooms in 1 tbsp butter until browned; remove and set aside.', instructionTa: 'காளானை வெண்ணெயில் வதக்கி எடுக்கவும்.', instructionHi: 'मशरूम को मक्खन में भूनकर निकालें।' },
      { step: 2, instruction: 'In the same pan, sauté onions and garlic. Add rice and toast for 1 minute.', instructionTa: 'வெங்காயம் பூண்டு வதக்கி அரிசி சேர்க்கவும்.', instructionHi: 'प्याज-लहसुन भूनें और चावल डालें।' },
      { step: 3, instruction: 'Gradually add warm vegetable broth 1 ladle at a time until rice is creamy and tender.', instructionTa: 'சூடான தண்ணீர் ஊற்றி கிளறி வேகவிடவும்.', instructionHi: 'गरम पानी धीरे-धीरे डालकर मखमली होने तक पकाएं।' },
      { step: 4, instruction: 'Fold in mushrooms, extra butter, black pepper, and serve hot.', instructionTa: 'காளான் மற்றும் மிளகு சேர்த்து பரிமாறவும்.', instructionHi: 'मशरूम और काली मिर्च मिलाकर परोसें।' }
    ],
    nutrition: { calories: 340, protein: 8, carbohydrates: 54, fat: 10, fiber: 3, sugar: 2, isEstimated: true }
  },
  {
    id: 'rec-27',
    title: 'Crispy Veggie Burger with Sweet Onion',
    titleTa: 'மொறுமொறு வெஜ் பர்கர்',
    titleHi: 'क्रिस्पी वेज बर्गर',
    description: 'Golden spiced potato and green pea patty sandwiched in a toasted bun with crisp lettuce, sliced tomato, and tangy sauce.',
    descriptionTa: 'உருளைக்கிழங்கு மற்றும் பட்டாணி வடையுடன் ரொட்டியில் வைத்து செய்யப்படும் சுவையான பர்கர்.',
    descriptionHi: 'आलू और मटर की कुरकुरी टिक्की, ताजी सलाद और सॉस के साथ बना स्वादिष्ट बर्गर।',
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    cuisine: 'American',
    category: 'Lunch',
    dietaryTags: ['Vegetarian', 'Quick meals'],
    allergens: ['Wheat', 'Milk'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    totalTimeMinutes: 25,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.86,
    ratingCount: 215,
    ingredients: [
      { id: 'ing-71', name: 'Burger Buns', nameTa: 'பர்கர் பன்', nameHi: 'बर्गर बन', quantity: 2, unit: 'pcs', category: 'Bakery' },
      { id: 'ing-01', name: 'Potato', nameTa: 'உருளைக்கிழங்கு', nameHi: 'आलू', quantity: 2, unit: 'boiled & mashed', category: 'Produce' },
      { id: 'ing-72', name: 'Green Peas', nameTa: 'பச்சை பட்டாணி', nameHi: 'हरी मटर', quantity: 0.5, unit: 'cup', category: 'Produce' },
      { id: 'ing-02', name: 'Onion & Tomato Slices', nameTa: 'வெங்காயம் & தக்காளி துண்டுகள்', nameHi: 'प्याज और टमाटर', quantity: 4, unit: 'slices', category: 'Produce' },
      { id: 'ing-73', name: 'Bread Crumbs', nameTa: 'ரொட்டி தூள்', nameHi: 'ब्रेड क्रम्ब्स', quantity: 0.5, unit: 'cup', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Mash boiled potatoes and peas with spices, form patties, coat in breadcrumbs, and shallow fry until crispy.', instructionTa: 'உருளைக்கிழங்கு பட்டாணியை வடையாக தட்டி பொரிக்கவும்.', instructionHi: 'आलू-मटर की टिक्की बनाकर कुरकुरी सेकें।' },
      { step: 2, instruction: 'Toast burger buns with butter. Layer lettuce, patty, onion, tomato, and sauce; assemble and serve!', instructionTa: 'பன்னில் வடையை வைத்து பரிமாறவும்!', instructionHi: 'बन में टिक्की और सलाद रखकर सर्व करें!' }
    ],
    nutrition: { calories: 370, protein: 9, carbohydrates: 58, fat: 12, fiber: 5, sugar: 6, isEstimated: true }
  },
  {
    id: 'rec-28',
    title: 'Crispy Vegetable Spring Rolls',
    titleTa: 'காய்கறி ஸ்பிரிங் ரோல்',
    titleHi: 'वेज स्प्रिंग रोल्स',
    description: 'Golden crunchy spring rolls packed with seasoned cabbage, carrots, bell peppers, and garlic.',
    descriptionTa: 'மெலிதாக நறுக்கிய காய்கறிகள் நிரப்பப்பட்டு மொறுமொறுப்பாக பொரிக்கப்படும் ஸ்பிரிங் ரோல்.',
    descriptionHi: 'पत्तागोभी, गाजर और शिमला मिर्च से भरे कुरकुरे और स्वादिष्ट रोल्स।',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Asian',
    category: 'Snacks',
    dietaryTags: ['Vegetarian', 'Vegan'],
    allergens: ['Wheat', 'Soy'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    totalTimeMinutes: 30,
    servings: 3,
    difficulty: 'Medium',
    rating: 4.89,
    ratingCount: 180,
    ingredients: [
      { id: 'ing-74', name: 'Spring Roll Wrappers', nameTa: 'ஸ்பிரிங் ரோல் சீட்', nameHi: 'स्प्रिंग रोल शीट', quantity: 6, unit: 'sheets', category: 'Pantry' },
      { id: 'ing-56', name: 'Cabbage', nameTa: 'முட்டைக்கோஸ்', nameHi: 'पत्तागोभी', quantity: 1, unit: 'cup shredded', category: 'Produce' },
      { id: 'ing-57', name: 'Carrot', nameTa: 'கேரட்', nameHi: 'गाजर', quantity: 1, unit: 'julienned', category: 'Produce' },
      { id: 'ing-23', name: 'Soy Sauce', nameTa: 'சோயா சாஸ்', nameHi: 'सोया सॉस', quantity: 1, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-09', name: 'Oil for Frying', nameTa: 'பொரிக்க எண்ணெய்', nameHi: 'तलने के लिए तेल', quantity: 2, unit: 'cups', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Sauté shredded vegetables with garlic and soy sauce for 2 minutes on high heat.', instructionTa: 'காய்கறிகளை சாஸுடன் வதக்கவும்.', instructionHi: 'सब्जियों को सॉस के साथ तेज आंच पर भूनें।' },
      { step: 2, instruction: 'Place filling on wrapper, roll tightly sealing edges with water, and deep fry until golden crisp.', instructionTa: 'சீட்டில் வைத்து சுருட்டி பொன்னிறமாக பொரிக்கவும்.', instructionHi: 'शीट में भरकर रोल करें और कुरकुरा तलें।' }
    ],
    nutrition: { calories: 220, protein: 5, carbohydrates: 28, fat: 10, fiber: 3, sugar: 2, isEstimated: true }
  },
  {
    id: 'rec-29',
    title: 'Authentic Greek Salad with Olives',
    titleTa: 'கிரேக்க சாலட்',
    titleHi: 'ग्रीक सलाद',
    description: 'Crisp cucumbers, juicy vine tomatoes, red onion, kalamata olives, and feta cheese dressed in oregano olive oil.',
    descriptionTa: 'வெள்ளரிக்காய், தக்காளி, வெங்காயம், ஆலிவ் மற்றும் சீஸ் சேர்த்து செய்யப்படும் புத்துணர்ச்சியான சாலட்.',
    descriptionHi: 'खीरा, पके टमाटर, प्याज, जैतून और चीज से बना ताज़ा और सेहतमंद भूमध्यसागरीय सलाद।',
    imageUrl: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Mediterranean',
    category: 'Salads',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Healthy food', 'Quick meals'],
    allergens: ['Milk'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    totalTimeMinutes: 10,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.91,
    ratingCount: 160,
    ingredients: [
      { id: 'ing-75', name: 'Cucumber', nameTa: 'வெள்ளரிக்காய்', nameHi: 'खीरा', quantity: 1, unit: 'large sliced', category: 'Produce' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 2, unit: 'cut into wedges', category: 'Produce' },
      { id: 'ing-02', name: 'Red Onion', nameTa: 'வெங்காயம்', nameHi: 'लाल प्याज', quantity: 0.5, unit: 'thinly sliced', category: 'Produce' },
      { id: 'ing-76', name: 'Olives', nameTa: 'ஆலிவ் பழங்கள்', nameHi: 'जैतून', quantity: 8, unit: 'pitted', category: 'Pantry' },
      { id: 'ing-77', name: 'Feta or Paneer Cubes', nameTa: 'சீஸ் துண்டுகள்', nameHi: 'पनीर या चीज', quantity: 80, unit: 'g', category: 'Dairy' },
      { id: 'ing-32', name: 'Olive Oil & Lemon', nameTa: 'ஆலிவ் எண்ணெய் & எலுமிச்சை', nameHi: 'ऑलिव ऑयल और नींबू', quantity: 2, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Combine sliced cucumbers, tomatoes, red onion, and olives in a wide bowl.', instructionTa: 'காய்கறிகளை ஒரு பாத்திரத்தில் கலக்கவும்.', instructionHi: 'कटोरे में खीरा, टमाटर, प्याज और जैतून मिलाएं।' },
      { step: 2, instruction: 'Drizzle with extra virgin olive oil, lemon juice, salt, and oregano; top with cheese and enjoy.', instructionTa: 'ஆலிவ் எண்ணெய் மற்றும் சீஸ் தூவி பரிமாறவும்.', instructionHi: 'ऑलिव ऑयल, नींबू और चीज डालकर सर्व करें।' }
    ],
    nutrition: { calories: 180, protein: 6, carbohydrates: 10, fat: 14, fiber: 3, sugar: 4, isEstimated: true }
  },
  {
    id: 'rec-30',
    title: 'Creamy Spinach Palak Paneer',
    titleTa: 'பாலக் பன்னீர் (பசலைக் கீரை பன்னீர்)',
    titleHi: 'पालक पनीर',
    description: 'Vibrant green puree of tender spinach leaves gently spiced with garlic, ginger, and cumin, cradling soft paneer cubes.',
    descriptionTa: 'பசலைக்கீரை விழுது, பூண்டு, இஞ்சி மற்றும் பன்னீர் சேர்த்து செய்யப்படும் சத்தான கீரை பன்னீர் கறி.',
    descriptionHi: 'ताजा पालक की प्यूरी, लहसुन और खुशबूदार मसालों में डूबे हुए मुलायम पनीर के टुकड़े।',
    imageUrl: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80',
    cuisine: 'North Indian',
    category: 'Curries',
    dietaryTags: ['Vegetarian', 'High Protein', 'Gluten-Free', 'Healthy food'],
    allergens: ['Milk'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    totalTimeMinutes: 25,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.93,
    ratingCount: 350,
    ingredients: [
      { id: 'ing-78', name: 'Fresh Spinach (Palak)', nameTa: 'பசலைக் கீரை', nameHi: 'ताजा पालक', quantity: 300, unit: 'g washed', category: 'Produce' },
      { id: 'ing-25', name: 'Paneer (Cottage Cheese)', nameTa: 'பன்னீர்', nameHi: 'पनीर', quantity: 200, unit: 'g cubed', category: 'Dairy' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'finely chopped', category: 'Produce' },
      { id: 'ing-22', name: 'Garlic', nameTa: 'பூண்டு', nameHi: 'लहसुन', quantity: 5, unit: 'cloves minced', category: 'Produce' },
      { id: 'ing-27', name: 'Fresh Cream', nameTa: 'கிரீம்', nameHi: 'मलाई', quantity: 2, unit: 'tbsp', category: 'Dairy' }
    ],
    instructions: [
      { step: 1, instruction: 'Blanch spinach in boiling water for 2 minutes, then plunge into ice water to preserve vibrant green color; blend to smooth puree.', instructionTa: 'கீரையை சுடுநீரில் போட்டு அரைக்கவும்.', instructionHi: 'पालक को उबालकर ठंडे पानी में डालें और पीस लें।' },
      { step: 2, instruction: 'Sauté garlic and onions in butter/oil. Add pureed spinach and spices, simmer 4 minutes.', instructionTa: 'பூண்டு, வெங்காயம் வதக்கி கீரை விழுது சேர்க்கவும்.', instructionHi: 'लहसुन-प्याज भूनें और पालक प्यूरी मिलाएं।' },
      { step: 3, instruction: 'Add paneer cubes and cream. Simmer for 2 minutes and serve with warm rotis.', instructionTa: 'பன்னீர், கிரீம் சேர்த்து பரிமாறவும்.', instructionHi: 'पनीर और मलाई डालकर 2 मिनट पकाएं।' }
    ],
    nutrition: { calories: 280, protein: 14, carbohydrates: 8, fat: 21, fiber: 4, sugar: 2, isEstimated: true }
  },
  {
    id: 'rec-31',
    title: 'North Indian Rajma Masala (Kidney Beans)',
    titleTa: 'ராஜ்மா மசாலா',
    titleHi: 'राजमा मसाला (ढाबा स्टाइल)',
    description: 'Rich and buttery red kidney bean curry slow-cooked with tomatoes, onions, ginger, and aromatic garam masala.',
    descriptionTa: 'சிவப்பு ராஜ்மா பீன்ஸ், தக்காளி, வெங்காயம் சேர்த்து செய்யப்படும் வட இந்திய ராஜ்மா மசாலா.',
    descriptionHi: 'लाल राजमा को गाढ़ी टमाटर-प्याज की ग्रेवी और खुशबूदार मसालों में धीमी आंच पर पकाया गया लोकप्रिय व्यंजन।',
    imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    cuisine: 'North Indian',
    category: 'Curries',
    dietaryTags: ['Vegetarian', 'Vegan', 'High Protein', 'Gluten-Free'],
    allergens: [],
    prepTimeMinutes: 10,
    cookTimeMinutes: 25,
    totalTimeMinutes: 35,
    servings: 4,
    difficulty: 'Medium',
    rating: 4.96,
    ratingCount: 460,
    ingredients: [
      { id: 'ing-79', name: 'Rajma (Red Kidney Beans)', nameTa: 'ராஜ்மா', nameHi: 'उबला राजमा', quantity: 2, unit: 'cups boiled', category: 'Pantry' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 2, unit: 'pureed', category: 'Produce' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 3, unit: 'pureed', category: 'Produce' },
      { id: 'ing-05', name: 'Ginger Garlic Paste', nameTa: 'இஞ்சி பூண்டு', nameHi: 'अदरक लहसुन', quantity: 1, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-29', name: 'Garam Masala', nameTa: 'கரம் மசாலா', nameHi: 'गरम मसाला', quantity: 1, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      { step: 1, instruction: 'Sauté onion and ginger garlic paste until golden brown. Add tomato puree and spices.', instructionTa: 'வெங்காயம் தக்காளி மசாலா வதக்கவும்.', instructionHi: 'प्याज और टमाटर का मसाला भूनें।' },
      { step: 2, instruction: 'Add boiled rajma with cooking liquid. Mash a few beans with ladle and simmer for 15 minutes until thick.', instructionTa: 'ராஜ்மா சேர்த்து 15 நிமிடம் கொதிக்கவிடவும்.', instructionHi: 'राजमा डालकर 15 मिनट गाढ़ा होने तक पकाएं।' },
      { step: 3, instruction: 'Garnish with coriander and serve over steaming basmati rice (Rajma Chawal).', instructionTa: 'சாதத்துடன் பரிமாறவும்.', instructionHi: 'चावल (राजमा चावल) के साथ परोसें।' }
    ],
    nutrition: { calories: 270, protein: 13, carbohydrates: 45, fat: 4, fiber: 11, sugar: 3, isEstimated: true }
  },
  {
    id: 'rec-32',
    title: 'Fluffy Golden Buttermilk Pancakes',
    titleTa: 'பான் கேக் (இனிப்பு கேக் ரொட்டி)',
    titleHi: 'सॉफ्ट एंड फ्लफी पैनकेक्स',
    description: 'Thick, pillowy soft American breakfast pancakes served warm with melted butter and pure maple syrup or honey.',
    descriptionTa: 'மாவு, பால் மற்றும் வெண்ணெய் சேர்த்து தவாவில் சுடப்படும் மென்மையான பான் கேக்.',
    descriptionHi: 'मुलायम, स्पंजी और फूले हुए पैनकेक, मक्खन और शहद के साथ परोसें।',
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    cuisine: 'American',
    category: 'Breakfast',
    dietaryTags: ['Vegetarian', 'Quick meals'],
    allergens: ['Milk', 'Wheat', 'Egg'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    totalTimeMinutes: 15,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.9,
    ratingCount: 240,
    ingredients: [
      { id: 'ing-47', name: 'Flour (Maida or Wheat)', nameTa: 'மைதா அல்லது கோதுமை மாவு', nameHi: 'आटा / मैदा', quantity: 1, unit: 'cup', category: 'Pantry' },
      { id: 'ing-50', name: 'Baking Powder', nameTa: 'பேக்கிங் பவுடர்', nameHi: 'बेकिंग पाउडर', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { id: 'ing-49', name: 'Sugar', nameTa: 'சர்க்கரை', nameHi: 'चीनी', quantity: 1.5, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-51', name: 'Milk', nameTa: 'பால்', nameHi: 'दूध', quantity: 0.75, unit: 'cup', category: 'Dairy' },
      { id: 'ing-10', name: 'Egg', nameTa: 'முட்டை', nameHi: 'अंडा', quantity: 1, unit: 'large', category: 'Protein' },
      { id: 'ing-26', name: 'Butter', nameTa: 'வெண்ணெய்', nameHi: 'मक्खन', quantity: 2, unit: 'tbsp melted', category: 'Dairy' }
    ],
    instructions: [
      { step: 1, instruction: 'Whisk dry ingredients together. Whisk egg, milk, and melted butter in another bowl; fold gently together.', instructionTa: 'மாவு, முட்டை, பால் கலந்து மாவு கரைக்கவும்.', instructionHi: 'सूखी और गीली सामग्री मिलाकर घोल बनाएं।' },
      { step: 2, instruction: 'Pour 1/4 cup batter onto hot greased skillet. Flip when bubbles burst on surface, cook until golden.', instructionTa: 'தவாவில் ஊற்றி பொன்னிறமாக சுட்டெடுக்கவும்.', instructionHi: 'तवे पर घोल डालें और दोनों तरफ सुनहरा सेकें।' },
      { step: 3, instruction: 'Stack high, top with butter and drizzle with honey or maple syrup.', instructionTa: 'வெண்ணெய் தேன் ஊற்றி பரிமாறவும்.', instructionHi: 'मक्खन और शहद डालकर परोसें।' }
    ],
    nutrition: { calories: 310, protein: 8, carbohydrates: 46, fat: 10, fiber: 2, sugar: 12, isEstimated: true }
  },
  {
    id: 'rec-33',
    title: 'Gourmet Triple Cheese Grilled Sandwich',
    titleTa: 'சீஸ் கிரில்டு சாண்ட்விச்',
    titleHi: 'चीज ग्रिल्ड सैंडविच',
    description: 'Crispy golden buttered bread stuffed with melted cheddar and mozzarella cheese, with a touch of chilli flakes.',
    descriptionTa: 'மொறுமொறுப்பான பிரெட்டில் உருகிய சீஸ் வைத்து செய்யப்படும் சுவையான சீஸ் சாண்ட்விச்.',
    descriptionHi: 'मक्खन में क्रिस्पी सिकी ब्रेड जिसके अंदर पिघला हुआ चीज भरा होता है।',
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    cuisine: 'American',
    category: 'Snacks',
    dietaryTags: ['Vegetarian', 'Quick meals'],
    allergens: ['Milk', 'Wheat'],
    prepTimeMinutes: 3,
    cookTimeMinutes: 7,
    totalTimeMinutes: 10,
    servings: 1,
    difficulty: 'Easy',
    rating: 4.94,
    ratingCount: 310,
    ingredients: [
      { id: 'ing-80', name: 'Bread Slices', nameTa: 'பிரெட் துண்டுகள்', nameHi: 'ब्रेड स्लाइस', quantity: 2, unit: 'slices', category: 'Bakery' },
      { id: 'ing-54', name: 'Cheese (Cheddar/Mozzarella)', nameTa: 'சீஸ்', nameHi: 'चीज', quantity: 0.5, unit: 'cup shredded', category: 'Dairy' },
      { id: 'ing-26', name: 'Butter', nameTa: 'வெண்ணெய்', nameHi: 'मक्खन', quantity: 1, unit: 'tbsp', category: 'Dairy' },
      { id: 'ing-33', name: 'Chilli Flakes & Oregano', nameTa: 'சில்லி பிளேக்ஸ்', nameHi: 'चिली फ्लेक्स', quantity: 0.5, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      { step: 1, instruction: 'Butter outer sides of bread. Pack cheese and chilli flakes between slices.', instructionTa: 'பிரெட்டின் இடையே சீஸ் வைக்கவும்.', instructionHi: 'ब्रेड के बीच में चीज भरें।' },
      { step: 2, instruction: 'Grill in pan on medium heat until golden brown on both sides and cheese is completely gooey.', instructionTa: 'தவாவில் பொன்னிறமாக டோஸ்ட் செய்யவும்.', instructionHi: 'तवे पर दोनों तरफ से क्रिस्पी सेकें जब तक चीज पिघल न जाए।' }
    ],
    nutrition: { calories: 350, protein: 14, carbohydrates: 28, fat: 20, fiber: 2, sugar: 3, isEstimated: true }
  },
  {
    id: 'rec-34',
    title: 'Fresh Guacamole with Tortilla Chips',
    titleTa: 'அவகேடோ குவாக்கமோல் டிப்',
    titleHi: 'ताजा एवोकाडो गुआकामोल',
    description: 'Buttery mashed ripe avocados folded with lime juice, diced red onion, ripe tomato, cilantro, and jalapeño.',
    descriptionTa: 'பழுத்த வெண்ணெய் பழம் (அவகேடோ), எலுமிச்சை சாறு, தக்காளி, வெங்காயம் சேர்த்து செய்யப்படும் மெக்சிகன் உணவு.',
    descriptionHi: 'पके एवोकाडो, नींबू का रस, प्याज और टमाटर से बना स्वादिष्ट और पौष्टिक मैक्सिकन डिप।',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Mexican',
    category: 'Snacks',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Healthy food', 'Quick meals'],
    allergens: [],
    prepTimeMinutes: 8,
    cookTimeMinutes: 0,
    totalTimeMinutes: 8,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.95,
    ratingCount: 195,
    ingredients: [
      { id: 'ing-81', name: 'Ripe Avocados', nameTa: 'அவகேடோ (வெண்ணெய் பழம்)', nameHi: 'पके एवोकाडो', quantity: 2, unit: 'whole', category: 'Produce' },
      { id: 'ing-16', name: 'Fresh Lime Juice', nameTa: 'எலுமிச்சை சாறு', nameHi: 'नींबू का रस', quantity: 2, unit: 'tbsp', category: 'Produce' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 0.25, unit: 'cup finely diced', category: 'Produce' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 1, unit: 'diced', category: 'Produce' },
      { id: 'ing-34', name: 'Fresh Cilantro', nameTa: 'கொத்தமல்லி', nameHi: 'ताजा हरा धनिया', quantity: 2, unit: 'tbsp chopped', category: 'Produce' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'நमक', quantity: 0.5, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Scoop avocado flesh into a bowl and mash with fork leaving some chunks.', instructionTa: 'அவகேடோவை ஃபோர்க்கால் மசிக்கவும்.', instructionHi: 'एवोकाडो को कांटे से हल्का मैश करें।' },
      { step: 2, instruction: 'Stir in lime juice, salt, onion, tomato, and cilantro; serve with tortilla chips.', instructionTa: 'எலுமிச்சை சாறு, வெங்காயம், தக்காளி கலந்து பரிமாறவும்.', instructionHi: 'नींबू का रस, प्याज और टमाटर मिलाकर चिप्स के साथ परोसें।' }
    ],
    nutrition: { calories: 210, protein: 3, carbohydrates: 12, fat: 18, fiber: 8, sugar: 1, isEstimated: true }
  },
  {
    id: 'rec-35',
    title: 'Spicy South Indian Chettinad Mushroom Curry',
    titleTa: 'செட்டிநாடு காளான் வறுவல் மசாலா',
    titleHi: 'चेट्टीनाड मशरूम करी',
    description: 'Fiery and deeply aromatic Tamil Chettinad mushroom curry cooked with freshly roasted whole spices, shallots, and curry leaves.',
    descriptionTa: 'வறுத்து அரைத்த செட்டிநாடு மசாலா, சின்ன வெங்காயம் மற்றும் காளான் சேர்த்து காரசாரமாக செய்யப்படும் சுவையான குழம்பு.',
    descriptionHi: 'भूने हुए मसालों, प्याज और कढ़ी पत्ते के साथ बनी बेहद खुशबूदार और तीखी दक्षिण भारतीय मशरूम करी।',
    imageUrl: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Curries',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    allergens: [],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    totalTimeMinutes: 30,
    servings: 3,
    difficulty: 'Medium',
    rating: 4.91,
    ratingCount: 220,
    ingredients: [
      { id: 'ing-70', name: 'Button Mushrooms', nameTa: 'காளான்', nameHi: 'मशरूम', quantity: 250, unit: 'g halved', category: 'Produce' },
      { id: 'ing-02', name: 'Shallots (Small Onions)', nameTa: 'சின்ன வெங்காயம்', nameHi: 'छोटे प्याज', quantity: 15, unit: 'chopped', category: 'Produce' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 2, unit: 'chopped', category: 'Produce' },
      { id: 'ing-24', name: 'Black Pepper & Fennel Seeds', nameTa: 'மிளகு & சோம்பு', nameHi: 'काली मिर्च और सौंफ', quantity: 1, unit: 'tbsp roasted', category: 'Spices' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 2, unit: 'sprigs', category: 'Produce' }
    ],
    instructions: [
      { step: 1, instruction: 'Roast pepper, coriander, and fennel seeds; grind to a fine powder.', instructionTa: 'மசாலா வறுத்து அரைக்கவும்.', instructionHi: 'काली मिर्च और सौंफ भूनकर पीसें।' },
      { step: 2, instruction: 'Sauté shallots, tomatoes, and curry leaves in oil. Add ground spices.', instructionTa: 'வெங்காயம், தக்காளி வதக்கி மசாலா சேர்க்கவும்.', instructionHi: 'प्याज, टमाटर और मसाले भूनें।' },
      { step: 3, instruction: 'Add mushrooms, simmer for 10 minutes until gravy is thick and oil floats. Serve with parotta or rice.', instructionTa: 'காளான் சேர்த்து கொதிக்கவிடவும்.', instructionHi: 'मशरूम डालकर 10 मिनट पकाएं।' }
    ],
    nutrition: { calories: 160, protein: 6, carbohydrates: 16, fat: 8, fiber: 4, sugar: 3, isEstimated: true }
  },
  {
    id: 'rec-36',
    title: 'Crispy Stuffed Potato Samosa',
    titleTa: 'மொறுமொறு உருளைக்கிழங்கு சமோசா',
    titleHi: 'हलवाई स्टाइल खस्ता समोसा',
    description: 'Golden flaky triangular pastry parcels stuffed with spiced mashed potatoes, green peas, cumin, and ginger.',
    descriptionTa: 'காரசார உருளைக்கிழங்கு மசாலா உள்ளே வைத்து முக்கோண வடிவில் பொன்னிறமாக பொரிக்கப்படும் சமோசா.',
    descriptionHi: 'मसालेदार उबले आलू, हरी मटर और साबुत मसालों से भरा कुरकुरा और खस्ता समोसा।',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    cuisine: 'North Indian',
    category: 'Snacks',
    dietaryTags: ['Vegetarian', 'Vegan'],
    allergens: ['Wheat'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    totalTimeMinutes: 35,
    servings: 4,
    difficulty: 'Hard',
    rating: 4.97,
    ratingCount: 520,
    ingredients: [
      { id: 'ing-47', name: 'All-Purpose Flour (Maida)', nameTa: 'மைதா மாவு', nameHi: 'मैदा', quantity: 1.5, unit: 'cups', category: 'Pantry' },
      { id: 'ing-01', name: 'Potato', nameTa: 'உருளைக்கிழங்கு', nameHi: 'आलू', quantity: 3, unit: 'boiled & crumbled', category: 'Produce' },
      { id: 'ing-72', name: 'Green Peas', nameTa: 'பட்டாணி', nameHi: 'हरी मटर', quantity: 0.5, unit: 'cup', category: 'Produce' },
      { id: 'ing-13', name: 'Cumin & Coriander Seeds', nameTa: 'சீரகம் & மல்லி', nameHi: 'जीरा और धनिया', quantity: 1, unit: 'tbsp crushed', category: 'Spices' },
      { id: 'ing-09', name: 'Oil for Frying', nameTa: 'பொரிக்க எண்ணெய்', nameHi: 'तेल', quantity: 2, unit: 'cups', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Knead stiff dough with flour, carom seeds, ghee, and water. Rest 15 minutes.', instructionTa: 'மைதா மாவு பிசைந்து வைக்கவும்.', instructionHi: 'सख्त आटा गूंथ कर रखें।' },
      { step: 2, instruction: 'Sauté cumin, ginger, chillies, peas, and potatoes with spices for filling.', instructionTa: 'உருளைக்கிழங்கு மசாலா தயாரிக்கவும்.', instructionHi: 'आलू मसाला तैयार करें।' },
      { step: 3, instruction: 'Roll dough into cones, fill with potato mix, seal edges, and slow fry in medium-low oil until ultra-crispy.', instructionTa: 'மடித்து எண்ணெயில் பொரித்தெடுக்கவும்.', instructionHi: 'समोसा भरकर धीमी आंच पर खस्ता होने तक तलें।' }
    ],
    nutrition: { calories: 290, protein: 5, carbohydrates: 38, fat: 13, fiber: 3, sugar: 1, isEstimated: true }
  },
  {
    id: 'rec-37',
    title: 'Nutritious Banana Oatmeal Energy Pancakes',
    titleTa: 'வாழைப்பழ ஓட்ஸ் பான் கேக்',
    titleHi: 'बनाना ओट्स हेल्दी पैनकेक्स',
    description: 'Flourless, naturally sweetened blender pancakes made with ripe bananas, rolled oats, milk, and a dash of cinnamon.',
    descriptionTa: 'கனிந்த வாழைப்பழம், ஓட்ஸ் மற்றும் பால் சேர்த்து மிக்ஸியில் அடித்து செய்யப்படும் சத்தான காலை உணவு.',
    descriptionHi: 'पके केले, ओट्स और दालचीनी से बने बिना मैदे के पौष्टिक व स्वादिष्ट पैनकेक।',
    imageUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80',
    cuisine: 'American',
    category: 'Breakfast',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Healthy food', 'Quick meals'],
    allergens: ['Milk', 'Egg'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 8,
    totalTimeMinutes: 13,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.88,
    ratingCount: 165,
    ingredients: [
      { id: 'ing-82', name: 'Ripe Bananas', nameTa: 'பழுத்த வாழைப்பழம்', nameHi: 'पके केले', quantity: 2, unit: 'medium', category: 'Produce' },
      { id: 'ing-83', name: 'Rolled Oats', nameTa: 'ஓட்ஸ்', nameHi: 'ओट्स', quantity: 1, unit: 'cup', category: 'Pantry' },
      { id: 'ing-10', name: 'Egg (or 1/4 cup yogurt)', nameTa: 'முட்டை', nameHi: 'अंडा या दही', quantity: 1, unit: 'large', category: 'Protein' },
      { id: 'ing-51', name: 'Milk', nameTa: 'பால்', nameHi: 'दूध', quantity: 0.25, unit: 'cup', category: 'Dairy' },
      { id: 'ing-84', name: 'Cinnamon Powder', nameTa: 'பட்டை தூள்', nameHi: 'दालचीनी पाउडर', quantity: 0.5, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      { step: 1, instruction: 'Blend ripe bananas, oats, egg, milk, and cinnamon in blender until smooth.', instructionTa: 'அனைத்தையும் மிக்ஸியில் அரைக்கவும்.', instructionHi: 'केले, ओट्स और दूध को मिक्सी में पीसें।' },
      { step: 2, instruction: 'Cook batter dollops on medium skillet for 2 minutes per side until fluffy and golden.', instructionTa: 'தவாவில் ஊற்றி இருபுறமும் சுட்டெடுக்கவும்.', instructionHi: 'तवे पर दोनों तरफ सेकें।' }
    ],
    nutrition: { calories: 240, protein: 8, carbohydrates: 44, fat: 5, fiber: 5, sugar: 14, isEstimated: true }
  },
  {
    id: 'rec-38',
    title: 'Japanese Miso Tofu Noodle Soup',
    titleTa: 'டோஃபு நூடுல்ஸ் சூப்',
    titleHi: 'टोफू नूडल सूप',
    description: 'Warm and comforting Japanese broth with silky tofu cubes, ramen noodles, greens, garlic, and savory miso broth.',
    descriptionTa: 'டோஃபு, நூடுல்ஸ் மற்றும் சோயா சூப் சேர்த்து செய்யப்படும் சத்தான ஜப்பானிய சூப்.',
    descriptionHi: 'मुलायम टोफू, नूडल्स और हरी सब्जियों से बना स्वादिष्ट और सेहतमंद जापानी सूप।',
    imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Asian',
    category: 'Soups',
    dietaryTags: ['Vegetarian', 'Vegan', 'High Protein', 'Healthy food'],
    allergens: ['Soy', 'Wheat'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 12,
    totalTimeMinutes: 17,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.87,
    ratingCount: 140,
    ingredients: [
      { id: 'ing-85', name: 'Tofu', nameTa: 'டோஃபு', nameHi: 'टोफू', quantity: 150, unit: 'g cubed', category: 'Protein' },
      { id: 'ing-55', name: 'Noodles', nameTa: 'நூடுல்ஸ்', nameHi: 'नूडल्स', quantity: 100, unit: 'g', category: 'Pantry' },
      { id: 'ing-23', name: 'Soy Sauce', nameTa: 'சோயா சாஸ்', nameHi: 'सोया सॉस', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-22', name: 'Garlic & Ginger', nameTa: 'பூண்டு & இஞ்சி', nameHi: 'लहसुन और अदरक', quantity: 1, unit: 'tbsp minced', category: 'Produce' }
    ],
    instructions: [
      { step: 1, instruction: 'Simmer vegetable broth with garlic, ginger, and soy sauce for 5 minutes.', instructionTa: 'பூண்டு, இஞ்சி சேர்த்து சூப் கொதிக்கவிடவும்.', instructionHi: 'पानी में लहसुन, अदरक और सोया सॉस उबालें।' },
      { step: 2, instruction: 'Add noodles and tofu cubes, simmer 4 minutes until noodles are tender; serve hot.', instructionTa: 'நூடுல்ஸ், டோஃபு சேர்த்து வேகவிட்டு பரிமாறவும்.', instructionHi: 'नूडल्स और टोफू डालकर 4 मिनट पकाएं।' }
    ],
    nutrition: { calories: 290, protein: 16, carbohydrates: 42, fat: 7, fiber: 4, sugar: 2, isEstimated: true }
  },
  {
    id: 'rec-39',
    title: 'Mexican Fiesta Loaded Burrito Bowl',
    titleTa: 'மெக்சிகன் பூரிட்டோ பவுல் சாதம்',
    titleHi: 'मैक्सिकन बरीटो बाउल',
    description: 'Deconstructed burrito with cilantro-lime rice, seasoned black beans, corn salsa, avocado, and shredded cheese.',
    descriptionTa: 'கொத்தமல்லி எலுமிச்சை சாதம், காரசார கருப்பு பீன்ஸ், சோளம், அவகேடோ மற்றும் சீஸ் கலந்த அருமையான கிண்ண உணவு.',
    descriptionHi: 'नींबू-धनिया चावल, मसालेदार बीन्स, स्वीट कॉर्न साल्सा और एवोकाडो से भरा स्वादिष्ट बाउल।',
    imageUrl: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Mexican',
    category: 'Rice dishes',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'High Protein', 'Healthy food'],
    allergens: ['Milk'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    totalTimeMinutes: 25,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.93,
    ratingCount: 275,
    ingredients: [
      { id: 'ing-21', name: 'Cooked Rice', nameTa: 'வடித்த சாதம்', nameHi: 'पका चावल', quantity: 2, unit: 'cups', category: 'Grains' },
      { id: 'ing-35', name: 'Black Beans / Rajma', nameTa: 'கருப்பு பீன்ஸ்', nameHi: 'बीन्स / राजमा', quantity: 1, unit: 'cup spiced', category: 'Pantry' },
      { id: 'ing-36', name: 'Sweet Corn', nameTa: 'மக்காச்சோளம்', nameHi: 'स्वीट कॉर्न', quantity: 0.5, unit: 'cup', category: 'Produce' },
      { id: 'ing-11', name: 'Tomato & Onion Salsa', nameTa: 'சல்சா', nameHi: 'साल्सा', quantity: 0.5, unit: 'cup', category: 'Produce' },
      { id: 'ing-54', name: 'Cheese or Sour Cream', nameTa: 'சீஸ்', nameHi: 'चीज', quantity: 2, unit: 'tbsp', category: 'Dairy' }
    ],
    instructions: [
      { step: 1, instruction: 'Toss warm rice with lime juice, chopped cilantro, and salt.', instructionTa: 'சாதத்தில் எலுமிச்சை சாறு கொத்தமல்லி கலக்கவும்.', instructionHi: 'चावल में नींबू का रस और धनिया मिलाएं।' },
      { step: 2, instruction: 'Assemble in bowls: base of cilantro rice, topped with spiced beans, corn, fresh salsa, and cheese.', instructionTa: 'கிண்ணத்தில் சாதம், பீன்ஸ், சோளம் வைத்து பரிமாறவும்.', instructionHi: 'बाउल में चावल, बीन्स, कॉर्न और साल्सा रखकर सर्व करें।' }
    ],
    nutrition: { calories: 380, protein: 14, carbohydrates: 62, fat: 9, fiber: 10, sugar: 4, isEstimated: true }
  },
  {
    id: 'rec-40',
    title: 'Warm Mediterranean Spiced Lentil Soup',
    titleTa: 'பருப்பு சூப் (லென்டில் சூப்)',
    titleHi: 'दाल का पौष्टिक सूप',
    description: 'Velvety red lentil soup simmered with cumin, carrots, onions, lemon juice, and fragrant Mediterranean herbs.',
    descriptionTa: 'மசூர் பருப்பு, கேரட், வெங்காயம் மற்றும் எலுமிச்சை சாறு சேர்த்து செய்யப்படும் சத்தான ஆரோக்கியமான சூப்.',
    descriptionHi: 'लाल मसूर दाल, गाजर, प्याज और जीरे से बना गाढ़ा, गर्म और पौष्टिक सूप।',
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Mediterranean',
    category: 'Soups',
    dietaryTags: ['Vegetarian', 'Vegan', 'High Protein', 'Gluten-Free', 'Healthy food'],
    allergens: [],
    prepTimeMinutes: 5,
    cookTimeMinutes: 20,
    totalTimeMinutes: 25,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.89,
    ratingCount: 155,
    ingredients: [
      { id: 'ing-86', name: 'Red Lentils (Masoor Dal)', nameTa: 'மசூர் பருப்பு', nameHi: 'लाल मसूर दाल', quantity: 1, unit: 'cup', category: 'Pantry' },
      { id: 'ing-57', name: 'Carrot', nameTa: 'கேரட்', nameHi: 'गाजर', quantity: 1, unit: 'diced', category: 'Produce' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'chopped', category: 'Produce' },
      { id: 'ing-13', name: 'Cumin Powder', nameTa: 'சீரக தூள்', nameHi: 'जीरा पाउडर', quantity: 1, unit: 'tsp', category: 'Spices' },
      { id: 'ing-16', name: 'Lemon Juice', nameTa: 'எலுமிச்சை சாறு', nameHi: 'नींबू का रस', quantity: 2, unit: 'tbsp', category: 'Produce' }
    ],
    instructions: [
      { step: 1, instruction: 'Sauté onions and carrots in olive oil. Add washed lentils, cumin, salt, and 4 cups water.', instructionTa: 'வெங்காயம், கேரட் வதக்கி பருப்பு தண்ணீர் சேர்க்கவும்.', instructionHi: 'प्याज और गाजर भूनकर दाल और पानी डालें।' },
      { step: 2, instruction: 'Simmer 20 minutes until tender; blend half for creamy body, stir in fresh lemon juice and serve.', instructionTa: 'வெந்ததும் பாதியை அரைத்து எலுமிச்சை சாறு கலந்து பரிமாறவும்.', instructionHi: 'गलने तक पकाएं, हल्का पीसें और नींबू का रस मिलाएं।' }
    ],
    nutrition: { calories: 210, protein: 12, carbohydrates: 36, fat: 2, fiber: 7, sugar: 3, isEstimated: true }
  },
  {
    id: 'rec-41',
    title: 'Crispy South Indian Medu Vada',
    titleTa: 'மொருமொரு மேது வடை',
    titleHi: 'क्रिस्पी मेदू वड़ा',
    description: 'Golden donut-shaped fritters made from aerated urad dal batter, seasoned with black peppercorns, curry leaves, and ginger.',
    descriptionTa: 'உளுத்தம் பருப்பு அரைத்து மிளகு, இஞ்சி, கறிவேப்பிலை சேர்த்து மொறுமொறுப்பாக எண்ணெயில் பொரித்தெடுக்கப்படும் சுவையான வடை.',
    descriptionHi: 'उड़द दाल के घोल में साबुत काली मिर्च, अदरक और कढ़ी पत्ता डालकर कुरकुरे तले गए मेदू वड़े।',
    imageUrl: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Breakfast',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'High Protein'],
    allergens: [],
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    totalTimeMinutes: 30,
    servings: 3,
    difficulty: 'Medium',
    rating: 4.96,
    ratingCount: 380,
    ingredients: [
      { id: 'ing-15', name: 'Urad Dal', nameTa: 'உளுத்தம் பருப்பு', nameHi: 'उड़द दाल', quantity: 1, unit: 'cup soaked', category: 'Pantry' },
      { id: 'ing-05', name: 'Ginger', nameTa: 'இஞ்சி', nameHi: 'अदरक', quantity: 1, unit: 'inch minced', category: 'Produce' },
      { id: 'ing-24', name: 'Black Peppercorns', nameTa: 'முழு மிளகு', nameHi: 'काली मिर्च', quantity: 1, unit: 'tsp', category: 'Spices' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 1, unit: 'sprig', category: 'Produce' },
      { id: 'ing-09', name: 'Oil for Frying', nameTa: 'எண்ணெய்', nameHi: 'तेल', quantity: 2, unit: 'cups', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Grind soaked urad dal with minimal ice water into fluffy white batter. Fold in pepper, ginger, and curry leaves.', instructionTa: 'உளுந்தை நைஸாக அரைத்து மிளகு இஞ்சி சேர்க்கவும்.', instructionHi: 'दाल को कम पानी के साथ गाढ़ा पीसें और मसाले मिलाएं।' },
      { step: 2, instruction: 'Shape with hole in center on wet palm and slide into hot oil. Fry until crispy golden. Serve with sambar.', instructionTa: 'நடுவில் துளையிட்டு எண்ணெயில் பொரித்து சாம்பாருடன் பரிமாறவும்.', instructionHi: 'बीच में छेद करके वड़े का आकार दें और सुनहरा तलें।' }
    ],
    nutrition: { calories: 230, protein: 9, carbohydrates: 26, fat: 10, fiber: 4, sugar: 1, isEstimated: true }
  },
  {
    id: 'rec-42',
    title: 'North Indian Stuffed Aloo Paratha',
    titleTa: 'ஆலூ பரோட்டா (உருளைக்கிழங்கு ரொட்டி)',
    titleHi: 'आलू पराठा (मक्खन के साथ)',
    description: 'Warm whole wheat flatbread stuffed with a spiced mashed potato and onion filling, roasted with golden ghee.',
    descriptionTa: 'கோதுமை மாவு ரொட்டியின் உள்ளே காரசார உருளைக்கிழங்கு மசாலா வைத்து நெய்யில் சுடப்படும் சுவையான ஆலூ பரோட்டா.',
    descriptionHi: 'गेहूं के आटे की लोई में मसालेदार आलू भरकर देसी घी में कुरकुरा सेका गया स्वादिष्ट पराठा।',
    imageUrl: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80',
    cuisine: 'North Indian',
    category: 'Breakfast',
    dietaryTags: ['Vegetarian'],
    allergens: ['Wheat', 'Milk'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    totalTimeMinutes: 25,
    servings: 2,
    difficulty: 'Medium',
    rating: 4.97,
    ratingCount: 480,
    ingredients: [
      { id: 'ing-87', name: 'Whole Wheat Flour (Atta)', nameTa: 'கோதுமை மாவு', nameHi: 'गेहूं का आटा', quantity: 1.5, unit: 'cups', category: 'Pantry' },
      { id: 'ing-01', name: 'Potato', nameTa: 'உருளைக்கிழங்கு', nameHi: 'आलू', quantity: 2, unit: 'boiled & mashed', category: 'Produce' },
      { id: 'ing-04', name: 'Green Chillies & Ginger', nameTa: 'பச்சை மிளகாய் & இஞ்சி', nameHi: 'हरी मिर्च और अदरक', quantity: 1, unit: 'tbsp minced', category: 'Produce' },
      { id: 'ing-45', name: 'Desi Ghee or Butter', nameTa: 'நெய் அல்லது வெண்ணெய்', nameHi: 'देसी घी / मक्खन', quantity: 2, unit: 'tbsp', category: 'Dairy' }
    ],
    instructions: [
      { step: 1, instruction: 'Mix mashed potatoes with green chillies, ginger, spices, and salt.', instructionTa: 'உருளைக்கிழங்கு மசாலா கலக்கவும்.', instructionHi: 'आलू में मसाले और मिर्च मिलाएं।' },
      { step: 2, instruction: 'Stuff inside wheat dough balls, roll gently without tearing, roast on tawa with ghee until blistered and golden.', instructionTa: 'மாவை தேய்த்து மசாலா வைத்து நெய்யில் சுட்டெடுக்கவும்.', instructionHi: 'आटे में भरकर बेलें और घी लगाकर तवे पर सेकें।' }
    ],
    nutrition: { calories: 330, protein: 7, carbohydrates: 50, fat: 12, fiber: 5, sugar: 2, isEstimated: true }
  },
  {
    id: 'rec-43',
    title: 'South Indian Idli with Fresh Coconut Chutney',
    titleTa: 'மல்லிகைப் பூ இட்லி & தேங்காய் சட்னி',
    titleHi: 'सॉफ्ट इडली और नारियल चटनी',
    description: 'Steamed fluffy rice and lentil cakes served with freshly ground coconut, green chilli, and ginger chutney.',
    descriptionTa: 'பஞ்சு போன்ற வெண்மையான மல்லிகைப் பூ இட்லி மற்றும் காரசாரமான தேங்காய் சட்னி.',
    descriptionHi: 'भाप में पकी हुई एकदम मुलायम इडली और ताजे नारियल की स्वादिष्ट चटनी।',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Breakfast',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Healthy food'],
    allergens: [],
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    totalTimeMinutes: 15,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.98,
    ratingCount: 520,
    ingredients: [
      { id: 'ing-40', name: 'Idli Batter', nameTa: 'இட்லி மாவு', nameHi: 'इडली बैटर', quantity: 2, unit: 'cups fermented', category: 'Pantry' },
      { id: 'ing-88', name: 'Fresh Grated Coconut', nameTa: 'துருவிய தேங்காய்', nameHi: 'कद्दूकस ताजा नारियल', quantity: 1, unit: 'cup', category: 'Produce' },
      { id: 'ing-04', name: 'Green Chillies', nameTa: 'பச்சை மிளகாய்', nameHi: 'हरी मिर्च', quantity: 2, unit: 'pcs', category: 'Produce' },
      { id: 'ing-14', name: 'Mustard Seeds & Curry Leaves', nameTa: 'கடுகு & கறிவேப்பிலை', nameHi: 'राई और कढ़ी पत्ता', quantity: 1, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      { step: 1, instruction: 'Pour batter into oiled idli molds and steam on high for 10 minutes until springy to touch.', instructionTa: 'இட்லி தட்டில் மாவு ஊற்றி 10 நிமிடம் ஆவியில் வேகவைக்கவும்.', instructionHi: 'इडली स्टैंड में 10 मिनट भाप में पकाएं।' },
      { step: 2, instruction: 'Grind coconut, green chillies, ginger, salt with water; temper with mustard seeds and curry leaves.', instructionTa: 'தேங்காய், மிளகாய் அரைத்து கடுகு தாளிக்கவும்.', instructionHi: 'नारियल और मिर्च पीसकर राई का तड़का लगाएं।' }
    ],
    nutrition: { calories: 240, protein: 6, carbohydrates: 40, fat: 6, fiber: 3, sugar: 1, isEstimated: true }
  },
  {
    id: 'rec-44',
    title: 'Loaded Cheddar & Chive Baked Potato',
    titleTa: 'பேக் செய்த உருளைக்கிழங்கு',
    titleHi: 'लोडेड बेक्ड पोटैटो',
    description: 'Crisp-skinned oven-baked fluffy potato split open and piled with melted cheddar cheese, sour cream, and fresh chives.',
    descriptionTa: 'அவனில் பேக் செய்யப்பட்ட மொறுமொறு உருளைக்கிழங்கில் சீஸ் மற்றும் கிரீம் வைத்து செய்யப்படும் உணவு.',
    descriptionHi: 'ओवन में बेक किया हुआ आलू जिसे बीच से काटकर पिघला चीज और क्रीम भरा जाता है।',
    imageUrl: 'https://images.unsplash.com/photo-1568584711271-6c929fb49b60?auto=format&fit=crop&w=800&q=80',
    cuisine: 'American',
    category: 'Dinner',
    dietaryTags: ['Vegetarian', 'Gluten-Free'],
    allergens: ['Milk'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 30,
    totalTimeMinutes: 35,
    servings: 1,
    difficulty: 'Easy',
    rating: 4.87,
    ratingCount: 130,
    ingredients: [
      { id: 'ing-01', name: 'Large Russet Potato', nameTa: 'பெரிய உருளைக்கிழங்கு', nameHi: 'बड़ा आलू', quantity: 1, unit: 'large', category: 'Produce' },
      { id: 'ing-54', name: 'Cheddar Cheese', nameTa: 'சீஸ்', nameHi: 'चीज', quantity: 0.25, unit: 'cup shredded', category: 'Dairy' },
      { id: 'ing-26', name: 'Butter', nameTa: 'வெண்ணெய்', nameHi: 'मक्खन', quantity: 1, unit: 'tbsp', category: 'Dairy' },
      { id: 'ing-27', name: 'Sour Cream or Yogurt', nameTa: 'கிரீம்', nameHi: 'मलाई / दही', quantity: 2, unit: 'tbsp', category: 'Dairy' }
    ],
    instructions: [
      { step: 1, instruction: 'Prick potato skin with fork, rub with oil and salt, bake at 200°C for 35 minutes until tender.', instructionTa: 'உருளைக்கிழங்கை அவனில் 35 நிமிடம் பேக் செய்யவும்.', instructionHi: 'आलू को 35 मिनट ओवन में बेक करें।' },
      { step: 2, instruction: 'Split open lengthwise, fluff inside with fork, top with butter, cheese, and sour cream; enjoy hot.', instructionTa: 'நடுவில் பிளந்து வெண்ணெய் சீஸ் வைத்து உண்ணவும்.', instructionHi: 'बीच से काटकर मक्खन और चीज भरकर खाएं।' }
    ],
    nutrition: { calories: 320, protein: 7, carbohydrates: 38, fat: 16, fiber: 4, sugar: 2, isEstimated: true }
  },
  {
    id: 'rec-45',
    title: "Spicy Penne all'Arrabbiata",
    titleTa: 'பென்னே அரபியாட்டா பாஸ்தா',
    titleHi: 'पेने अराबियाटा पास्ता',
    description: 'Fiery Italian pasta coated in a rich crushed tomato sauce infused with copious garlic, olive oil, and dried red chilli flakes.',
    descriptionTa: 'காரசாரமான தக்காளி பூண்டு சாஸில் வேகவைத்த பாஸ்தா சேர்த்து செய்யப்படும் இத்தாலிய உணவு.',
    descriptionHi: 'लहसुन, ऑलिव ऑयल और तीखे चिली फ्लेक्स से बनी टमाटर की गाढ़ी सॉस में पका पास्ता।',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281080?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Italian',
    category: 'Pasta',
    dietaryTags: ['Vegetarian', 'Vegan', 'Quick meals'],
    allergens: ['Wheat'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 15,
    totalTimeMinutes: 20,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.88,
    ratingCount: 195,
    ingredients: [
      { id: 'ing-31', name: 'Penne Pasta', nameTa: 'பென்னே பாஸ்தா', nameHi: 'पेने पास्ता', quantity: 200, unit: 'g', category: 'Pantry' },
      { id: 'ing-11', name: 'Crushed Tomatoes', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 1.5, unit: 'cups', category: 'Produce' },
      { id: 'ing-22', name: 'Garlic', nameTa: 'பூண்டு', nameHi: 'लहसुन', quantity: 5, unit: 'cloves minced', category: 'Produce' },
      { id: 'ing-33', name: 'Red Chilli Flakes', nameTa: 'மிளகாய் வற்றல் தூவல்', nameHi: 'चिली फ्लेक्स', quantity: 1, unit: 'tsp', category: 'Spices' },
      { id: 'ing-32', name: 'Olive Oil', nameTa: 'ஆலிவ் எண்ணெய்', nameHi: 'ऑलिव ऑयल', quantity: 2, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Boil penne al dente in salted water. Sauté garlic and red chilli flakes in olive oil.', instructionTa: 'பாஸ்தாவை வேகவைத்து ஆலிவ் எண்ணெயில் பூண்டு வதக்கவும்.', instructionHi: 'पास्ता उबालें और तेल में लहसुन-मिर्च भूनें।' },
      { step: 2, instruction: 'Add tomatoes, simmer 10 minutes until thickened. Toss pasta in sauce with fresh basil.', instructionTa: 'தக்காளி சாஸ் கொதித்ததும் பாஸ்தாவை சேர்த்து கிளறவும்.', instructionHi: 'टमाटर सॉस पकाएं और पास्ता मिलाकर सर्व करें।' }
    ],
    nutrition: { calories: 350, protein: 10, carbohydrates: 56, fat: 9, fiber: 4, sugar: 5, isEstimated: true }
  },
  {
    id: 'rec-46',
    title: 'Authentic South Indian Avial',
    titleTa: 'பாரம்பரிய அவியல்',
    titleHi: 'केरल अवियल (मिश्रित सब्जी)',
    description: 'Thick mixed vegetable stew gently simmered with ground coconut, green chillies, cumin, and finished with fresh curd and coconut oil.',
    descriptionTa: 'காய்கறிகள், அரைத்த தேங்காய் விழுது, தயிர் மற்றும் தேங்காய் எண்ணெய் சேர்த்து செய்யப்படும் சுவையான அவியல்.',
    descriptionHi: 'मिश्रित सब्जियों को नारियल, हरी मिर्च और दही के साथ पकाकर ऊपर से नारियल तेल का तड़का।',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Curries',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Healthy food'],
    allergens: ['Milk'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    totalTimeMinutes: 30,
    servings: 4,
    difficulty: 'Medium',
    rating: 4.93,
    ratingCount: 230,
    ingredients: [
      { id: 'ing-01', name: 'Potato & Carrots', nameTa: 'உருளைக்கிழங்கு & கேரட்', nameHi: 'आलू और गाजर', quantity: 1.5, unit: 'cups cut long', category: 'Produce' },
      { id: 'ing-88', name: 'Fresh Grated Coconut', nameTa: 'துருவிய தேங்காய்', nameHi: 'कद्दूकस नारियल', quantity: 1, unit: 'cup', category: 'Produce' },
      { id: 'ing-63', name: 'Curd / Yogurt', nameTa: 'தயிர்', nameHi: 'दही', quantity: 0.5, unit: 'cup', category: 'Dairy' },
      { id: 'ing-13', name: 'Cumin & Green Chillies', nameTa: 'சீரகம் & பச்சை மிளகாய்', nameHi: 'जीरा और हरी मिर्च', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-89', name: 'Coconut Oil', nameTa: 'தேங்காய் எண்ணெய்', nameHi: 'नारियल तेल', quantity: 1.5, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Steam cut vegetables with turmeric and salt until tender but crisp.', instructionTa: 'காய்கறிகளை மஞ்சள் தூள் உப்பு சேர்த்து வேகவைக்கவும்.', instructionHi: 'सब्जियों को हल्का उबालें।' },
      { step: 2, instruction: 'Coarsely grind coconut, cumin, and green chillies; add to vegetables and cook 3 minutes.', instructionTa: 'தேங்காய் விழுதை சேர்த்து 3 நிமிடம் கொதிக்கவிடவும்.', instructionHi: 'नारियल पेस्ट मिलाकर 3 मिनट पकाएं।' },
      { step: 3, instruction: 'Turn off heat, stir in whisked curd, curry leaves, and fresh coconut oil.', instructionTa: 'அடுப்பை அணைத்து தயிர் மற்றும் தேங்காய் எண்ணெய் ஊற்றி கலக்கவும்.', instructionHi: 'दही और नारियल तेल डालकर मिलाएं।' }
    ],
    nutrition: { calories: 220, protein: 4, carbohydrates: 18, fat: 15, fiber: 5, sugar: 4, isEstimated: true }
  },
  {
    id: 'rec-47',
    title: 'Creamy Tomato Basil Soup with Croutons',
    titleTa: 'தக்காளி துளசி சூப்',
    titleHi: 'टोमैटो बेसिल सूप',
    description: 'Smooth, roasted ripe tomato soup simmered with sweet basil leaves, cream, and served with golden crunchy croutons.',
    descriptionTa: 'வறுத்த தக்காளி, பூண்டு மற்றும் துளசி இலைகளுடன் செய்யப்படும் மென்மையான கிரீமி சூப்.',
    descriptionHi: 'भुने टमाटर, लहसुन और तुलसी की पत्तियों से बना गरमागरम और मखमली सूप।',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    cuisine: 'American',
    category: 'Soups',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Healthy food'],
    allergens: ['Milk'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 15,
    totalTimeMinutes: 20,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.89,
    ratingCount: 175,
    ingredients: [
      { id: 'ing-11', name: 'Ripe Tomatoes', nameTa: 'பழுத்த தக்காளி', nameHi: 'पके टमाटर', quantity: 5, unit: 'large chopped', category: 'Produce' },
      { id: 'ing-22', name: 'Garlic', nameTa: 'பூண்டு', nameHi: 'लहसुन', quantity: 4, unit: 'cloves', category: 'Produce' },
      { id: 'ing-26', name: 'Butter', nameTa: 'வெண்ணெய்', nameHi: 'मक्खन', quantity: 1, unit: 'tbsp', category: 'Dairy' },
      { id: 'ing-27', name: 'Cream', nameTa: 'கிரீம்', nameHi: 'मलाई', quantity: 2, unit: 'tbsp', category: 'Dairy' },
      { id: 'ing-61', name: 'Fresh Basil', nameTa: 'துளசி இலைகள்', nameHi: 'तुलसी के पत्ते', quantity: 6, unit: 'leaves', category: 'Produce' }
    ],
    instructions: [
      { step: 1, instruction: 'Sauté garlic and onions in butter; add chopped tomatoes, basil, salt, and 1 cup water. Simmer 12 minutes.', instructionTa: 'வெண்ணெயில் தக்காளி, பூண்டு வதக்கி கொதிக்கவிடவும்.', instructionHi: 'मक्खन में लहसुन और टमाटर पकाएं।' },
      { step: 2, instruction: 'Puree smooth with an immersion blender, strain, swirl in cream, and serve with toasted croutons.', instructionTa: 'மிக்ஸியில் அரைத்து வடிகட்டி கிரீம் சேர்த்து பரிமாறவும்.', instructionHi: 'पीसकर छान लें और मलाई डालकर परोसें।' }
    ],
    nutrition: { calories: 150, protein: 3, carbohydrates: 16, fat: 9, fiber: 3, sugar: 8, isEstimated: true }
  },
  {
    id: 'rec-48',
    title: 'Spicy Cheesy Quesadilla',
    titleTa: 'சீஸ் கெசடியா (மெக்சிகன் ரொட்டி)',
    titleHi: 'चीज और कॉर्न केसाडिया',
    description: 'Crisp toasted tortilla folded over gooey melted cheese, sweet corn, sautéed onions, and jalapeños.',
    descriptionTa: 'ரொட்டியில் சீஸ், சோளம் மற்றும் வெங்காயம் வைத்து தவாவில் பொன்னிறமாக டோஸ்ட் செய்யப்படும் மெக்சிகன் உணவு.',
    descriptionHi: 'टॉर्टिला रोटी के अंदर भरपूर चीज और कॉर्न भरकर तवे पर दोनों तरफ से क्रिस्पी सेकी गई केसाडिया।',
    imageUrl: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Mexican',
    category: 'Snacks',
    dietaryTags: ['Vegetarian', 'Quick meals'],
    allergens: ['Milk', 'Wheat'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 8,
    totalTimeMinutes: 13,
    servings: 1,
    difficulty: 'Easy',
    rating: 4.91,
    ratingCount: 160,
    ingredients: [
      { id: 'ing-37', name: 'Tortilla or Chapati', nameTa: 'ரொட்டி அல்லது சப்பாத்தி', nameHi: 'टॉर्टिला / रोटी', quantity: 1, unit: 'large', category: 'Bakery' },
      { id: 'ing-54', name: 'Cheddar/Mozzarella Cheese', nameTa: 'சீஸ்', nameHi: 'चीज', quantity: 0.5, unit: 'cup shredded', category: 'Dairy' },
      { id: 'ing-36', name: 'Sweet Corn & Onion', nameTa: 'சோளம் & வெங்காயம்', nameHi: 'स्वीट कॉर्न और प्याज', quantity: 0.25, unit: 'cup', category: 'Produce' }
    ],
    instructions: [
      { step: 1, instruction: 'Place tortilla on skillet, cover half with cheese, corn, and onion. Fold in half.', instructionTa: 'ரொட்டியில் சீஸ் மற்றும் சோளம் வைத்து மடிக்கவும்.', instructionHi: 'रोटी पर चीज और कॉर्न रखकर मोड़ें।' },
      { step: 2, instruction: 'Cook on medium heat until golden brown and crisp on both sides with cheese melted inside. Cut into wedges.', instructionTa: 'இருபுறமும் பொன்னிறமாக சுட்டு துண்டுகளாக வெட்டவும்.', instructionHi: 'दोनों तरफ से सुनहरा सेकें और काटकर परोसें।' }
    ],
    nutrition: { calories: 340, protein: 14, carbohydrates: 30, fat: 18, fiber: 3, sugar: 2, isEstimated: true }
  },
  {
    id: 'rec-49',
    title: 'Crispy Garlic Broccoli & Mushroom Stir Fry',
    titleTa: 'ப்ரோக்கோலி காளான் வதக்கல்',
    titleHi: 'ब्रोकोली और मशरूम स्टिर फ्राई',
    description: 'Vibrant green broccoli florets and mushrooms stir-fried in a hot wok with garlic, ginger, and sesame soy sauce.',
    descriptionTa: 'ப்ரோக்கோலி, காளான் மற்றும் பூண்டு சேர்த்து அதிக தீயில் வதக்கப்படும் சத்தான உணவு.',
    descriptionHi: 'ताजा ब्रोकोली और मशरूम को लहसुन और सोया सॉस के साथ तेज आंच पर कुरकुरा भूना गया।',
    imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Asian',
    category: 'Healthy food',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Healthy food', 'Quick meals'],
    allergens: ['Soy', 'Sesame'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 7,
    totalTimeMinutes: 12,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.86,
    ratingCount: 140,
    ingredients: [
      { id: 'ing-90', name: 'Broccoli Florets', nameTa: 'ப்ரோக்கோலி', nameHi: 'ब्रोकोली', quantity: 2, unit: 'cups', category: 'Produce' },
      { id: 'ing-70', name: 'Mushrooms', nameTa: 'காளான்', nameHi: 'मशरूम', quantity: 1, unit: 'cup sliced', category: 'Produce' },
      { id: 'ing-22', name: 'Garlic', nameTa: 'பூண்டு', nameHi: 'लहसुन', quantity: 4, unit: 'cloves sliced', category: 'Produce' },
      { id: 'ing-23', name: 'Soy Sauce & Sesame Oil', nameTa: 'சோயா சாஸ் & நல்லெண்ணெய்', nameHi: 'सोया सॉस और तिल का तेल', quantity: 1, unit: 'tbsp each', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Heat sesame oil in a wok until smoking. Add garlic, then broccoli and mushrooms.', instructionTa: 'வாணலியில் பூண்டு, ப்ரோக்கோலி, காளான் வதக்கவும்.', instructionHi: 'कड़ाही में लहसुन, ब्रोकोली और मशरूम तेज आंच पर भूनें।' },
      { step: 2, instruction: 'Toss on high heat for 3-4 minutes to keep vegetables crisp. Drizzle soy sauce and serve hot.', instructionTa: 'சோயா சாஸ் சேர்த்து கிளறி பரிமாறவும்.', instructionHi: 'सोया सॉस डालें और गरमागरम सर्व करें।' }
    ],
    nutrition: { calories: 120, protein: 6, carbohydrates: 12, fat: 6, fiber: 4, sugar: 3, isEstimated: true }
  },
  {
    id: 'rec-50',
    title: 'Traditional South Indian Tomato Thokku',
    titleTa: 'தக்காளி தொக்கு',
    titleHi: 'साउथ इंडियन टमाटर थोक्कू (अचार)',
    description: 'Spicy, tangy slow-cooked tomato relish preserved with gingelly oil, mustard seeds, and red chilli powder.',
    descriptionTa: 'தக்காளி, நல்லெண்ணெய், மிளகாய் தூள் சேர்த்து வதக்கி கெட்டியாக செய்யப்படும் பாரம்பரிய தக்காளி தொக்கு.',
    descriptionHi: 'पके टमाटर, तिल के तेल और लाल मिर्च के साथ धीमी आंच पर पकाई गई चटपटी दक्षिण भारतीय चटनी।',
    imageUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Curries',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    allergens: [],
    prepTimeMinutes: 5,
    cookTimeMinutes: 20,
    totalTimeMinutes: 25,
    servings: 6,
    difficulty: 'Easy',
    rating: 4.95,
    ratingCount: 310,
    ingredients: [
      { id: 'ing-11', name: 'Tomatoes', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 5, unit: 'ripe chopped/pureed', category: 'Produce' },
      { id: 'ing-09', name: 'Sesame (Gingelly) Oil', nameTa: 'நல்லெண்ணெய்', nameHi: 'तिल का तेल', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-14', name: 'Mustard Seeds', nameTa: 'கடுகு', nameHi: 'राई', quantity: 1, unit: 'tsp', category: 'Spices' },
      { id: 'ing-07', name: 'Red Chilli Powder', nameTa: 'மிளகாய் தூள்', nameHi: 'लाल मिर्च पाउडर', quantity: 1.5, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-08', name: 'Salt & Asafoetida', nameTa: 'உப்பு & பெருங்காயம்', nameHi: 'नमक और हींग', quantity: 1, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Heat sesame oil in a pan, splutter mustard seeds and asafoetida. Add chopped tomatoes.', instructionTa: 'நல்லெண்ணெயில் கடுகு தாளித்து தக்காளி சேர்க்கவும்.', instructionHi: 'तिल के तेल में राई चटकाएं और टमाटर डालें।' },
      { step: 2, instruction: 'Add chilli powder, turmeric, and salt. Simmer on medium-low for 15-20 minutes until oil completely separates and thokku is jam-like. Cool and store.', instructionTa: 'எண்ணெய் பிரியும் வரை வதக்கி ஆறவைத்து பாட்டிலில் அடைக்கவும்.', instructionHi: 'धीमी आंच पर 15-20 मिनट तेल छोड़ने तक पकाएं।' }
    ],
    nutrition: { calories: 90, protein: 1, carbohydrates: 7, fat: 7, fiber: 2, sugar: 4, isEstimated: true }
  },
  {
    id: 'rec-51',
    title: 'Warm Sweet Gulab Jamun',
    titleTa: 'குலோப் ஜாமூன்',
    titleHi: 'गरमागरम गुलाब जामुन',
    description: 'Melt-in-the-mouth golden fried milk dumplings soaked in a fragrant rose and cardamom sugar syrup.',
    descriptionTa: 'பாலேடு மற்றும் மாவால் உருட்டி நெய்யில் பொரித்து ஏலக்காய் சர்க்கரைப் பாகில் ஊறவைக்கப்படும் இனிப்பு.',
    descriptionHi: 'खोया और मैदा से बनी गोलियां जिन्हें घी में तलकर इलायची और गुलाब जल की चाशनी में डुबोया जाता है।',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d69104a47?auto=format&fit=crop&w=800&q=80',
    cuisine: 'North Indian',
    category: 'Desserts',
    dietaryTags: ['Vegetarian'],
    allergens: ['Milk', 'Wheat'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    totalTimeMinutes: 30,
    servings: 4,
    difficulty: 'Medium',
    rating: 4.99,
    ratingCount: 680,
    ingredients: [
      { id: 'ing-91', name: 'Milk Solids (Mawa or Milk Powder)', nameTa: 'பால் பவுடர் / கோவா', nameHi: 'खोया / मिल्क पाउडर', quantity: 1, unit: 'cup', category: 'Dairy' },
      { id: 'ing-47', name: 'Flour (Maida)', nameTa: 'மைதா', nameHi: 'मैदा', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-49', name: 'Sugar', nameTa: 'சர்க்கரை', nameHi: 'चीनी', quantity: 1.5, unit: 'cups', category: 'Pantry' },
      { id: 'ing-64', name: 'Cardamom & Rose Water', nameTa: 'ஏலக்காய் & பன்னீர்', nameHi: 'इलायची और गुलाब जल', quantity: 1, unit: 'tsp', category: 'Spices' },
      { id: 'ing-09', name: 'Ghee or Oil for Frying', nameTa: 'பொரிக்க நெய் / எண்ணெய்', nameHi: 'तलने के लिए घी', quantity: 2, unit: 'cups', category: 'Dairy' }
    ],
    instructions: [
      { step: 1, instruction: 'Make sugar syrup: Boil sugar with 1.5 cups water and cardamom for 5 minutes until sticky.', instructionTa: 'சர்க்கரை பாகு காய்ச்சவும்.', instructionHi: 'चीनी और पानी उबालकर चाशनी बनाएं।' },
      { step: 2, instruction: 'Knead soft dough with milk solids, flour, and milk. Form smooth crack-free balls.', instructionTa: 'மாவை மென்மையாக பிசைந்து உருண்டைகள் உருட்டவும்.', instructionHi: 'खोया और मैदा से चिकनी गोलियां बनाएं।' },
      { step: 3, instruction: 'Fry on low flame in ghee until dark golden brown, drop directly into warm syrup, rest 30 minutes, and serve.', instructionTa: 'குறைந்த தீயில் பொரித்து பாகில் ஊறவைத்து பரிமாறவும்.', instructionHi: 'धीमी आंच पर सुनहरा तलें और चाशनी में 30 मिनट भिगोएं।' }
    ],
    nutrition: { calories: 290, protein: 5, carbohydrates: 48, fat: 10, fiber: 0, sugar: 40, isEstimated: true }
  },
  {
    id: 'rec-52',
    title: 'Spiced Indian Aloo Matar Paneer Curry',
    titleTa: 'ஆலூ பட்டாணி பன்னீர் குருமா',
    titleHi: 'आलू मटर पनीर करी',
    description: 'Hearty home-style North Indian curry cooked with potatoes, green peas, and paneer cubes in spiced onion tomato gravy.',
    descriptionTa: 'உருளைக்கிழங்கு, பச்சை பட்டாணி மற்றும் பன்னீர் சேர்த்து தக்காளி வெங்காய மசாலாவில் செய்யப்படும் சுவையான கறி.',
    descriptionHi: 'आलू, हरी मटर और पनीर के टुकड़ों को प्याज-टमाटर की मसालेदार तरी में पकाया गया स्वादिष्ट व्यंजन।',
    imageUrl: 'https://images.unsplash.com/photo-1600335895229-6e74521ef3c3?auto=format&fit=crop&w=800&q=80',
    cuisine: 'North Indian',
    category: 'Curries',
    dietaryTags: ['Vegetarian', 'High Protein', 'Gluten-Free'],
    allergens: ['Milk'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    totalTimeMinutes: 30,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.9,
    ratingCount: 290,
    ingredients: [
      { id: 'ing-01', name: 'Potato', nameTa: 'உருளைக்கிழங்கு', nameHi: 'आलू', quantity: 2, unit: 'cubed', category: 'Produce' },
      { id: 'ing-72', name: 'Green Peas (Matar)', nameTa: 'பட்டாணி', nameHi: 'हरी मटर', quantity: 1, unit: 'cup', category: 'Produce' },
      { id: 'ing-25', name: 'Paneer', nameTa: 'பன்னீர்', nameHi: 'पनीर', quantity: 150, unit: 'g cubed', category: 'Dairy' },
      { id: 'ing-02', name: 'Onion & Tomato Puree', nameTa: 'வெங்காயம் & தக்காளி விழுது', nameHi: 'प्याज-टमाटर प्यूरी', quantity: 1.5, unit: 'cups', category: 'Produce' },
      { id: 'ing-29', name: 'Garam Masala', nameTa: 'கரம் மசாலா', nameHi: 'गरम मसाला', quantity: 1, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      { step: 1, instruction: 'Sauté onion tomato puree with spices until oil glistens.', instructionTa: 'மசாலா விழுது வதக்கவும்.', instructionHi: 'मसाला भूनें।' },
      { step: 2, instruction: 'Add potatoes, peas, and 1.5 cups water; simmer 10 minutes until potatoes are tender.', instructionTa: 'உருளைக்கிழங்கு பட்டாணி சேர்த்து வேகவிடவும்.', instructionHi: 'आलू-मटर डालकर पकाएं।' },
      { step: 3, instruction: 'Add paneer cubes and simmer 3 minutes; serve with hot phulkas or jeera rice.', instructionTa: 'பன்னீர் சேர்த்து 3 நிமிடம் கழித்து பரிமாறவும்.', instructionHi: 'पनीर मिलाकर 3 मिनट पकाएं और परोसें।' }
    ],
    nutrition: { calories: 310, protein: 14, carbohydrates: 28, fat: 16, fiber: 5, sugar: 4, isEstimated: true }
  },
  {
    "id": "rec-53",
    "title": "Crispy Plain Roast Dosa",
    "titleTa": "மொறுமொறு நெய் ரோஸ்ட் தோசை",
    "titleHi": "क्रिस्पी प्लेन रोस्ट डोसा",
    "description": "Paper-thin, golden brown South Indian fermented crepe served piping hot with hotel sambar and coconut chutney.",
    "descriptionTa": "தங்க நிறத்தில் மொறுமொறுவென சுடப்படும் பாரம்பரிய நெய் ரோஸ்ட் தோசை, ஹோட்டல் சாம்பார் மற்றும் தேங்காய் சட்னியுடன்.",
    "descriptionHi": "चावल और उड़द दाल के घोल से बना कुरकुरा, सुनहरा साउथ इंडियन डोसा जिसे सांभर और नारियल चटनी के साथ परोसा जाता है।",
    "imageUrl": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Quick meals"
    ],
    "allergens": [],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 310,
    "ingredients": [
      {
        "id": "ing-101",
        "name": "Dosa Batter",
        "nameTa": "தோசை மாவு",
        "nameHi": "डोसा बैटर",
        "quantity": 2,
        "unit": "cups",
        "category": "Pantry"
      },
      {
        "id": "ing-102",
        "name": "Ghee or Sesame Oil",
        "nameTa": "நெய் அல்லது நல்லெண்ணெய்",
        "nameHi": "घी या तिल का तेल",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      },
      {
        "id": "ing-103",
        "name": "Salt",
        "nameTa": "உப்பு",
        "nameHi": "नमक",
        "quantity": 0.5,
        "unit": "tsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat a heavy cast iron tawa until water droplets sizzle and evaporate immediately.",
        "instructionTa": "தோசைக் கல்லை நன்றாக சூடாக்கவும்.",
        "instructionHi": "तवे को अच्छा गरम करें।"
      },
      {
        "step": 2,
        "instruction": "Pour a ladle of batter in the center and spread in thin concentric circles outwards.",
        "instructionTa": "மாவை நடுவில் ஊற்றி மெலிதாக சுற்றவும்.",
        "instructionHi": "बैटर डालकर पतला फैलाएं।"
      },
      {
        "step": 3,
        "instruction": "Drizzle ghee around the edges and cook on medium flame until golden and crispy. Fold and serve.",
        "instructionTa": "சுற்றிலும் நெய் ஊற்றி பொன்னிறமானதும் மடித்து பரிமாறவும்.",
        "instructionHi": "किनारों पर घी लगाएं और सुनहरा कुरकुरा होने पर उतार लें।"
      }
    ],
    "nutrition": {
      "calories": 180,
      "protein": 4,
      "carbohydrates": 30,
      "fat": 5,
      "fiber": 2,
      "sugar": 0,
      "isEstimated": true
    },
    "cookingTips": [
      "Wipe the tawa with half a cut onion dipped in oil for a non-stick natural sheen."
    ],
    "substitutions": {
      "Ghee": "Cold pressed sesame oil (Nallennai)"
    }
  },
  {
    "id": "rec-54",
    "title": "Tamil Nadu Onion Uthappam",
    "titleTa": "வெங்காய ஊத்தப்பம்",
    "titleHi": "प्याज उत्तपम",
    "description": "Thick, fluffy fermented rice pancake topped with caramelized shallots, green chillies, curry leaves, and coriander.",
    "descriptionTa": "மெதுவான தடிமனான தோசை மீது நறுக்கிய சின்ன வெங்காயம், பச்சை மிளகாய் தூவி நெய்யில் சுட்டெடுக்கப்படும் சுவையான ஊத்தப்பம்.",
    "descriptionHi": "मोटे और स्पंजी डोसे पर बारीक कटा प्याज, हरी मिर्च और हरा धनिया डालकर सेका गया स्वादिष्ट उत्तपम।",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Quick meals"
    ],
    "allergens": [],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Easy",
    "rating": 4.8,
    "ratingCount": 185,
    "ingredients": [
      {
        "id": "ing-101",
        "name": "Dosa Batter",
        "nameTa": "தோசை மாவு",
        "nameHi": "डोसा बैटर",
        "quantity": 2,
        "unit": "cups",
        "category": "Pantry"
      },
      {
        "id": "ing-02",
        "name": "Onion (Shallots preferred)",
        "nameTa": "சின்ன வெங்காயம்",
        "nameHi": "प्याज",
        "quantity": 1,
        "unit": "cup chopped",
        "category": "Produce"
      },
      {
        "id": "ing-04",
        "name": "Green Chilli",
        "nameTa": "பச்சை மிளகாய்",
        "nameHi": "हरी मिर्च",
        "quantity": 2,
        "unit": "finely chopped",
        "category": "Produce"
      },
      {
        "id": "ing-06",
        "name": "Curry Leaves & Coriander",
        "nameTa": "கறிவேப்பிலை & கொத்தமல்லி",
        "nameHi": "कढ़ी पत्ता और धनिया",
        "quantity": 2,
        "unit": "tbsp chopped",
        "category": "Produce"
      },
      {
        "id": "ing-102",
        "name": "Sesame Oil or Ghee",
        "nameTa": "நல்லெண்ணெய்",
        "nameHi": "तेल या घी",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Pour a thick ladle of batter onto hot tawa; do not spread it too thin.",
        "instructionTa": "சூடான கல்லில் மாவை தடிமனாக ஊற்றவும்.",
        "instructionHi": "तवे पर गाढ़ा बैटर डालें।"
      },
      {
        "step": 2,
        "instruction": "Immediately scatter chopped onions, green chillies, and coriander evenly over the surface, pressing gently.",
        "instructionTa": "வெங்காயம், மிளகாய், கொத்தமல்லி தூவி இலேசாக அழுத்தவும்.",
        "instructionHi": "ऊपर से प्याज और मिर्च दबाएं।"
      },
      {
        "step": 3,
        "instruction": "Drizzle sesame oil around borders, flip after 2 minutes to cook onions until caramelized, and flip back to serve.",
        "instructionTa": "எண்ணெய் ஊற்றி திருப்பி போட்டு பொன்னிறமாக சுட்டெடுக்கவும்.",
        "instructionHi": "तेल डालकर पलटें और प्याज सिकने तक पकाएं।"
      }
    ],
    "nutrition": {
      "calories": 210,
      "protein": 5,
      "carbohydrates": 34,
      "fat": 6,
      "fiber": 3,
      "sugar": 2,
      "isEstimated": true
    },
    "cookingTips": [
      "Pressing the onions lightly into wet batter ensures they do not fall off when flipped."
    ],
    "substitutions": {
      "Shallots": "Regular red onions"
    }
  },
  {
    "id": "rec-55",
    "title": "Healthy Crispy Ragi Dosa",
    "titleTa": "கேழ்வரகு மொறுமொறு தோசை",
    "titleHi": "रागी क्रिस्पी डोसा",
    "description": "Nutrient-rich finger millet instant crispy crepe tempered with cumin, green chillies, ginger, and curry leaves.",
    "descriptionTa": "கால்சியம் மற்றும் இரும்புச்சத்து நிறைந்த கேழ்வரகு மாவில் உடனடியாக செய்யப்படும் சுவையான மொறுமொறு தோசை.",
    "descriptionHi": "कैल्शियम और फाइबर से भरपूर रागी के आटे का झटपट बनने वाला कुरकुरा और सेहतमंद डोसा।",
    "imageUrl": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Healthy food",
      "Quick meals"
    ],
    "allergens": [],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Easy",
    "rating": 4.8,
    "ratingCount": 160,
    "ingredients": [
      {
        "id": "ing-104",
        "name": "Ragi Flour (Finger Millet)",
        "nameTa": "கேழ்வரகு மாவு",
        "nameHi": "रागी का आटा",
        "quantity": 1,
        "unit": "cup",
        "category": "Grains"
      },
      {
        "id": "ing-105",
        "name": "Rice Flour",
        "nameTa": "அரிசி மாவு",
        "nameHi": "चावल का आटा",
        "quantity": 0.5,
        "unit": "cup",
        "category": "Pantry"
      },
      {
        "id": "ing-02",
        "name": "Onion",
        "nameTa": "வெங்காயம்",
        "nameHi": "प्याज",
        "quantity": 1,
        "unit": "finely chopped",
        "category": "Produce"
      },
      {
        "id": "ing-13",
        "name": "Cumin Seeds",
        "nameTa": "சீரகம்",
        "nameHi": "जीरा",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-05",
        "name": "Ginger & Green Chilli",
        "nameTa": "இஞ்சி & பச்சை மிளகாய்",
        "nameHi": "अदरक और हरी मिर्च",
        "quantity": 1,
        "unit": "tbsp chopped",
        "category": "Produce"
      },
      {
        "id": "ing-08",
        "name": "Salt & Water",
        "nameTa": "உப்பு & தண்ணீர்",
        "nameHi": "नमक और पानी",
        "quantity": 2.5,
        "unit": "cups (watery batter)",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Whisk ragi flour, rice flour, salt, cumin, and water to a buttermilk-like thin watery batter.",
        "instructionTa": "மாவு, உப்பு, சீரகம் சேர்த்து நீர்க்க கரைக்கவும்.",
        "instructionHi": "रागी और चावल के आटे का पतला घोल बनाएं।"
      },
      {
        "step": 2,
        "instruction": "Stir in chopped onions, chillies, and curry leaves.",
        "instructionTa": "வெங்காயம் மற்றும் நறுக்கிய மசாலா சேர்க்கவும்.",
        "instructionHi": "कटा प्याज और हरी मिर्च मिलाएं।"
      },
      {
        "step": 3,
        "instruction": "Pour from the outer perimeter inward onto a very hot tawa. Cook until crispy on both sides.",
        "instructionTa": "சூடான கல்லில் சுற்றிலும் ஊற்றி மொறுமொறுவென சுட்டு எடுக்கவும்.",
        "instructionHi": "गरम तवे पर डालकर जालीदार और कुरकुरा सेंक लें।"
      }
    ],
    "nutrition": {
      "calories": 190,
      "protein": 4,
      "carbohydrates": 38,
      "fat": 2,
      "fiber": 6,
      "sugar": 1,
      "isEstimated": true
    },
    "cookingTips": [
      "Keep batter watery like Rava Dosa to achieve the signature netted crispy texture."
    ],
    "substitutions": {
      "Rice flour": "Rava (semolina)"
    }
  },
  {
    "id": "rec-56",
    "title": "Chettinad Kara Kuzhi Paniyaram",
    "titleTa": "செட்டிநாடு கார குழிப்பணியாரம்",
    "titleHi": "चेट्टिनाड कारा कुझी पनियरम",
    "description": "Crispy on the outside, pillowy inside spiced dumplings cooked in a traditional cast-iron appe / paniyaram pan.",
    "descriptionTa": "வெளியே மொறுமொறுப்பாகவும் உள்ளே பஞ்சு போன்றும் இருக்கும் பாரம்பரிய செட்டிநாடு கார பணியாரம்.",
    "descriptionHi": "बाहर से कुरकुरे और अंदर से बेहद नर्म, तड़के वाले प्याज-मिर्च के साउथ इंडियन स्टीम्ड/शैलो फ्राइड बॉल्स।",
    "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Quick meals"
    ],
    "allergens": [],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 12,
    "totalTimeMinutes": 22,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 220,
    "ingredients": [
      {
        "id": "ing-101",
        "name": "Idli/Dosa Batter (Leftover works best)",
        "nameTa": "இட்லி மாவு",
        "nameHi": "इडली बैटर",
        "quantity": 3,
        "unit": "cups",
        "category": "Pantry"
      },
      {
        "id": "ing-02",
        "name": "Onion",
        "nameTa": "வெங்காயம்",
        "nameHi": "प्याज",
        "quantity": 1,
        "unit": "finely chopped",
        "category": "Produce"
      },
      {
        "id": "ing-106",
        "name": "Mustard Seeds & Urad Dal",
        "nameTa": "கடுகு & உளுந்து",
        "nameHi": "राई और उड़द दाल",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-04",
        "name": "Green Chilli & Ginger",
        "nameTa": "பச்சை மிளகாய் & இஞ்சி",
        "nameHi": "हरी मिर्च और अदरक",
        "quantity": 1,
        "unit": "tbsp finely minced",
        "category": "Produce"
      },
      {
        "id": "ing-06",
        "name": "Curry Leaves",
        "nameTa": "கறிவேப்பிலை",
        "nameHi": "कढ़ी पत्ता",
        "quantity": 1,
        "unit": "sprig",
        "category": "Produce"
      },
      {
        "id": "ing-09",
        "name": "Cooking Oil",
        "nameTa": "எண்ணெய்",
        "nameHi": "तेल",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat 1 tbsp oil; splutter mustard seeds, urad dal, curry leaves, ginger, chillies, and onions until translucent.",
        "instructionTa": "தாளிப்பு பொருட்களை வதக்கவும்.",
        "instructionHi": "तड़का लगाएं और प्याज भूनें।"
      },
      {
        "step": 2,
        "instruction": "Mix the sautéed tempering directly into the idli batter.",
        "instructionTa": "மாவில் தாளிப்பை சேர்த்து கலக்கவும்.",
        "instructionHi": "बैटर में तड़का अच्छे से मिलाएं।"
      },
      {
        "step": 3,
        "instruction": "Grease paniyaram cavities with drops of oil, pour batter, cover and cook for 3 minutes on low flame.",
        "instructionTa": "பணியாரக் குழிகளில் மாவை ஊற்றி வேகவைக்கவும்.",
        "instructionHi": "पनियरम सांचे में डालकर धीमी आंच पर ढककर पकाएं।"
      },
      {
        "step": 4,
        "instruction": "Flip with wooden skewer and cook until golden brown. Serve hot with Kara Chutney.",
        "instructionTa": "திருப்பி விட்டு பொன்னிறமானதும் காரச் சட்னியுடன் பரிமாறவும்.",
        "instructionHi": "पलटकर दोनों तरफ से सुनहरा सेंकें।"
      }
    ],
    "nutrition": {
      "calories": 230,
      "protein": 6,
      "carbohydrates": 36,
      "fat": 6,
      "fiber": 3,
      "sugar": 1,
      "isEstimated": true
    },
    "cookingTips": [
      "Sour leftover batter makes the fluffiest and tastiest paniyaram."
    ],
    "substitutions": {
      "Leftover Idli Batter": "Fresh Dosa batter"
    }
  },
  {
    "id": "rec-57",
    "title": "Tamil Nadu Vegetable Rava Upma",
    "titleTa": "பாரம்பரிய காய்கறி ரவை உப்புமா",
    "titleHi": "साउथ इंडियन वेज रवा उपमा",
    "description": "Fluffy, non-sticky roasted semolina cooked with ghee, mustard seeds, crunchy cashews, ginger, and fresh mixed vegetables.",
    "descriptionTa": "நெய், முந்திரி, இஞ்சி மற்றும் காய்கறிகள் சேர்த்து உதிரி உதிரியாக செய்யப்படும் சுவையான ரவை உப்புமா.",
    "descriptionHi": "भुनी हुई सूजी को घी, काजू, राई, अदरक और सब्जियों के साथ पकाया गया गरमागरम और स्वादिष्ट नाश्ता।",
    "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Vegetarian",
      "Quick meals"
    ],
    "allergens": [
      "Wheat",
      "Tree nuts"
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 20,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.7,
    "ratingCount": 145,
    "ingredients": [
      {
        "id": "ing-107",
        "name": "Rava (Semolina / Sooji)",
        "nameTa": "ரவை",
        "nameHi": "रवा / सूजी",
        "quantity": 1,
        "unit": "cup roasted",
        "category": "Grains"
      },
      {
        "id": "ing-02",
        "name": "Onion",
        "nameTa": "வெங்காயம்",
        "nameHi": "प्याज",
        "quantity": 1,
        "unit": "sliced",
        "category": "Produce"
      },
      {
        "id": "ing-04",
        "name": "Green Chilli & Ginger",
        "nameTa": "பச்சை மிளகாய் & இஞ்சி",
        "nameHi": "हरी मिर्च और अदरक",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Produce"
      },
      {
        "id": "ing-108",
        "name": "Carrots & Green Peas",
        "nameTa": "கேரட் & பட்டாணி",
        "nameHi": "गाजर और मटर",
        "quantity": 0.5,
        "unit": "cup chopped",
        "category": "Produce"
      },
      {
        "id": "ing-109",
        "name": "Cashews",
        "nameTa": "முந்திரி",
        "nameHi": "काजू",
        "quantity": 8,
        "unit": "halves",
        "category": "Pantry"
      },
      {
        "id": "ing-110",
        "name": "Ghee & Oil",
        "nameTa": "நெய் & எண்ணெய்",
        "nameHi": "घी और तेल",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      },
      {
        "id": "ing-106",
        "name": "Mustard Seeds, Chana Dal & Curry Leaves",
        "nameTa": "கடுகு, கடலைப்பருப்பு, கறிவேப்பிலை",
        "nameHi": "राई, चना दाल और कढ़ी पत्ता",
        "quantity": 1.5,
        "unit": "tsp",
        "category": "Spices"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Dry roast rava on medium flame for 4 minutes until aromatic without browning.",
        "instructionTa": "ரவையை மிதமான தீயில் வறுக்கவும்.",
        "instructionHi": "रवा धीमी आंच पर खुशबू आने तक भूनें।"
      },
      {
        "step": 2,
        "instruction": "In a pan, heat ghee and oil; fry cashews, mustard seeds, chana dal, curry leaves, chillies, and ginger.",
        "instructionTa": "நெய்யில் முந்திரி மற்றும் தாளிப்பு பொருட்களை வறுக்கவும்.",
        "instructionHi": "घी में काजू और तड़का सामग्री भूनें।"
      },
      {
        "step": 3,
        "instruction": "Add onions, carrots, and peas; sauté 2 minutes. Add 2.5 cups water and salt; bring to a rolling boil.",
        "instructionTa": "காய்கறிகள் வதக்கி 2.5 கப் தண்ணீர் ஊற்றி கொதிக்கவிடவும்.",
        "instructionHi": "सब्जियां भूनकर ढाई कप पानी और नमक डालकर उबालें।"
      },
      {
        "step": 4,
        "instruction": "Lower heat and pour roasted rava slowly while continuously stirring to prevent lumps. Cover and cook 3 minutes.",
        "instructionTa": "ரவையை சிறிது சிறிதாக சேர்த்து கட்டியில்லாமல் கிளறி மூடி வைக்கவும்.",
        "instructionHi": "रवा धीरे-धीरे डालते हुए लगातार चलाएं और ढककर 3 मिनट पकाएं।"
      }
    ],
    "nutrition": {
      "calories": 240,
      "protein": 6,
      "carbohydrates": 38,
      "fat": 7,
      "fiber": 3,
      "sugar": 2,
      "isEstimated": true
    },
    "cookingTips": [
      "Pouring rava in a steady thin stream while whisking continuously prevents lump formation."
    ],
    "substitutions": {
      "Rava": "Broken wheat (Samba Rava)"
    }
  },
  {
    "id": "rec-58",
    "title": "Hotel Style Rava Kichadi",
    "titleTa": "சரவண பவன் ஸ்டைல் ரவா கிச்சடி",
    "titleHi": "होटल स्टाइल रवा खिचड़ी",
    "description": "Melt-in-mouth golden semolina kichadi loaded with ghee, garden vegetables, tomatoes, and fragrant whole spices.",
    "descriptionTa": "ஹோட்டல் சுவையில் நெய் மணக்க மணக்க தக்காளி காய்கறிகள் சேர்த்து செய்யப்படும் சுவையான ரவா கிச்சடி.",
    "descriptionHi": "होटल स्टाइल में भरपूर घी, टमाटर, गाजर-मटर और साबुत मसालों से बनी मखमली और स्वादिष्ट सूजी खिचड़ी।",
    "imageUrl": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Vegetarian",
      "Quick meals"
    ],
    "allergens": [
      "Wheat",
      "Milk"
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 20,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 275,
    "ingredients": [
      {
        "id": "ing-107",
        "name": "Roasted Rava",
        "nameTa": "வறுத்த ரவை",
        "nameHi": "भुनी सूजी",
        "quantity": 1,
        "unit": "cup",
        "category": "Grains"
      },
      {
        "id": "ing-11",
        "name": "Tomato",
        "nameTa": "தக்காளி",
        "nameHi": "टमाटर",
        "quantity": 1,
        "unit": "chopped",
        "category": "Produce"
      },
      {
        "id": "ing-02",
        "name": "Onion",
        "nameTa": "வெங்காயம்",
        "nameHi": "प्याज",
        "quantity": 1,
        "unit": "sliced",
        "category": "Produce"
      },
      {
        "id": "ing-108",
        "name": "Mixed Vegetables (Carrot, Beans, Peas)",
        "nameTa": "காய்கறிகள்",
        "nameHi": "कटी सब्जियां",
        "quantity": 0.75,
        "unit": "cup",
        "category": "Produce"
      },
      {
        "id": "ing-12",
        "name": "Turmeric Powder",
        "nameTa": "மஞ்சள் தூள்",
        "nameHi": "हल्दी पाउडर",
        "quantity": 0.5,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-110",
        "name": "Pure Desi Ghee",
        "nameTa": "சுத்தமான நெய்",
        "nameHi": "देसी घी",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "id": "ing-111",
        "name": "Whole Spices (Cinnamon, Cloves, Cardamom)",
        "nameTa": "பட்டை, கிராம்பு, ஏலக்காய்",
        "nameHi": "लौंग, दालचीनी, इलायची",
        "quantity": 1,
        "unit": "piece each",
        "category": "Spices"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat 2 tbsp ghee; temper cinnamon, cloves, cardamom, mustard, cashews, and curry leaves.",
        "instructionTa": "நெய்யில் மசாலா தாளிக்கவும்.",
        "instructionHi": "घी में खड़े मसाले और तड़का भूनें।"
      },
      {
        "step": 2,
        "instruction": "Add onions, chillies, ginger, turmeric, tomatoes, and vegetables; cook until soft.",
        "instructionTa": "வெங்காயம், தக்காளி, காய்கறிகள் வதக்கவும்.",
        "instructionHi": "प्याज, टमाटर और सब्जियां भूनें।"
      },
      {
        "step": 3,
        "instruction": "Add 3 cups of water and salt; bring to a rolling boil.",
        "instructionTa": "3 கப் தண்ணீர் ஊற்றி கொதிக்கவிடவும்.",
        "instructionHi": "3 कप पानी और नमक डालकर उबालें।"
      },
      {
        "step": 4,
        "instruction": "Gradually add rava while stirring continuously. Finish with 1 tbsp ghee and serve with Coconut Chutney.",
        "instructionTa": "ரவை சேர்த்து கிளறி நெய் ஊற்றி பரிமாறவும்.",
        "instructionHi": "रवा मिलाएं, ऊपर से 1 चम्मच घी डालें और परोसें।"
      }
    ],
    "nutrition": {
      "calories": 270,
      "protein": 6,
      "carbohydrates": 38,
      "fat": 11,
      "fiber": 4,
      "sugar": 3,
      "isEstimated": true
    },
    "cookingTips": [
      "Using 1:3 ratio of rava to water creates that irresistible velvety hotel texture."
    ],
    "substitutions": {
      "Ghee": "Sunflower oil with a spoon of butter"
    }
  },
  {
    "id": "rec-59",
    "title": "Tamil Nadu Paruppu Adai",
    "titleTa": "பாரம்பரிய முருங்கைக்கீரை பருப்பு அடை",
    "titleHi": "साउथ इंडियन दाल अड़ई",
    "description": "Thick, protein-packed multigrain lentil pancake studded with shallots, fennel seeds, red chillies, and fresh drumstick leaves.",
    "descriptionTa": "துவரம்பருப்பு, கடலைப்பருப்பு மற்றும் முருங்கைக்கீரை சேர்த்து செய்யப்படும் சத்தான பாரம்பரிய பருப்பு அடை.",
    "descriptionHi": "चार तरह की दालों, चावल, सौंफ, प्याज और सहजन के पत्तों से बना पौष्टिक और प्रोटीन से भरपूर पारंपरिक पैनकेक।",
    "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "High Protein",
      "Healthy food"
    ],
    "allergens": [],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 12,
    "totalTimeMinutes": 27,
    "servings": 3,
    "difficulty": "Medium",
    "rating": 4.9,
    "ratingCount": 205,
    "ingredients": [
      {
        "id": "ing-112",
        "name": "Mixed Lentils (Toor, Chana, Urad Dal)",
        "nameTa": "கலவை பருப்பு (துவரை, கடலை, உளுந்து)",
        "nameHi": "दालें (अरहर, चना, उड़द)",
        "quantity": 1,
        "unit": "cup soaked",
        "category": "Pantry"
      },
      {
        "id": "ing-113",
        "name": "Raw Rice",
        "nameTa": "பச்சரிசி",
        "nameHi": "कच्चा चावल",
        "quantity": 1,
        "unit": "cup soaked",
        "category": "Grains"
      },
      {
        "id": "ing-114",
        "name": "Fennel Seeds (Sombu)",
        "nameTa": "சோம்பு",
        "nameHi": "सौंफ",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-115",
        "name": "Dried Red Chillies",
        "nameTa": "காய்ந்த மிளகாய்",
        "nameHi": "सूखी लाल मिर्च",
        "quantity": 4,
        "unit": "pcs",
        "category": "Spices"
      },
      {
        "id": "ing-116",
        "name": "Fresh Drumstick Leaves or Onions",
        "nameTa": "முருங்கைக்கீரை அல்லது வெங்காயம்",
        "nameHi": "सहजन के पत्ते या प्याज",
        "quantity": 0.5,
        "unit": "cup",
        "category": "Produce"
      },
      {
        "id": "ing-102",
        "name": "Sesame Oil",
        "nameTa": "நல்லெண்ணெய்",
        "nameHi": "तिल का तेल",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Coarsely grind soaked rice, lentils, dried red chillies, and fennel seeds with salt and water.",
        "instructionTa": "பருப்பு அரிசியை கரகரப்பாக அரைக்கவும்.",
        "instructionHi": "दाल, चावल, मिर्च और सौंफ को दरदरा पीसें।"
      },
      {
        "step": 2,
        "instruction": "Fold in chopped shallots and fresh drumstick leaves.",
        "instructionTa": "வெங்காயம் மற்றும் முருங்கைக்கீரை சேர்க்கவும்.",
        "instructionHi": "प्याज और सहजन के पत्ते मिलाएं।"
      },
      {
        "step": 3,
        "instruction": "Spread a thick circle on a hot cast iron tawa, poke a hole in the center, and drizzle sesame oil.",
        "instructionTa": "கல்லில் அடை தட்டி நடுவில் துளையிட்டு எண்ணெய் ஊற்றவும்.",
        "instructionHi": "तवे पर मोटा फैलाएं, बीच में छेद करके तेल डालें।"
      },
      {
        "step": 4,
        "instruction": "Cook both sides until deeply golden and crispy. Serve with Vellam (Jaggery) and Butter.",
        "instructionTa": "இருபுறமும் பொன்னிறமாக சுட்டு வெல்லம் மற்றும் வெண்ணெயுடன் பரிமாறவும்.",
        "instructionHi": "दोनों तरफ से कुरकुरा सेंकें और गुड़-मक्खन के साथ परोसें।"
      }
    ],
    "nutrition": {
      "calories": 290,
      "protein": 12,
      "carbohydrates": 46,
      "fat": 6,
      "fiber": 7,
      "sugar": 1,
      "isEstimated": true
    },
    "cookingTips": [
      "Making a small hole in the center lets hot oil circulate, cooking the thick center thoroughly."
    ],
    "substitutions": {
      "Drumstick leaves": "Finely chopped spinach or onions"
    }
  },
  {
    "id": "rec-60",
    "title": "Kerala & Tamil Soft Lacy Appam",
    "titleTa": "ஆப்பம் மற்றும் தேங்காய்ப்பால்",
    "titleHi": "सॉफ्ट अप्पम और नारियल दूध",
    "description": "Crispy lacy edges with a pillow-soft spongy center fermented rice hopper served with sweet cardamom coconut milk.",
    "descriptionTa": "சுற்றிலும் மொறுமொறுப்பான விளிம்புகளும் நடுவில் மென்மையான பஞ்சு போன்ற அமைப்பும் கொண்ட பாரம்பரிய ஆப்பம்.",
    "descriptionHi": "किनारों से जालीदार व कुरकुरा और बीच में से स्पंजी अप्पम जिसे मीठे नारियल के दूध के साथ परोसा जाता है।",
    "imageUrl": "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free"
    ],
    "allergens": [],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Medium",
    "rating": 4.9,
    "ratingCount": 260,
    "ingredients": [
      {
        "id": "ing-117",
        "name": "Fermented Appam Batter",
        "nameTa": "ஆப்ப மாவு",
        "nameHi": "अप्पम बैटर",
        "quantity": 2,
        "unit": "cups",
        "category": "Pantry"
      },
      {
        "id": "ing-118",
        "name": "Fresh Coconut Milk",
        "nameTa": "தேங்காய்ப்பால்",
        "nameHi": "नारियल का दूध",
        "quantity": 1,
        "unit": "cup",
        "category": "Dairy"
      },
      {
        "id": "ing-64",
        "name": "Cardamom & Sugar/Jaggery",
        "nameTa": "ஏலக்காய் & சர்க்கரை",
        "nameHi": "इलायची और चीनी",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat an appachatti (curved appam pan). Pour a ladle of batter in the center.",
        "instructionTa": "ஆப்ப சட்டியில் ஒரு கரண்டி மாவு ஊற்றவும்.",
        "instructionHi": "अप्पम कड़ाही में बैटर डालें।"
      },
      {
        "step": 2,
        "instruction": "Hold both handles and swirl the pan clockwise to spread batter thinly along the sides while leaving the center thick.",
        "instructionTa": "சட்டியை சுழற்றி ஓரங்களில் மெலிதாகவும் நடுவில் தடிமனாகவும் பரப்பவும்.",
        "instructionHi": "कड़ाही को घुमाकर किनारे पतले और बीच का भाग मोटा रखें।"
      },
      {
        "step": 3,
        "instruction": "Cover with lid and steam for 2 minutes on medium flame until edges turn golden and lacy.",
        "instructionTa": "மூடி போட்டு 2 நிமிடம் வேகவைத்து எடுக்கவும்.",
        "instructionHi": "ढककर 2 मिनट पकाएं जब तक किनारे कुरकुरे न हो जाएं।"
      },
      {
        "step": 4,
        "instruction": "Gently slide out onto plate. Serve warm with sweetened coconut milk.",
        "instructionTa": "தேங்காய்ப்பாலுடன் பரிமாறவும்.",
        "instructionHi": "मीठे नारियल के दूध के साथ परोसें।"
      }
    ],
    "nutrition": {
      "calories": 220,
      "protein": 4,
      "carbohydrates": 38,
      "fat": 6,
      "fiber": 2,
      "sugar": 6,
      "isEstimated": true
    },
    "cookingTips": [
      "Do not flip the appam; it cooks entirely by covered steam."
    ],
    "substitutions": {
      "Coconut milk": "Vegetable Kurma"
    }
  },
  {
    "id": "rec-61",
    "title": "Steamed Rice Idiyappam (String Hoppers)",
    "titleTa": "மல்லிகைப்பூ இடியாப்பம்",
    "titleHi": "इडियाप्पम (चावल के नूडल्स)",
    "description": "Delicate, feather-light steamed rice noodle nests served with spicy sodhi or sweetened cardamom coconut milk.",
    "descriptionTa": "மல்லிகைப்பூ போல மென்மையான அரிசி மாவு இடியாப்பம், காரமான குருமா அல்லது தேங்காய்ப்பாலுடன்.",
    "descriptionHi": "चावल के आटे से बने भाप में पके हुए नर्म और हल्के नूडल नेस्ट्स जिसे कुरमा या नारियल दूध के साथ खाया जाता है।",
    "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Healthy food"
    ],
    "allergens": [],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 20,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.8,
    "ratingCount": 190,
    "ingredients": [
      {
        "id": "ing-105",
        "name": "Roasted Rice Flour (Idiyappam Flour)",
        "nameTa": "இடியாப்ப மாவு",
        "nameHi": "इडियाप्पम आटा",
        "quantity": 2,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "id": "ing-08",
        "name": "Boiling Hot Water & Salt",
        "nameTa": "கொதிக்கும் வெந்நீர் & உப்பு",
        "nameHi": "गरम पानी और नमक",
        "quantity": 1.75,
        "unit": "cups",
        "category": "Pantry"
      },
      {
        "id": "ing-119",
        "name": "Sesame Oil",
        "nameTa": "நல்லெண்ணெய்",
        "nameHi": "तिल का तेल",
        "quantity": 1,
        "unit": "tsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Mix rice flour and salt; gradually pour boiling water and mix with a wooden ladle into a soft, non-sticky dough.",
        "instructionTa": "மாவுடன் கொதிக்கும் தண்ணீர் சேர்த்து பிசையவும்.",
        "instructionHi": "चावल के आटे में खौलता पानी डालकर नर्म आटा गूंथें।"
      },
      {
        "step": 2,
        "instruction": "Grease an idiyappam press with fine holes. Fill with warm dough.",
        "instructionTa": "இடியாப்ப உரலில் மாவை நிரப்பவும்.",
        "instructionHi": "इडियाप्पम मेकर में आटा भरें।"
      },
      {
        "step": 3,
        "instruction": "Press into concentric nests onto greased idli steamer plates.",
        "instructionTa": "இட்லி தட்டில் பிழியவும்.",
        "instructionHi": "स्टीमर प्लेट पर जालीदार घुमाते हुए दबाएं।"
      },
      {
        "step": 4,
        "instruction": "Steam for 6-8 minutes until cooked through. Serve hot with coconut milk or spicy kurma.",
        "instructionTa": "8 நிமிடம் ஆவியில் வேகவைத்து பரிமாறவும்.",
        "instructionHi": "8 मिनट भाप में पकाएं और नारियल दूध के साथ परोसें।"
      }
    ],
    "nutrition": {
      "calories": 170,
      "protein": 3,
      "carbohydrates": 38,
      "fat": 1,
      "fiber": 2,
      "sugar": 0,
      "isEstimated": true
    },
    "cookingTips": [
      "Water must be rolling boil when added to rice flour for pliable, soft strings."
    ],
    "substitutions": {
      "Idiyappam flour": "Store-bought processed rice flour"
    }
  },
  {
    "id": "rec-62",
    "title": "Hotel Style Poori Masala (Urulaikizhangu)",
    "titleTa": "ஹோட்டல் பூரி கிழங்கு மசாலா",
    "titleHi": "होटल स्टाइल पूरी आलू मसाला",
    "description": "Fluffy golden fried pooris served with vibrant, mildly spiced turmeric potato masala thickened with besan.",
    "descriptionTa": "சுடச்சுட உப்பிய பூரியுடன் கடலை மாவு சேர்த்து செய்யப்படும் ஹோட்டல் சுவை உருளைக்கிழங்கு மசாலா.",
    "descriptionHi": "गरमागरम फूली हुई पूरियां और बेसन से गाढ़ी की गई पारंपरिक साउथ इंडियन हल्दी-आलू की स्वादिष्ट सब्जी।",
    "imageUrl": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Vegetarian",
      "Vegan"
    ],
    "allergens": [
      "Wheat"
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 25,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 340,
    "ingredients": [
      {
        "id": "ing-01",
        "name": "Potatoes (Boiled & Mashed)",
        "nameTa": "வேகவைத்த உருளைக்கிழங்கு",
        "nameHi": "उबले आलू",
        "quantity": 3,
        "unit": "large",
        "category": "Produce"
      },
      {
        "id": "ing-02",
        "name": "Onion",
        "nameTa": "வெங்காயம்",
        "nameHi": "प्याज",
        "quantity": 2,
        "unit": "thinly sliced",
        "category": "Produce"
      },
      {
        "id": "ing-04",
        "name": "Green Chillies & Ginger",
        "nameTa": "பச்சை மிளகாய் & இஞ்சி",
        "nameHi": "हरी मिर्च और अदरक",
        "quantity": 1.5,
        "unit": "tbsp minced",
        "category": "Produce"
      },
      {
        "id": "ing-03",
        "name": "Gram Flour (Besan)",
        "nameTa": "கடலை மாவு",
        "nameHi": "बेसन",
        "quantity": 1,
        "unit": "tbsp dissolved in water",
        "category": "Pantry"
      },
      {
        "id": "ing-12",
        "name": "Turmeric & Salt",
        "nameTa": "மஞ்சள் தூள் & உப்பு",
        "nameHi": "हल्दी और नमक",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-120",
        "name": "Poori Dough (Wheat Flour)",
        "nameTa": "கோதுமை மாவு பூரி",
        "nameHi": "गेहूं का आटा (पूरी के लिए)",
        "quantity": 2,
        "unit": "cups",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Sauté mustard, urad dal, curry leaves, ginger, chillies, and sliced onions until translucent.",
        "instructionTa": "வெங்காயம் மற்றும் மசாலா தாளிக்கவும்.",
        "instructionHi": "प्याज, मिर्च और अदरक को तड़के में भूनें।"
      },
      {
        "step": 2,
        "instruction": "Add turmeric, salt, mashed potatoes, and 1.5 cups water; simmer for 5 minutes.",
        "instructionTa": "மஞ்சள் தூள், உருளைக்கிழங்கு சேர்த்து கொதிக்கவிடவும்.",
        "instructionHi": "उबले आलू और पानी डालकर उबालें।"
      },
      {
        "step": 3,
        "instruction": "Stir in the dissolved gram flour paste to create the signature glossy, silky hotel gravy consistency.",
        "instructionTa": "கரைத்த கடலை மாவு ஊற்றி 2 நிமிடம் கொதிக்கவிடவும்.",
        "instructionHi": "बेसन का घोल मिलाकर गाढ़ा होने तक 2 मिनट पकाएं।"
      },
      {
        "step": 4,
        "instruction": "Roll wheat dough into discs and deep fry in hot oil until puffed like balloons. Serve hot.",
        "instructionTa": "பூரி பொரித்து மசாலாவுடன் சூடாக பரிமாறவும்.",
        "instructionHi": "पूरियां तलें और गरमागरम आलू मसाला के साथ परोसें।"
      }
    ],
    "nutrition": {
      "calories": 340,
      "protein": 7,
      "carbohydrates": 52,
      "fat": 12,
      "fiber": 5,
      "sugar": 3,
      "isEstimated": true
    },
    "cookingTips": [
      "Besan paste gives the gravy its authentic hotel shine and thick clinging consistency."
    ],
    "substitutions": {
      "Gram flour": "Rice flour or cornstarch"
    }
  },
  {
    "id": "rec-63",
    "title": "Leftover Idli Upma (Thalippu Idli)",
    "titleTa": "சுவையான தாளித்த இட்லி உப்புமா",
    "titleHi": "बची हुई इडली का उपमा",
    "description": "Brilliant zero-waste transformation of leftover idlis into a savoury tempered snack with mustard, onions, and curry leaves.",
    "descriptionTa": "மீதமான இட்லிகளை வீணாக்காமல் வெங்காயம், கடுகு, உளுந்து சேர்த்து உடனடியாக செய்யப்படும் சுவையான இட்லி உப்புமா.",
    "descriptionHi": "बची हुई इडली को मसलकर प्याज, हरी मिर्च, राई और कढ़ी पत्ते के तड़के से बनाया गया झटपट और स्वादिष्ट उपमा।",
    "imageUrl": "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Quick meals"
    ],
    "allergens": [],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 7,
    "totalTimeMinutes": 12,
    "servings": 2,
    "difficulty": "Easy",
    "rating": 4.8,
    "ratingCount": 165,
    "ingredients": [
      {
        "id": "ing-121",
        "name": "Leftover Idlis",
        "nameTa": "மீதமான இட்லி",
        "nameHi": "बची हुई इडली",
        "quantity": 5,
        "unit": "crumbled",
        "category": "Produce"
      },
      {
        "id": "ing-02",
        "name": "Onion",
        "nameTa": "வெங்காயம்",
        "nameHi": "प्याज",
        "quantity": 1,
        "unit": "finely chopped",
        "category": "Produce"
      },
      {
        "id": "ing-11",
        "name": "Tomato",
        "nameTa": "தக்காளி",
        "nameHi": "टमाटर",
        "quantity": 1,
        "unit": "chopped",
        "category": "Produce"
      },
      {
        "id": "ing-04",
        "name": "Green Chilli",
        "nameTa": "பச்சை மிளகாய்",
        "nameHi": "हरी मिर्च",
        "quantity": 2,
        "unit": "chopped",
        "category": "Produce"
      },
      {
        "id": "ing-106",
        "name": "Mustard Seeds & Urad Dal",
        "nameTa": "கடுகு & உளுந்து",
        "nameHi": "राई और उड़द दाल",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-12",
        "name": "Turmeric Powder & Salt",
        "nameTa": "மஞ்சள் தூள் & உப்பு",
        "nameHi": "हल्दी और नमक",
        "quantity": 0.5,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-09",
        "name": "Cooking Oil",
        "nameTa": "எண்ணெய்",
        "nameHi": "तेल",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Crumble chilled leftover idlis evenly using fingers into coarse granules.",
        "instructionTa": "இட்லிகளை உதிர்த்து வைக்கவும்.",
        "instructionHi": "इडली को हाथों से मसलकर चूरा बना लें।"
      },
      {
        "step": 2,
        "instruction": "Heat oil, add mustard seeds, urad dal, curry leaves, chillies, and onions; sauté until onions soften.",
        "instructionTa": "எண்ணெயில் கடுகு, உளுந்து, வெங்காயம் வதக்கவும்.",
        "instructionHi": "तेल में राई, उड़द दाल और प्याज भूनें।"
      },
      {
        "step": 3,
        "instruction": "Add chopped tomato and turmeric powder; cook for 1 minute.",
        "instructionTa": "தக்காளி மற்றும் மஞ்சள் தூள் சேர்க்கவும்.",
        "instructionHi": "टमाटर और हल्दी डालकर 1 मिनट भूनें।"
      },
      {
        "step": 4,
        "instruction": "Add crumbled idlis, toss gently on medium heat for 3 minutes until steaming hot. Serve immediately.",
        "instructionTa": "உதிர்த்த இட்லியை சேர்த்து நன்கு கிளறி பரிமாறவும்.",
        "instructionHi": "इडली का चूरा मिलाकर 3 मिनट गरम होने तक चलाएं और परोसें।"
      }
    ],
    "nutrition": {
      "calories": 190,
      "protein": 5,
      "carbohydrates": 34,
      "fat": 4,
      "fiber": 2,
      "sugar": 2,
      "isEstimated": true
    },
    "cookingTips": [
      "Cold, refrigerated leftover idlis crumble much better without becoming mushy."
    ],
    "substitutions": {
      "Idli": "Leftover Dosa pieces or Cold Rice"
    }
  },
  {
    "id": "rec-64",
    "title": "Authentic Tamil Nadu Tomato Rice (Thakkali Sadam)",
    "titleTa": "சுவையான செட்டிநாடு தக்காளி சாதம்",
    "titleHi": "साउथ इंडियन टमाटर चावल (थक्काली सादम)",
    "description": "Fragrant South Indian lunchbox classic rice simmered in a spiced onion, ripe tomato, mint, and whole garam masala base.",
    "descriptionTa": "பழுத்த நாட்டு தக்காளி, வெங்காயம், புதினா மற்றும் மசாலா மணக்க மணக்க செய்யப்படும் செட்டிநாடு தக்காளி சாதம்.",
    "descriptionHi": "पके टमाटर, प्याज, पुदीने और साबुत मसालों के साथ पकाया गया साउथ इंडियन स्पेशल चटपटा टमाटर पुलाव।",
    "imageUrl": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Rice dishes",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Quick meals"
    ],
    "allergens": [],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 25,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 380,
    "ingredients": [
      {
        "id": "ing-14",
        "name": "Cooked Rice (Raw or Basmati)",
        "nameTa": "சாதம்",
        "nameHi": "पका चावल",
        "quantity": 3,
        "unit": "cups cooled",
        "category": "Grains"
      },
      {
        "id": "ing-11",
        "name": "Ripe Red Tomatoes",
        "nameTa": "நாட்டு தக்காளி",
        "nameHi": "पके टमाटर",
        "quantity": 4,
        "unit": "finely chopped",
        "category": "Produce"
      },
      {
        "id": "ing-02",
        "name": "Onion",
        "nameTa": "வெங்காயம்",
        "nameHi": "प्याज",
        "quantity": 2,
        "unit": "sliced",
        "category": "Produce"
      },
      {
        "id": "ing-05",
        "name": "Ginger Garlic Paste",
        "nameTa": "இஞ்சி பூண்டு விழுது",
        "nameHi": "अदरक लहसुन पेस्ट",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Produce"
      },
      {
        "id": "ing-122",
        "name": "Fresh Mint & Coriander Leaves",
        "nameTa": "புதினா & கொத்தமல்லி",
        "nameHi": "पुदीना और हरा धनिया",
        "quantity": 0.5,
        "unit": "cup chopped",
        "category": "Produce"
      },
      {
        "id": "ing-07",
        "name": "Sambar/Chilli Powder & Garam Masala",
        "nameTa": "சாம்பார் தூள் & கரம் மசாலா",
        "nameHi": "सांभर पाउडर और गरम मसाला",
        "quantity": 1.5,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-09",
        "name": "Cooking Oil or Ghee",
        "nameTa": "எண்ணெய் அல்லது நெய்",
        "nameHi": "तेल या घी",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat oil, add whole spices (cinnamon, cloves, fennel seeds), then sauté sliced onions until golden.",
        "instructionTa": "எண்ணெயில் மசாலா தாளித்து வெங்காயம் வதக்கவும்.",
        "instructionHi": "तेल में खड़े मसाले और प्याज भूनें।"
      },
      {
        "step": 2,
        "instruction": "Add ginger-garlic paste, green chillies, and mint leaves; sauté for 1 minute until fragrant.",
        "instructionTa": "இஞ்சி பூண்டு விழுது மற்றும் புதினா சேர்த்து வதக்கவும்.",
        "instructionHi": "अदरक-लहसुन पेस्ट और पुदीना भूनें।"
      },
      {
        "step": 3,
        "instruction": "Add chopped tomatoes, chilli powder, coriander powder, turmeric, and salt. Cook until tomatoes turn completely mushy and oil separates.",
        "instructionTa": "தக்காளி மற்றும் மசாலா தூள்கள் சேர்த்து எண்ணெய் பிரியும் வரை வதக்கவும்.",
        "instructionHi": "टमाटर और सूखे मसाले डालकर तेल छूटने तक पकाएं।"
      },
      {
        "step": 4,
        "instruction": "Add cooled cooked rice, gently toss until coated uniformly without breaking the grains. Garnish with coriander.",
        "instructionTa": "சாதம் சேர்த்து மிதமாக கிளறி பரிமாறவும்.",
        "instructionHi": "चावल डालकर हल्के हाथ से मिलाएं और परोसें।"
      }
    ],
    "nutrition": {
      "calories": 290,
      "protein": 5,
      "carbohydrates": 54,
      "fat": 6,
      "fiber": 4,
      "sugar": 3,
      "isEstimated": true
    },
    "cookingTips": [
      "Cooked rice should be cooled completely on a flat plate before mixing to keep grains separate."
    ],
    "substitutions": {
      "Basmati": "Leftover Ponni or Sona Masoori boiled rice"
    }
  },
  {
    "id": "rec-65",
    "title": "Traditional South Indian Coconut Rice (Thengai Sadam)",
    "titleTa": "கோவில் பிரசாத தேங்காய் சாதம்",
    "titleHi": "नारियल चावल (थेंगाई सादम)",
    "description": "Aromatic festive rice tossed with freshly grated coconut, crunchy cashews, tempered mustard, urad dal, and curry leaves in coconut oil.",
    "descriptionTa": "துருவிய புதிய தேங்காய், முந்திரி, கறிவேப்பிலை மற்றும் உளுந்து தாளித்து தேங்காய் எண்ணெயில் செய்யப்படும் பிரசாத தேங்காய் சாதம்.",
    "descriptionHi": "ताजा कद्दूकस किया नारियल, काजू, उड़द दाल, कढ़ी पत्ता और हरी मिर्च से तड़का लगाकर बनाया गया खुशबूदार नारियल भात।",
    "imageUrl": "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Rice dishes",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Quick meals"
    ],
    "allergens": [
      "Tree nuts"
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 15,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.8,
    "ratingCount": 215,
    "ingredients": [
      {
        "id": "ing-14",
        "name": "Cooked Rice",
        "nameTa": "சாதம்",
        "nameHi": "पका चावल",
        "quantity": 3,
        "unit": "cups cooled",
        "category": "Grains"
      },
      {
        "id": "ing-123",
        "name": "Fresh Grated Coconut",
        "nameTa": "துருவிய தேங்காய்",
        "nameHi": "कद्दूकस नारियल",
        "quantity": 1,
        "unit": "cup",
        "category": "Produce"
      },
      {
        "id": "ing-109",
        "name": "Cashews",
        "nameTa": "முந்திரி",
        "nameHi": "काजू",
        "quantity": 10,
        "unit": "pcs",
        "category": "Pantry"
      },
      {
        "id": "ing-106",
        "name": "Mustard Seeds, Urad Dal & Chana Dal",
        "nameTa": "கடுகு, உளுந்து, கடலைப்பருப்பு",
        "nameHi": "राई, उड़द दाल, चना दाल",
        "quantity": 1.5,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-04",
        "name": "Green Chillies & Ginger",
        "nameTa": "பச்சை மிளகாய் & இஞ்சி",
        "nameHi": "हरी मिर्च और अदरक",
        "quantity": 1,
        "unit": "tbsp chopped",
        "category": "Produce"
      },
      {
        "id": "ing-06",
        "name": "Curry Leaves & Hing",
        "nameTa": "கறிவேப்பிலை & பெருங்காயம்",
        "nameHi": "कढ़ी पत्ता और हींग",
        "quantity": 1,
        "unit": "sprig + pinch",
        "category": "Spices"
      },
      {
        "id": "ing-124",
        "name": "Coconut Oil or Ghee",
        "nameTa": "தேங்காய் எண்ணெய் அல்லது நெய்",
        "nameHi": "नारियल तेल या घी",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat coconut oil in a pan; add mustard seeds, urad dal, chana dal, cashews, and roast until golden.",
        "instructionTa": "தேங்காய் எண்ணெயில் பருப்புகள் மற்றும் முந்திரி வறுக்கவும்.",
        "instructionHi": "नारियल तेल में दालें और काजू सुनहरा भूनें।"
      },
      {
        "step": 2,
        "instruction": "Add green chillies, ginger, curry leaves, and a pinch of asafoetida (hing).",
        "instructionTa": "பச்சை மிளகாய், இஞ்சி, கறிவேப்பிலை, பெருங்காயம் சேர்க்கவும்.",
        "instructionHi": "हरी मिर्च, अदरक और कढ़ी पत्ता डालें।"
      },
      {
        "step": 3,
        "instruction": "Turn flame to low, add fresh grated coconut, and sauté for 1-2 minutes without browning.",
        "instructionTa": "தேங்காய் துருவல் சேர்த்து 1 நிமிடம் வதக்கவும்.",
        "instructionHi": "कद्दूकस नारियल डालकर धीमी आंच पर 1 मिनट भूनें।"
      },
      {
        "step": 4,
        "instruction": "Add salt and cooled cooked rice. Mix gently until well combined and serve warm with Potato Fry.",
        "instructionTa": "உப்பு மற்றும் சாதம் சேர்த்து கலந்து உருளைக்கிழங்கு வறுவலுடன் பரிமாறவும்.",
        "instructionHi": "नमक और चावल मिलाकर आलू फ्राई के साथ परोसें।"
      }
    ],
    "nutrition": {
      "calories": 310,
      "protein": 5,
      "carbohydrates": 48,
      "fat": 12,
      "fiber": 4,
      "sugar": 2,
      "isEstimated": true
    },
    "cookingTips": [
      "Do not brown the grated coconut; a gentle sauté preserves its fresh sweetness and aroma."
    ],
    "substitutions": {
      "Coconut oil": "Sesame oil or Ghee"
    }
  },
  {
    "id": "rec-66",
    "title": "Kovil Style Tamarind Rice (Puliyodharai)",
    "titleTa": "கோவில் பிரசாத புளியோதரை",
    "titleHi": "मंदिर स्टाइल इमली चावल (पुलियोधराई)",
    "description": "Famous temple-style tangy and spiced tamarind rice tempered with roasted peanuts, sesame oil, and freshly ground spice powder.",
    "descriptionTa": "வறுத்த வேர்க்கடலை, நல்லெண்ணெய், புளி விழுது மற்றும் மசாலா பொடி சேர்த்து செய்யப்படும் பிரசித்தி பெற்ற கோவில் புளியோதரை.",
    "descriptionHi": "इमली के गाढ़े पल्प, मूंगफली, तिल के तेल और खास भुने मसालों के तड़के से बना पारंपरिक मंदिर जैसा खट्टा-तीखा भात।",
    "imageUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Rice dishes",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free"
    ],
    "allergens": [
      "Peanuts"
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "servings": 4,
    "difficulty": "Medium",
    "rating": 4.9,
    "ratingCount": 290,
    "ingredients": [
      {
        "id": "ing-14",
        "name": "Cooked Rice",
        "nameTa": "சாதம்",
        "nameHi": "पका चावल",
        "quantity": 4,
        "unit": "cups cooled",
        "category": "Grains"
      },
      {
        "id": "ing-125",
        "name": "Tamarind Pulp",
        "nameTa": "புளி கரைசல்",
        "nameHi": "इमली का पल्प",
        "quantity": 0.75,
        "unit": "cup thick",
        "category": "Pantry"
      },
      {
        "id": "ing-126",
        "name": "Raw Peanuts",
        "nameTa": "வேர்க்கடலை",
        "nameHi": "मूंगफली",
        "quantity": 0.3,
        "unit": "cup",
        "category": "Produce"
      },
      {
        "id": "ing-106",
        "name": "Mustard Seeds, Chana Dal & Urad Dal",
        "nameTa": "கடுகு, கடலைப்பருப்பு, உளுந்து",
        "nameHi": "राई, चना दाल, उड़द दाल",
        "quantity": 2,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-115",
        "name": "Dried Red Chillies & Curry Leaves",
        "nameTa": "காய்ந்த மிளகாய் & கறிவேப்பிலை",
        "nameHi": "सूखी लाल मिर्च और कढ़ी पत्ता",
        "quantity": 4,
        "unit": "pcs + 2 sprigs",
        "category": "Spices"
      },
      {
        "id": "ing-127",
        "name": "Puliyodharai Spice Powder (Fenugreek & Sesame)",
        "nameTa": "வெந்தய எள் பொடி",
        "nameHi": "मेथी-तिल मसाला पाउडर",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Spices"
      },
      {
        "id": "ing-102",
        "name": "Gingelly / Sesame Oil (Nallennai)",
        "nameTa": "நல்லெண்ணெய்",
        "nameHi": "तिल का तेल",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat generous sesame oil; fry peanuts, mustard seeds, chana dal, urad dal, red chillies, and curry leaves.",
        "instructionTa": "நல்லெண்ணெயில் வேர்க்கடலை மற்றும் தாளிப்பு பொருட்களை வறுக்கவும்.",
        "instructionHi": "तिल के तेल में मूंगफली और तड़का भूनें।"
      },
      {
        "step": 2,
        "instruction": "Pour thick tamarind pulp, add turmeric, salt, and a pinch of jaggery. Simmer for 10 minutes until oil oozes out (Puli Kaaichal).",
        "instructionTa": "புளி கரைசல், மஞ்சள், உப்பு சேர்த்து எண்ணெய் பிரியும் வரை கொதிக்கவிடவும்.",
        "instructionHi": "इमली का रस डालकर तेल अलग होने तक 10 मिनट पकाएं।"
      },
      {
        "step": 3,
        "instruction": "Turn off heat, stir in freshly roasted fenugreek-sesame spice powder.",
        "instructionTa": "வறுத்த வெந்தய எள் பொடியை சேர்க்கவும்.",
        "instructionHi": "भुना मेथी-तिल पाउडर मिलाएं।"
      },
      {
        "step": 4,
        "instruction": "Mix the tangy paste into cooled rice and rest for 1 hour for deep flavor absorption before serving.",
        "instructionTa": "சாதத்துடன் கலந்து 1 மணி நேரம் ஊறவைத்து பரிமாறவும்.",
        "instructionHi": "चावल में मिलाकर 1 घंटा रखें ताकि स्वाद रच-बस जाए।"
      }
    ],
    "nutrition": {
      "calories": 330,
      "protein": 7,
      "carbohydrates": 52,
      "fat": 11,
      "fiber": 5,
      "sugar": 3,
      "isEstimated": true
    },
    "cookingTips": [
      "Generous gingelly (sesame) oil acts as a natural preservative; this rice stays fresh for up to 2 days."
    ],
    "substitutions": {
      "Peanuts": "Cashews"
    }
  },
  {
    "id": "rec-67",
    "title": "Comforting Tamil Poondu Milagu Rasam Sadam",
    "titleTa": "பூண்டு மிளகு ரசம் சாதம்",
    "titleHi": "लहसुन-काली मिर्च रसम भात",
    "description": "Ultimate healing comfort dish of steaming hot rice mashed with pungent garlic, black pepper, cumin, and tangy tomato rasam.",
    "descriptionTa": "சளி மற்றும் செரிமானத்திற்கு உகந்த பூண்டு, மிளகு, சீரகம் மணக்கும் நாட்டு ரசத்துடன் சூடான சாதம் மற்றும் நெய்.",
    "descriptionHi": "सर्दी-जुकाम से राहत देने वाला लहसुन, काली मिर्च, जीरा और टमाटर का गरमागरम रसम चावल देसी घी के साथ।",
    "imageUrl": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Rice dishes",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Healthy food",
      "Quick meals"
    ],
    "allergens": [],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 12,
    "totalTimeMinutes": 17,
    "servings": 2,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 240,
    "ingredients": [
      {
        "id": "ing-14",
        "name": "Steaming Hot Rice",
        "nameTa": "சூடான சாதம்",
        "nameHi": "गरमागरम चावल",
        "quantity": 2.5,
        "unit": "cups",
        "category": "Grains"
      },
      {
        "id": "ing-11",
        "name": "Tomatoes",
        "nameTa": "தக்காளி",
        "nameHi": "टमाटर",
        "quantity": 2,
        "unit": "crushed by hand",
        "category": "Produce"
      },
      {
        "id": "ing-128",
        "name": "Garlic Pods",
        "nameTa": "பூண்டு",
        "nameHi": "लहसुन",
        "quantity": 8,
        "unit": "crushed",
        "category": "Produce"
      },
      {
        "id": "ing-129",
        "name": "Black Peppercorns & Cumin",
        "nameTa": "மிளகு & சீரகம்",
        "nameHi": "काली मिर्च और जीरा",
        "quantity": 1.5,
        "unit": "tbsp coarsely crushed",
        "category": "Spices"
      },
      {
        "id": "ing-125",
        "name": "Tamarind Water",
        "nameTa": "புளித்தண்ணீர்",
        "nameHi": "इमली का पानी",
        "quantity": 1,
        "unit": "cup thin",
        "category": "Pantry"
      },
      {
        "id": "ing-110",
        "name": "Ghee",
        "nameTa": "நெய்",
        "nameHi": "घी",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "In a vessel, mix crushed tomatoes, tamarind water, turmeric, salt, and curry leaves; boil for 5 minutes.",
        "instructionTa": "தக்காளி, புளித்தண்ணீர், உப்பு சேர்த்து கொதிக்கவிடவும்.",
        "instructionHi": "टमाटर, इमली पानी और नमक उबालें।"
      },
      {
        "step": 2,
        "instruction": "Add freshly crushed garlic, black pepper, and cumin; simmer until froth rises on top.",
        "instructionTa": "இடித்த பூண்டு, மிளகு, சீரகம் சேர்த்து நுரை கூடி வரும் வரை சூடாக்கவும்.",
        "instructionHi": "कुटा लहसुन, काली मिर्च, जीरा डालें और झाग आने तक पकाएं।"
      },
      {
        "step": 3,
        "instruction": "Temper with mustard seeds and curry leaves in ghee, pour into rasam, and switch off immediately.",
        "instructionTa": "நெய்யில் கடுகு தாளித்து ரசத்தில் ஊற்றி அடுப்பை அணைக்கவும்.",
        "instructionHi": "घी में राई का तड़का लगाकर रसम में डालें।"
      },
      {
        "step": 4,
        "instruction": "Pour generously over hot rice with a dollop of ghee and Potato Roast on the side.",
        "instructionTa": "சூடான சாதத்தில் நெய்யுடன் கலந்து உருளைக்கிழங்கு வறுவலுடன் சாப்பிடவும்.",
        "instructionHi": "गरम चावल और घी के साथ मिलाकर परोसें।"
      }
    ],
    "nutrition": {
      "calories": 260,
      "protein": 5,
      "carbohydrates": 48,
      "fat": 5,
      "fiber": 3,
      "sugar": 2,
      "isEstimated": true
    },
    "cookingTips": [
      "Never boil rasam vigorously once pepper and garlic are added; take off heat right as it froths."
    ],
    "substitutions": {
      "Ghee": "Cold pressed sesame oil"
    }
  },
  {
    "id": "rec-68",
    "title": "Chennai Wedding Style Veg Brinji Rice",
    "titleTa": "சென்னை கல்யாண வீட்டு பிரின்ஜி சாதம்",
    "titleHi": "चेन्नई स्टाइल वेज ब्रिंजी राइस",
    "description": "Luxurious Tamil Nadu banquet rice cooked in thick fresh coconut milk with bay leaves, fried bread croutons, and garden vegetables.",
    "descriptionTa": "தேங்காய்ப்பால், வறுத்த பிரெட் துண்டுகள் மற்றும் காய்கறிகள் சேர்த்து கல்யாண வீட்டு மணத்துடன் செய்யப்படும் பிரின்ஜி சாதம்.",
    "descriptionHi": "नारियल के गाढ़े दूध, खड़े मसालों, तली हुई ब्रेड क्रूटॉन्स और सब्जियों से बना चेन्नई का प्रसिद्ध पुलाव।",
    "imageUrl": "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Rice dishes",
    "dietaryTags": [
      "Vegetarian"
    ],
    "allergens": [
      "Wheat"
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 35,
    "servings": 4,
    "difficulty": "Medium",
    "rating": 4.9,
    "ratingCount": 310,
    "ingredients": [
      {
        "id": "ing-130",
        "name": "Seeraga Samba or Basmati Rice",
        "nameTa": "சீரக சம்பா அரிசி",
        "nameHi": "सीरगा सांबा या बासमती चावल",
        "quantity": 2,
        "unit": "cups soaked",
        "category": "Grains"
      },
      {
        "id": "ing-118",
        "name": "Thick Coconut Milk",
        "nameTa": "தேங்காய்ப்பால்",
        "nameHi": "गाढ़ा नारियल दूध",
        "quantity": 1.5,
        "unit": "cups",
        "category": "Dairy"
      },
      {
        "id": "ing-131",
        "name": "Fried Bread Croutons",
        "nameTa": "பொரித்த பிரெட் துண்டுகள்",
        "nameHi": "तली हुई ब्रेड क्यूब्स",
        "quantity": 1,
        "unit": "cup",
        "category": "Bakery"
      },
      {
        "id": "ing-108",
        "name": "Mixed Vegetables (Carrot, Beans, Peas)",
        "nameTa": "காய்கறிகள்",
        "nameHi": "कटी सब्जियां",
        "quantity": 1,
        "unit": "cup",
        "category": "Produce"
      },
      {
        "id": "ing-02",
        "name": "Onion & Tomatoes",
        "nameTa": "வெங்காயம் & தக்காளி",
        "nameHi": "प्याज और टमाटर",
        "quantity": 2,
        "unit": "each sliced",
        "category": "Produce"
      },
      {
        "id": "ing-111",
        "name": "Biryani Whole Spices & Bay Leaf (Brinji Elai)",
        "nameTa": "பிரியாணி மசாலா & பிரின்ஜி இலை",
        "nameHi": "खड़े मसाले और तेजपत्ता",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Spices"
      },
      {
        "id": "ing-110",
        "name": "Ghee & Cooking Oil",
        "nameTa": "நெய் & எண்ணெய்",
        "nameHi": "घी और तेल",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat ghee and oil; add bay leaf, star anise, cloves, and cardamom; sauté onions until golden brown.",
        "instructionTa": "நெய்யில் பிரின்ஜி இலை மற்றும் மசாலா தாளித்து வெங்காயம் வதக்கவும்.",
        "instructionHi": "घी में तेजपत्ता और खड़े मसाले डालकर प्याज भूनें।"
      },
      {
        "step": 2,
        "instruction": "Add ginger garlic paste, green chillies, mint, coriander, and vegetables; sauté 3 minutes.",
        "instructionTa": "இஞ்சி பூண்டு மற்றும் காய்கறிகள் வதக்கவும்.",
        "instructionHi": "अदरक-लहसुन और सब्जियां भूनें।"
      },
      {
        "step": 3,
        "instruction": "Add coconut milk and 2 cups water with salt; bring to a boil. Stir in soaked rice.",
        "instructionTa": "தேங்காய்ப்பால், தண்ணீர் ஊற்றி கொதித்ததும் அரிசி சேர்க்கவும்.",
        "instructionHi": "नारियल का दूध, पानी और चावल मिलाएं।"
      },
      {
        "step": 4,
        "instruction": "Cover and simmer on low flame for 15 minutes. Fold in crunchy fried bread croutons before serving with Onion Raitha.",
        "instructionTa": "15 நிமிடம் தம்மில் வேகவைத்து வறுத்த பிரெட் துண்டுகள் சேர்த்து பரிமாறவும்.",
        "instructionHi": "धीमी आंच पर 15 मिनट दम दें और तली हुई ब्रेड डालकर परोसें।"
      }
    ],
    "nutrition": {
      "calories": 360,
      "protein": 7,
      "carbohydrates": 56,
      "fat": 12,
      "fiber": 4,
      "sugar": 3,
      "isEstimated": true
    },
    "cookingTips": [
      "Fried bread croutons are the crowning jewel of authentic Chennai Brinji rice."
    ],
    "substitutions": {
      "Seeraga Samba": "Basmati rice"
    }
  },
  {
    "id": "rec-69",
    "title": "Manathakkali Vatha Kuzhambu",
    "titleTa": "பாரம்பரிய மணத்தக்காளி வத்தக்குழம்பு",
    "titleHi": "पारंपरिक वथा कुझाम्बू (सन-ड्राइड बेरी कढ़ी)",
    "description": "Pungent, tangy, and deeply flavored Tamil Nadu sun-dried nightshade berry curry simmered in dark sesame oil with garlic and tamarind.",
    "descriptionTa": "நல்லெண்ணெயில் மணத்தக்காளி வற்றல், பூண்டு மற்றும் புளி சேர்த்து சுண்டக் காய்ச்சப்படும் நாவுக்கு ருசியான வத்தக்குழம்பு.",
    "descriptionHi": "तिल के तेल, इमली, लहसुन और धूप में सुखाई गई बेरी से बनी तमिलनाडु की गाढ़ी, तीखी और चटपटी कढ़ी।",
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Curries",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Healthy food"
    ],
    "allergens": [],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "servings": 4,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 310,
    "ingredients": [
      {
        "id": "ing-132",
        "name": "Manathakkali or Sundakkai Vathal",
        "nameTa": "மணத்தக்காளி அல்லது சுண்டைக்காய் வற்றல்",
        "nameHi": "वथल (सूखी बेरी)",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Pantry"
      },
      {
        "id": "ing-125",
        "name": "Thick Tamarind Extract",
        "nameTa": "புளி கரைசல்",
        "nameHi": "इमली का गाढ़ा घोल",
        "quantity": 1,
        "unit": "cup",
        "category": "Pantry"
      },
      {
        "id": "ing-128",
        "name": "Garlic Cloves",
        "nameTa": "பூண்டு பற்கள்",
        "nameHi": "लहसुन की कलियां",
        "quantity": 12,
        "unit": "peeled",
        "category": "Produce"
      },
      {
        "id": "ing-133",
        "name": "Sambar Powder / Vatha Kuzhambu Powder",
        "nameTa": "சாம்பார் தூள் / வத்தக்குழம்பு பொடி",
        "nameHi": "सांभर पाउडर",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Spices"
      },
      {
        "id": "ing-102",
        "name": "Gingelly / Sesame Oil",
        "nameTa": "நல்லெண்ணெய்",
        "nameHi": "तिल का तेल",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Pantry"
      },
      {
        "id": "ing-134",
        "name": "Fenugreek Seeds & Mustard",
        "nameTa": "வெந்தயம் & கடுகு",
        "nameHi": "मेथी दाना और राई",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat sesame oil; fry vathal until aromatic and dark brown. Remove and set aside.",
        "instructionTa": "நல்லெண்ணெயில் வற்றலை வறுத்து தனியே எடுக்கவும்.",
        "instructionHi": "तिल के तेल में वथल भूनकर निकालें।"
      },
      {
        "step": 2,
        "instruction": "In the remaining oil, splutter mustard, fenugreek, curry leaves, and garlic cloves; cook until garlic is lightly golden.",
        "instructionTa": "கடுகு, வெந்தயம் மற்றும் பூண்டு வதக்கவும்.",
        "instructionHi": "राई, मेथी और लहसुन भूनें।"
      },
      {
        "step": 3,
        "instruction": "Add tamarind extract, turmeric, sambar powder, and salt. Simmer for 12 minutes on medium flame until thick and oil floats on top.",
        "instructionTa": "புளி கரைசல், மசாலா தூள் சேர்த்து எண்ணெய் மிதக்கும் வரை சுண்டக்காய்ச்சவும்.",
        "instructionHi": "इमली का रस और मसाले डालकर गाढ़ा होने तक पकाएं।"
      },
      {
        "step": 4,
        "instruction": "Drop in fried vathal, add a pinch of jaggery, boil 2 minutes, and serve with hot rice and Sutha Ghee.",
        "instructionTa": "வறுத்த வற்றல் மற்றும் சிறிதளவு வெல்லம் சேர்த்து சாதத்துடன் பரிமாறவும்.",
        "instructionHi": "तली हुई वथल और चुटकी भर गुड़ मिलाकर परोसें।"
      }
    ],
    "nutrition": {
      "calories": 180,
      "protein": 3,
      "carbohydrates": 24,
      "fat": 8,
      "fiber": 4,
      "sugar": 4,
      "isEstimated": true
    },
    "cookingTips": [
      "Simmering until oil floats on top (ennai piriyum varai) ensures it can be stored for weeks without spoiling."
    ],
    "substitutions": {
      "Manathakkali": "Sundakkai vathal or Small shallots"
    }
  },
  {
    "id": "rec-70",
    "title": "Village Poondu Kara Kuzhambu",
    "titleTa": "கிராமத்து பூண்டு காரக்குழம்பு",
    "titleHi": "विलेज स्टाइल लहसुन कारा कुझाम्बू",
    "description": "Fiery, rustic Tamil garlic curry simmered with whole peeled garlic pods, shallots, ripe tomatoes, and tamarind in sesame oil.",
    "descriptionTa": "முழு பூண்டு பற்கள், சின்ன வெங்காயம் மற்றும் தக்காளி சேர்த்து நல்லெண்ணெயில் மணக்க மணக்க வைக்கப்படும் காரசாரமான குழம்பு.",
    "descriptionHi": "साबुत लहसुन, छोटे प्याज, टमाटर और इमली को तिल के तेल में धीमी आंच पर पकाकर बनाई गई तीखी और मसालेदार ग्रेवी।",
    "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Curries",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Healthy food"
    ],
    "allergens": [],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "servings": 4,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 280,
    "ingredients": [
      {
        "id": "ing-128",
        "name": "Garlic Pods",
        "nameTa": "பூண்டு",
        "nameHi": "लहसुन",
        "quantity": 20,
        "unit": "cloves peeled",
        "category": "Produce"
      },
      {
        "id": "ing-02",
        "name": "Small Shallots (Chinna Vengayam)",
        "nameTa": "சின்ன வெங்காயம்",
        "nameHi": "छोटे प्याज",
        "quantity": 15,
        "unit": "peeled",
        "category": "Produce"
      },
      {
        "id": "ing-11",
        "name": "Tomatoes",
        "nameTa": "தக்காளி",
        "nameHi": "टमाटर",
        "quantity": 2,
        "unit": "chopped",
        "category": "Produce"
      },
      {
        "id": "ing-125",
        "name": "Tamarind Pulp",
        "nameTa": "புளி கரைசல்",
        "nameHi": "इमली का रस",
        "quantity": 1,
        "unit": "cup",
        "category": "Pantry"
      },
      {
        "id": "ing-133",
        "name": "Kuzhambu Chilli Powder",
        "nameTa": "குழம்பு மிளகாய் தூள்",
        "nameHi": "कुझाम्बू मसाला",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Spices"
      },
      {
        "id": "ing-102",
        "name": "Sesame Oil",
        "nameTa": "நல்லெண்ணெய்",
        "nameHi": "तिल का तेल",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat sesame oil; splutter mustard seeds, fenugreek, and curry leaves.",
        "instructionTa": "நல்லெண்ணெயில் கடுகு, வெந்தயம் தாளிக்கவும்.",
        "instructionHi": "तिल के तेल में राई और मेथी भूनें।"
      },
      {
        "step": 2,
        "instruction": "Add garlic pods and shallots; sauté on medium heat until golden and tender.",
        "instructionTa": "பூண்டு மற்றும் சின்ன வெங்காயம் பொன்னிறமாக வதக்கவும்.",
        "instructionHi": "लहसुन और प्याज को सुनहरा होने तक भूनें।"
      },
      {
        "step": 3,
        "instruction": "Add tomatoes and cook until soft. Stir in kuzhambu chilli powder and salt.",
        "instructionTa": "தக்காளி மற்றும் மிளகாய் தூள் சேர்த்து வதக்கவும்.",
        "instructionHi": "टमाटर और मसाला डालकर भूनें।"
      },
      {
        "step": 4,
        "instruction": "Pour tamarind water and simmer 15 minutes until thick and glossy. Serve with steamed rice and Appalam.",
        "instructionTa": "புளித்தண்ணீர் ஊற்றி 15 நிமிடம் கொதிக்கவைத்து அப்பளத்துடன் பரிமாறவும்.",
        "instructionHi": "इमली का पानी डालकर 15 मिनट गाढ़ा पकाएं और परोसें।"
      }
    ],
    "nutrition": {
      "calories": 190,
      "protein": 4,
      "carbohydrates": 26,
      "fat": 8,
      "fiber": 4,
      "sugar": 3,
      "isEstimated": true
    },
    "cookingTips": [
      "Cook garlic slowly so it becomes tender and sweet like butter inside the spicy sauce."
    ],
    "substitutions": {
      "Shallots": "Diced red onions"
    }
  },
  {
    "id": "rec-71",
    "title": "Vendakkai Mor Kuzhambu (Spiced Yogurt Curry)",
    "titleTa": "வெண்டைக்காய் மோர் குழம்பு",
    "titleHi": "भिंडी मोर कुझाम्बू (साउथ इंडियन कढ़ी)",
    "description": "Cooling, comforting golden yogurt curry made with coconut, cumin, ginger, and pan-sautéed okra.",
    "descriptionTa": "தேங்காய், சீரகம், இஞ்சி விழுது மற்றும் வதக்கிய வெண்டைக்காய் சேர்த்து செய்யப்படும் குளிர்ச்சியான மோர் குழம்பு.",
    "descriptionHi": "दही, ताजा नारियल, जीरा, अदरक और कुरकुरी भिंडी से बनी तमिलनाडु की पारंपरिक स्वादिष्ट कढ़ी।",
    "imageUrl": "https://images.unsplash.com/photo-1540189549310-a6900f6c2409?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Curries",
    "dietaryTags": [
      "Vegetarian",
      "Gluten-Free",
      "Healthy food",
      "Quick meals"
    ],
    "allergens": [
      "Milk"
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 20,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.8,
    "ratingCount": 195,
    "ingredients": [
      {
        "id": "ing-135",
        "name": "Fresh Curd / Yogurt",
        "nameTa": "தயிர்",
        "nameHi": "ताजा दही",
        "quantity": 2,
        "unit": "cups beaten",
        "category": "Dairy"
      },
      {
        "id": "ing-136",
        "name": "Okra / Ladyfinger (Vendakkai)",
        "nameTa": "வெண்டைக்காய்",
        "nameHi": "भिंडी",
        "quantity": 8,
        "unit": "cut into 1-inch pieces",
        "category": "Produce"
      },
      {
        "id": "ing-123",
        "name": "Fresh Coconut & Cumin",
        "nameTa": "தேங்காய் & சீரகம்",
        "nameHi": "नारियल और जीरा",
        "quantity": 0.5,
        "unit": "cup paste",
        "category": "Produce"
      },
      {
        "id": "ing-04",
        "name": "Green Chillies & Ginger",
        "nameTa": "பச்சை மிளகாய் & இஞ்சி",
        "nameHi": "हरी मिर्च और अदरक",
        "quantity": 2,
        "unit": "ground with coconut",
        "category": "Produce"
      },
      {
        "id": "ing-12",
        "name": "Turmeric Powder & Salt",
        "nameTa": "மஞ்சள் தூள் & உப்பு",
        "nameHi": "हल्दी और नमक",
        "quantity": 0.5,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-106",
        "name": "Mustard Seeds & Curry Leaves",
        "nameTa": "கடுகு & கறிவேப்பிலை",
        "nameHi": "राई और कढ़ी पत्ता",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Sauté chopped okra in 1 tsp oil until completely non-slimy and crisp.",
        "instructionTa": "வெண்டைக்காயை வதக்கி வைக்கவும்.",
        "instructionHi": "भिंडी को बिना चिपचिपेपन के फ्राई करें।"
      },
      {
        "step": 2,
        "instruction": "Grind coconut, cumin, ginger, and green chillies into a smooth paste.",
        "instructionTa": "தேங்காய், சீரகம், இஞ்சி அரைக்கவும்.",
        "instructionHi": "नारियल, जीरा और मिर्च का पेस्ट बनाएं।"
      },
      {
        "step": 3,
        "instruction": "Mix the coconut paste, turmeric, and cooked okra into the beaten yogurt in a pot with salt.",
        "instructionTa": "அரைத்த விழுது, வெண்டைக்காய், தயிர் ஒன்றாக கலக்கவும்.",
        "instructionHi": "दही में पेस्ट, हल्दी, नमक और भिंडी मिलाएं।"
      },
      {
        "step": 4,
        "instruction": "Gently warm on low heat until frothy (do not boil, or curd will split!). Temper with mustard and curry leaves in coconut oil.",
        "instructionTa": "மிதமான தீயில் நுரைத்து வரும் வரை சூடாக்கி கடுகு தாளிக்கவும்.",
        "instructionHi": "धीमी आंच पर झाग आने तक गरम करें (उबालें नहीं) और तड़का लगाएं।"
      }
    ],
    "nutrition": {
      "calories": 170,
      "protein": 5,
      "carbohydrates": 12,
      "fat": 11,
      "fiber": 3,
      "sugar": 4,
      "isEstimated": true
    },
    "cookingTips": [
      "Never boil Mor Kuzhambu; take off the stove immediately when foam begins to rise at the edges."
    ],
    "substitutions": {
      "Okra": "Ash gourd (Poosanikai) or Potato"
    }
  },
  {
    "id": "rec-72",
    "title": "Chettinad Ennai Kathirikai Kuzhambu",
    "titleTa": "செட்டிநாடு எண்ணெய் கத்தரிக்காய் குழம்பு",
    "titleHi": "चेट्टिनाड एन्नई कथिरिकाई कुझाम्बू (भरवां बैंगन कढ़ी)",
    "description": "Tender baby brinjals slit and shallow-fried in oil, then simmered in a roasted coconut, coriander, and tamarind gravy.",
    "descriptionTa": "எண்ணெயில் பொரித்த பிஞ்சு கத்தரிக்காய் சேர்த்து மசாலா மணக்க செய்யப்படும் பாரம்பரிய செட்டிநாடு குழம்பு.",
    "descriptionHi": "छोटे बैंगनों को चीरा लगाकर तेल में तलकर, भुने नारियल और इमली की गाढ़ी ग्रेवी में पकाया गया प्रसिद्ध व्यंजन।",
    "imageUrl": "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Curries",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free"
    ],
    "allergens": [],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 35,
    "servings": 4,
    "difficulty": "Medium",
    "rating": 4.9,
    "ratingCount": 270,
    "ingredients": [
      {
        "id": "ing-137",
        "name": "Baby Purple Brinjals (Kathirikai)",
        "nameTa": "பிஞ்சு கத்தரிக்காய்",
        "nameHi": "छोटे बैंगन",
        "quantity": 8,
        "unit": "slit into 4 with stem",
        "category": "Produce"
      },
      {
        "id": "ing-02",
        "name": "Shallots & Tomato",
        "nameTa": "சின்ன வெங்காயம் & தக்காளி",
        "nameHi": "प्याज और टमाटर",
        "quantity": 1,
        "unit": "cup chopped",
        "category": "Produce"
      },
      {
        "id": "ing-125",
        "name": "Tamarind Pulp",
        "nameTa": "புளி கரைசல்",
        "nameHi": "इमली का पल्प",
        "quantity": 1,
        "unit": "cup",
        "category": "Pantry"
      },
      {
        "id": "ing-138",
        "name": "Roasted Spice Paste (Coriander, Pepper, Coconut)",
        "nameTa": "வறுத்த மசாலா விழுது",
        "nameHi": "भुना नारियल-धनिया मसाला",
        "quantity": 0.5,
        "unit": "cup",
        "category": "Spices"
      },
      {
        "id": "ing-102",
        "name": "Sesame Oil",
        "nameTa": "நல்லெண்ணெய்",
        "nameHi": "तिल का तेल",
        "quantity": 3.5,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Slit brinjals into four leaving stems intact; shallow fry in 2 tbsp sesame oil until skins blister and turn soft.",
        "instructionTa": "கத்தரிக்காயை எண்ணெயில் வதக்கி எடுக்கவும்.",
        "instructionHi": "बैंगन को तेल में नर्म होने तक फ्राई करें।"
      },
      {
        "step": 2,
        "instruction": "In remaining oil, splutter mustard, fenugreek, curry leaves, and sauté shallots and tomatoes.",
        "instructionTa": "தாளிப்புடன் வெங்காயம், தக்காளி வதக்கவும்.",
        "instructionHi": "तड़का लगाकर प्याज-टमाटर भूनें।"
      },
      {
        "step": 3,
        "instruction": "Add roasted spice paste, tamarind pulp, and salt; simmer for 8 minutes.",
        "instructionTa": "அரைத்த விழுது மற்றும் புளித்தண்ணீர் சேர்த்து கொதிக்கவிடவும்.",
        "instructionHi": "मसाला पेस्ट और इमली का रस डालकर उबालें।"
      },
      {
        "step": 4,
        "instruction": "Add fried brinjals, simmer 6 minutes until brinjals absorb the tangy spicy sauce. Serve with hot rice.",
        "instructionTa": "கத்தரிக்காய் சேர்த்து 6 நிமிடம் சுண்டவைத்து பரிமாறவும்.",
        "instructionHi": "बैंगन डालकर 6 मिनट धीमी आंच पर पकाएं।"
      }
    ],
    "nutrition": {
      "calories": 230,
      "protein": 4,
      "carbohydrates": 22,
      "fat": 14,
      "fiber": 6,
      "sugar": 4,
      "isEstimated": true
    },
    "cookingTips": [
      "Keep the stalk intact on the brinjal to prevent it from disintegrating into the gravy."
    ],
    "substitutions": {
      "Baby brinjal": "Regular cubed eggplant"
    }
  },
  {
    "id": "rec-73",
    "title": "Tamil Chow-Chow Paruppu Kootu",
    "titleTa": "சுவையான சௌசௌ பருப்பு கூட்டு",
    "titleHi": "चाउ-चाउ दाल कूटू",
    "description": "Comforting, mild Tamil Nadu stew made with chayote squash, moong dal, turmeric, and fresh coconut-cumin paste.",
    "descriptionTa": "பாசிப்பருப்பு, சௌசௌ காய் மற்றும் தேங்காய் சீரக விழுது சேர்த்து செய்யப்படும் சத்தான வீட்டு கூட்டு.",
    "descriptionHi": "मूंग दाल, चाउ-चाउ (इस्कुश), हल्दी और नारियल-जीरे के पेस्ट से बनी पौष्टिक और हल्की साउथ इंडियन दाल कढ़ी।",
    "imageUrl": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Curries",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Healthy food"
    ],
    "allergens": [],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 25,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.8,
    "ratingCount": 175,
    "ingredients": [
      {
        "id": "ing-139",
        "name": "Chayote Squash (Chow-Chow) or Cabbage",
        "nameTa": "சௌசௌ அல்லது முட்டைக்கோஸ்",
        "nameHi": "चाउ-चाउ या पत्तागोभी",
        "quantity": 2,
        "unit": "cups diced",
        "category": "Produce"
      },
      {
        "id": "ing-140",
        "name": "Moong Dal / Chana Dal",
        "nameTa": "பாசிப்பருப்பு",
        "nameHi": "मूंग दाल",
        "quantity": 0.5,
        "unit": "cup cooked",
        "category": "Pantry"
      },
      {
        "id": "ing-123",
        "name": "Coconut & Cumin Paste",
        "nameTa": "தேங்காய் சீரக விழுது",
        "nameHi": "नारियल-जीरा पेस्ट",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Produce"
      },
      {
        "id": "ing-106",
        "name": "Mustard Seeds, Urad Dal & Curry Leaves",
        "nameTa": "கடுகு, உளுந்து, கறிவேப்பிலை",
        "nameHi": "राई, उड़द दाल, कढ़ी पत्ता",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-110",
        "name": "Coconut Oil or Ghee",
        "nameTa": "தேங்காய் எண்ணெய் / நெய்",
        "nameHi": "नारियल तेल या घी",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Boil diced chow-chow with turmeric and a cup of water until fork-tender.",
        "instructionTa": "சௌசௌ காயை வேகவைக்கவும்.",
        "instructionHi": "चाउ-चाउ को हल्दी और पानी में उबालें।"
      },
      {
        "step": 2,
        "instruction": "Add cooked moong dal, coconut-cumin paste, and salt; simmer for 4 minutes.",
        "instructionTa": "பருப்பு மற்றும் தேங்காய் விழுது சேர்த்து கொதிக்கவிடவும்.",
        "instructionHi": "दाल और नारियल पेस्ट डालकर 4 मिनट पकाएं।"
      },
      {
        "step": 3,
        "instruction": "Temper mustard, urad dal, and red chillies in coconut oil, pour over kootu, and serve with Vatha Kuzhambu.",
        "instructionTa": "தேங்காய் எண்ணெயில் தாளித்து கொட்டவும்.",
        "instructionHi": "नारियल तेल में तड़का लगाएं और वथा कुझाम्बू के साथ परोसें।"
      }
    ],
    "nutrition": {
      "calories": 160,
      "protein": 7,
      "carbohydrates": 22,
      "fat": 5,
      "fiber": 4,
      "sugar": 3,
      "isEstimated": true
    },
    "cookingTips": [
      "Pairing mild Kootu with a spicy Vatha Kuzhambu is the hallmark of a traditional Tamil lunch."
    ],
    "substitutions": {
      "Chayote": "Cabbage, Snake gourd, or Ridge gourd"
    }
  },
  {
    "id": "rec-74",
    "title": "Beans Carrot Coconut Poriyal",
    "titleTa": "பீன்ஸ் கேரட் தேங்காய் பொரியல்",
    "titleHi": "बीन्स गाजर नारियल पोरियल",
    "description": "Crisp-tender finely diced French beans and carrots tempered with mustard, urad dal, green chillies, and fresh grated coconut.",
    "descriptionTa": "பொடியாக நறுக்கிய பீன்ஸ் மற்றும் கேரட் காய்கறிகளுடன் தேங்காய் துருவல் சேர்த்து செய்யப்படும் பாரம்பரிய பொரியல்.",
    "descriptionHi": "बारीक कटी बीन्स और गाजर को राई, उड़द दाल, हरी मिर्च और ताजे नारियल के साथ हल्का पकाया गया पौष्टिक व्यंजन।",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Lunch",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Healthy food",
      "Quick meals"
    ],
    "allergens": [],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 20,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.8,
    "ratingCount": 160,
    "ingredients": [
      {
        "id": "ing-141",
        "name": "French Beans & Carrots",
        "nameTa": "பீன்ஸ் & கேரட்",
        "nameHi": "बीन्स और गाजर",
        "quantity": 2.5,
        "unit": "cups finely diced",
        "category": "Produce"
      },
      {
        "id": "ing-123",
        "name": "Fresh Grated Coconut",
        "nameTa": "துருவிய தேங்காய்",
        "nameHi": "कद्दूकस ताजा नारियल",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Produce"
      },
      {
        "id": "ing-106",
        "name": "Mustard Seeds & Urad Dal",
        "nameTa": "கடுகு & உளுந்து",
        "nameHi": "राई और उड़द दाल",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-04",
        "name": "Green Chillies & Curry Leaves",
        "nameTa": "பச்சை மிளகாய் & கறிவேப்பிலை",
        "nameHi": "हरी मिर्च और कढ़ी पत्ता",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Produce"
      },
      {
        "id": "ing-124",
        "name": "Coconut Oil",
        "nameTa": "தேங்காய் எண்ணெய்",
        "nameHi": "नारियल तेल",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat coconut oil; splutter mustard seeds, urad dal, green chillies, and curry leaves.",
        "instructionTa": "எண்ணெயில் கடுகு, உளுந்து தாளிக்கவும்.",
        "instructionHi": "नारियल तेल में राई और उड़द दाल भूनें।"
      },
      {
        "step": 2,
        "instruction": "Add diced beans and carrots, salt, and 3 tablespoons of water. Cover and steam for 5-6 minutes until crisp-tender.",
        "instructionTa": "காய்கறிகள், உப்பு சேர்த்து சிறிது தண்ணீர் தெளித்து வேகவைக்கவும்.",
        "instructionHi": "सब्जियां और नमक डालकर हल्का पानी छिड़कें और ढककर 5 मिनट पकाएं।"
      },
      {
        "step": 3,
        "instruction": "Uncover, evaporate excess moisture, turn off flame, and toss in fresh grated coconut.",
        "instructionTa": "தேங்காய் துருவல் தூவி கிளறி இறக்கவும்.",
        "instructionHi": "आंच बंद करके ताजा नारियल मिलाएं और परोसें।"
      }
    ],
    "nutrition": {
      "calories": 120,
      "protein": 3,
      "carbohydrates": 15,
      "fat": 5,
      "fiber": 4,
      "sugar": 4,
      "isEstimated": true
    },
    "cookingTips": [
      "Do not overcook the vegetables; they should maintain a pleasant, vibrant crunch."
    ],
    "substitutions": {
      "Beans & Carrots": "Cabbage or Beetroot"
    }
  },
  {
    "id": "rec-75",
    "title": "Crispy Tamil Masala Vadai (Aamai Vadai)",
    "titleTa": "மொறுமொறு செட்டிநாடு மசாலா வடை",
    "titleHi": "मसाला वड़ा (आमाई वड़ा)",
    "description": "Golden crunchy exterior and spiced interior fritters made from coarsely ground chana dal, fennel seeds, shallots, and curry leaves.",
    "descriptionTa": "கடலைப்பருப்பு, சோம்பு, சின்ன வெங்காயம் மற்றும் மசாலா சேர்த்து பொன்னிறமாக பொரிக்கப்படும் சுவையான டீக்கடை மசால் வடை.",
    "descriptionHi": "दरदरी पिसी चना दाल, सौंफ, प्याज, हरी मिर्च और कढ़ी पत्तों से बना कुरकुरा और मसालेदार पारंपरिक साउथ इंडियन वड़ा।",
    "imageUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Snacks",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "High Protein"
    ],
    "allergens": [],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 30,
    "servings": 4,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 320,
    "ingredients": [
      {
        "id": "ing-142",
        "name": "Chana Dal (Kadalai Paruppu)",
        "nameTa": "கடலைப்பருப்பு",
        "nameHi": "चना दाल",
        "quantity": 1.5,
        "unit": "cups soaked 2 hrs",
        "category": "Pantry"
      },
      {
        "id": "ing-02",
        "name": "Onion (Finely Chopped)",
        "nameTa": "வெங்காயம்",
        "nameHi": "प्याज",
        "quantity": 1,
        "unit": "cup",
        "category": "Produce"
      },
      {
        "id": "ing-114",
        "name": "Fennel Seeds (Sombu)",
        "nameTa": "சோம்பு",
        "nameHi": "सौंफ",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Spices"
      },
      {
        "id": "ing-115",
        "name": "Dried Red Chillies & Green Chillies",
        "nameTa": "காய்ந்த மிளகாய் & பச்சை மிளகாய்",
        "nameHi": "लाल व हरी मिर्च",
        "quantity": 3,
        "unit": "pcs each",
        "category": "Spices"
      },
      {
        "id": "ing-05",
        "name": "Ginger & Garlic",
        "nameTa": "இஞ்சி & பூண்டு",
        "nameHi": "अदरक और लहसुन",
        "quantity": 1,
        "unit": "tbsp minced",
        "category": "Produce"
      },
      {
        "id": "ing-06",
        "name": "Curry Leaves & Mint",
        "nameTa": "கறிவேப்பிலை & புதினா",
        "nameHi": "कढ़ी पत्ता और पुदीना",
        "quantity": 0.3,
        "unit": "cup chopped",
        "category": "Produce"
      },
      {
        "id": "ing-09",
        "name": "Oil for Deep Frying",
        "nameTa": "பொரிக்க எண்ணெய்",
        "nameHi": "तलने के लिए तेल",
        "quantity": 2,
        "unit": "cups",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Reserve 2 tbsp soaked whole chana dal. Coarsely pulse remaining dal with red chillies, fennel seeds, and salt without adding water.",
        "instructionTa": "பருப்பை தண்ணீர் சேர்க்காமல் கரகரப்பாக அரைக்கவும்.",
        "instructionHi": "बिना पानी डाले दाल, सौंफ और लाल मिर्च को दरदरा पीसें।"
      },
      {
        "step": 2,
        "instruction": "Mix in reserved whole dal, chopped onions, ginger, garlic, chillies, mint, and curry leaves.",
        "instructionTa": "வெங்காயம், மசாலா பொருட்கள் சேர்த்து கலக்கவும்.",
        "instructionHi": "कटा प्याज, अदरक-लहसुन और कढ़ी पत्ता मिलाएं।"
      },
      {
        "step": 3,
        "instruction": "Shape into flat round patties and slide gently into hot oil on medium flame.",
        "instructionTa": "வடையாக தட்டி மிதமான சூடான எண்ணெயில் போடவும்.",
        "instructionHi": "चपटी टिक्की बनाकर गरम तेल में डालें।"
      },
      {
        "step": 4,
        "instruction": "Fry until deeply golden and super crisp. Drain and enjoy with hot Masala Chai.",
        "instructionTa": "பொன்னிறமாக பொரித்து டீயுடன் பரிமாறவும்.",
        "instructionHi": "सुनहरा और कुरकुरा होने तक तलें।"
      }
    ],
    "nutrition": {
      "calories": 260,
      "protein": 9,
      "carbohydrates": 32,
      "fat": 11,
      "fiber": 5,
      "sugar": 2,
      "isEstimated": true
    },
    "cookingTips": [
      "Do not add water while grinding; the moisture from onions provides perfect binding."
    ],
    "substitutions": {
      "Chana dal": "Toor dal or Yellow split peas"
    }
  },
  {
    "id": "rec-76",
    "title": "South Indian Urulaikizhangu Bonda",
    "titleTa": "சூடான உருளைக்கிழங்கு போண்டா",
    "titleHi": "आलू बोंडा",
    "description": "Golden spiced potato dumplings dipped in savory gram flour batter and deep fried to crunchy perfection.",
    "descriptionTa": "மசாலா உருளைக்கிழங்கு மசியலை கடலை மாவு கலவையில் நனைத்து பொன்னிறமாக பொரித்தெடுக்கப்படும் சுவையான போண்டா.",
    "descriptionHi": "मसालेदार उबले आलू के गोलों को बेसन के गाढ़े घोल में लपेटकर कुरकुरा तला गया साउथ इंडियन टी-टाइम स्नैक।",
    "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Snacks",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free"
    ],
    "allergens": [],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 30,
    "servings": 4,
    "difficulty": "Easy",
    "rating": 4.8,
    "ratingCount": 230,
    "ingredients": [
      {
        "id": "ing-01",
        "name": "Potatoes (Boiled & Mashed)",
        "nameTa": "உருளைக்கிழங்கு",
        "nameHi": "उबले आलू",
        "quantity": 3,
        "unit": "large",
        "category": "Produce"
      },
      {
        "id": "ing-03",
        "name": "Besan (Gram Flour)",
        "nameTa": "கடலை மாவு",
        "nameHi": "बेसन",
        "quantity": 1,
        "unit": "cup",
        "category": "Pantry"
      },
      {
        "id": "ing-105",
        "name": "Rice Flour",
        "nameTa": "அரிசி மாவு",
        "nameHi": "चावल का आटा",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      },
      {
        "id": "ing-02",
        "name": "Onion & Green Chillies",
        "nameTa": "வெங்காயம் & பச்சை மிளகாய்",
        "nameHi": "प्याज और हरी मिर्च",
        "quantity": 1,
        "unit": "cup chopped",
        "category": "Produce"
      },
      {
        "id": "ing-12",
        "name": "Turmeric & Chilli Powder",
        "nameTa": "மஞ்சள் & மிளகாய் தூள்",
        "nameHi": "हल्दी और मिर्च पाउडर",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-09",
        "name": "Oil for Frying",
        "nameTa": "பொரிக்க எண்ணெய்",
        "nameHi": "तलने के लिए तेल",
        "quantity": 2,
        "unit": "cups",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Sauté onions, mustard, chillies, ginger, and turmeric; mix with mashed potatoes and shape into round balls.",
        "instructionTa": "மசாலா உருளைக்கிழங்கை உருண்டைகளாக உருட்டவும்.",
        "instructionHi": "आलू का तड़का लगाकर गोलियां बना लें।"
      },
      {
        "step": 2,
        "instruction": "Whisk besan, rice flour, chilli powder, salt, and water into a smooth coating batter.",
        "instructionTa": "கடலை மாவு பஜ்ஜி மாவு பதத்திற்கு கரைக்கவும்.",
        "instructionHi": "बेसन, चावल का आटा और पानी मिलाकर गाढ़ा घोल बनाएं।"
      },
      {
        "step": 3,
        "instruction": "Dip potato balls in batter and drop gently into hot oil.",
        "instructionTa": "மாவினில் நனைத்து சூடான எண்ணெயில் போடவும்.",
        "instructionHi": "आलू की गोलियों को बैटर में डुबोकर गरम तेल में डालें।"
      },
      {
        "step": 4,
        "instruction": "Deep fry until golden and crispy. Serve with Coconut Chutney.",
        "instructionTa": "பொன்னிறமாக பொரித்து தேங்காய் சட்னியுடன் பரிமாறவும்.",
        "instructionHi": "सुनहरा तलें और नारियल चटनी के साथ परोसें।"
      }
    ],
    "nutrition": {
      "calories": 240,
      "protein": 6,
      "carbohydrates": 34,
      "fat": 9,
      "fiber": 4,
      "sugar": 2,
      "isEstimated": true
    },
    "cookingTips": [
      "Adding 2 tablespoons of rice flour to besan creates a much crispier outer shell."
    ],
    "substitutions": {
      "Rice flour": "Cornstarch"
    }
  },
  {
    "id": "rec-77",
    "title": "Tamil Nadu Vazhaikkai Bajji",
    "titleTa": "வாழைக்காய் மொறுமொறு பஜ்ஜி",
    "titleHi": "कच्चे केले के पकोड़े (बज्जी)",
    "description": "Crispy and fluffy South Indian tea-stall fritters made with thinly sliced raw plantains dipped in spiced gram flour batter.",
    "descriptionTa": "மெலிதாக நறுக்கிய வாழைக்காயை காரசாரமான கடலை மாவு கலவையில் தோய்த்து சுடச்சுட சுட்டெடுக்கப்படும் மாலை நேர பஜ்ஜி.",
    "descriptionHi": "पतले कटे कच्चे केले को मसालेदार बेसन के घोल में लपेटकर सुनहरा और फूला हुआ तला गया साउथ इंडियन नाश्ता।",
    "imageUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Snacks",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Quick meals"
    ],
    "allergens": [],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 20,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.8,
    "ratingCount": 180,
    "ingredients": [
      {
        "id": "ing-143",
        "name": "Raw Plantain (Vazhaikkai)",
        "nameTa": "வாழைக்காய்",
        "nameHi": "कच्चा केला",
        "quantity": 2,
        "unit": "thinly sliced lengthwise",
        "category": "Produce"
      },
      {
        "id": "ing-03",
        "name": "Besan (Gram Flour)",
        "nameTa": "கடலை மாவு",
        "nameHi": "बेसन",
        "quantity": 1,
        "unit": "cup",
        "category": "Pantry"
      },
      {
        "id": "ing-105",
        "name": "Rice Flour",
        "nameTa": "அரிசி மாவு",
        "nameHi": "चावल का आटा",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      },
      {
        "id": "ing-07",
        "name": "Red Chilli Powder & Hing",
        "nameTa": "மிளகாய் தூள் & பெருங்காயம்",
        "nameHi": "लाल मिर्च और हींग",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-09",
        "name": "Oil for Frying",
        "nameTa": "பொரிக்க எண்ணெய்",
        "nameHi": "तलने के लिए तेल",
        "quantity": 2,
        "unit": "cups",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Peel ridges of raw plantain and slice into thin uniform ribbons using a mandoline.",
        "instructionTa": "வாழைக்காயை மெலிதாக நீளவாக்கில் சீவவும்.",
        "instructionHi": "कच्चे केले को पतला-पतला काट लें।"
      },
      {
        "step": 2,
        "instruction": "Whisk besan, rice flour, chilli powder, salt, hing, and water into a smooth thick ribbon batter.",
        "instructionTa": "மாவு, மசாலா சேர்த்து கெட்டியாக கலக்கவும்.",
        "instructionHi": "बेसन का चिकना और गाढ़ा घोल बनाएं।"
      },
      {
        "step": 3,
        "instruction": "Dip plantain slices to coat both sides, slide into hot oil, and fry until puffed and golden on both sides.",
        "instructionTa": "வாழைக்காயை மாவில் நனைத்து பொன்னிறமாக பொரிக்கவும்.",
        "instructionHi": "घोल में डुबोकर गरम तेल में फूला-फूला तलें।"
      }
    ],
    "nutrition": {
      "calories": 210,
      "protein": 5,
      "carbohydrates": 30,
      "fat": 8,
      "fiber": 3,
      "sugar": 1,
      "isEstimated": true
    },
    "cookingTips": [
      "Thin uniform slices ensure the banana cooks through completely while the outer batter puffs up crisp."
    ],
    "substitutions": {
      "Raw plantain": "Onions, Potatoes, or Paneer"
    }
  },
  {
    "id": "rec-78",
    "title": "Authentic Chettinad Chicken Curry (Kozhi Kuzhambu)",
    "titleTa": "காரசாரமான செட்டிநாடு கோழிக்குழம்பு",
    "titleHi": "चेट्टिनाड चिकन करी (कोझी कुझाम्बू)",
    "description": "Legendary Tamil Nadu country chicken curry simmered in freshly dry-roasted whole spices, poppy seeds, and coconut paste.",
    "descriptionTa": "வறுத்து அரைத்த செட்டிநாடு மசாலா, தேங்காய் மற்றும் நாட்டுக்கோழி சேர்த்து செய்யப்படும் நறுமணமிக்க பாரம்பரிய குழம்பு.",
    "descriptionHi": "ताजा भुने साबुत मसालों, खसखस और नारियल के खास पेस्ट में पकाई गई तमिलनाडु की प्रसिद्ध मसालेदार चिकन करी।",
    "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Curries",
    "dietaryTags": [
      "Non-Vegetarian",
      "High Protein",
      "Gluten-Free"
    ],
    "allergens": [],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "totalTimeMinutes": 40,
    "servings": 4,
    "difficulty": "Medium",
    "rating": 5,
    "ratingCount": 420,
    "ingredients": [
      {
        "id": "ing-144",
        "name": "Chicken (Bone-in pieces)",
        "nameTa": "சிக்கன் / கோழிக்கறி",
        "nameHi": "चिकन",
        "quantity": 600,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing-02",
        "name": "Small Shallots & Tomatoes",
        "nameTa": "சின்ன வெங்காயம் & தக்காளி",
        "nameHi": "प्याज और टमाटर",
        "quantity": 1.5,
        "unit": "cups chopped",
        "category": "Produce"
      },
      {
        "id": "ing-05",
        "name": "Ginger Garlic Paste",
        "nameTa": "இஞ்சி பூண்டு விழுது",
        "nameHi": "अदरक लहसुन पेस्ट",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Produce"
      },
      {
        "id": "ing-145",
        "name": "Fresh Chettinad Masala (Fennel, Pepper, Cumin, Coriander)",
        "nameTa": "செட்டிநாடு மசாலா பொடி",
        "nameHi": "चेट्टिनाड मसाला",
        "quantity": 2.5,
        "unit": "tbsp",
        "category": "Spices"
      },
      {
        "id": "ing-123",
        "name": "Fresh Coconut Paste",
        "nameTa": "தேங்காய் விழுது",
        "nameHi": "नारियल का पेस्ट",
        "quantity": 0.5,
        "unit": "cup",
        "category": "Produce"
      },
      {
        "id": "ing-102",
        "name": "Gingelly / Sesame Oil",
        "nameTa": "நல்லெண்ணெய்",
        "nameHi": "तिल का तेल",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat sesame oil; splutter fennel seeds, cinnamon, cloves, and curry leaves; sauté shallots until caramelized.",
        "instructionTa": "நல்லெண்ணெயில் மசாலா தாளித்து வெங்காயம் வதக்கவும்.",
        "instructionHi": "तेल में खड़े मसाले और प्याज भूनें।"
      },
      {
        "step": 2,
        "instruction": "Add ginger-garlic paste and tomatoes; cook until tomatoes break down completely.",
        "instructionTa": "இஞ்சி பூண்டு மற்றும் தக்காளி வதக்கவும்.",
        "instructionHi": "अदरक-लहसुन और टमाटर भूनें।"
      },
      {
        "step": 3,
        "instruction": "Add chicken pieces, turmeric, and fresh Chettinad masala powder. Sauté for 5 minutes until chicken turns white.",
        "instructionTa": "சிக்கன் மற்றும் மசாலா சேர்த்து 5 நிமிடம் வதக்கவும்.",
        "instructionHi": "चिकन और मसाला पाउडर डालकर 5 मिनट भूनें।"
      },
      {
        "step": 4,
        "instruction": "Add 1.5 cups water, cover and cook 15 minutes. Stir in coconut paste and simmer 5 minutes until gravy is rich. Serve with Parotta or Rice.",
        "instructionTa": "தண்ணீர் ஊற்றி வேகவைத்து தேங்காய் விழுது சேர்த்து பரிமாறவும்.",
        "instructionHi": "पानी डालकर पकाएं, फिर नारियल पेस्ट मिलाकर 5 मिनट पकाएं।"
      }
    ],
    "nutrition": {
      "calories": 380,
      "protein": 32,
      "carbohydrates": 12,
      "fat": 22,
      "fiber": 3,
      "sugar": 2,
      "isEstimated": true
    },
    "cookingTips": [
      "Dry roasting whole spices on low flame until aromatic before grinding creates that unbeatable authentic Chettinad aroma."
    ],
    "substitutions": {
      "Country chicken": "Broiler chicken or Paneer/Mushroom for vegetarian"
    }
  },
  {
    "id": "rec-79",
    "title": "Chennai Crispy Chicken 65",
    "titleTa": "சென்னை ஸ்பெஷல் சிக்கன் 65",
    "titleHi": "चेन्नई स्टाइल क्रिस्पी चिकन 65",
    "description": "Iconic spicy, deep red, ultra-crisp bite-sized fried chicken tossed with fried curry leaves, garlic, and green chillies.",
    "descriptionTa": "மசாலா, இஞ்சி பூண்டு மற்றும் எலுமிச்சை சாறு ஊறி மொறுமொறுவென எண்ணெயில் பொரித்தெடுக்கப்படும் பிரபலமான சென்னை சிக்கன் 65.",
    "descriptionHi": "दही, कश्मीरी मिर्च, लहसुन और मसालों में मेरिनेट करके तली गई बेहद कुरकुरी और चटपटी चिकन बाइट्स।",
    "imageUrl": "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Snacks",
    "dietaryTags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "allergens": [
      "Egg"
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 30,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 480,
    "ingredients": [
      {
        "id": "ing-146",
        "name": "Boneless Chicken (Bite-sized cubes)",
        "nameTa": "எலும்பில்லாத சிக்கன்",
        "nameHi": "बोनलेस चिकन",
        "quantity": 450,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing-135",
        "name": "Thick Curd / Yogurt",
        "nameTa": "கெட்டி தயிர்",
        "nameHi": "गाढ़ा दही",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Dairy"
      },
      {
        "id": "ing-05",
        "name": "Ginger Garlic Paste",
        "nameTa": "இஞ்சி பூண்டு விழுது",
        "nameHi": "अदरक लहसुन पेस्ट",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Produce"
      },
      {
        "id": "ing-147",
        "name": "Cornstarch & Rice Flour",
        "nameTa": "கான்பிளவர் & அரிசி மாவு",
        "nameHi": "कॉर्नस्टार्च और चावल का आटा",
        "quantity": 2,
        "unit": "tbsp each",
        "category": "Pantry"
      },
      {
        "id": "ing-148",
        "name": "Egg White",
        "nameTa": "முட்டை வெள்ளைக்கரு",
        "nameHi": "अंडे की सफेदी",
        "quantity": 1,
        "unit": "egg",
        "category": "Protein"
      },
      {
        "id": "ing-07",
        "name": "Kashmiri Red Chilli Powder & Garam Masala",
        "nameTa": "காஷ்மீரி மிளகாய் தூள் & மசாலா",
        "nameHi": "कश्मीरी लाल मिर्च और गरम मसाला",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Spices"
      },
      {
        "id": "ing-09",
        "name": "Oil for Deep Frying",
        "nameTa": "பொரிக்க எண்ணெய்",
        "nameHi": "तलने के लिए तेल",
        "quantity": 2,
        "unit": "cups",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Marinate chicken cubes with curd, ginger-garlic paste, spices, lemon juice, and salt for 20 minutes.",
        "instructionTa": "சிக்கனை மசாலா மற்றும் தயிரில் ஊறவைக்கவும்.",
        "instructionHi": "चिकन को दही और मसालों में 20 मिनट मेरिनेट करें।"
      },
      {
        "step": 2,
        "instruction": "Add egg white, cornstarch, and rice flour; coat thoroughly.",
        "instructionTa": "முட்டை வெள்ளைக்கரு மற்றும் மாவு சேர்த்து கலக்கவும்.",
        "instructionHi": "अंडे की सफेदी और आटा डालकर अच्छी तरह कोट करें।"
      },
      {
        "step": 3,
        "instruction": "Deep fry in medium-hot oil for 5-6 minutes until dark golden, crispy, and thoroughly cooked inside.",
        "instructionTa": "சூடான எண்ணெயில் மொறுமொறுப்பாக பொரித்தெடுக்கவும்.",
        "instructionHi": "गरम तेल में 5-6 मिनट कुरकुरा होने तक तलें।"
      },
      {
        "step": 4,
        "instruction": "Flash fry curry leaves and split green chillies; toss with the hot fried chicken and serve with onion rings.",
        "instructionTa": "கறிவேப்பிலை, மிளகாய் தாளித்து கிளறி பரிமாறவும்.",
        "instructionHi": "तले कढ़ी पत्ते और हरी मिर्च के साथ गरमागरम परोसें।"
      }
    ],
    "nutrition": {
      "calories": 310,
      "protein": 28,
      "carbohydrates": 10,
      "fat": 16,
      "fiber": 1,
      "sugar": 0,
      "isEstimated": true
    },
    "cookingTips": [
      "Do not crowd the frying pan; frying in small batches ensures optimal crunch."
    ],
    "substitutions": {
      "Chicken": "Paneer, Mushroom, or Cauliflower (Gobi 65)"
    }
  },
  {
    "id": "rec-80",
    "title": "Chettinad Pepper Chicken Varuval",
    "titleTa": "செட்டிநாடு மிளகு சிக்கன் வறுவல்",
    "titleHi": "चेट्टिनाड काली मिर्च चिकन फ्राई (वरुवल)",
    "description": "Dry roasted country-style chicken pan-fried in dark black pepper, shallots, garlic, and freshly pounded South Indian spices.",
    "descriptionTa": "கருப்பு மிளகு, பூண்டு மற்றும் சின்ன வெங்காயம் சேர்த்து வறுத்து செய்யப்படும் காரசாரமான நாட்டுக்கோழி மிளகு வறுவல்.",
    "descriptionHi": "कुटी हुई काली मिर्च, छोटे प्याज, लहसुन और मसालों के साथ तवे पर सूखा भुना हुआ तीखा और लजीज चिकन।",
    "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Curries",
    "dietaryTags": [
      "Non-Vegetarian",
      "High Protein",
      "Gluten-Free"
    ],
    "allergens": [],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 360,
    "ingredients": [
      {
        "id": "ing-144",
        "name": "Chicken Pieces",
        "nameTa": "சிக்கன்",
        "nameHi": "चिकन",
        "quantity": 500,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing-129",
        "name": "Freshly Crushed Black Pepper",
        "nameTa": "இடித்த கருப்பு மிளகு",
        "nameHi": "कुटी काली मिर्च",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Spices"
      },
      {
        "id": "ing-02",
        "name": "Shallots (Small Onions)",
        "nameTa": "சின்ன வெங்காயம்",
        "nameHi": "छोटे प्याज",
        "quantity": 1.5,
        "unit": "cups sliced",
        "category": "Produce"
      },
      {
        "id": "ing-128",
        "name": "Garlic & Ginger",
        "nameTa": "பூண்டு & இஞ்சி",
        "nameHi": "लहसुन और अदरक",
        "quantity": 2,
        "unit": "tbsp crushed",
        "category": "Produce"
      },
      {
        "id": "ing-13",
        "name": "Cumin & Fennel Seeds",
        "nameTa": "சீரகம் & சோம்பு",
        "nameHi": "जीरा और सौंफ",
        "quantity": 1,
        "unit": "tsp each",
        "category": "Spices"
      },
      {
        "id": "ing-102",
        "name": "Gingelly Oil",
        "nameTa": "நல்லெண்ணெய்",
        "nameHi": "तिल का तेल",
        "quantity": 2.5,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat sesame oil; splutter cumin, fennel, and curry leaves. Sauté sliced shallots and garlic until browned.",
        "instructionTa": "எண்ணெயில் தாளித்து வெங்காயம், பூண்டு வதக்கவும்.",
        "instructionHi": "तेल में सौंफ, जीरा और प्याज-लहसुन भूनें।"
      },
      {
        "step": 2,
        "instruction": "Add chicken, turmeric, salt, and half the black pepper; cook on high flame for 5 minutes.",
        "instructionTa": "சிக்கன், மஞ்சள், உப்பு, பாதி மிளகு சேர்த்து வதக்கவும்.",
        "instructionHi": "चिकन, हल्दी, नमक और आधी काली मिर्च डालकर 5 मिनट भूनें।"
      },
      {
        "step": 3,
        "instruction": "Cover and let chicken cook in its own juices for 12 minutes until tender.",
        "instructionTa": "மூடி போட்டு சிக்கன் வேகும் வரை சமைக்கவும்.",
        "instructionHi": "ढककर धीमी आंच पर 12 मिनट चिकन पकने दें।"
      },
      {
        "step": 4,
        "instruction": "Open lid, sprinkle remaining black pepper and curry leaves; roast on high flame until dark and dry. Serve hot with Rasam Rice.",
        "instructionTa": "மீதி மிளகுத்தூள் தூவி சுருள வதக்கி ரசம் சாதத்துடன் பரிமாறவும்.",
        "instructionHi": "बची काली मिर्च डालकर तेज आंच पर सूखा भूनें और परोसें।"
      }
    ],
    "nutrition": {
      "calories": 320,
      "protein": 30,
      "carbohydrates": 8,
      "fat": 18,
      "fiber": 2,
      "sugar": 1,
      "isEstimated": true
    },
    "cookingTips": [
      "Use freshly ground black pepper instead of store-bought fine powder for maximum heat and punch."
    ],
    "substitutions": {
      "Chicken": "Mutton, Paneer, or Mushroom"
    }
  },
  {
    "id": "rec-81",
    "title": "Authentic Dindigul Thalappakatti Chicken Biryani",
    "titleTa": "திண்டுக்கல் தலப்பாகட்டி சீரக சம்பா பிரியாணி",
    "titleHi": "डिंडीगुल थलप्पाकट्टी चिकन बिरयानी",
    "description": "Iconic Tamil Nadu heritage biryani made with fragrant tiny Seeraga Samba rice, tender chicken, shallots, and fresh mint-coriander paste.",
    "descriptionTa": "மணமணக்கும் சீரக சம்பா அரிசி, சின்ன வெங்காயம் மற்றும் நாட்டு மசாலா சேர்த்து தம்மில் செய்யப்படும் பிரசித்தி பெற்ற திண்டுக்கல் தலப்பாகட்டி பிரியாணி.",
    "descriptionHi": "खुशबूदार छोटे दाने वाले सीरगा सांबा चावल, चिकन, छोटे प्याज और ताजे पुदीना-धनिया पेस्ट से बनी विश्वप्रसिद्ध बिरयानी।",
    "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Rice dishes",
    "dietaryTags": [
      "Non-Vegetarian",
      "High Protein",
      "Gluten-Free"
    ],
    "allergens": [
      "Milk"
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 30,
    "totalTimeMinutes": 50,
    "servings": 4,
    "difficulty": "Hard",
    "rating": 5,
    "ratingCount": 560,
    "ingredients": [
      {
        "id": "ing-149",
        "name": "Seeraga Samba Rice",
        "nameTa": "சீரக சம்பா அரிசி",
        "nameHi": "सीरगा सांबा चावल",
        "quantity": 2,
        "unit": "cups washed & soaked 20 min",
        "category": "Grains"
      },
      {
        "id": "ing-144",
        "name": "Chicken (Curry Cut with bone)",
        "nameTa": "சிக்கன்",
        "nameHi": "चिकन",
        "quantity": 600,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing-02",
        "name": "Small Shallots (Chinna Vengayam Paste)",
        "nameTa": "சின்ன வெங்காய விழுது",
        "nameHi": "छोटे प्याज का पेस्ट",
        "quantity": 1.5,
        "unit": "cups",
        "category": "Produce"
      },
      {
        "id": "ing-05",
        "name": "Fresh Ginger Garlic Paste",
        "nameTa": "இஞ்சி பூண்டு விழுது",
        "nameHi": "अदरक लहसुन पेस्ट",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Produce"
      },
      {
        "id": "ing-135",
        "name": "Curd & Lemon Juice",
        "nameTa": "தயிர் & எலுமிச்சை சாறு",
        "nameHi": "दही और नींबू रस",
        "quantity": 0.5,
        "unit": "cup + 1 tbsp",
        "category": "Dairy"
      },
      {
        "id": "ing-110",
        "name": "Pure Desi Ghee & Oil",
        "nameTa": "நெய் & எண்ணெய்",
        "nameHi": "देसी घी और तेल",
        "quantity": 4,
        "unit": "tbsp",
        "category": "Dairy"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat ghee and oil; fry whole cloves, cardamom, cinnamon, and shallot paste until golden and oil separates.",
        "instructionTa": "நெய்யில் மசாலா மற்றும் வெங்காய விழுது வதக்கவும்.",
        "instructionHi": "घी में खड़े मसाले और प्याज पेस्ट भूनें।"
      },
      {
        "step": 2,
        "instruction": "Add ginger-garlic paste, green chillies, mint-coriander paste, tomatoes, curd, and spices; cook until aromatic.",
        "instructionTa": "இஞ்சி பூண்டு, புதினா விழுது மற்றும் தக்காளி வதக்கவும்.",
        "instructionHi": "अदरक-लहसुन और पुदीना-धनिया पेस्ट भूनें।"
      },
      {
        "step": 3,
        "instruction": "Add chicken and sear on high for 5 minutes. Pour 3.5 cups boiling water and bring to rolling boil.",
        "instructionTa": "சிக்கன் சேர்த்து வதக்கி 3.5 கப் கொதிக்கும் தண்ணீர் ஊற்றவும்.",
        "instructionHi": "चिकन भूनकर साढ़े तीन कप खौलता पानी डालें।"
      },
      {
        "step": 4,
        "instruction": "Add soaked Seeraga Samba rice, gently stir, seal with tight lid, and dum cook on low flame over a tawa for 20 minutes. Rest 10 minutes before opening.",
        "instructionTa": "அரிசி சேர்த்து மூடி போட்டு 20 நிமிடம் தம்மில் வைக்கவும்.",
        "instructionHi": "चावल डालकर 20 मिनट धीमी आंच पर दम दें।"
      }
    ],
    "nutrition": {
      "calories": 480,
      "protein": 32,
      "carbohydrates": 58,
      "fat": 18,
      "fiber": 3,
      "sugar": 2,
      "isEstimated": true
    },
    "cookingTips": [
      "Using authentic short-grain Seeraga Samba rice is non-negotiable for true Dindigul biryani flavor."
    ],
    "substitutions": {
      "Seeraga Samba": "Jeerakasala or Basmati rice"
    }
  },
  {
    "id": "rec-82",
    "title": "Tamil Street Food Masala Omelette",
    "titleTa": "தட்டுக் கடை மசாலா முட்டை ஆம்லெட்",
    "titleHi": "तमिलनाडु स्ट्रीट स्टाइल मसाला आमलेट",
    "description": "Golden fluffy Indian street food omelette packed with crunchy onions, green chillies, crushed black pepper, and curry leaves.",
    "descriptionTa": "நறுக்கிய வெங்காயம், பச்சை மிளகாய், கறிவேப்பிலை மற்றும் மிளகுத்தூள் சேர்த்து தட்டுக் கடை சுவையில் செய்யப்படும் முட்டை ஆம்லெட்.",
    "descriptionHi": "बारीक कटे प्याज, हरी मिर्च, कढ़ी पत्ता और कुटी काली मिर्च से बना फूला हुआ और कुरकुरा साउथ इंडियन स्ट्रीट आमलेट।",
    "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Eggetarian",
      "High Protein",
      "Gluten-Free",
      "Quick meals"
    ],
    "allergens": [
      "Egg"
    ],
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 4,
    "totalTimeMinutes": 7,
    "servings": 1,
    "difficulty": "Easy",
    "rating": 4.8,
    "ratingCount": 190,
    "ingredients": [
      {
        "id": "ing-10",
        "name": "Fresh Eggs",
        "nameTa": "முட்டை",
        "nameHi": "अंडे",
        "quantity": 2,
        "unit": "large",
        "category": "Protein"
      },
      {
        "id": "ing-02",
        "name": "Shallots / Red Onion",
        "nameTa": "வெங்காயம்",
        "nameHi": "प्याज",
        "quantity": 0.25,
        "unit": "cup finely minced",
        "category": "Produce"
      },
      {
        "id": "ing-04",
        "name": "Green Chilli & Curry Leaves",
        "nameTa": "பச்சை மிளகாய் & கறிவேப்பிலை",
        "nameHi": "हरी मिर्च और कढ़ी पत्ता",
        "quantity": 1,
        "unit": "tbsp finely chopped",
        "category": "Produce"
      },
      {
        "id": "ing-129",
        "name": "Black Pepper Powder",
        "nameTa": "மிளகுத்தூள்",
        "nameHi": "काली मिर्च पाउडर",
        "quantity": 0.5,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-09",
        "name": "Oil or Ghee",
        "nameTa": "எண்ணெய் அல்லது நெய்",
        "nameHi": "तेल या घी",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Whisk eggs vigorously with onions, green chillies, curry leaves, salt, and black pepper until frothy.",
        "instructionTa": "முட்டையுடன் வெங்காயம், மிளகாய், மிளகுத்தூள் சேர்த்து நன்கு அடிக்கவும்.",
        "instructionHi": "अंडों में प्याज, हरी मिर्च, नमक और काली मिर्च फेंटें।"
      },
      {
        "step": 2,
        "instruction": "Heat oil in a hot skillet; pour the frothy egg mixture and spread evenly.",
        "instructionTa": "சூடான தோசைக் கல்லில் ஊற்றவும்.",
        "instructionHi": "गरम तवे पर तेल डालकर घोल फैलाएं।"
      },
      {
        "step": 3,
        "instruction": "Cook for 2 minutes until underside is golden, flip, and cook 1 more minute. Serve hot with toasted bread or rice.",
        "instructionTa": "இருபுறமும் பொன்னிறமாக சுட்டு எடுக்கவும்.",
        "instructionHi": "पलटकर दोनों तरफ से सुनहरा सेंक लें।"
      }
    ],
    "nutrition": {
      "calories": 190,
      "protein": 14,
      "carbohydrates": 3,
      "fat": 14,
      "fiber": 1,
      "sugar": 1,
      "isEstimated": true
    },
    "cookingTips": [
      "Beating the eggs until bubbly incorporates air for an airy, fluffy texture."
    ],
    "substitutions": {
      "Shallots": "Spring onions"
    }
  },
  {
    "id": "rec-83",
    "title": "Temple Style Sakkarai Pongal (Sweet Jaggery Rice)",
    "titleTa": "கோவில் பிரசாத சக்கரைப் பொங்கல்",
    "titleHi": "मंदिर स्टाइल सक्करई पोंगल (मीठा गुड़ पोंगल)",
    "description": "Divine temple sweet rice cooked with moong dal, rich dark jaggery syrup, generous pure ghee, roasted cashews, and raisins.",
    "descriptionTa": "பச்சரிசி, பாசிப்பருப்பு, பாகு வெல்லம், ஏலக்காய் மற்றும் நெய்யில் வறுத்த முந்திரி திராட்சை சேர்த்து செய்யப்படும் பாரம்பரிய சக்கரைப் பொங்கல்.",
    "descriptionHi": "चावल, मूंग दाल, गहरे गुड़ और ढेर सारे देसी घी में भुने काजू-किशमिश से बना दक्षिण भारतीय पावन मीठा पोंगल।",
    "imageUrl": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Desserts",
    "dietaryTags": [
      "Vegetarian",
      "Gluten-Free"
    ],
    "allergens": [
      "Milk",
      "Tree nuts"
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "servings": 4,
    "difficulty": "Easy",
    "rating": 5,
    "ratingCount": 390,
    "ingredients": [
      {
        "id": "ing-113",
        "name": "Raw Rice",
        "nameTa": "பச்சரிசி",
        "nameHi": "कच्चा चावल",
        "quantity": 1,
        "unit": "cup",
        "category": "Grains"
      },
      {
        "id": "ing-140",
        "name": "Yellow Moong Dal",
        "nameTa": "பாசிப்பருப்பு",
        "nameHi": "मूंग दाल",
        "quantity": 0.3,
        "unit": "cup roasted",
        "category": "Pantry"
      },
      {
        "id": "ing-150",
        "name": "Pure Organic Jaggery (Vellam)",
        "nameTa": "பாகு வெல்லம்",
        "nameHi": "गुड़",
        "quantity": 1.5,
        "unit": "cups crushed",
        "category": "Pantry"
      },
      {
        "id": "ing-110",
        "name": "Pure Desi Ghee",
        "nameTa": "சுத்தமான நெய்",
        "nameHi": "देसी घी",
        "quantity": 0.3,
        "unit": "cup",
        "category": "Dairy"
      },
      {
        "id": "ing-109",
        "name": "Cashews & Raisins",
        "nameTa": "முந்திரி & திராட்சை",
        "nameHi": "काजू और किशमिश",
        "quantity": 2,
        "unit": "tbsp each",
        "category": "Pantry"
      },
      {
        "id": "ing-64",
        "name": "Cardamom Powder & Edible Camphor (Pachai Karpooram)",
        "nameTa": "ஏலக்காய் & பச்சைக்கற்பூரம்",
        "nameHi": "इलायची और कपूर",
        "quantity": 1,
        "unit": "tsp + tiny pinch",
        "category": "Spices"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Roast moong dal until fragrant. Pressure cook rice and dal with 4 cups water until completely soft and mushy.",
        "instructionTa": "அரிசி மற்றும் பாசிப்பருப்பை குழைய வேகவைக்கவும்.",
        "instructionHi": "चावल और मूंग दाल को 4 कप पानी में एकदम नर्म पकाएं।"
      },
      {
        "step": 2,
        "instruction": "Melt jaggery with 1/2 cup water, strain to remove impurities, and simmer syrup for 3 minutes.",
        "instructionTa": "வெல்லத்தை கரைத்து வடிகட்டி பாகு காய்ச்சவும்.",
        "instructionHi": "गुड़ को पानी में पिघलाकर छान लें।"
      },
      {
        "step": 3,
        "instruction": "Pour jaggery syrup into cooked mashed rice-dal; stir on low heat for 5 minutes until glossy.",
        "instructionTa": "வெல்ல பாகை சாதத்தில் சேர்த்து கிளறவும்.",
        "instructionHi": "गुड़ की चाशनी को पके चावल-दाल में मिलाकर 5 मिनट पकाएं।"
      },
      {
        "step": 4,
        "instruction": "Fry cashews and raisins in ghee; pour into pongal with cardamom powder and a tiny speck of edible camphor. Mix and serve warm.",
        "instructionTa": "நெய்யில் முந்திரி திராட்சை வறுத்து ஏலக்காயுடன் சேர்த்து பரிமாறவும்.",
        "instructionHi": "घी में काजू-किशमिश भूनकर इलायची के साथ पोंगल में मिलाएं।"
      }
    ],
    "nutrition": {
      "calories": 340,
      "protein": 6,
      "carbohydrates": 62,
      "fat": 9,
      "fiber": 2,
      "sugar": 32,
      "isEstimated": true
    },
    "cookingTips": [
      "A microscopic speck of edible camphor (pachai karpooram) creates that unmistakable sacred temple aroma."
    ],
    "substitutions": {
      "Jaggery": "Palm jaggery (Karupatti)"
    }
  },
  {
    "id": "rec-84",
    "title": "Hotel Style Melt-in-Mouth Rava Kesari",
    "titleTa": "நெய் மணக்கும் கல்யாண வீட்டு ரவா கேசரி",
    "titleHi": "रवा केसरी (साउथ इंडियन सूजी का हलवा)",
    "description": "Glossy, melt-in-mouth golden semolina pudding scented with saffron, cardamom, generous ghee, and golden roasted cashews.",
    "descriptionTa": "நாக்கில் கரையும் பளபளப்பான நெய் மணக்கும் கல்யாண வீட்டு ரவா கேசரி, முந்திரி திராட்சையுடன்.",
    "descriptionHi": "मुंह में घुल जाने वाला चमकदार, केसर और इलायची की खुशबू व भरपूर घी से बना साउथ इंडियन हलवा।",
    "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Desserts",
    "dietaryTags": [
      "Vegetarian"
    ],
    "allergens": [
      "Wheat",
      "Milk",
      "Tree nuts"
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 20,
    "servings": 4,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 310,
    "ingredients": [
      {
        "id": "ing-107",
        "name": "Fine Rava (Sooji / Semolina)",
        "nameTa": "ரவை",
        "nameHi": "सूजी / रवा",
        "quantity": 1,
        "unit": "cup",
        "category": "Grains"
      },
      {
        "id": "ing-49",
        "name": "Sugar",
        "nameTa": "சர்க்கரை",
        "nameHi": "चीनी",
        "quantity": 1.5,
        "unit": "cups",
        "category": "Pantry"
      },
      {
        "id": "ing-110",
        "name": "Pure Desi Ghee",
        "nameTa": "நெய்",
        "nameHi": "देसी घी",
        "quantity": 0.5,
        "unit": "cup",
        "category": "Dairy"
      },
      {
        "id": "ing-109",
        "name": "Cashews & Raisins",
        "nameTa": "முந்திரி & திராட்சை",
        "nameHi": "काजू और किशमिश",
        "quantity": 2,
        "unit": "tbsp each",
        "category": "Pantry"
      },
      {
        "id": "ing-64",
        "name": "Cardamom & Saffron / Kesari color",
        "nameTa": "ஏலக்காய் & கேசரி தூள்",
        "nameHi": "इलायची और केसर",
        "quantity": 1,
        "unit": "pinch",
        "category": "Spices"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Roast rava in 1 tbsp ghee for 4 minutes until warm and fragrant; set aside.",
        "instructionTa": "ரவையை நெய்யில் வறுத்து வைக்கவும்.",
        "instructionHi": "रवे को 1 चम्मच घी में सुगंध आने तक भूनें।"
      },
      {
        "step": 2,
        "instruction": "Boil 3 cups water with saffron/kesari color. Lower heat, slowly pour roasted rava while whisking to avoid lumps.",
        "instructionTa": "3 கப் தண்ணீர் கொதிக்கவைத்து ரவையை கட்டியில்லாமல் கிளறவும்.",
        "instructionHi": "3 कप पानी उबालें और रवा धीरे-धीरे डालकर लगातार चलाएं।"
      },
      {
        "step": 3,
        "instruction": "Cover and cook 3 minutes until rava is completely cooked and water absorbed.",
        "instructionTa": "ரவை வேகும் வரை மூடி வைக்கவும்.",
        "instructionHi": "ढककर 3 मिनट रवा अच्छी तरह पकने दें।"
      },
      {
        "step": 4,
        "instruction": "Add sugar (never add before rava is cooked!), stir until molten, then pour in remaining ghee and fried cashews. Stir until non-sticky.",
        "instructionTa": "சர்க்கரை, நெய், முந்திரி சேர்த்து பளபளப்பாக கிளறி இறக்கவும்.",
        "instructionHi": "चीनी और बचा हुआ घी डालकर चलाएं जब तक कड़ाही छोड़ने न लगे।"
      }
    ],
    "nutrition": {
      "calories": 310,
      "protein": 4,
      "carbohydrates": 50,
      "fat": 12,
      "fiber": 1,
      "sugar": 34,
      "isEstimated": true
    },
    "cookingTips": [
      "Always ensure the rava is 100% cooked before adding sugar; adding sugar prematurely prevents rava from cooking."
    ],
    "substitutions": {
      "Sugar": "Fine jaggery powder"
    }
  },
  {
    "id": "rec-85",
    "title": "Creamy Semiya Sago Paal Payasam",
    "titleTa": "சுவையான சேமியா ஜவ்வரிசி பால் பாயாசம்",
    "titleHi": "सेवई और साबूदाना खीर (पायसम)",
    "description": "Silky, rich South Indian festive milk dessert made with roasted vermicelli, sago pearls, cardamom, and ghee-roasted nuts.",
    "descriptionTa": "வறுத்த சேமியா, ஜவ்வரிசி, பால், சர்க்கரை மற்றும் முந்திரி திராட்சை சேர்த்து செய்யப்படும் தித்திக்கும் பால் பாயாசம்.",
    "descriptionHi": "भुनी सेवई, साबूदाना, गाढ़े दूध, इलायची और घी में भुने मेवों से बनी पारंपरिक मखमली साउथ इंडियन खीर।",
    "imageUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Desserts",
    "dietaryTags": [
      "Vegetarian",
      "Gluten-Free"
    ],
    "allergens": [
      "Milk",
      "Tree nuts"
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "servings": 4,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 280,
    "ingredients": [
      {
        "id": "ing-151",
        "name": "Roasted Vermicelli (Semiya)",
        "nameTa": "சேமியா",
        "nameHi": "सेवई",
        "quantity": 0.5,
        "unit": "cup",
        "category": "Pantry"
      },
      {
        "id": "ing-152",
        "name": "Sago Pearls (Javvarisi)",
        "nameTa": "ஜவ்வரிசி",
        "nameHi": "साबूदाना",
        "quantity": 3,
        "unit": "tbsp soaked",
        "category": "Pantry"
      },
      {
        "id": "ing-61",
        "name": "Full Cream Milk",
        "nameTa": "காய்ச்சிய பால்",
        "nameHi": "फुल क्रीम दूध",
        "quantity": 4,
        "unit": "cups",
        "category": "Dairy"
      },
      {
        "id": "ing-49",
        "name": "Sugar or Condensed Milk",
        "nameTa": "சர்க்கரை",
        "nameHi": "चीनी",
        "quantity": 0.75,
        "unit": "cup",
        "category": "Pantry"
      },
      {
        "id": "ing-64",
        "name": "Cardamom Powder",
        "nameTa": "ஏலக்காய் தூள்",
        "nameHi": "इलायची पाउडर",
        "quantity": 0.5,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-109",
        "name": "Cashews & Ghee",
        "nameTa": "முந்திரி & நெய்",
        "nameHi": "काजू और घी",
        "quantity": 2,
        "unit": "tbsp each",
        "category": "Dairy"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Boil soaked sago in 1.5 cups water until translucent and soft.",
        "instructionTa": "ஜவ்வரிசியை வேகவைக்கவும்.",
        "instructionHi": "साबूदाने को पारदर्शी होने तक उबालें।"
      },
      {
        "step": 2,
        "instruction": "Roast vermicelli in 1 tsp ghee until golden brown; add to the boiling milk and cook 5 minutes.",
        "instructionTa": "சேமியாவை வறுத்து பாலில் வேகவிடவும்.",
        "instructionHi": "सेवई भूनकर दूध में 5 मिनट पकाएं।"
      },
      {
        "step": 3,
        "instruction": "Add cooked sago, sugar, and crushed cardamom; simmer for 4 minutes until thick and creamy.",
        "instructionTa": "ஜவ்வரிசி, சர்க்கரை, ஏலக்காய் சேர்த்து கொதிக்கவிடவும்.",
        "instructionHi": "साबूदाना, चीनी और इलायची डालकर गाढ़ा होने तक उबालें।"
      },
      {
        "step": 4,
        "instruction": "Fry cashews and raisins in ghee; pour into payasam and serve warm or chilled.",
        "instructionTa": "நெய்யில் முந்திரி வறுத்து ஊற்றி பரிமாறவும்.",
        "instructionHi": "घी में काजू भूनकर डालें और गरमागरम या ठंडा परोसें।"
      }
    ],
    "nutrition": {
      "calories": 280,
      "protein": 7,
      "carbohydrates": 46,
      "fat": 8,
      "fiber": 1,
      "sugar": 28,
      "isEstimated": true
    },
    "cookingTips": [
      "Cook sago in water first until glassy before adding milk; cooking directly in milk takes much longer."
    ],
    "substitutions": {
      "Sugar": "Jaggery syrup (cool milk slightly before adding)"
    }
  },
  {
    "id": "rec-86",
    "title": "Hotel White Coconut Chutney",
    "titleTa": "ஹோட்டல் சுவை கெட்டி தேங்காய் சட்னி",
    "titleHi": "होटल स्टाइल नारियल चटनी",
    "description": "Classic creamy South Indian coconut chutney ground with roasted gram dal, green chillies, and ginger, tempered with mustard and curry leaves.",
    "descriptionTa": "புதிய தேங்காய், பொட்டுக் கடலை, பச்சை மிளகாய், இஞ்சி சேர்த்து கடுகு தாளித்த ஹோட்டல் சுவை கெட்டி சட்னி.",
    "descriptionHi": "ताजा नारियल, भुनी चना दाल, हरी मिर्च और अदरक को पीसकर राई-कढ़ी पत्ते के तड़के से बनी प्रसिद्ध साउथ इंडियन चटनी।",
    "imageUrl": "https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Quick meals"
    ],
    "allergens": [],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 2,
    "totalTimeMinutes": 7,
    "servings": 4,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 350,
    "ingredients": [
      {
        "id": "ing-123",
        "name": "Fresh Grated Coconut",
        "nameTa": "துருவிய தேங்காய்",
        "nameHi": "कद्दूकस ताजा नारियल",
        "quantity": 1,
        "unit": "cup",
        "category": "Produce"
      },
      {
        "id": "ing-153",
        "name": "Roasted Gram Dal (Pottukadalai / Dalia)",
        "nameTa": "பொட்டுக்கடலை",
        "nameHi": "भुनी चना दाल",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      },
      {
        "id": "ing-04",
        "name": "Green Chillies & Ginger",
        "nameTa": "பச்சை மிளகாய் & இஞ்சி",
        "nameHi": "हरी मिर्च और अदरक",
        "quantity": 2,
        "unit": "pcs + 1/2 inch",
        "category": "Produce"
      },
      {
        "id": "ing-106",
        "name": "Mustard Seeds & Curry Leaves",
        "nameTa": "கடுகு & கறிவேப்பிலை",
        "nameHi": "राई और कढ़ी पत्ता",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-124",
        "name": "Coconut Oil",
        "nameTa": "தேங்காய் எண்ணெய்",
        "nameHi": "नारियल तेल",
        "quantity": 1,
        "unit": "tsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Grind coconut, roasted gram, green chillies, ginger, and salt with 1/2 cup water to a smooth thick consistency.",
        "instructionTa": "தேங்காய், பொட்டுக்கடலை, மிளகாய் சேர்த்து அரைக்கவும்.",
        "instructionHi": "नारियल, दाल, मिर्च और अदरक को पानी डालकर पीसें।"
      },
      {
        "step": 2,
        "instruction": "Heat coconut oil; splutter mustard seeds, urad dal, and fresh curry leaves.",
        "instructionTa": "தேங்காய் எண்ணெயில் கடுகு, கறிவேப்பிலை தாளிக்கவும்.",
        "instructionHi": "नारियल तेल में राई और कढ़ी पत्ते का तड़का लगाएं।"
      },
      {
        "step": 3,
        "instruction": "Pour hot tempering over chutney. Serve with hot Idli, Dosa, or Pongal.",
        "instructionTa": "தாளிப்பை சட்னியில் கொட்டி இட்லி, தோசையுடன் பரிமாறவும்.",
        "instructionHi": "तड़का चटनी में मिलाएं और इडली-डोसा के साथ परोसें।"
      }
    ],
    "nutrition": {
      "calories": 110,
      "protein": 2,
      "carbohydrates": 5,
      "fat": 9,
      "fiber": 2,
      "sugar": 1,
      "isEstimated": true
    },
    "cookingTips": [
      "Adding a small piece of ginger cuts the heaviness of coconut and enhances hotel flavor."
    ],
    "substitutions": {
      "Coconut oil": "Sesame oil"
    }
  },
  {
    "id": "rec-87",
    "title": "Spicy Tamil Thakkali Kara Chutney",
    "titleTa": "காரசாரமான தக்காளி காரச் சட்னி",
    "titleHi": "तीखी टमाटर कारा चटनी",
    "description": "Robust, fiery roadside style red chutney made by cooking juicy tomatoes, shallots, garlic, and dried red chillies.",
    "descriptionTa": "தக்காளி, சின்ன வெங்காயம், பூண்டு மற்றும் காய்ந்த மிளகாய் வதக்கி அரைக்கப்படும் காரசாரமான ஹோட்டல் காரச் சட்னி.",
    "descriptionHi": "टमाटर, प्याज, लहसुन और सूखी लाल मिर्च को भूनकर बनाई गई बेहद चटपटी और स्वादिष्ट लाल चटनी।",
    "imageUrl": "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Quick meals"
    ],
    "allergens": [],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 8,
    "totalTimeMinutes": 13,
    "servings": 4,
    "difficulty": "Easy",
    "rating": 4.9,
    "ratingCount": 310,
    "ingredients": [
      {
        "id": "ing-11",
        "name": "Ripe Red Tomatoes",
        "nameTa": "நாட்டு தக்காளி",
        "nameHi": "पके टमाटर",
        "quantity": 3,
        "unit": "chopped",
        "category": "Produce"
      },
      {
        "id": "ing-02",
        "name": "Shallots or Red Onion",
        "nameTa": "சின்ன வெங்காயம்",
        "nameHi": "प्याज",
        "quantity": 1,
        "unit": "cup chopped",
        "category": "Produce"
      },
      {
        "id": "ing-128",
        "name": "Garlic Pods",
        "nameTa": "பூண்டு",
        "nameHi": "लहसुन",
        "quantity": 6,
        "unit": "cloves",
        "category": "Produce"
      },
      {
        "id": "ing-115",
        "name": "Dried Red Chillies (Guntur/Kashmiri)",
        "nameTa": "காய்ந்த மிளகாய்",
        "nameHi": "सूखी लाल मिर्च",
        "quantity": 5,
        "unit": "pcs",
        "category": "Spices"
      },
      {
        "id": "ing-102",
        "name": "Gingelly / Sesame Oil",
        "nameTa": "நல்லெண்ணெய்",
        "nameHi": "तिल का तेल",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Sauté chana dal, urad dal, dried red chillies, garlic, and onions in sesame oil until onions are soft.",
        "instructionTa": "பருப்பு, மிளகாய், பூண்டு, வெங்காயம் வதக்கவும்.",
        "instructionHi": "दाल, मिर्च, लहसुन और प्याज को भूनें।"
      },
      {
        "step": 2,
        "instruction": "Add chopped tomatoes and salt; cook until tomatoes turn soft and pulpy. Cool completely.",
        "instructionTa": "தக்காளி சேர்த்து வதக்கி ஆறவைக்கவும்.",
        "instructionHi": "टमाटर डालकर नर्म होने तक पकाएं और ठंडा करें।"
      },
      {
        "step": 3,
        "instruction": "Grind to a smooth puree. Temper with mustard seeds and curry leaves in sesame oil.",
        "instructionTa": "நைசாக அரைத்து நல்லெண்ணெயில் கடுகு தாளிக்கவும்.",
        "instructionHi": "महीन पीस लें और तिल के तेल में राई-कढ़ी पत्ते का तड़का लगाएं।"
      }
    ],
    "nutrition": {
      "calories": 95,
      "protein": 2,
      "carbohydrates": 9,
      "fat": 6,
      "fiber": 2,
      "sugar": 3,
      "isEstimated": true
    },
    "cookingTips": [
      "Using gingelly (sesame) oil balances the heat of the red chillies."
    ],
    "substitutions": {
      "Shallots": "Regular red onion"
    }
  },
  {
    "id": "rec-88",
    "title": "Fresh Mint & Coriander Chutney (Pudina Chutney)",
    "titleTa": "புதினா கொத்தமல்லி சட்னி",
    "titleHi": "पुदीना और धनिया की हरी चटनी",
    "description": "Refreshing, vibrant green chutney made with garden-fresh mint leaves, coriander, green chillies, garlic, and tangy tamarind.",
    "descriptionTa": "புதிய புதினா, கொத்தமல்லி, பச்சை மிளகாய், பூண்டு மற்றும் புளி சேர்த்து செய்யப்படும் புத்துணர்ச்சியூட்டும் சட்னி.",
    "descriptionHi": "ताजा पुदीना, हरा धनिया, हरी मिर्च, लहसुन और इमली से बनी खुशबूदार और पाचन में मददगार हरी चटनी।",
    "imageUrl": "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Breakfast",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Healthy food",
      "Quick meals"
    ],
    "allergens": [],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 5,
    "totalTimeMinutes": 10,
    "servings": 4,
    "difficulty": "Easy",
    "rating": 4.8,
    "ratingCount": 220,
    "ingredients": [
      {
        "id": "ing-154",
        "name": "Fresh Mint Leaves (Pudina)",
        "nameTa": "புதினா இலைகள்",
        "nameHi": "पुदीना पत्ते",
        "quantity": 1,
        "unit": "cup packed",
        "category": "Produce"
      },
      {
        "id": "ing-155",
        "name": "Fresh Coriander (Kothamalli)",
        "nameTa": "கொத்தமல்லி தழை",
        "nameHi": "हरा धनिया",
        "quantity": 1,
        "unit": "cup packed",
        "category": "Produce"
      },
      {
        "id": "ing-04",
        "name": "Green Chillies & Garlic",
        "nameTa": "பச்சை மிளகாய் & பூண்டு",
        "nameHi": "हरी मिर्च और लहसुन",
        "quantity": 3,
        "unit": "pcs + 2 cloves",
        "category": "Produce"
      },
      {
        "id": "ing-125",
        "name": "Tamarind",
        "nameTa": "புளி",
        "nameHi": "इमली",
        "quantity": 1,
        "unit": "small piece",
        "category": "Pantry"
      },
      {
        "id": "ing-153",
        "name": "Roasted Gram (Pottukadalai)",
        "nameTa": "பொட்டுக்கடலை",
        "nameHi": "भुनी चना दाल",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Flash sauté mint, coriander, chillies, and garlic in 1 tsp oil for 60 seconds (retains vibrant green color).",
        "instructionTa": "புதினா, கொத்தமல்லியை 1 நிமிடம் லேசாக வதக்கவும்.",
        "instructionHi": "पुदीना और धनिया को 1 मिनट हल्का सा भूनें।"
      },
      {
        "step": 2,
        "instruction": "Cool and blend with roasted gram, tamarind, salt, and 1/4 cup water into a thick green paste.",
        "instructionTa": "பொட்டுக்கடலை, புளி சேர்த்து அரைக்கவும்.",
        "instructionHi": "दाल, इमली और नमक के साथ महीन पीस लें।"
      },
      {
        "step": 3,
        "instruction": "Temper with mustard seeds and curry leaves. Perfect with Dosa, Idli, or Bajji.",
        "instructionTa": "கடுகு தாளித்து பரிமாறவும்.",
        "instructionHi": "राई का तड़का लगाकर डोसा या पकौड़ों के साथ परोसें।"
      }
    ],
    "nutrition": {
      "calories": 75,
      "protein": 2,
      "carbohydrates": 7,
      "fat": 4,
      "fiber": 2,
      "sugar": 1,
      "isEstimated": true
    },
    "cookingTips": [
      "Quick flash sautéing keeps the green color vivid without turning dark."
    ],
    "substitutions": {
      "Tamarind": "Fresh lemon juice"
    }
  },
  {
    "id": "rec-89",
    "title": "Crispy Vanjaram Tawa Fish Fry (Seer Fish)",
    "titleTa": "வஞ்சிரம் மீன் தவா வறுவல்",
    "titleHi": "कुरकुरी सूरमई तवा फिश फ्राई",
    "description": "Thick King Fish steaks marinated in spicy red chilli, turmeric, garlic, black pepper, and lemon juice, pan-roasted to crisp perfection.",
    "descriptionTa": "வஞ்சிரம் மீன் துண்டுகளில் மிளகாய், பூண்டு, மிளகு, எலுமிச்சை மசாலா தடவி தோசைக் கல்லில் மொறுமொறுவென வறுக்கப்படும் மீன் வறுவல்.",
    "descriptionHi": "सूरमई मछली के टुकड़ों को लाल मिर्च, हल्दी, लहसुन और नींबू के रस में मेरिनेट करके तवे पर कुरकुरा सेका गया स्वादिष्ट व्यंजन।",
    "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Dinner",
    "dietaryTags": [
      "Non-Vegetarian",
      "High Protein",
      "Gluten-Free"
    ],
    "allergens": [
      "Fish"
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Easy",
    "rating": 5,
    "ratingCount": 380,
    "ingredients": [
      {
        "id": "ing-156",
        "name": "Vanjaram (Seer / King Fish Steaks)",
        "nameTa": "வஞ்சிரம் மீன்",
        "nameHi": "सूरमई मछली",
        "quantity": 4,
        "unit": "thick slices",
        "category": "Protein"
      },
      {
        "id": "ing-07",
        "name": "Kashmiri Chilli & Spicy Chilli Powder",
        "nameTa": "மிளகாய் தூள்",
        "nameHi": "लाल मिर्च पाउडर",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Spices"
      },
      {
        "id": "ing-12",
        "name": "Turmeric & Crushed Black Pepper",
        "nameTa": "மஞ்சள் & மிளகுத்தூள்",
        "nameHi": "हल्दी और काली मिर्च",
        "quantity": 1,
        "unit": "tsp each",
        "category": "Spices"
      },
      {
        "id": "ing-05",
        "name": "Ginger Garlic Paste & Lemon Juice",
        "nameTa": "இஞ்சி பூண்டு & எலுமிச்சை சாறு",
        "nameHi": "अदरक लहसुन और नींबू",
        "quantity": 1,
        "unit": "tbsp each",
        "category": "Produce"
      },
      {
        "id": "ing-105",
        "name": "Rice Flour (for crispiness)",
        "nameTa": "அரிசி மாவு",
        "nameHi": "चावल का आटा",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Pantry"
      },
      {
        "id": "ing-124",
        "name": "Coconut Oil or Groundnut Oil",
        "nameTa": "தேங்காய் எண்ணெய்",
        "nameHi": "तेल",
        "quantity": 3,
        "unit": "tbsp (shallow fry)",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Make a thick paste of chilli powder, turmeric, pepper, ginger-garlic, lemon juice, rice flour, and salt with a splash of water.",
        "instructionTa": "மசாலா பொடிகளை எலுமிச்சை சாறுடன் கெட்டியாக கலக்கவும்.",
        "instructionHi": "मसालों, अदरक-लहसुन और नींबू के रस से गाढ़ा पेस्ट बनाएं।"
      },
      {
        "step": 2,
        "instruction": "Coat fish steaks thoroughly on both sides; marinate for at least 15 minutes.",
        "instructionTa": "மீனில் மசாலாவை தடவி 15 நிமிடம் ஊறவைக்கவும்.",
        "instructionHi": "मछली के टुकड़ों पर पेस्ट लपेटकर 15 मिनट रखें।"
      },
      {
        "step": 3,
        "instruction": "Heat oil on a flat tawa; shallow fry fish steaks for 4-5 minutes on medium heat without disturbing.",
        "instructionTa": "சூடான தோசைக் கல்லில் மீனை போட்டு மிதமான தீயில் வேகவிடவும்.",
        "instructionHi": "तवे पर तेल गरम करके 4-5 मिनट धीमी आंच पर सेंकें।"
      },
      {
        "step": 4,
        "instruction": "Flip gently and cook 3-4 minutes until deeply browned and crusty. Garnish with onion slices and lemon wedges.",
        "instructionTa": "திருப்பி போட்டு மொறுமொறுவென வெந்ததும் வெங்காயத்துடன் பரிமாறவும்.",
        "instructionHi": "पलटकर दूसरी तरफ से कुरकुरा सेंकें और नींबू के साथ परोसें।"
      }
    ],
    "nutrition": {
      "calories": 290,
      "protein": 34,
      "carbohydrates": 6,
      "fat": 14,
      "fiber": 1,
      "sugar": 0,
      "isEstimated": true
    },
    "cookingTips": [
      "Adding a spoon of rice flour to the marinade prevents the spicy crust from coming off in the hot pan."
    ],
    "substitutions": {
      "Vanjaram": "Pomfret, Tilapia, or Salmon"
    }
  },
  {
    "id": "rec-90",
    "title": "Traditional Madras Meen Kuzhambu (Fish Curry)",
    "titleTa": "பாரம்பரிய மெட்ராஸ் மீன் குழம்பு",
    "titleHi": "मद्रास स्टाइल मसालेदार मछली कढ़ी",
    "description": "Tangy, fiery Tamil fish curry simmered in fragrant sesame oil with small onions, garlic, fenugreek, and thick country tamarind extract.",
    "descriptionTa": "நல்லெண்ணெயில் பூண்டு, சின்ன வெங்காயம், வெந்தயம் மற்றும் புளி சாறுடன் மணக்க மணக்க காய்ச்சப்படும் பாரம்பரிய மீன் குழம்பு.",
    "descriptionHi": "तिल के तेल, इमली, लहसुन, मेथी और प्याज की गाढ़ी तरी में पकाई गई चेन्नई की मशहूर तीखी मछली की करी।",
    "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Curries",
    "dietaryTags": [
      "Non-Vegetarian",
      "High Protein",
      "Gluten-Free"
    ],
    "allergens": [
      "Fish"
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 35,
    "servings": 4,
    "difficulty": "Medium",
    "rating": 4.9,
    "ratingCount": 390,
    "ingredients": [
      {
        "id": "ing-157",
        "name": "Fresh Fish Slices (Sankara / Rohu / Seer)",
        "nameTa": "மீன் துண்டுகள்",
        "nameHi": "मछली के टुकड़े",
        "quantity": 500,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing-125",
        "name": "Country Tamarind Extract",
        "nameTa": "நாட்டு புளி கரைசல்",
        "nameHi": "इमली का गाढ़ा रस",
        "quantity": 1.5,
        "unit": "cups",
        "category": "Pantry"
      },
      {
        "id": "ing-02",
        "name": "Small Shallots (Chinna Vengayam)",
        "nameTa": "சின்ன வெங்காயம்",
        "nameHi": "छोटे प्याज",
        "quantity": 1,
        "unit": "cup chopped",
        "category": "Produce"
      },
      {
        "id": "ing-128",
        "name": "Garlic Pods",
        "nameTa": "பூண்டு",
        "nameHi": "लहसुन",
        "quantity": 15,
        "unit": "peeled",
        "category": "Produce"
      },
      {
        "id": "ing-11",
        "name": "Tomatoes",
        "nameTa": "தக்காளி",
        "nameHi": "टमाटर",
        "quantity": 2,
        "unit": "mashed",
        "category": "Produce"
      },
      {
        "id": "ing-133",
        "name": "Fish Curry Masala Powder",
        "nameTa": "மீன் குழம்பு மசாலா தூள்",
        "nameHi": "मछली मसाला पाउडर",
        "quantity": 2.5,
        "unit": "tbsp",
        "category": "Spices"
      },
      {
        "id": "ing-102",
        "name": "Gingelly / Sesame Oil",
        "nameTa": "நல்லெண்ணெய்",
        "nameHi": "तिल का तेल",
        "quantity": 3.5,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat sesame oil in an earthen clay pot (manpaanai); add mustard, fenugreek, cumin, and curry leaves.",
        "instructionTa": "மண் சட்டியில் நல்லெண்ணெய் ஊற்றி வெந்தயம் தாளிக்கவும்.",
        "instructionHi": "मिट्टी की हांडी में तिल का तेल गरम कर मेथी और राई चटकाएं।"
      },
      {
        "step": 2,
        "instruction": "Sauté shallots and garlic pods until aromatic and light golden; add crushed tomatoes and cook until soft.",
        "instructionTa": "வெங்காயம், பூண்டு மற்றும் தக்காளி வதக்கவும்.",
        "instructionHi": "प्याज, लहसुन और टमाटर भूनें।"
      },
      {
        "step": 3,
        "instruction": "Add fish curry powder, tamarind extract, 1 cup water, and salt; boil for 12 minutes until oil floats on surface.",
        "instructionTa": "மசாலா, புளித்தண்ணீர் சேர்த்து எண்ணெய் பிரியும் வரை கொதிக்கவிடவும்.",
        "instructionHi": "मसाला और इमली का पानी डालकर 12 मिनट गाढ़ा उबालें।"
      },
      {
        "step": 4,
        "instruction": "Carefully slide fish pieces into simmering gravy; cook 5 minutes on low flame without stirring violently. Rest a few hours before serving for incredible taste.",
        "instructionTa": "மீன் துண்டுகளை சேர்த்து 5 நிமிடம் மிதமான தீயில் வேகவிட்டு இறக்கவும்.",
        "instructionHi": "मछली के टुकड़े डालें और धीमी आंच पर 5 मिनट पकाकर परोसें।"
      }
    ],
    "nutrition": {
      "calories": 290,
      "protein": 28,
      "carbohydrates": 14,
      "fat": 14,
      "fiber": 3,
      "sugar": 2,
      "isEstimated": true
    },
    "cookingTips": [
      "Meen Kuzhambu cooked in an earthen clay pot tastes even better the next day as the fish absorbs the tamarind gravy."
    ],
    "substitutions": {
      "Sankara": "Any firm ocean fish"
    }
  },
  {
    "id": "rec-91",
    "title": "Authentic Madurai Mutton Chukka Varuval",
    "titleTa": "மதுரை ஸ்பெஷல் மட்டன் சுக்கா வறுவல்",
    "titleHi": "मदुरै स्टाइल मटन चुक्का (ड्राई फ्राई)",
    "description": "Tender boneless mutton slow-cooked and dry-roasted with shallots, crushed peppercorns, curry leaves, and Madurai mutton masala.",
    "descriptionTa": "இளசான ஆட்டுக்கறி, சின்ன வெங்காயம், கறிவேப்பிலை மற்றும் மிளகு மசாலா சேர்த்து சுருள வதக்கப்படும் மதுரை மட்டன் சுக்கா.",
    "descriptionHi": "नर्म मटन के छोटे टुकड़ों को छोटे प्याज, कुटी काली मिर्च और भुने मसालों के साथ एकदम सूखा भुना गया मदुरै का मशहूर व्यंजन।",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Curries",
    "dietaryTags": [
      "Non-Vegetarian",
      "High Protein",
      "Gluten-Free"
    ],
    "allergens": [],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 35,
    "totalTimeMinutes": 50,
    "servings": 3,
    "difficulty": "Medium",
    "rating": 5,
    "ratingCount": 390,
    "ingredients": [
      {
        "id": "ing-158",
        "name": "Mutton (Boneless small cubes)",
        "nameTa": "ஆட்டுக்கறி / மட்டன்",
        "nameHi": "मटन",
        "quantity": 500,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing-02",
        "name": "Small Shallots (Chinna Vengayam)",
        "nameTa": "சின்ன வெங்காயம்",
        "nameHi": "छोटे प्याज",
        "quantity": 1.5,
        "unit": "cups sliced",
        "category": "Produce"
      },
      {
        "id": "ing-05",
        "name": "Ginger Garlic Paste",
        "nameTa": "இஞ்சி பூண்டு விழுது",
        "nameHi": "अदरक लहसुन पेस्ट",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Produce"
      },
      {
        "id": "ing-129",
        "name": "Coarsely Crushed Black Pepper",
        "nameTa": "மிளகுத்தூள்",
        "nameHi": "काली मिर्च",
        "quantity": 1.5,
        "unit": "tbsp",
        "category": "Spices"
      },
      {
        "id": "ing-114",
        "name": "Fennel Seeds & Whole Spices",
        "nameTa": "சோம்பு & பட்டை",
        "nameHi": "सौंफ और खड़े मसाले",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Spices"
      },
      {
        "id": "ing-102",
        "name": "Sesame Oil",
        "nameTa": "நல்லெண்ணெய்",
        "nameHi": "तिल का तेल",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Pressure cook mutton cubes with ginger-garlic paste, turmeric, salt, and 1/2 cup water for 5 whistles until tender.",
        "instructionTa": "மட்டனை குக்கரில் 5 விசில் வைத்து வேகவைக்கவும்.",
        "instructionHi": "मटन को हल्दी, नमक और अदरक-लहसुन के साथ 5 सीटी में उबालें।"
      },
      {
        "step": 2,
        "instruction": "Heat sesame oil in a cast iron kadai; splutter fennel seeds, cinnamon, cloves, dried red chillies, and curry leaves.",
        "instructionTa": "இரும்பு கடாயில் நல்லெண்ணெய் ஊற்றி மசாலா தாளிக்கவும்.",
        "instructionHi": "कड़ाही में तेल गरम करके खड़े मसाले और सौंफ भूनें।"
      },
      {
        "step": 3,
        "instruction": "Add sliced shallots and sauté until deep golden brown. Add cooked mutton along with its concentrated stock.",
        "instructionTa": "சின்ன வெங்காயம் வதக்கி வெந்த மட்டனை சேர்க்கவும்.",
        "instructionHi": "प्याज भूनकर उबला मटन और उसका सूप डालें।"
      },
      {
        "step": 4,
        "instruction": "Roast on medium-high flame until all moisture evaporates, mutton is coated in thick dark spice glaze, and black pepper sparkles. Serve hot.",
        "instructionTa": "மிளகுத்தூள் சேர்த்து சுருள வதக்கி சூடாக பரிமாறவும்.",
        "instructionHi": "काली मिर्च डालकर एकदम सूखा भूनें और गरमागरम परोसें।"
      }
    ],
    "nutrition": {
      "calories": 370,
      "protein": 32,
      "carbohydrates": 8,
      "fat": 24,
      "fiber": 2,
      "sugar": 2,
      "isEstimated": true
    },
    "cookingTips": [
      "Using an iron skillet (irumbu kadai) gives Mutton Chukka its signature dark glaze and rustic flavor."
    ],
    "substitutions": {
      "Mutton": "Chicken or Mushroom"
    }
  },
  {
    "id": "rec-92",
    "title": "Chettinad Spicy Egg Curry (Muttai Kuzhambu)",
    "titleTa": "செட்டிநாடு காரசாரமான முட்டை குழம்பு",
    "titleHi": "चेट्टिनाड मसालेदार अंडा करी",
    "description": "Hard-boiled eggs scored and simmered in a robust, freshly ground Chettinad coconut, fennel, and black pepper gravy.",
    "descriptionTa": "வேகவைத்த முட்டையில் கீறிவிட்டு, சோம்பு, மிளகு, தேங்காய் மசாலா குழம்பில் வேகவிடப்படும் சுவையான முட்டை குழம்பு.",
    "descriptionHi": "उबले अंडों पर कट लगाकर भुने नारियल, सौंफ और काली मिर्च की चेट्टिनाड ग्रेवी में पकाया गया लजीज व्यंजन।",
    "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Curries",
    "dietaryTags": [
      "Eggetarian",
      "High Protein",
      "Gluten-Free"
    ],
    "allergens": [
      "Egg"
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 25,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.8,
    "ratingCount": 260,
    "ingredients": [
      {
        "id": "ing-10",
        "name": "Eggs (Boiled & Peeled)",
        "nameTa": "வேகவைத்த முட்டை",
        "nameHi": "उबले अंडे",
        "quantity": 4,
        "unit": "scored with knife",
        "category": "Protein"
      },
      {
        "id": "ing-02",
        "name": "Onion & Tomatoes",
        "nameTa": "வெங்காயம் & தக்காளி",
        "nameHi": "प्याज और टमाटर",
        "quantity": 2,
        "unit": "each chopped",
        "category": "Produce"
      },
      {
        "id": "ing-05",
        "name": "Ginger Garlic Paste",
        "nameTa": "இஞ்சி பூண்டு விழுது",
        "nameHi": "अदरक लहसुन पेस्ट",
        "quantity": 1,
        "unit": "tbsp",
        "category": "Produce"
      },
      {
        "id": "ing-123",
        "name": "Ground Coconut Paste with Fennel",
        "nameTa": "சோம்பு தேங்காய் விழுது",
        "nameHi": "नारियल-सौंफ पेस्ट",
        "quantity": 0.3,
        "unit": "cup",
        "category": "Produce"
      },
      {
        "id": "ing-07",
        "name": "Kuzhambu Chilli Powder & Coriander Powder",
        "nameTa": "குழம்பு மிளகாய் தூள் & மல்லி தூள்",
        "nameHi": "मिर्च व धनिया पाउडर",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Spices"
      },
      {
        "id": "ing-09",
        "name": "Cooking Oil",
        "nameTa": "சமையல் எண்ணெய்",
        "nameHi": "तेल",
        "quantity": 2,
        "unit": "tbsp",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Shallow fry boiled scored eggs in 1 tsp oil with a pinch of turmeric and chilli powder for 2 minutes; set aside.",
        "instructionTa": "முட்டையை மசாலாவில் லேசாக வறுத்து வைக்கவும்.",
        "instructionHi": "उबले अंडों पर हल्दी-मिर्च डालकर 2 मिनट हल्का फ्राई करें।"
      },
      {
        "step": 2,
        "instruction": "Heat remaining oil; temper fennel seeds, cinnamon, and curry leaves. Sauté onions and ginger garlic paste until fragrant.",
        "instructionTa": "வெங்காயம், இஞ்சி பூண்டு வதக்கவும்.",
        "instructionHi": "तेल में सौंफ और प्याज-लहसुन भूनें।"
      },
      {
        "step": 3,
        "instruction": "Add tomatoes, chilli powder, coriander powder, and 1.5 cups water; boil for 7 minutes.",
        "instructionTa": "தக்காளி மற்றும் மசாலா சேர்த்து கொதிக்கவிடவும்.",
        "instructionHi": "टमाटर, मसाले और पानी डालकर 7 मिनट उबालें।"
      },
      {
        "step": 4,
        "instruction": "Stir in coconut paste, drop in fried eggs, and simmer for 5 minutes until gravy is velvety. Serve with hot rice or dosa.",
        "instructionTa": "தேங்காய் விழுது மற்றும் முட்டை சேர்த்து 5 நிமிடம் கொதிக்கவிடவும்.",
        "instructionHi": "नारियल पेस्ट और अंडे मिलाकर 5 मिनट पकाएं और परोसें।"
      }
    ],
    "nutrition": {
      "calories": 240,
      "protein": 14,
      "carbohydrates": 12,
      "fat": 16,
      "fiber": 3,
      "sugar": 2,
      "isEstimated": true
    },
    "cookingTips": [
      "Scoring shallow cuts along the egg whites allows the spicy gravy to penetrate all the way to the yolk."
    ],
    "substitutions": {
      "Eggs": "Paneer cubes or Boiled potatoes"
    }
  },
  {
    "id": "rec-93",
    "title": "Authentic Melt-in-Mouth Ghee Mysore Pak",
    "titleTa": "நாக்கில் கரையும் நெய் மைசூர் பாக்",
    "titleHi": "मुंह में घुलने वाला मैसूर पाक",
    "description": "Royal South Indian delicacy made from roasted gram flour (besan), pure aromatic ghee, and sugar, melting instantaneously on the tongue.",
    "descriptionTa": "வறுத்த கடலை மாவு, சுத்தமான நெய் மற்றும் சர்க்கரை பாகு சேர்த்து நாவில் கரையும் பதத்தில் செய்யப்படும் மைசூர் பாக்.",
    "descriptionHi": "भुने बेसन, शुद्ध देसी घी और चीनी की चाशनी से बनी शाही दक्षिण भारतीय मिठाई जो मुंह में रखते ही घुल जाती है।",
    "imageUrl": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Desserts",
    "dietaryTags": [
      "Vegetarian",
      "Gluten-Free"
    ],
    "allergens": [
      "Milk"
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "servings": 6,
    "difficulty": "Medium",
    "rating": 5,
    "ratingCount": 340,
    "ingredients": [
      {
        "id": "ing-03",
        "name": "Besan (Gram Flour)",
        "nameTa": "கடலை மாவு",
        "nameHi": "बेसन",
        "quantity": 1,
        "unit": "cup sifted",
        "category": "Pantry"
      },
      {
        "id": "ing-110",
        "name": "Pure Desi Ghee",
        "nameTa": "சுத்தமான நெய்",
        "nameHi": "देसी घी",
        "quantity": 1.25,
        "unit": "cups hot",
        "category": "Dairy"
      },
      {
        "id": "ing-49",
        "name": "Sugar",
        "nameTa": "சர்க்கரை",
        "nameHi": "चीनी",
        "quantity": 1.5,
        "unit": "cups",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Sift besan flour; mix with 1/4 cup warm ghee to create a smooth, lump-free batter.",
        "instructionTa": "கடலை மாவை நெய்யுடன் கட்டியில்லாமல் கரைக்கவும்.",
        "instructionHi": "बेसन में थोड़ा गरम घी मिलाकर चिकना घोल बना लें।"
      },
      {
        "step": 2,
        "instruction": "Boil sugar with 1/2 cup water until single-string consistency (oru kambi padam).",
        "instructionTa": "சர்க்கரையை ஒரு கம்பி பதம் பாகு காய்ச்சவும்.",
        "instructionHi": "चीनी की एक तार की चाशनी बनाएं।"
      },
      {
        "step": 3,
        "instruction": "Add besan paste to syrup on low heat; stir continuously while pouring remaining hot ghee in small ladles.",
        "instructionTa": "மாவை ஊற்றி சூடான நெய்யை சிறிது சிறிதாக ஊற்றி கிளறவும்.",
        "instructionHi": "बेसन का घोल चाशनी में डालें और गरम घी डालते हुए लगातार चलाएं।"
      },
      {
        "step": 4,
        "instruction": "When mixture froths and separates easily from the pan, pour into a greased tray, cool slightly, and slice into diamond pieces.",
        "instructionTa": "நுரைத்து வரும்போது தட்டில் ஊற்றி வில்லைகள் போடவும்.",
        "instructionHi": "जब मिश्रण कड़ाही छोड़ने लगे तो थाली में पलटकर चौकोर काट लें।"
      }
    ],
    "nutrition": {
      "calories": 380,
      "protein": 4,
      "carbohydrates": 48,
      "fat": 20,
      "fiber": 2,
      "sugar": 38,
      "isEstimated": true
    },
    "cookingTips": [
      "Keep the ghee hot in a separate small saucepan on low heat before ladling it in."
    ],
    "substitutions": {
      "Ghee": "Half ghee and half refined oil for lighter version"
    }
  },
  {
    "id": "rec-94",
    "title": "Navaratri Kondakadalai Sundal (Spiced Chickpeas)",
    "titleTa": "நவராத்திரி கொண்டைக்கடலை சுண்டல்",
    "titleHi": "नवरत्न काला चना सुंडल",
    "description": "Protein-packed festive South Indian tempered chickpeas with mustard, urad dal, green chillies, ginger, and fresh grated coconut.",
    "descriptionTa": "வேகவைத்த கொண்டைக்கடலையுடன் கடுகு, உளுந்து, பெருங்காயம் மற்றும் துருவிய தேங்காய் சேர்த்து செய்யப்படும் சத்தான சுண்டல்.",
    "descriptionHi": "उबले काले चने को राई, उड़द दाल, कढ़ी पत्ता, हींग और ताजे कद्दूकस नारियल के साथ तड़का लगाकर बनाया गया प्रसाद।",
    "imageUrl": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=800&q=80",
    "cuisine": "South Indian",
    "category": "Snacks",
    "dietaryTags": [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "High Protein",
      "Healthy food",
      "Quick meals"
    ],
    "allergens": [],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 15,
    "servings": 3,
    "difficulty": "Easy",
    "rating": 4.8,
    "ratingCount": 190,
    "ingredients": [
      {
        "id": "ing-159",
        "name": "Black or White Chickpeas (Boiled)",
        "nameTa": "வேகவைத்த கொண்டைக்கடலை",
        "nameHi": "उबले काले या सफेद चने",
        "quantity": 2,
        "unit": "cups",
        "category": "Produce"
      },
      {
        "id": "ing-123",
        "name": "Fresh Grated Coconut",
        "nameTa": "துருவிய தேங்காய்",
        "nameHi": "कद्दूकस ताजा नारियल",
        "quantity": 3,
        "unit": "tbsp",
        "category": "Produce"
      },
      {
        "id": "ing-106",
        "name": "Mustard Seeds, Urad Dal & Curry Leaves",
        "nameTa": "கடுகு, உளுந்து, கறிவேப்பிலை",
        "nameHi": "राई, उड़द दाल, कढ़ी पत्ता",
        "quantity": 1,
        "unit": "tsp",
        "category": "Spices"
      },
      {
        "id": "ing-04",
        "name": "Green Chillies & Ginger",
        "nameTa": "பச்சை மிளகாய் & இஞ்சி",
        "nameHi": "हरी मिर्च और अदरक",
        "quantity": 1,
        "unit": "tbsp finely chopped",
        "category": "Produce"
      },
      {
        "id": "ing-124",
        "name": "Coconut Oil & Asafoetida (Hing)",
        "nameTa": "தேங்காய் எண்ணெய் & பெருங்காயம்",
        "nameHi": "नारियल तेल और हींग",
        "quantity": 1,
        "unit": "tbsp + pinch",
        "category": "Pantry"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "instruction": "Heat coconut oil in a pan; add mustard seeds, urad dal, green chillies, ginger, curry leaves, and a generous pinch of hing.",
        "instructionTa": "தேங்காய் எண்ணெயில் தாளிப்பு பொருட்களை வதக்கவும்.",
        "instructionHi": "नारियल तेल में राई, दाल, मिर्च, अदरक और हींग का तड़का लगाएं।"
      },
      {
        "step": 2,
        "instruction": "Add boiled chickpeas and salt; toss on medium heat for 2-3 minutes until heated through.",
        "instructionTa": "கொண்டைக்கடலை சேர்த்து 2 நிமிடம் கிளறவும்.",
        "instructionHi": "उबले चने और नमक डालकर 2 मिनट भूनें।"
      },
      {
        "step": 3,
        "instruction": "Turn off the heat, mix in fresh grated coconut, and serve warm.",
        "instructionTa": "தேங்காய் துருவல் சேர்த்து பரிமாறவும்.",
        "instructionHi": "ताजा नारियल मिलाकर गरमागरम परोसें।"
      }
    ],
    "nutrition": {
      "calories": 190,
      "protein": 9,
      "carbohydrates": 28,
      "fat": 5,
      "fiber": 7,
      "sugar": 2,
      "isEstimated": true
    },
    "cookingTips": [
      "Soak chickpeas overnight and boil until soft like butter for the best texture."
    ],
    "substitutions": {
      "Chickpeas": "Black eyed peas (Karamani) or Green gram"
    }
  }
,
  {
  id: "rec-95",
  title: "Chettinad Chicken Sukka",
  titleTa: "செட்டிநாடு சிக்கன் சுக்கா",
  titleHi: "चेट्टीनाड चिकन सुक्का",
  description: "Traditional Tamil Nadu dry spiced chicken roast bursting with freshly roasted whole coriander, fennel, black pepper, and curry leaves.",
  descriptionTa: "வறுத்து அரைத்த மிளகு, சோம்பு, கொத்தமல்லி மற்றும் கறிவேப்பிலை மணத்துடன் செய்யப்படும் சுவையான செட்டிநாடு சிக்கன் சுக்கா.",
  descriptionHi: "ताजा भुनी काली मिर्च, सौंफ और कढ़ी पत्ते के साथ चेट्टीनाड शैली में बना तीखा और स्वादिष्ट सूखा चिकन।",
  imageUrl: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
  cuisine: "South Indian",
  category: "Dinner",
  dietaryTags: [
    "High Protein",
    "Gluten-Free"
  ],
  allergens: [],
  prepTimeMinutes: 15,
  cookTimeMinutes: 25,
  totalTimeMinutes: 40,
  servings: 3,
  difficulty: "Medium",
  rating: 5,
  ratingCount: 220,
  ingredients: [
    {
      id: "ing-95-01",
      name: "Chicken (Bone-in or Boneless)",
      nameTa: "சிக்கன்",
      nameHi: "चिकन",
      quantity: 500,
      unit: "g bite-sized",
      category: "Meat"
    },
    {
      id: "ing-95-02",
      name: "Shallots (Small Onion)",
      nameTa: "சின்ன வெங்காயம்",
      nameHi: "छोटे प्याज",
      quantity: 15,
      unit: "chopped",
      category: "Produce"
    },
    {
      id: "ing-95-03",
      name: "Tomato",
      nameTa: "தக்காளி",
      nameHi: "टमाटर",
      quantity: 1,
      unit: "chopped",
      category: "Produce"
    },
    {
      id: "ing-95-04",
      name: "Ginger Garlic Paste",
      nameTa: "இஞ்சி பூண்டு விழுது",
      nameHi: "अदरक लहसुन पेस्ट",
      quantity: 1.5,
      unit: "tbsp",
      category: "Produce"
    },
    {
      id: "ing-95-05",
      name: "Black Peppercorns",
      nameTa: "கருப்பு மிளகு",
      nameHi: "काली मिर्च",
      quantity: 1.5,
      unit: "tbsp",
      category: "Spices"
    },
    {
      id: "ing-95-06",
      name: "Fennel Seeds (Sombu)",
      nameTa: "சோம்பு",
      nameHi: "सौंफ",
      quantity: 1,
      unit: "tbsp",
      category: "Spices"
    },
    {
      id: "ing-95-07",
      name: "Coriander Seeds",
      nameTa: "மல்லி விதை",
      nameHi: "धनिया बीज",
      quantity: 1,
      unit: "tbsp",
      category: "Spices"
    },
    {
      id: "ing-95-08",
      name: "Curry Leaves",
      nameTa: "கறிவேப்பிலை",
      nameHi: "कढ़ी पत्ता",
      quantity: 3,
      unit: "sprigs",
      category: "Produce"
    },
    {
      id: "ing-95-09",
      name: "Coconut Oil or Sesame Oil",
      nameTa: "நல்லெண்ணெய்",
      nameHi: "तेल",
      quantity: 2,
      unit: "tbsp",
      category: "Pantry"
    },
    {
      id: "ing-95-10",
      name: "Salt",
      nameTa: "உப்பு",
      nameHi: "नमक",
      quantity: 1.25,
      unit: "tsp",
      category: "Pantry"
    }
  ],
  instructions: [
    {
      step: 1,
      instruction: "Dry roast black peppercorns, fennel seeds, and coriander seeds until aromatic; cool and grind into fresh Chettinad spice powder.",
      instructionTa: "மிளகு, சோம்பு, மல்லி விதைகளை வறுத்து ஆறியதும் பொடியாக அரைத்துக்கொள்ளவும்.",
      instructionHi: "काली मिर्च, सौंफ और साबुत धनिये को सूखा भूनकर दरदरा मसाला पीस लें।"
    },
    {
      step: 2,
      instruction: "Heat oil in a pan, add curry leaves and chopped shallots. Sauté until deep golden brown.",
      instructionTa: "வாணலியில் எண்ணெய் ஊற்றி கறிவேப்பிலை மற்றும் சின்ன வெங்காயம் சேர்த்து பொன்னிறமாக வதக்கவும்.",
      instructionHi: "पैन में तेल गरम करें, कढ़ी पत्ता और छोटे प्याज डालकर सुनहरा होने तक भूनें।"
    },
    {
      step: 3,
      instruction: "Add ginger-garlic paste and tomatoes; sauté for 3 minutes until soft.",
      instructionTa: "இஞ்சி பூண்டு விழுது மற்றும் தக்காளி சேர்த்து 3 நிமிடங்கள் வதக்கவும்.",
      instructionHi: "अदरक-लहसुन पेस्ट और टमाटर डालकर 3 मिनट भूनें।"
    },
    {
      step: 4,
      instruction: "Add chicken pieces, turmeric, and salt. Cook covered on medium heat for 12 minutes without adding water.",
      instructionTa: "சிக்கன் துண்டுகள், மஞ்சள் தூள் மற்றும் உப்பு சேர்த்து தண்ணீர் ஊற்றாமல் மூடி வைத்து 12 நிமிடங்கள் வேகவிடவும்.",
      instructionHi: "चिकन के टुकड़े, हल्दी और नमक डालें। बिना पानी डाले ढककर 12 मिनट पकाएं।"
    },
    {
      step: 5,
      instruction: "Add the freshly ground Chettinad spice powder and toss on high heat until the masala coats the chicken and turns semi-dry/sukka. Garnish with fresh curry leaves.",
      instructionTa: "அரைத்த செட்டிநாடு மசாலாவை சேர்த்து சுக்கா ஆகும் வரை நன்கு கிளறி இறக்கவும்.",
      instructionHi: "पिसा हुआ मसाला डालें और तेज आंच पर सूखा होने तक भूनें। कढ़ी पत्ते से सजाएं।"
    }
  ],
  nutrition: {
    calories: 340,
    protein: 32,
    carbohydrates: 8,
    fat: 20,
    fiber: 3,
    sugar: 2,
    isEstimated: true
  }
},

  {
  id: "rec-96",
  title: "Tamil Nadu Ambur Mutton Biryani",
  titleTa: "ஆம்பூர் மட்டன் பிரியாணி",
  titleHi: "आंबूर मटन बिरयानी",
  description: "Iconic Tamil Nadu style biryani prepared with fragrant short-grain Seeraga Samba rice, succulent mutton, and curd-chilli paste.",
  descriptionTa: "மணமணக்கும் சீரக சம்பா அரிசி, மென்மையான ஆட்டுக்கறி மற்றும் பிரத்யேக மசாலாக்களுடன் செய்யப்படும் ஆம்பூர் பிரியாணி.",
  descriptionHi: "सुगंधित जीरा सांबा चावल और रसीले मटन से पारंपरिक तमिलनाडु स्टाइल में बनाई गई स्वादिष्ट आंबूर बिरयानी।",
  imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
  cuisine: "South Indian",
  category: "Dinner",
  dietaryTags: [
    "High Protein",
    "Gluten-Free"
  ],
  allergens: [
    "Milk"
  ],
  prepTimeMinutes: 20,
  cookTimeMinutes: 45,
  totalTimeMinutes: 65,
  servings: 4,
  difficulty: "Hard",
  rating: 5,
  ratingCount: 380,
  ingredients: [
    {
      id: "ing-96-01",
      name: "Mutton (Goat Meat)",
      nameTa: "மட்டன் (ஆட்டுக்கறி)",
      nameHi: "मटन",
      quantity: 500,
      unit: "g tender cut",
      category: "Meat"
    },
    {
      id: "ing-96-02",
      name: "Seeraga Samba Rice",
      nameTa: "சீரக சம்பா அரிசி",
      nameHi: "जीरा सांबा चावल",
      quantity: 2,
      unit: "cups soaked 20m",
      category: "Pantry"
    },
    {
      id: "ing-96-03",
      name: "Onion",
      nameTa: "வெங்காயம்",
      nameHi: "प्याज",
      quantity: 3,
      unit: "sliced",
      category: "Produce"
    },
    {
      id: "ing-96-04",
      name: "Tomato",
      nameTa: "தக்காளி",
      nameHi: "टमाटर",
      quantity: 2,
      unit: "chopped",
      category: "Produce"
    },
    {
      id: "ing-96-05",
      name: "Red Chilli Paste",
      nameTa: "மிளகாய் விழுது",
      nameHi: "लाल मिर्च पेस्ट",
      quantity: 2,
      unit: "tbsp",
      category: "Spices"
    },
    {
      id: "ing-96-06",
      name: "Ginger Garlic Paste",
      nameTa: "இஞ்சி பூண்டு விழுது",
      nameHi: "अदरक लहसुन पेस्ट",
      quantity: 2,
      unit: "tbsp",
      category: "Produce"
    },
    {
      id: "ing-96-07",
      name: "Curd (Yogurt)",
      nameTa: "தயிர்",
      nameHi: "दही",
      quantity: 0.5,
      unit: "cup",
      category: "Dairy"
    },
    {
      id: "ing-96-08",
      name: "Mint & Coriander",
      nameTa: "புதினா கொத்தமல்லி",
      nameHi: "पुदीना और धनिया",
      quantity: 1,
      unit: "cup chopped",
      category: "Produce"
    },
    {
      id: "ing-96-09",
      name: "Cooking Oil & Ghee",
      nameTa: "எண்ணெய் மற்றும் நெய்",
      nameHi: "तेल और घी",
      quantity: 3,
      unit: "tbsp",
      category: "Pantry"
    },
    {
      id: "ing-96-10",
      name: "Salt",
      nameTa: "உப்பு",
      nameHi: "नमक",
      quantity: 2,
      unit: "tsp",
      category: "Pantry"
    }
  ],
  instructions: [
    {
      step: 1,
      instruction: "Pressure cook mutton with a pinch of turmeric, 1 tsp ginger-garlic paste, and 1 cup water for 5-6 whistles until 80% tender.",
      instructionTa: "மட்டனை மஞ்சள் தூள், இஞ்சி பூண்டு விழுது சேர்த்து குக்கரில் 5-6 விசில் விட்டு வேகவைக்கவும்.",
      instructionHi: "मटन को हल्दी, अदरक-लहसुन और पानी के साथ कुकर में 5-6 सीटी लगाकर 80% तक पका लें।"
    },
    {
      step: 2,
      instruction: "In a thick-bottomed biryani pot, heat oil and ghee. Sauté sliced onions until golden brown.",
      instructionTa: "பிரியாணி பாத்திரத்தில் எண்ணெய் மற்றும் நெய் ஊற்றி வெங்காயத்தை பொன்னிறமாக வதக்கவும்.",
      instructionHi: "भारी तले वाले बर्तन में तेल और घी गरम करें। प्याज को सुनहरा भूरा होने तक भूनें।"
    },
    {
      step: 3,
      instruction: "Add red chilli paste, ginger-garlic paste, tomatoes, curd, mint, and cooked mutton with its broth. Cook for 8 minutes.",
      instructionTa: "மிளகாய் விழுது, இஞ்சி பூண்டு, தக்காளி, தயிர், புதினா மற்றும் வெந்த மட்டனை அதன் சாற்றுடன் சேர்த்து கொதிக்கவிடவும்.",
      instructionHi: "मिर्च पेस्ट, अदरक-लहसुन, टमाटर, दही, पुदीना और उबला मटन सूप के साथ डालकर 8 मिनट पकाएं।"
    },
    {
      step: 4,
      instruction: "Add soaked Seeraga Samba rice and required water (1:1.5 ratio). Cook until 85% water is absorbed.",
      instructionTa: "ஊறிய சீரக சம்பா அரிசி மற்றும் தேவையான தண்ணீர் சேர்த்து 85% நீர் வற்றும் வரை கொதிக்கவிடவும்.",
      instructionHi: "भीगा हुआ जीरा सांबा चावल और पानी डालें। 85% पानी सूखने तक पकाएं।"
    },
    {
      step: 5,
      instruction: "Cover tightly with lid and place on low flame dum for 15 minutes. Rest 10 minutes, fluff gently and serve with onion raita.",
      instructionTa: "பாத்திரத்தை மூடி மிதமான தணலில் 15 நிமிடங்கள் தம் போடவும். வெங்காய பச்சடியுடன் பரிமாறவும்.",
      instructionHi: "ढक्कन लगाकर 15 मिनट धीमी आंच पर दम दें। 10 मिनट बाद रायते के साथ परोसें।"
    }
  ],
  nutrition: {
    calories: 580,
    protein: 34,
    carbohydrates: 62,
    fat: 22,
    fiber: 4,
    sugar: 3,
    isEstimated: true
  }
},

  {
  id: "rec-97",
  title: "Meen Kuzhambu (Tamil Nadu Fish Curry)",
  titleTa: "கிராமத்து மீன் குழம்பு",
  titleHi: "तमिलनाडु स्टाइल फिश करी (मीन कुझम्बू)",
  description: "Authentic village-style spicy and tangy fish curry simmered with tamarind, shallots, garlic, tomatoes, and fenugreek seeds.",
  descriptionTa: "புளி, சின்ன வெங்காயம், பூண்டு, வெந்தயம் மற்றும் மிளகாய் மசாலா சேர்த்து மண்சட்டியில் செய்யப்படும் காரசாரமான கிராமத்து மீன் குழம்பு.",
  descriptionHi: "इमली, छोटे प्याज, लहसुन और मेथी दाने के साथ मिट्टी की हांडी में बनने वाली तीखी और खट्टी मछली की करी।",
  imageUrl: "https://images.unsplash.com/photo-1514944298352-e56cf7b6c70c?auto=format&fit=crop&w=800&q=80",
  cuisine: "South Indian",
  category: "Lunch",
  dietaryTags: [
    "High Protein",
    "Gluten-Free"
  ],
  allergens: [
    "Fish"
  ],
  prepTimeMinutes: 15,
  cookTimeMinutes: 20,
  totalTimeMinutes: 35,
  servings: 4,
  difficulty: "Medium",
  rating: 5,
  ratingCount: 260,
  ingredients: [
    {
      id: "ing-97-01",
      name: "Fresh Fish Steaks (Seer / Rohu / Tilapia)",
      nameTa: "மீன் துண்டுகள்",
      nameHi: "मछली के टुकड़े",
      quantity: 500,
      unit: "g cleaned",
      category: "Fish"
    },
    {
      id: "ing-97-02",
      name: "Tamarind",
      nameTa: "புளி",
      nameHi: "इमली",
      quantity: 1,
      unit: "lemon-sized ball in 2 cups water",
      category: "Pantry"
    },
    {
      id: "ing-97-03",
      name: "Shallots (Small Onion)",
      nameTa: "சின்ன வெங்காயம்",
      nameHi: "छोटे प्याज",
      quantity: 15,
      unit: "halved",
      category: "Produce"
    },
    {
      id: "ing-97-04",
      name: "Garlic",
      nameTa: "பூண்டு",
      nameHi: "लहसुन",
      quantity: 10,
      unit: "cloves",
      category: "Produce"
    },
    {
      id: "ing-97-05",
      name: "Tomato",
      nameTa: "தக்காளி",
      nameHi: "टमाटर",
      quantity: 2,
      unit: "chopped",
      category: "Produce"
    },
    {
      id: "ing-97-06",
      name: "Fenugreek Seeds (Vendhayam)",
      nameTa: "வெந்தயம்",
      nameHi: "मेथी दाना",
      quantity: 0.5,
      unit: "tsp",
      category: "Spices"
    },
    {
      id: "ing-97-07",
      name: "Kuzhambu Chilli Powder",
      nameTa: "குழம்பு மிளகாய் தூள்",
      nameHi: "करी मिर्च पाउडर",
      quantity: 2.5,
      unit: "tbsp",
      category: "Spices"
    },
    {
      id: "ing-97-08",
      name: "Curry Leaves",
      nameTa: "கறிவேப்பிலை",
      nameHi: "कढ़ी पत्ता",
      quantity: 2,
      unit: "sprigs",
      category: "Produce"
    },
    {
      id: "ing-97-09",
      name: "Sesame Oil",
      nameTa: "நல்லெண்ணெய்",
      nameHi: "तिल का तेल",
      quantity: 3,
      unit: "tbsp",
      category: "Pantry"
    },
    {
      id: "ing-97-10",
      name: "Salt",
      nameTa: "உப்பு",
      nameHi: "नमक",
      quantity: 1.5,
      unit: "tsp",
      category: "Pantry"
    }
  ],
  instructions: [
    {
      step: 1,
      instruction: "Heat sesame oil in a clay pot or heavy pan. Add fenugreek seeds, mustard seeds, and curry leaves.",
      instructionTa: "நல்லெண்ணெய் ஊற்றி வெந்தயம், கடுகு மற்றும் கறிவேப்பிலை தாளிக்கவும்.",
      instructionHi: "कड़ाही में तिल का तेल गरम करें। मेथी दाना, राई और कढ़ी पत्ता डालें।"
    },
    {
      step: 2,
      instruction: "Add garlic cloves and shallots; sauté on medium heat until golden and fragrant.",
      instructionTa: "பூண்டு மற்றும் சின்ன வெங்காயம் சேர்த்து பொன்னிறமாக வதக்கவும்.",
      instructionHi: "लहसुन और छोटे प्याज डालकर खुशबू आने तक भूनें।"
    },
    {
      step: 3,
      instruction: "Add tomatoes, kuzhambu chilli powder, turmeric, and salt. Cook until tomatoes become mushy and oil floats.",
      instructionTa: "தக்காளி, குழம்பு மிளகாய் தூள் மற்றும் உப்பு சேர்த்து தக்காளி கரையும் வரை வதக்கவும்.",
      instructionHi: "टमाटर, करी पाउडर और नमक डालें। टमाटर गलने तक पकाएं।"
    },
    {
      step: 4,
      instruction: "Pour the tamarind extract and 1 cup water. Bring to a rolling boil and simmer for 10 minutes until raw tamarind smell goes away.",
      instructionTa: "புளி கரைசலை ஊற்றி 10 நிமிடங்கள் பச்சை வாசனை போகும் வரை கொதிக்கவிடவும்.",
      instructionHi: "इमली का पानी डालें और 10 मिनट तक उबालें जब तक कि कच्चापन खत्म न हो जाए।"
    },
    {
      step: 5,
      instruction: "Gently drop fish steaks into the simmering curry. Cook covered on low heat for 5-6 minutes without stirring with a spoon. Rest 30 minutes before serving with hot rice.",
      instructionTa: "மீன் துண்டுகளை மெதுவாக போட்டு 5-6 நிமிடங்கள் வேகவைத்து இறக்கவும். சாதத்துடன் பரிமாறவும்.",
      instructionHi: "मछली के टुकड़े धीरे से डालें और 5-6 मिनट धीमी आंच पर पकाएं। गरमागरम चावल के साथ परोसें।"
    }
  ],
  nutrition: {
    calories: 290,
    protein: 28,
    carbohydrates: 14,
    fat: 14,
    fiber: 3,
    sugar: 3,
    isEstimated: true
  }
},

  {
  id: "rec-98",
  title: "Madurai Street Style Kothu Parotta",
  titleTa: "மதுரை வீதி சுவை கொத்து பரோட்டா",
  titleHi: "मदुरै स्टाइल कोथू परोटा",
  description: "Famous Tamil Nadu street food of flaky shredded parottas beaten vigorously on a hot cast iron griddle with eggs, onions, tomatoes, and salna.",
  descriptionTa: "பிய்த்துப்போட்ட பரோட்டாவுடன் முட்டை, வெங்காயம், தக்காளி மற்றும் சுவையான சால்னா சேர்த்து கொத்தி செய்யப்படும் மதுரை ஸ்பெஷல் கொத்து பரோட்டா.",
  descriptionHi: "परोटे के टुकड़ों को अंडों, प्याज, टमाटर और मसालेदार सालना के साथ लोहे के तवे पर कूटकर बनाया गया मदुरै का मशहूर कोथू परोटा।",
  imageUrl: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
  cuisine: "South Indian",
  category: "Dinner",
  dietaryTags: [
    "Eggetarian",
    "High Protein"
  ],
  allergens: [
    "Wheat",
    "Egg"
  ],
  prepTimeMinutes: 10,
  cookTimeMinutes: 15,
  totalTimeMinutes: 25,
  servings: 2,
  difficulty: "Medium",
  rating: 5,
  ratingCount: 310,
  ingredients: [
    {
      id: "ing-98-01",
      name: "Malabar Parottas",
      nameTa: "பரோட்டா",
      nameHi: "परोटा",
      quantity: 3,
      unit: "shredded into small pieces",
      category: "Pantry"
    },
    {
      id: "ing-98-02",
      name: "Egg",
      nameTa: "முட்டை",
      nameHi: "अंडा",
      quantity: 2,
      unit: "large",
      category: "Protein"
    },
    {
      id: "ing-98-03",
      name: "Onion",
      nameTa: "வெங்காயம்",
      nameHi: "प्याज",
      quantity: 1,
      unit: "chopped",
      category: "Produce"
    },
    {
      id: "ing-98-04",
      name: "Tomato",
      nameTa: "தக்காளி",
      nameHi: "टमाटर",
      quantity: 1,
      unit: "chopped",
      category: "Produce"
    },
    {
      id: "ing-98-05",
      name: "Green Chilli",
      nameTa: "பச்சை மிளகாய்",
      nameHi: "हरी मिर्च",
      quantity: 2,
      unit: "chopped",
      category: "Produce"
    },
    {
      id: "ing-98-06",
      name: "Chicken or Veg Salna / Gravy",
      nameTa: "சால்னா அல்லது குருமா",
      nameHi: "सालना या ग्रेवी",
      quantity: 0.75,
      unit: "cup",
      category: "Pantry"
    },
    {
      id: "ing-98-07",
      name: "Curry Leaves",
      nameTa: "கறிவேப்பிலை",
      nameHi: "कढ़ी पत्ता",
      quantity: 2,
      unit: "sprigs",
      category: "Produce"
    },
    {
      id: "ing-98-08",
      name: "Oil",
      nameTa: "எண்ணெய்",
      nameHi: "तेल",
      quantity: 2,
      unit: "tbsp",
      category: "Pantry"
    }
  ],
  instructions: [
    {
      step: 1,
      instruction: "Shred parottas into bite-sized bite pieces.",
      instructionTa: "பரோட்டாவை சிறு துண்டுகளாக பிய்த்து வைக்கவும்.",
      instructionHi: "परोटों को छोटे-छोटे टुकड़ों में तोड़ लें।"
    },
    {
      step: 2,
      instruction: "Heat oil on a flat cast-iron tawa. Sauté onions, green chillies, curry leaves, and tomatoes for 3 minutes.",
      instructionTa: "தோசைக் கல்லில் எண்ணெய் சூடாக்கி வெங்காயம், பச்சை மிளகாய், கறிவேப்பிலை, தக்காளி வதக்கவும்.",
      instructionHi: "तवे पर तेल गरम करें। प्याज, हरी मिर्च, कढ़ी पत्ता और टमाटर 3 मिनट भूनें।"
    },
    {
      step: 3,
      instruction: "Crack eggs directly onto the tawa and scramble quickly into the onion mixture.",
      instructionTa: "முட்டையை உடைத்து ஊற்றி வெங்காய கலவையுடன் சேர்த்து வேகவிடவும்.",
      instructionHi: "अंडे फोड़कर तवे पर डालें और तेजी से चलाते हुए भुर्जी बनाएं।"
    },
    {
      step: 4,
      instruction: "Add shredded parotta pieces and pour hot salna/gravy over everything.",
      instructionTa: "பிய்த்த பரோட்டா துண்டுகள் மற்றும் சூடான சால்னாவை ஊற்றவும்.",
      instructionHi: "परोटे के टुकड़े और ऊपर से गरम सालना (ग्रेवी) डालें।"
    },
    {
      step: 5,
      instruction: "Using two metal spatulas or steel tumblers, chop and beat vigorously on the tawa for 3-4 minutes until well-shredded and combined. Serve smoking hot with raita.",
      instructionTa: "இரண்டு கரண்டிகளால் வேகமாக கொத்தி ஒன்றாக கலந்து சூடாக பரிமாறவும்.",
      instructionHi: "दो तेज किनारों वाली कलछी या कटोरी से तवे पर 3-4 मिनट तक तेजी से कूटें। गरमागरम परोसें।"
    }
  ],
  nutrition: {
    calories: 460,
    protein: 16,
    carbohydrates: 54,
    fat: 20,
    fiber: 4,
    sugar: 3,
    isEstimated: true
  }
},

  {
  id: "rec-99",
  title: "South Indian Rava Kesari",
  titleTa: "கல்யாண வீட்டு ரவா கேசரி",
  titleHi: "साउथ इंडियन रवा केसरी",
  description: "A classic celebratory South Indian melt-in-mouth sweet pudding made with roasted semolina, aromatic ghee, saffron, and golden roasted cashews.",
  descriptionTa: "வறுத்த ரவை, தாராளமான நெய், ஏலக்காய் மற்றும் முந்திரி திராட்சை சேர்த்து செய்யப்படும் கல்யாண வீட்டு ரவா கேசரி.",
  descriptionHi: "भुनी सूजी, शुद्ध देसी घी, इलायची और केसर से बनी मुंह में घुल जाने वाली पारंपरिक साउथ इंडियन मिठाई।",
  imageUrl: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&w=800&q=80",
  cuisine: "South Indian",
  category: "Desserts",
  dietaryTags: [
    "Vegetarian"
  ],
  allergens: [
    "Milk",
    "Tree nuts",
    "Wheat"
  ],
  prepTimeMinutes: 5,
  cookTimeMinutes: 15,
  totalTimeMinutes: 20,
  servings: 4,
  difficulty: "Easy",
  rating: 5,
  ratingCount: 245,
  ingredients: [
    {
      id: "ing-99-01",
      name: "Rava (Semolina / Sooji)",
      nameTa: "ரவை",
      nameHi: "सूजी",
      quantity: 1,
      unit: "cup",
      category: "Pantry"
    },
    {
      id: "ing-99-02",
      name: "Sugar",
      nameTa: "சர்க்கரை",
      nameHi: "चीनी",
      quantity: 1.25,
      unit: "cups",
      category: "Pantry"
    },
    {
      id: "ing-99-03",
      name: "Ghee",
      nameTa: "நெய்",
      nameHi: "देसी घी",
      quantity: 0.5,
      unit: "cup",
      category: "Dairy"
    },
    {
      id: "ing-99-04",
      name: "Cashews & Raisins",
      nameTa: "முந்திரி திராட்சை",
      nameHi: "काजू और किशमिश",
      quantity: 2,
      unit: "tbsp",
      category: "Pantry"
    },
    {
      id: "ing-99-05",
      name: "Cardamom Powder",
      nameTa: "ஏலக்காய் தூள்",
      nameHi: "इलायची पाउडर",
      quantity: 0.5,
      unit: "tsp",
      category: "Spices"
    },
    {
      id: "ing-99-06",
      name: "Saffron / Kesari food color",
      nameTa: "கேசரி தூள்",
      nameHi: "केसर या रंग",
      quantity: 1,
      unit: "pinch",
      category: "Spices"
    }
  ],
  instructions: [
    {
      step: 1,
      instruction: "Heat 2 tbsp ghee in a pan; fry cashews and raisins until golden and set aside.",
      instructionTa: "வாணலியில் 2 ஸ்பூன் நெய் ஊற்றி முந்திரி மற்றும் திராட்சையை வறுத்து தனியாக வைக்கவும்.",
      instructionHi: "पैन में 2 चम्मच घी गरम कर काजू और किशमिश को सुनहरा तलकर निकालें।"
    },
    {
      step: 2,
      instruction: "In the same pan, roast rava on medium flame for 4 minutes without burning.",
      instructionTa: "அதே நெய்யில் ரவையை மிதமான தீயில் 4 நிமிடங்கள் வறுக்கவும்.",
      instructionHi: "उसी घी में सूजी को धीमी आंच पर 4 मिनट तक खुशबू आने तक भूनें।"
    },
    {
      step: 3,
      instruction: "In a separate pot, boil 2.5 cups of water with saffron color. Slowly pour boiling water into roasted rava, stirring continuously to prevent lumps.",
      instructionTa: "2.5 டம்ளர் தண்ணீரை கொதிக்கவைத்து வறுத்த ரவையில் கட்டிகள் இல்லாமல் ஊற்றி கிளறவும்.",
      instructionHi: "2.5 कप पानी में केसरिया रंग डालकर उबालें। उबलता पानी भुनी सूजी में लगातार चलाते हुए डालें।"
    },
    {
      step: 4,
      instruction: "Once rava is completely cooked and water is absorbed, add sugar and mix well (mixture will loosen).",
      instructionTa: "ரவை வெந்தவுடன் சர்க்கரை சேர்த்து கிளறவும் (இளகி வரும்).",
      instructionHi: "जब सूजी पूरी तरह पक जाए, तो चीनी मिलाएं। मिश्रण हल्का ढीला हो जाएगा।"
    },
    {
      step: 5,
      instruction: "Add remaining ghee gradually, cardamom powder, and fried nuts. Stir until it leaves the sides of the pan. Serve warm.",
      instructionTa: "மீதமுள்ள நெய், ஏலக்காய் தூள், வறுத்த முந்திரி சேர்த்து சுருண்டு வரும்போது இறக்கி பரிமாறவும்.",
      instructionHi: "बचा हुआ घी, इलायची और तले हुए मेवे डालें। जब हलवा बर्तन छोड़ने लगे तो गरमागरम परोसें।"
    }
  ],
  nutrition: {
    calories: 360,
    protein: 4,
    carbohydrates: 58,
    fat: 14,
    fiber: 1,
    sugar: 34,
    isEstimated: true
  }
},

  {
  id: "rec-100",
  title: "Chettinad Pepper Chicken Fry",
  titleTa: "செட்டிநாடு மிளகு சிக்கன் வறுவல்",
  titleHi: "चेट्टीनाड काली मिर्च चिकन फ्राई",
  description: "Fiery, aromatic dry roasted chicken infused with crushed black pepper, caramelized shallots, curry leaves, and ginger-garlic.",
  descriptionTa: "காரம் நிறைந்த கருப்பு மிளகு, சின்ன வெங்காயம், பூண்டு மற்றும் கறிவேப்பிலை மணத்துடன் செய்யப்படும் காரசாரமான சிக்கன் வறுவல்.",
  descriptionHi: "कुटी हुई काली मिर्च, भुने छोटे प्याज और कढ़ी पत्ते के साथ चेट्टीनाड अंदाज में बना तीखा चिकन फ्राई।",
  imageUrl: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80",
  cuisine: "South Indian",
  category: "Dinner",
  dietaryTags: [
    "High Protein",
    "Gluten-Free",
    "Quick meals"
  ],
  allergens: [],
  prepTimeMinutes: 10,
  cookTimeMinutes: 20,
  totalTimeMinutes: 30,
  servings: 3,
  difficulty: "Easy",
  rating: 5,
  ratingCount: 195,
  ingredients: [
    {
      id: "ing-100-01",
      name: "Chicken",
      nameTa: "சிக்கன்",
      nameHi: "चिकन",
      quantity: 450,
      unit: "g small pieces",
      category: "Meat"
    },
    {
      id: "ing-100-02",
      name: "Shallots",
      nameTa: "சின்ன வெங்காயம்",
      nameHi: "छोटे प्याज",
      quantity: 12,
      unit: "sliced",
      category: "Produce"
    },
    {
      id: "ing-100-03",
      name: "Coarsely Crushed Black Pepper",
      nameTa: "இடித்த மிளகுத்தூள்",
      nameHi: "कुटी काली मिर्च",
      quantity: 2,
      unit: "tbsp",
      category: "Spices"
    },
    {
      id: "ing-100-04",
      name: "Ginger Garlic Paste",
      nameTa: "இஞ்சி பூண்டு விழுது",
      nameHi: "अदरक लहसुन पेस्ट",
      quantity: 1,
      unit: "tbsp",
      category: "Produce"
    },
    {
      id: "ing-100-05",
      name: "Fennel Powder (Sombu)",
      nameTa: "சோம்புத்தூள்",
      nameHi: "सौंफ पाउडर",
      quantity: 1,
      unit: "tsp",
      category: "Spices"
    },
    {
      id: "ing-100-06",
      name: "Curry Leaves",
      nameTa: "கறிவேப்பிலை",
      nameHi: "कढ़ी पत्ता",
      quantity: 3,
      unit: "sprigs",
      category: "Produce"
    },
    {
      id: "ing-100-07",
      name: "Sesame Oil",
      nameTa: "நல்லெண்ணெய்",
      nameHi: "तेल",
      quantity: 2,
      unit: "tbsp",
      category: "Pantry"
    },
    {
      id: "ing-100-08",
      name: "Salt",
      nameTa: "உப்பு",
      nameHi: "नमक",
      quantity: 1,
      unit: "tsp",
      category: "Pantry"
    }
  ],
  instructions: [
    {
      step: 1,
      instruction: "Heat sesame oil in a kadai. Add curry leaves and shallots; fry until golden brown.",
      instructionTa: "வாணலியில் எண்ணெய் ஊற்றி கறிவேப்பிலை மற்றும் சின்ன வெங்காயம் சேர்த்து வதக்கவும்.",
      instructionHi: "कड़ाही में तेल गरम करें। कढ़ी पत्ता और प्याज डालकर सुनहरा होने तक भूनें।"
    },
    {
      step: 2,
      instruction: "Add ginger-garlic paste and chicken pieces with turmeric and salt. Sauté on high heat for 3 minutes.",
      instructionTa: "இஞ்சி பூண்டு விழுது, சிக்கன் துண்டுகள், மஞ்சள் தூள், உப்பு சேர்த்து வதக்கவும்.",
      instructionHi: "अदरक-लहसुन पेस्ट, चिकन, हल्दी और नमक डालकर 3 मिनट तेज आंच पर भूनें।"
    },
    {
      step: 3,
      instruction: "Cover and cook on medium flame for 12 minutes in its own juices until chicken is completely cooked.",
      instructionTa: "மூடி வைத்து மிதமான தீயில் 12 நிமிடங்கள் வேகவிடவும்.",
      instructionHi: "ढककर धीमी आंच पर 12 मिनट चिकन के गलने तक पकाएं।"
    },
    {
      step: 4,
      instruction: "Open lid, sprinkle freshly crushed black pepper and fennel powder. Toss on high heat for 3-4 minutes until dry and coated. Serve hot with rasam rice.",
      instructionTa: "மிளகுத்தூள், சோம்புத்தூள் சேர்த்து சுருள வதக்கி ரசம் சாதத்துடன் பரிமாறவும்.",
      instructionHi: "काली मिर्च और सौंफ पाउडर छिड़कें। तेज आंच पर 3-4 मिनट सूखा होने तक भूनें।"
    }
  ],
  nutrition: {
    calories: 310,
    protein: 30,
    carbohydrates: 6,
    fat: 18,
    fiber: 2,
    sugar: 1,
    isEstimated: true
  }
},

  {
  id: "rec-101",
  title: "Tamil Nadu Egg Thokku (Muttai Kuzhambu)",
  titleTa: "செட்டிநாடு முட்டை தொக்கு",
  titleHi: "तमिलनाडु अंडा थोक्कू (मसालेदार अंडा करी)",
  description: "Boiled eggs simmered and roasted in a thick, caramelized onion, tomato, and southern spice gravy.",
  descriptionTa: "வேகவைத்த முட்டையுடன் சின்ன வெங்காயம், தக்காளி மற்றும் மசாலாக்கள் சேர்த்து சுண்ட வதக்கிய செட்டிநாடு முட்டை தொக்கு.",
  descriptionHi: "उबले अंडों को प्याज, टमाटर और पारंपरिक मसालों की गाढ़ी और चटपटी ग्रेवी में भूनकर बनाया गया अंडा थोक्कू।",
  imageUrl: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=800&q=80",
  cuisine: "South Indian",
  category: "Lunch",
  dietaryTags: [
    "Eggetarian",
    "High Protein",
    "Gluten-Free"
  ],
  allergens: [
    "Egg"
  ],
  prepTimeMinutes: 10,
  cookTimeMinutes: 15,
  totalTimeMinutes: 25,
  servings: 3,
  difficulty: "Easy",
  rating: 4.9,
  ratingCount: 165,
  ingredients: [
    {
      id: "ing-101-01",
      name: "Eggs (Hard Boiled & Slit)",
      nameTa: "வேகவைத்த முட்டை",
      nameHi: "उबले अंडे",
      quantity: 4,
      unit: "large",
      category: "Protein"
    },
    {
      id: "ing-101-02",
      name: "Onions",
      nameTa: "வெங்காயம்",
      nameHi: "प्याज",
      quantity: 2,
      unit: "finely chopped",
      category: "Produce"
    },
    {
      id: "ing-101-03",
      name: "Tomatoes",
      nameTa: "தக்காளி",
      nameHi: "टमाटर",
      quantity: 2,
      unit: "chopped",
      category: "Produce"
    },
    {
      id: "ing-101-04",
      name: "Ginger Garlic Paste",
      nameTa: "இஞ்சி பூண்டு விழுது",
      nameHi: "अदरक लहसुन पेस्ट",
      quantity: 1,
      unit: "tsp",
      category: "Produce"
    },
    {
      id: "ing-101-05",
      name: "Chilli Powder",
      nameTa: "மிளகாய் தூள்",
      nameHi: "लाल मिर्च पाउडर",
      quantity: 1,
      unit: "tsp",
      category: "Spices"
    },
    {
      id: "ing-101-06",
      name: "Coriander Powder",
      nameTa: "மல்லி தூள்",
      nameHi: "धनिया पाउडर",
      quantity: 1,
      unit: "tsp",
      category: "Spices"
    },
    {
      id: "ing-101-07",
      name: "Curry Leaves",
      nameTa: "கறிவேப்பிலை",
      nameHi: "कढ़ी पत्ता",
      quantity: 2,
      unit: "sprigs",
      category: "Produce"
    },
    {
      id: "ing-101-08",
      name: "Cooking Oil",
      nameTa: "சமையல் எண்ணெய்",
      nameHi: "तेल",
      quantity: 2,
      unit: "tbsp",
      category: "Pantry"
    }
  ],
  instructions: [
    {
      step: 1,
      instruction: "Heat oil in a pan. Sauté chopped onions and curry leaves until golden brown.",
      instructionTa: "வாணலியில் எண்ணெய் ஊற்றி வெங்காயம் மற்றும் கறிவேப்பிலை சேர்த்து வதக்கவும்.",
      instructionHi: "पैन में तेल गरम करें। प्याज और कढ़ी पत्ता डालकर सुनहरा होने तक भूनें।"
    },
    {
      step: 2,
      instruction: "Add ginger-garlic paste and tomatoes; cook until oil separates from the masala.",
      instructionTa: "இஞ்சி பூண்டு விழுது மற்றும் தக்காளி சேர்த்து எண்ணெய் பிரியும் வரை வதக்கவும்.",
      instructionHi: "अदरक-लहसुन पेस्ट और टमाटर डालकर तेल छूटने तक पकाएं।"
    },
    {
      step: 3,
      instruction: "Add chilli powder, coriander powder, turmeric, and salt. Add 0.5 cup water and simmer for 5 minutes.",
      instructionTa: "மிளகாய் தூள், மல்லி தூள், மஞ்சள் தூள் மற்றும் அரை டம்ளர் தண்ணீர் சேர்த்து கொதிக்கவிடவும்.",
      instructionHi: "मिर्च पाउडर, धनिया पाउडर, हल्दी और आधा कप पानी डालकर 5 मिनट पकाएं।"
    },
    {
      step: 4,
      instruction: "Gently drop the slit boiled eggs into the thick gravy and roast on medium flame for 4 minutes until the gravy coats the eggs glossy. Serve with rice or dosa.",
      instructionTa: "வேகவைத்த முட்டைகளை சேர்த்து 4 நிமிடங்கள் மசாலா ஒட்டும் வரை பிரட்டி இறக்கவும்.",
      instructionHi: "उबले अंडों को डालें और 4 मिनट तक मसाले में लपेटते हुए भूनें। चावल या डोसे के साथ परोसें।"
    }
  ],
  nutrition: {
    calories: 240,
    protein: 14,
    carbohydrates: 10,
    fat: 16,
    fiber: 2,
    sugar: 3,
    isEstimated: true
  }
},

  {
  id: "rec-102",
  title: "Semiya Paal Payasam (Vermicelli Milk Pudding)",
  titleTa: "சேமியா பால் பாயாசம்",
  titleHi: "सेवई की खीर (सेमिया पायसम)",
  description: "Creamy, luxurious dessert made by simmering roasted vermicelli in full-cream milk, infused with cardamom, saffron, and ghee-fried cashews.",
  descriptionTa: "வறுத்த சேமியா, திக்கான பால், சர்க்கரை, ஏலக்காய் மற்றும் நெய்யில் வறுத்த முந்திரி சேர்த்து செய்யப்படும் சுவையான சேமியா பாயாசம்.",
  descriptionHi: "दूध, भुनी सेवई, इलायची और केसर से बनी बेहद मखमली और स्वादिष्ट खीर जिसे काजू-किशमिश से सजाया जाता है।",
  imageUrl: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=800&q=80",
  cuisine: "South Indian",
  category: "Desserts",
  dietaryTags: [
    "Vegetarian"
  ],
  allergens: [
    "Milk",
    "Tree nuts",
    "Wheat"
  ],
  prepTimeMinutes: 5,
  cookTimeMinutes: 15,
  totalTimeMinutes: 20,
  servings: 4,
  difficulty: "Easy",
  rating: 5,
  ratingCount: 180,
  ingredients: [
    {
      id: "ing-102-01",
      name: "Semiya (Vermicelli)",
      nameTa: "சேமியா",
      nameHi: "सेवई",
      quantity: 0.75,
      unit: "cup roasted",
      category: "Pantry"
    },
    {
      id: "ing-102-02",
      name: "Full Cream Milk",
      nameTa: "பால்",
      nameHi: "दूध",
      quantity: 3.5,
      unit: "cups",
      category: "Dairy"
    },
    {
      id: "ing-102-03",
      name: "Sugar",
      nameTa: "சர்க்கரை",
      nameHi: "चीनी",
      quantity: 0.75,
      unit: "cup",
      category: "Pantry"
    },
    {
      id: "ing-102-04",
      name: "Ghee",
      nameTa: "நெய்",
      nameHi: "देसी घी",
      quantity: 1.5,
      unit: "tbsp",
      category: "Dairy"
    },
    {
      id: "ing-102-05",
      name: "Cashews & Raisins",
      nameTa: "முந்திரி திராட்சை",
      nameHi: "काजू किशमिश",
      quantity: 2,
      unit: "tbsp",
      category: "Pantry"
    },
    {
      id: "ing-102-06",
      name: "Cardamom Powder",
      nameTa: "ஏலக்காய் தூள்",
      nameHi: "इलायची पाउडर",
      quantity: 0.5,
      unit: "tsp",
      category: "Spices"
    }
  ],
  instructions: [
    {
      step: 1,
      instruction: "Heat ghee in a pot; fry cashews and raisins until plump and golden. Set aside.",
      instructionTa: "பாத்திரத்தில் நெய் ஊற்றி முந்திரி, திராட்சையை வறுத்து எடுத்து வைக்கவும்.",
      instructionHi: "पैन में घी गरम करें और काजू-किशमिश को सुनहरा तलकर निकाल लें।"
    },
    {
      step: 2,
      instruction: "In the same pan, roast semiya on low heat until golden brown.",
      instructionTa: "அதே நெய்யில் சேமியாவை பொன்னிறமாக வறுக்கவும்.",
      instructionHi: "उसी पैन में सेवई को धीमी आंच पर सुनहरा होने तक भूनें।"
    },
    {
      step: 3,
      instruction: "Bring milk to a gentle boil in a heavy pot. Add roasted vermicelli and simmer for 5-6 minutes until soft and cooked.",
      instructionTa: "பாலை கொதிக்கவைத்து, வறுத்த சேமியாவை சேர்த்து 5-6 நிமிடங்கள் வேகவிடவும்.",
      instructionHi: "दूध को उबालें, भुनी सेवई डालें और 5-6 मिनट तक नरम होने तक पकाएं।"
    },
    {
      step: 4,
      instruction: "Add sugar and cardamom powder; stir until dissolved. Simmer for 2 minutes.",
      instructionTa: "சர்க்கரை மற்றும் ஏலக்காய் தூள் சேர்த்து 2 நிமிடங்கள் கொதிக்கவிடவும்.",
      instructionHi: "चीनी और इलायची पाउडर डालें। चीनी घुलने तक 2 मिनट पकाएं।"
    },
    {
      step: 5,
      instruction: "Garnish with fried cashews and raisins. Serve warm or chilled.",
      instructionTa: "வறுத்த முந்திரி திராட்சை தூவி சூடாகவோ அல்லது குளிர வைத்தோ பரிமாறவும்.",
      instructionHi: "तले हुए काजू-किशमिश से सजाएं और गरमागरम या ठंडा परोसें।"
    }
  ],
  nutrition: {
    calories: 280,
    protein: 6,
    carbohydrates: 44,
    fat: 9,
    fiber: 1,
    sugar: 28,
    isEstimated: true
  }
}
];
