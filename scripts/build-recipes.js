const fs = require('fs');
const path = require('path');

// We will construct the complete dataset with unique IDs, unique titles, and unique images for every single recipe.
// Every recipe has complete ingredients, instructions in EN, TA, HI, prep/cook times, servings.

const recipes = [
  // 1. Potato & Onion Crispy Pakora
  {
    id: 'rec-01',
    title: 'Potato & Onion Crispy Pakora',
    titleTa: 'உருளைக்கிழங்கு வெங்காய பக்கோடா',
    titleHi: 'आलू और प्याज के कुरकुरे पकोड़े',
    description: 'Golden, crispy, and spiced Indian fritters made with thinly sliced potatoes, onions, and gram flour.',
    descriptionTa: 'மெலிதாக நறுக்கிய உருளைக்கிழங்கு மற்றும் வெங்காயத்துடன் கடலை மாவு சேர்த்து செய்யப்படும் மிருதுவான மாலை நேர பக்கோடா.',
    descriptionHi: 'बारीक कटे आलू और प्याज को बेसन और मसालों के साथ मिलाकर बनाए गए कुरकुरे और स्वादिष्ट पकोड़े।',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
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
      { step: 1, instruction: 'Thinly slice onions and potatoes. Finely chop green chillies, ginger, and curry leaves.', instructionTa: 'வெங்காயம் மற்றும் உருளைக்கிழங்கை மெலிதாக நறுக்கவும். பச்சை மிளகாய் மற்றும் இஞ்சியை பொடியாக நறுக்கவும்.', instructionHi: 'प्याज और आलू को पतला काट लें। हरी मिर्च, अदरक और कढ़ी पत्ते को बारीक काट लें।' },
      { step: 2, instruction: 'In a mixing bowl, combine sliced potatoes, onions, green chillies, ginger, spices, and salt.', instructionTa: 'ஒரு பாத்திரத்தில் நறுக்கிய உருளைக்கிழங்கு, வெங்காயம், பச்சை மிளகாய், இஞ்சி, மிளகாய் தூள் மற்றும் உப்பு சேர்க்கவும்.', instructionHi: 'एक बड़े कटोरे में कटे आलू, प्याज, हरी मिर्च, अदरक, लाल मिर्च और नमक मिलाएं।' },
      { step: 3, instruction: 'Add gram flour gradually and sprinkle 1-2 tablespoons of water to coat in a stiff batter.', instructionTa: 'கடலை மாவை சிறிது சிறிதாக சேர்த்து, 1-2 தேக்கரண்டி தண்ணீர் தெளித்து கெட்டியாக பிசையவும்.', instructionHi: 'बेसन डालें और 1-2 चम्मच पानी छिड़ककर गाढ़ा मिश्रण तैयार करें।' },
      { step: 4, instruction: 'Heat oil in a kadai or deep pan on medium heat.', instructionTa: 'ஒரு வாணலியில் பொரிப்பதற்கு தேவையான அளவு எண்ணெய் ஊற்றி சூடாக்கவும்.', instructionHi: 'कड़ाही में मध्यम आंच पर तलने के लिए तेल गरम करें।' },
      { step: 5, instruction: 'Drop small clusters of batter into hot oil and deep fry until crispy and golden brown.', instructionTa: 'சூடான எண்ணெயில் சிறு சிறு உருண்டைகளாக போட்டு பொன்னிறமாக பொரித்தெடுக்கவும்.', instructionHi: 'गरम तेल में छोटे-छोटे हिस्से डालकर सुनहरा और कुरकुरा होने तक तलें।' },
      { step: 6, instruction: 'Drain on paper towels and serve piping hot with mint chutney or tomato sauce.', instructionTa: 'எண்ணெய் வடித்து புதினா சட்னி அல்லது சாஸுடன் சூடாக பரிமாறவும்.', instructionHi: 'टिशू पेपर पर निकालें और गरमागरम पुदीने की चटनी के साथ परोसें।' }
    ],
    nutrition: { calories: 240, protein: 6, carbohydrates: 32, fat: 10, fiber: 4, sugar: 2, isEstimated: true }
  },

  // 2. Potato & Egg Stir-Fry (Aloo Anda Bhurji)
  {
    id: 'rec-02',
    title: 'Potato & Egg Stir-Fry (Aloo Anda Bhurji)',
    titleTa: 'உருளைக்கிழங்கு முட்டை பொரியல்',
    titleHi: 'आलू और अंडा भुर्जी',
    description: 'Quick protein-packed skillet dish with tender spiced potatoes, sautéed onions, and fluffy scrambled eggs.',
    descriptionTa: 'மென்மையான உருளைக்கிழங்கு, வெங்காயம் மற்றும் முட்டை சேர்த்து எளிதாக செய்யப்படும் புரதம் நிறைந்த பொரியல்.',
    descriptionHi: 'आलू, प्याज और अंडों को भारतीय मसालों के साथ भूनकर बनाई जाने वाली झटपट और पौष्टिक भुर्जी।',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
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
      { step: 1, instruction: 'Dice potatoes into small cubes. Beat eggs in a small bowl with a pinch of salt.', instructionTa: 'உருளைக்கிழங்கை சிறு துண்டுகளாக நறுக்கவும். ஒரு கிண்ணத்தில் முட்டையை உப்பு சேர்த்து அடிக்கவும்.', instructionHi: 'आलू को छोटे टुकड़ों में काट लें। एक कटोरी में अंडों को थोड़ा नमक डालकर फेंटें।' },
      { step: 2, instruction: 'Heat oil in a pan, add cumin seeds and let them sizzle.', instructionTa: 'வாணலியில் எண்ணெய் ஊற்றி சீரகம் சேர்த்து பொரிய விடவும்.', instructionHi: 'पैन में तेल गरम करें और जीरा चटकाएं।' },
      { step: 3, instruction: 'Add chopped onions, tomatoes, and spices. Sauté for 3 minutes.', instructionTa: 'நறுக்கிய வெங்காயம், தக்காளி மற்றும் மசாலா தூள்கள் சேர்த்து 3 நிமிடங்கள் வதக்கவும்.', instructionHi: 'कटा प्याज, टमाटर और मसाले डालकर 3 मिनट तक भूनें।' },
      { step: 4, instruction: 'Add diced potatoes and cook for 5 minutes until tender.', instructionTa: 'நறுக்கிய உருளைக்கிழங்கை சேர்த்து 5 நிமிடங்கள் வேகும் வரை கிளறவும்.', instructionHi: 'कटे आलू डालें और नरम होने तक 5 मिनट पकाएं।' },
      { step: 5, instruction: 'Pour beaten eggs and scramble gently until cooked through. Serve hot with roti.', instructionTa: 'அடித்த முட்டையை ஊற்றி மிதமான தீயில் கிளறி சுடச்சுட பரிமாறவும்.', instructionHi: 'फेंटे हुए अंडे डालें और धीमी आंच पर भुर्जी बनाकर गरमागरम परोसें।' }
    ],
    nutrition: { calories: 310, protein: 18, carbohydrates: 24, fat: 15, fiber: 3, sugar: 3, isEstimated: true }
  },

  // 3. South Indian Potato Podimas
  {
    id: 'rec-03',
    title: 'South Indian Potato Podimas',
    titleTa: 'தென்னிந்திய உருளைக்கிழங்கு பொடிமாஸ்',
    titleHi: 'साउथ इंडियन आलू पोडिमास',
    description: 'A comforting Tamil Nadu style mashed potato stir-fry tempered with mustard seeds, urad dal, ginger, and lemon juice.',
    descriptionTa: 'கடுகு, உளுந்து, இஞ்சி, பச்சை மிளகாய் மற்றும் எலுமிச்சை சாறு தாளித்து செய்யப்படும் சுவையான உருளைக்கிழங்கு பொடிமாஸ்.',
    descriptionHi: 'उबले आलू को राई, उड़द दाल, अदरक और नींबू का तड़का देकर बनाई जाने वाली पारंपरिक सूखी सब्जी।',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
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
    ratingCount: 86,
    ingredients: [
      { id: 'ing-01', name: 'Potato', nameTa: 'உருளைக்கிழங்கு', nameHi: 'आलू', quantity: 3, unit: 'boiled & mashed', category: 'Produce' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'finely chopped', category: 'Produce' },
      { id: 'ing-04', name: 'Green Chilli', nameTa: 'பச்சை மிளகாய்', nameHi: 'हरी मिर्च', quantity: 2, unit: 'slit', category: 'Produce' },
      { id: 'ing-05', name: 'Ginger', nameTa: 'இஞ்சி', nameHi: 'அदरक', quantity: 1, unit: 'tsp grated', category: 'Produce' },
      { id: 'ing-14', name: 'Mustard Seeds', nameTa: 'கடுகு', nameHi: 'राई', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-15', name: 'Urad Dal', nameTa: 'உளுத்தம் பருப்பு', nameHi: 'उड़द दाल', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 1, unit: 'sprig', category: 'Produce' },
      { id: 'ing-16', name: 'Lemon Juice', nameTa: 'எலுமிச்சை சாறு', nameHi: 'नींबू का रस', quantity: 1, unit: 'tbsp', category: 'Produce' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'नमक', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { id: 'ing-09', name: 'Cooking Oil', nameTa: 'சமையல் எண்ணெய்', nameHi: 'तेल', quantity: 1, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Boil, peel, and gently crumble the potatoes with hands.', instructionTa: 'உருளைக்கிழங்கை வேகவைத்து தோல் உரித்து கைகளால் மசித்து வைக்கவும்.', instructionHi: 'आलू को उबालकर छील लें और हाथों से हल्का मैश कर लें।' },
      { step: 2, instruction: 'Heat oil in a kadai. Add mustard seeds and urad dal; allow dal to turn golden.', instructionTa: 'வாணலியில் எண்ணெய் ஊற்றி கடுகு மற்றும் உளுத்தம் பருப்பு சேர்த்து பொன்னிறமாகும் வரை தாளிக்கவும்.', instructionHi: 'कड़ाही में तेल गरम करें। राई और उड़द दाल डालकर सुनहरा होने तक भूनें।' },
      { step: 3, instruction: 'Add green chillies, ginger, curry leaves, and chopped onions. Sauté until translucent.', instructionTa: 'பச்சை மிளகாய், இஞ்சி, கறிவேப்பிலை மற்றும் வெங்காயம் சேர்த்து வதக்கவும்.', instructionHi: 'हरी मिर्च, अदरक, कढ़ी पत्ता और प्याज डालकर हल्का पारदर्शी होने तक भूनें।' },
      { step: 4, instruction: 'Add crumbled potatoes, turmeric, and salt. Mix thoroughly and cook on low heat for 3 minutes.', instructionTa: 'மசித்த உருளைக்கிழங்கு, மஞ்சள் தூள் மற்றும் உப்பு சேர்த்து மிதமான தீயில் 3 நிமிடங்கள் கிளறவும்.', instructionHi: 'मैश किए आलू, हल्दी और नमक डालकर अच्छी तरह मिलाएं और 3 मिनट धीमी आंच पर पकाएं।' },
      { step: 5, instruction: 'Turn off heat, squeeze fresh lemon juice on top, and mix well. Serve with rasam rice or sambar rice.', instructionTa: 'அடுப்பை அணைத்து எலுமிச்சை சாறு பிழிந்து கலக்கவும். ரசம் சாதம் அல்லது சாம்பாருடன் பரிமாறவும்.', instructionHi: 'गैस बंद करें, ताजा नींबू का रस डालें और मिलाएं। रसम चावल या सांभर के साथ परोसें।' }
    ],
    nutrition: { calories: 180, protein: 4, carbohydrates: 34, fat: 4, fiber: 4, sugar: 2, isEstimated: true }
  },

  // 4. Authentic South Indian Sambar
  {
    id: 'rec-04',
    title: 'Authentic South Indian Sambar',
    titleTa: 'தென்னிந்திய பாரம்பரிய சாம்பார்',
    titleHi: 'पारंपरिक साउथ इंडियन सांभर',
    description: 'A rich and tangy lentil stew with drumstick, carrots, shallots, tamarind, and aromatic freshly ground sambar masala.',
    descriptionTa: 'துவரம் பருப்பு, முருங்கைக்காய், சின்ன வெங்காயம் மற்றும் நறுமணமிக்க சாம்பார் பொடி சேர்த்து செய்யப்படும் பாரம்பரிய சாம்பார்.',
    descriptionHi: 'अरहर दाल, सहजन, प्याज और इमली के साथ ताजे सांभर मसाले में पकाई जाने वाली सुगंधित पारंपरिक दाल।',
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Curries',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'High Protein'],
    allergens: [],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    totalTimeMinutes: 40,
    servings: 4,
    difficulty: 'Medium',
    rating: 4.9,
    ratingCount: 215,
    ingredients: [
      { id: 'ing-17', name: 'Toor Dal (Pigeon Pea)', nameTa: 'துவரம் பருப்பு', nameHi: 'अरहर दाल', quantity: 0.75, unit: 'cup', category: 'Pantry' },
      { id: 'ing-02', name: 'Shallots (Small Onion)', nameTa: 'சின்ன வெங்காயம்', nameHi: 'छोटे प्याज', quantity: 10, unit: 'peeled', category: 'Produce' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 2, unit: 'chopped', category: 'Produce' },
      { id: 'ing-18', name: 'Drumstick', nameTa: 'முருங்கைக்காய்', nameHi: 'सहजन', quantity: 1, unit: 'cut into 2-inch pieces', category: 'Produce' },
      { id: 'ing-19', name: 'Tamarind Paste', nameTa: 'புளி கரைசல்', nameHi: 'इमली का पेस्ट', quantity: 1.5, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-20', name: 'Sambar Powder', nameTa: 'சாம்பார் தூள்', nameHi: 'सांभर पाउडर', quantity: 2, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-12', name: 'Turmeric Powder', nameTa: 'மஞ்சள் தூள்', nameHi: 'हल्दी पाउडर', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-14', name: 'Mustard Seeds', nameTa: 'கடுகு', nameHi: 'राई', quantity: 0.75, unit: 'tsp', category: 'Spices' },
      { id: 'ing-21', name: 'Asafoetida (Hing)', nameTa: 'பெருங்காயம்', nameHi: 'हींग', quantity: 0.25, unit: 'tsp', category: 'Spices' },
      { id: 'ing-06', name: 'Curry Leaves & Coriander', nameTa: 'கறிவேப்பிலை கொத்தமல்லி', nameHi: 'कढ़ी पत्ता और धनिया', quantity: 2, unit: 'sprigs', category: 'Produce' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'नमक', quantity: 1.5, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Pressure cook toor dal with turmeric and 2 cups water for 4 whistles until soft and mushy.', instructionTa: 'துவரம் பருப்பை மஞ்சள் தூள் மற்றும் தண்ணீர் சேர்த்து 4 விசில் விட்டு வேகவைக்கவும்.', instructionHi: 'अरहर दाल को हल्दी और पानी के साथ कुकर में 4 सीटी आने तक अच्छी तरह उबाल लें।' },
      { step: 2, instruction: 'In a pot, boil drumstick, shallots, and tomatoes with tamarind water, sambar powder, and salt for 10 minutes.', instructionTa: 'ஒரு பாத்திரத்தில் முருங்கைக்காய், வெங்காயம், தக்காளி, புளி கரைசல், சாம்பார் பொடி மற்றும் உப்பு சேர்த்து 10 நிமிடங்கள் கொதிக்கவிடவும்.', instructionHi: 'एक बर्तन में सहजन, प्याज, टमाटर को इमली के पानी, सांभर पाउडर और नमक के साथ 10 मिनट उबालें।' },
      { step: 3, instruction: 'Add cooked mashed dal and simmer for 5-7 minutes until the aroma blends.', instructionTa: 'வெந்த பருப்பை மசித்து சேர்த்து மேலும் 5-7 நிமிடங்கள் கொதிக்கவிடவும்.', instructionHi: 'उबली हुई दाल को मैश करके डालें और धीमी आंच पर 5-7 मिनट तक पकने दें।' },
      { step: 4, instruction: 'In a small pan, heat oil, temper mustard seeds, curry leaves, and hing. Pour over sambar.', instructionTa: 'சிறிய வாணலியில் எண்ணெய் ஊற்றி கடுகு, கறிவேப்பிலை, பெருங்காயம் தாளித்து சாம்பாரில் ஊற்றவும்.', instructionHi: 'एक छोटे पैन में तेल गरम कर राई, कढ़ी पत्ता और हींग का तड़का लगाकर सांभर में डालें।' },
      { step: 5, instruction: 'Garnish with chopped fresh coriander and serve hot with steamed rice or idli.', instructionTa: 'கொத்தமல்லி தழை தூவி சாதம் அல்லது இட்லியுடன் சூடாக பரிமாறவும்.', instructionHi: 'बारीक कटे हरे धनिये से सजाएं और गरमागरम चावल या इडली के साथ परोसें।' }
    ],
    nutrition: { calories: 195, protein: 9, carbohydrates: 34, fat: 3, fiber: 7, sugar: 5, isEstimated: true }
  },

  // 5. Easy Egg Fried Rice
  {
    id: 'rec-05',
    title: 'Easy Egg Fried Rice',
    titleTa: 'எளிய முட்டை ப்ரைட் ரைஸ்',
    titleHi: 'झटपट अंडा फ्राइड राइस',
    description: 'Fast, flavorful wok-tossed fried rice using leftover cold rice, scrambled eggs, green onions, and soy sauce.',
    descriptionTa: 'மீதமான சாதம், முட்டை, வெங்காயத்தாள் மற்றும் சோயா சாஸ் கொண்டு விரைவாக செய்யப்படும் சுவையான ப்ரைட் ரைஸ்.',
    descriptionHi: 'बचे हुए ठंडे चावल, अंडों और सब्जियों को तेज आंच पर सॉस के साथ भूनकर बनाया गया स्वादिष्ट फ्राइड राइस।',
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Asian',
    category: 'Rice dishes',
    dietaryTags: ['Eggetarian', 'Quick meals'],
    allergens: ['Egg', 'Soy'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    totalTimeMinutes: 15,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.8,
    ratingCount: 167,
    ingredients: [
      { id: 'ing-22', name: 'Cooked Rice (Chilled/Leftover)', nameTa: 'சமைத்த சாதம்', nameHi: 'पके हुए चावल', quantity: 2, unit: 'cups', category: 'Pantry' },
      { id: 'ing-10', name: 'Egg', nameTa: 'முட்டை', nameHi: 'अंडा', quantity: 2, unit: 'large', category: 'Protein' },
      { id: 'ing-02', name: 'Onion or Scallions', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 0.5, unit: 'cup chopped', category: 'Produce' },
      { id: 'ing-23', name: 'Garlic', nameTa: 'பூண்டு', nameHi: 'लहसुन', quantity: 3, unit: 'cloves minced', category: 'Produce' },
      { id: 'ing-24', name: 'Soy Sauce', nameTa: 'சோயா சாஸ்', nameHi: 'सोया सॉस', quantity: 1.5, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-25', name: 'Black Pepper Powder', nameTa: 'மிளகு தூள்', nameHi: 'काली मिर्च', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-09', name: 'Cooking Oil', nameTa: 'சமையல் எண்ணெய்', nameHi: 'तेल', quantity: 1.5, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Heat 1 tbsp oil in a wok or large pan on high heat. Add minced garlic and onions, stir-fry 1 minute.', instructionTa: 'வாணலியில் எண்ணெய் சூடாக்கி பூண்டு மற்றும் வெங்காயம் சேர்த்து 1 நிமிடம் வதக்கவும்.', instructionHi: 'कड़ाही में तेज आंच पर तेल गरम करें। लहसुन और प्याज डालकर 1 मिनट भूनें।' },
      { step: 2, instruction: 'Push aromatics to the side, crack eggs directly into the pan, and scramble until soft curds form.', instructionTa: 'வெங்காயத்தை ஓரமாக ஒதுக்கி, முட்டையை உடைத்து ஊற்றி மிதமாக கிளறி பொரியல் செய்யவும்.', instructionHi: 'सब्जियों को किनारे करें, अंडे फोड़कर डालें और चलाते हुए भूनें।' },
      { step: 3, instruction: 'Add cold cooked rice, breaking up clumps with the spatula.', instructionTa: 'மீதமான குளிர்ந்த சாதத்தை கட்டிகள் இல்லாமல் உதிர்த்து சேர்க்கவும்.', instructionHi: 'ठंडे चावल डालें और कलछी से गुठलियां तोड़ते हुए मिलाएं।' },
      { step: 4, instruction: 'Drizzle soy sauce and sprinkle black pepper. Toss on high heat for 2-3 minutes until fragrant.', instructionTa: 'சோயா சாஸ் மற்றும் மிளகுத்தூள் தூவி 2-3 நிமிடங்கள் அதிவேக தீயில் கிளறி பரிமாறவும்.', instructionHi: 'सोया सॉस और काली मिर्च छिड़कें। तेज आंच पर 2-3 मिनट अच्छी तरह टॉस करें।' }
    ],
    nutrition: { calories: 340, protein: 12, carbohydrates: 48, fat: 11, fiber: 2, sugar: 1, isEstimated: true }
  },

  // 6. Comforting Tomato Pepper Rasam
  {
    id: 'rec-06',
    title: 'Comforting Tomato Pepper Rasam',
    titleTa: 'தக்காளி மிளகு ரசம்',
    titleHi: 'टमाटर और काली मिर्च का रसम',
    description: 'A soul-warming traditional South Indian broth infused with juicy ripe tomatoes, crushed black peppercorns, cumin, and garlic.',
    descriptionTa: 'பழுத்த தக்காளி, மிளகு, சீரகம் மற்றும் பூண்டு தட்டி போட்டு செய்யப்படும் பாரம்பரிய செரிமான ரசம்.',
    descriptionHi: 'पके टमाटर, ताजी कुटी काली मिर्च, जीरा और लहसुन से बनने वाला स्वादिष्ट और पाचक साउथ इंडियन रसम।',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Soups',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Healthy food'],
    allergens: [],
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    totalTimeMinutes: 15,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.9,
    ratingCount: 178,
    ingredients: [
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 3, unit: 'ripe & mashed', category: 'Produce' },
      { id: 'ing-25', name: 'Black Pepper', nameTa: 'மிளகு', nameHi: 'काली मिर्च', quantity: 1, unit: 'tsp crushed', category: 'Spices' },
      { id: 'ing-13', name: 'Cumin Seeds', nameTa: 'சீரகம்', nameHi: 'जीरा', quantity: 1, unit: 'tsp crushed', category: 'Spices' },
      { id: 'ing-23', name: 'Garlic', nameTa: 'பூண்டு', nameHi: 'लहसुन', quantity: 5, unit: 'cloves crushed', category: 'Produce' },
      { id: 'ing-12', name: 'Turmeric Powder', nameTa: 'மஞ்சள் தூள்', nameHi: 'हल्दी पाउडर', quantity: 0.25, unit: 'tsp', category: 'Spices' },
      { id: 'ing-21', name: 'Asafoetida (Hing)', nameTa: 'பெருங்காயம்', nameHi: 'हींग', quantity: 0.25, unit: 'tsp', category: 'Spices' },
      { id: 'ing-06', name: 'Curry Leaves & Coriander', nameTa: 'கறிவேப்பிலை கொத்தமல்லி', nameHi: 'कढ़ी पत्ता और धनिया', quantity: 2, unit: 'sprigs', category: 'Produce' },
      { id: 'ing-14', name: 'Mustard Seeds', nameTa: 'கடுகு', nameHi: 'राई', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'नमक', quantity: 1, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Coarsely crush black pepper, cumin seeds, and garlic cloves in a mortar and pestle.', instructionTa: 'மிளகு, சீரகம் மற்றும் பூண்டை உரலில் வைத்து ஒன்றிரண்டாக இடித்துக்கொள்ளவும்.', instructionHi: 'काली मिर्च, जीरा और लहसुन को ओखली में दरदरा कूट लें।' },
      { step: 2, instruction: 'In a bowl, mash tomatoes by hand with 2.5 cups of water, turmeric, salt, and crushed masala.', instructionTa: 'ஒரு பாத்திரத்தில் தக்காளியை கைகளால் மசித்து 2.5 டம்ளர் தண்ணீர், மஞ்சள் தூள், உப்பு மற்றும் இடித்த மசாலா சேர்க்கவும்.', instructionHi: 'एक बर्तन में टमाटर को हाथों से मसलें, 2.5 कप पानी, हल्दी, नमक और कुटा हुआ मसाला मिलाएं।' },
      { step: 3, instruction: 'Simmer on low-medium flame until frothy on top (do not bring to a rolling boil).', instructionTa: 'மிதமான தீயில் வைத்து நுரைத்து வரும் வரை சூடாக்கவும் (கொதிக்கவிடக் கூடாது).', instructionHi: 'धीमी आंच पर रखें और ऊपर झाग आने तक गर्म करें (उबालें नहीं)।' },
      { step: 4, instruction: 'In a small pan, temper mustard seeds, curry leaves, and hing in ghee or oil. Pour over rasam.', instructionTa: 'சிறிய வாணலியில் கடுகு, கறிவேப்பிலை, பெருங்காயம் நெய்யில் தாளித்து ரசத்தில் கொட்டவும்.', instructionHi: 'तड़का पैन में घी गरम करें, राई, कढ़ी पत्ता और हींग डालकर रसम में छौंक लगाएं।' },
      { step: 5, instruction: 'Garnish generously with fresh coriander and serve as a soothing soup or with hot rice.', instructionTa: 'கொத்தமல்லி தழை தூவி சுடச்சுட சாதத்துடன் அல்லது சூப்பாக குடிக்கவும்.', instructionHi: 'ताजा हरा धनिया डालें और गरमागरम सूप की तरह या चावल के साथ पिएं।' }
    ],
    nutrition: { calories: 55, protein: 2, carbohydrates: 10, fat: 1, fiber: 2, sugar: 4, isEstimated: true }
  },

  // 7. Restaurant Style Paneer Butter Masala
  {
    id: 'rec-07',
    title: 'Restaurant Style Paneer Butter Masala',
    titleTa: 'பன்னீர் பட்டர் மசாலா',
    titleHi: 'पनीर बटर मसाला',
    description: 'Silky, creamy tomato and cashew nut gravy simmered with tender Indian cottage cheese cubes and butter.',
    descriptionTa: 'வெண்ணெய், முந்திரி மற்றும் தக்காளி கிரேவியில் மிருதுவான பன்னீர் துண்டுகள் சேர்த்து செய்யப்படும் சுவையான மசாலா.',
    descriptionHi: 'मक्खन और काजू की मखमली ग्रेवी में पकाया गया बेहद स्वादिष्ट और खुशबूदार पनीर बटर मसाला।',
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
    rating: 4.9,
    ratingCount: 310,
    ingredients: [
      { id: 'ing-26', name: 'Paneer (Cottage Cheese)', nameTa: 'பன்னீர்', nameHi: 'पनीर', quantity: 200, unit: 'g cubed', category: 'Dairy' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 4, unit: 'pureed', category: 'Produce' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'pureed', category: 'Produce' },
      { id: 'ing-27', name: 'Butter', nameTa: 'வெண்ணெய்', nameHi: 'मक्खन', quantity: 2, unit: 'tbsp', category: 'Dairy' },
      { id: 'ing-28', name: 'Cashews', nameTa: 'முந்திரி', nameHi: 'काजू', quantity: 10, unit: 'soaked & pasted', category: 'Pantry' },
      { id: 'ing-29', name: 'Fresh Cream', nameTa: 'கிரீம்', nameHi: 'मलाई', quantity: 2, unit: 'tbsp', category: 'Dairy' },
      { id: 'ing-05', name: 'Ginger Garlic Paste', nameTa: 'இஞ்சி பூண்டு விழுது', nameHi: 'अदरक लहसुन पेस्ट', quantity: 1, unit: 'tbsp', category: 'Produce' },
      { id: 'ing-30', name: 'Garam Masala', nameTa: 'கரம் மசாலா', nameHi: 'गरम मसाला', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-31', name: 'Kasuri Methi (Fenugreek)', nameTa: 'கசூரி மேத்தி', nameHi: 'कसूरी मेथी', quantity: 1, unit: 'tsp crushed', category: 'Spices' }
    ],
    instructions: [
      { step: 1, instruction: 'Melt 1 tbsp butter in a pan, add ginger-garlic paste and onion puree; cook until raw aroma disappears.', instructionTa: 'வாணலியில் வெண்ணெய் உருக்கி, இஞ்சி பூண்டு விழுது மற்றும் வெங்காய விழுது சேர்த்து வதக்கவும்.', instructionHi: 'पैन में मक्खन गरम करें, अदरक-लहसुन पेस्ट और प्याज की प्यूरी डालकर भूनें।' },
      { step: 2, instruction: 'Add tomato puree, red chilli powder, turmeric, and cashew paste. Simmer for 10 minutes until oil separates.', instructionTa: 'தக்காளி விழுது, மிளகாய் தூள் மற்றும் முந்திரி விழுது சேர்த்து 10 நிமிடங்கள் கொதிக்கவிடவும்.', instructionHi: 'टमाटर प्यूरी, मिर्च पाउडर और काजू का पेस्ट डालें। 10 मिनट तक तेल छूटने तक पकाएं।' },
      { step: 3, instruction: 'Add 0.5 cup water to adjust gravy consistency. Stir in paneer cubes gently.', instructionTa: 'தேவையான அளவு தண்ணீர் சேர்த்து பன்னீர் துண்டுகளை மெதுவாக கலக்கவும்.', instructionHi: 'आधा कप पानी डालकर ग्रेवी सही करें और पनीर के टुकड़े मिलाएं।' },
      { step: 4, instruction: 'Sprinkle garam masala, crushed kasuri methi, and remaining butter. Finish with fresh cream and serve hot with naan.', instructionTa: 'கரம் மசாலா, கசூரி மேத்தி மற்றும் கிரீம் சேர்த்து 2 நிமிடம் கழித்து சூடாக பரிமாறவும்.', instructionHi: 'गरम मसाला, कसूरी मेथी और मलाई डालकर 2 मिनट पकाएं और नान के साथ परोसें।' }
    ],
    nutrition: { calories: 380, protein: 14, carbohydrates: 16, fat: 28, fiber: 3, sugar: 6, isEstimated: true }
  },

  // 8. Chettinad Chicken Sukka
  {
    id: 'rec-08',
    title: 'Chettinad Chicken Sukka',
    titleTa: 'செட்டிநாடு சிக்கன் சுக்கா',
    titleHi: 'चेट्टीनाड चिकन सुक्का',
    description: 'Traditional Tamil Nadu dry spiced chicken roast bursting with freshly roasted whole coriander, fennel, black pepper, and curry leaves.',
    descriptionTa: 'வறுத்து அரைத்த மிளகு, சோம்பு, கொத்தமல்லி மற்றும் கறிவேப்பிலை மணத்துடன் செய்யப்படும் சுவையான செட்டிநாடு சிக்கன் சுக்கா.',
    descriptionHi: 'ताजा भुनी काली मिर्च, सौंफ और कढ़ी पत्ते के साथ चेट्टीनाड शैली में बना तीखा और स्वादिष्ट सूखा चिकन।',
    imageUrl: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Dinner',
    dietaryTags: ['High Protein', 'Gluten-Free'],
    allergens: [],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    totalTimeMinutes: 40,
    servings: 3,
    difficulty: 'Medium',
    rating: 5.0,
    ratingCount: 195,
    ingredients: [
      { id: 'ing-32', name: 'Chicken (Bone-in or Boneless)', nameTa: 'சிக்கன்', nameHi: 'चिकन', quantity: 500, unit: 'g bite-sized', category: 'Meat' },
      { id: 'ing-02', name: 'Shallots (Small Onion)', nameTa: 'சின்ன வெங்காயம்', nameHi: 'छोटे प्याज', quantity: 15, unit: 'chopped', category: 'Produce' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 1, unit: 'chopped', category: 'Produce' },
      { id: 'ing-05', name: 'Ginger Garlic Paste', nameTa: 'இஞ்சி பூண்டு விழுது', nameHi: 'अदरक लहसुन पेस्ट', quantity: 1.5, unit: 'tbsp', category: 'Produce' },
      { id: 'ing-25', name: 'Black Peppercorns', nameTa: 'கருப்பு மிளகு', nameHi: 'काली मिर्च', quantity: 1.5, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-33', name: 'Fennel Seeds (Sombu)', nameTa: 'சோம்பு', nameHi: 'सौंफ', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-34', name: 'Coriander Seeds', nameTa: 'மல்லி விதை', nameHi: 'धनिया बीज', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 3, unit: 'sprigs', category: 'Produce' },
      { id: 'ing-09', name: 'Coconut Oil or Sesame Oil', nameTa: 'நல்லெண்ணெய் அல்லது தேங்காய் எண்ணெய்', nameHi: 'तेल', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'नमक', quantity: 1.25, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Dry roast black peppercorns, fennel seeds, and coriander seeds until aromatic; cool and grind into Chettinad masala powder.', instructionTa: 'மிளகு, சோம்பு, மல்லி விதைகளை வறுத்து ஆறியதும் பொடியாக அரைத்துக்கொள்ளவும்.', instructionHi: 'काली मिर्च, सौंफ और साबुत धनिये को सूखा भूनकर दरदरा मसाला पीस लें।' },
      { step: 2, instruction: 'Heat oil in a pan, add curry leaves and chopped shallots. Sauté until deep golden brown.', instructionTa: 'வாணலியில் எண்ணெய் ஊற்றி கறிவேப்பிலை மற்றும் சின்ன வெங்காயம் சேர்த்து பொன்னிறமாக வதக்கவும்.', instructionHi: 'पैन में तेल गरम करें, कढ़ी पत्ता और छोटे प्याज डालकर सुनहरा होने तक भूनें।' },
      { step: 3, instruction: 'Add ginger-garlic paste and tomatoes; sauté for 3 minutes until soft.', instructionTa: 'இஞ்சி பூண்டு விழுது மற்றும் தக்காளி சேர்த்து 3 நிமிடங்கள் வதக்கவும்.', instructionHi: 'अदरक-लहसुन पेस्ट और टमाटर डालकर 3 मिनट भूनें।' },
      { step: 4, instruction: 'Add chicken pieces, turmeric, and salt. Cook covered on medium heat for 12 minutes without adding water (chicken releases moisture).', instructionTa: 'சிக்கன் துண்டுகள், மஞ்சள் தூள் மற்றும் உப்பு சேர்த்து தண்ணீர் ஊற்றாமல் மூடி வைத்து 12 நிமிடங்கள் வேகவிடவும்.', instructionHi: 'चिकन के टुकड़े, हल्दी और नमक डालें। बिना पानी डाले ढककर 12 मिनट पकाएं।' },
      { step: 5, instruction: 'Add the freshly ground Chettinad spice powder and toss on high heat until the masala coats the chicken and turns semi-dry/sukka. Garnish with fresh curry leaves.', instructionTa: 'அரைத்த செட்டிநாடு மசாலாவை சேர்த்து சுக்கா ஆகும் வரை நன்கு கிளறி இறக்கவும்.', instructionHi: 'पिसा हुआ मसाला डालें और तेज आंच पर सूखा होने तक भूनें। कढ़ी पत्ते से सजाएं।' }
    ],
    nutrition: { calories: 340, protein: 32, carbohydrates: 8, fat: 20, fiber: 3, sugar: 2, isEstimated: true }
  },

  // 9. Tamil Nadu Ambur Mutton Biryani
  {
    id: 'rec-09',
    title: 'Tamil Nadu Ambur Mutton Biryani',
    titleTa: 'ஆம்பூர் மட்டன் பிரியாணி',
    titleHi: 'आंबूर मटन बिरयानी',
    description: 'Iconic Tamil Nadu style biryani prepared with fragrant short-grain Seeraga Samba rice, succulent mutton, and curd-chilli paste.',
    descriptionTa: 'மணமணக்கும் சீரக சம்பா அரிசி, மென்மையான ஆட்டுக்கறி மற்றும் பிரத்யேக மசாலாக்களுடன் செய்யப்படும் ஆம்பூர் பிரியாணி.',
    descriptionHi: 'सुगंधित जीरा सांबा चावल और रसीले मटन से पारंपरिक तमिलनाडु स्टाइल में बनाई गई स्वादिष्ट आंबूर बिरयानी।',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Dinner',
    dietaryTags: ['High Protein', 'Gluten-Free'],
    allergens: ['Milk'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    totalTimeMinutes: 65,
    servings: 4,
    difficulty: 'Hard',
    rating: 5.0,
    ratingCount: 380,
    ingredients: [
      { id: 'ing-35', name: 'Mutton (Goat Meat)', nameTa: 'மட்டன் (ஆட்டுக்கறி)', nameHi: 'मटन', quantity: 500, unit: 'g tender cut', category: 'Meat' },
      { id: 'ing-36', name: 'Seeraga Samba Rice', nameTa: 'சீரக சம்பா அரிசி', nameHi: 'जीरा सांबा चावल', quantity: 2, unit: 'cups soaked 20m', category: 'Pantry' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 3, unit: 'sliced', category: 'Produce' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 2, unit: 'chopped', category: 'Produce' },
      { id: 'ing-37', name: 'Red Chilli Paste', nameTa: 'மிளகாய் விழுது', nameHi: 'लाल मिर्च पेस्ट', quantity: 2, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-05', name: 'Ginger Garlic Paste', nameTa: 'இஞ்சி பூண்டு விழுது', nameHi: 'अदरक लहसुन पेस्ट', quantity: 2, unit: 'tbsp', category: 'Produce' },
      { id: 'ing-38', name: 'Curd (Yogurt)', nameTa: 'தயிர்', nameHi: 'दही', quantity: 0.5, unit: 'cup', category: 'Dairy' },
      { id: 'ing-39', name: 'Mint & Coriander', nameTa: 'புதினா கொத்தமல்லி', nameHi: 'पुदीना और धनिया', quantity: 1, unit: 'cup chopped', category: 'Produce' },
      { id: 'ing-09', name: 'Cooking Oil & Ghee', nameTa: 'எண்ணெய் மற்றும் நெய்', nameHi: 'तेल और घी', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'नमक', quantity: 2, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Pressure cook mutton with a pinch of turmeric, 1 tsp ginger-garlic paste, and 1 cup water for 5-6 whistles until 80% tender.', instructionTa: 'மட்டனை மஞ்சள் தூள், இஞ்சி பூண்டு விழுது சேர்த்து குக்கரில் 5-6 விசில் விட்டு வேகவைக்கவும்.', instructionHi: 'मटन को हल्दी, अदरक-लहसुन और पानी के साथ कुकर में 5-6 सीटी लगाकर 80% तक पका लें।' },
      { step: 2, instruction: 'In a thick-bottomed biryani pot, heat oil and ghee. Sauté sliced onions until golden brown.', instructionTa: 'பிரியாணி பாத்திரத்தில் எண்ணெய் மற்றும் நெய் ஊற்றி வெங்காயத்தை பொன்னிறமாக வதக்கவும்.', instructionHi: 'भारी तले वाले बर्तन में तेल और घी गरम करें। प्याज को सुनहरा भूरा होने तक भूनें।' },
      { step: 3, instruction: 'Add red chilli paste, ginger-garlic paste, tomatoes, curd, mint, and cooked mutton with its broth. Cook for 8 minutes.', instructionTa: 'மிளகாய் விழுது, இஞ்சி பூண்டு, தக்காளி, தயிர், புதினா மற்றும் வெந்த மட்டனை அதன் சாற்றுடன் சேர்த்து கொதிக்கவிடவும்.', instructionHi: 'मिर्च पेस्ट, अदरक-लहसुन, टमाटर, दही, पुदीना और उबला मटन सूप के साथ डालकर 8 मिनट पकाएं।' },
      { step: 4, instruction: 'Add soaked Seeraga Samba rice and required water (1:1.5 ratio). Cook until 85% water is absorbed.', instructionTa: 'ஊறிய சீரக சம்பா அரிசி மற்றும் தேவையான தண்ணீர் சேர்த்து 85% நீர் வற்றும் வரை கொதிக்கவிடவும்.', instructionHi: 'भीगा हुआ जीरा सांबा चावल और पानी डालें। 85% पानी सूखने तक पकाएं।' },
      { step: 5, instruction: 'Cover tightly with foil and lid, place on low flame dum for 15 minutes. Rest 10 minutes, fluff gently and serve with onion raita.', instructionTa: 'பாத்திரத்தை மூடி மிதமான தணலில் 15 நிமிடங்கள் தம் போடவும். வெங்காய பச்சடியுடன் பரிமாறவும்.', instructionHi: 'ढक्कन लगाकर 15 मिनट धीमी आंच पर दम दें। 10 मिनट बाद रायते के साथ परोसें।' }
    ],
    nutrition: { calories: 580, protein: 34, carbohydrates: 62, fat: 22, fiber: 4, sugar: 3, isEstimated: true }
  },

  // 10. Meen Kuzhambu (Tamil Nadu Fish Curry)
  {
    id: 'rec-10',
    title: 'Meen Kuzhambu (Tamil Nadu Fish Curry)',
    titleTa: 'கிராமத்து மீன் குழம்பு',
    titleHi: 'तमिलनाडु स्टाइल फिश करी (मीन कुझम्बू)',
    description: 'Authentic village-style spicy and tangy fish curry simmered with tamarind, shallots, garlic, tomatoes, and fenugreek seeds.',
    descriptionTa: 'புளி, சின்ன வெங்காயம், பூண்டு, வெந்தயம் மற்றும் மிளகாய் மசாலா சேர்த்து மண்சட்டியில் செய்யப்படும் காரசாரமான கிராமத்து மீன் குழம்பு.',
    descriptionHi: 'इमली, छोटे प्याज, लहसुन और मेथी दाने के साथ मिट्टी की हांडी में बनने वाली तीखी और खट्टी मछली की करी।',
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Lunch',
    dietaryTags: ['High Protein', 'Gluten-Free'],
    allergens: ['Fish'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    totalTimeMinutes: 35,
    servings: 4,
    difficulty: 'Medium',
    rating: 5.0,
    ratingCount: 260,
    ingredients: [
      { id: 'ing-40', name: 'Fresh Fish Steaks (Seer / Rohu / Tilapia)', nameTa: 'மீன் துண்டுகள்', nameHi: 'मछली के टुकड़े', quantity: 500, unit: 'g cleaned', category: 'Fish' },
      { id: 'ing-19', name: 'Tamarind', nameTa: 'புளி', nameHi: 'इमली', quantity: 1, unit: 'lemon-sized ball extracted in 2 cups water', category: 'Pantry' },
      { id: 'ing-02', name: 'Shallots (Small Onion)', nameTa: 'சின்ன வெங்காயம்', nameHi: 'छोटे प्याज', quantity: 15, unit: 'halved', category: 'Produce' },
      { id: 'ing-23', name: 'Garlic', nameTa: 'பூண்டு', nameHi: 'लहसुन', quantity: 10, unit: 'cloves', category: 'Produce' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 2, unit: 'chopped', category: 'Produce' },
      { id: 'ing-41', name: 'Fenugreek Seeds (Vendhayam)', nameTa: 'வெந்தயம்', nameHi: 'मेथी दाना', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-42', name: 'Kuzhambu Chilli Powder', nameTa: 'குழம்பு மிளகாய் தூள்', nameHi: 'करी मिर्च पाउडर', quantity: 2.5, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 2, unit: 'sprigs', category: 'Produce' },
      { id: 'ing-09', name: 'Sesame Oil (Gingelly Oil)', nameTa: 'நல்லெண்ணெய்', nameHi: 'तिल का तेल', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'नमक', quantity: 1.5, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Heat sesame oil in a clay pot or heavy pan. Add fenugreek seeds, mustard seeds, and curry leaves.', instructionTa: 'நல்லெண்ணெய் ஊற்றி வெந்தயம், கடுகு மற்றும் கறிவேப்பிலை தாளிக்கவும்.', instructionHi: 'मिट्टी के बर्तन या कड़ाही में तिल का तेल गरम करें। मेथी दाना, राई और कढ़ी पत्ता डालें।' },
      { step: 2, instruction: 'Add garlic cloves and shallots; sauté on medium heat until golden and fragrant.', instructionTa: 'பூண்டு மற்றும் சின்ன வெங்காயம் சேர்த்து பொன்னிறமாக வதக்கவும்.', instructionHi: 'लहसुन और छोटे प्याज डालकर खुशबू आने तक भूनें।' },
      { step: 3, instruction: 'Add tomatoes, kuzhambu chilli powder, turmeric, and salt. Cook until tomatoes become mushy and oil floats.', instructionTa: 'தக்காளி, குழம்பு மிளகாய் தூள் மற்றும் உப்பு சேர்த்து தக்காளி கரையும் வரை வதக்கவும்.', instructionHi: 'टमाटर, करी पाउडर और नमक डालें। टमाटर गलने तक पकाएं।' },
      { step: 4, instruction: 'Pour the tamarind extract and 1 cup water. Bring to a rolling boil and simmer for 10 minutes until raw tamarind smell goes away.', instructionTa: 'புளி கரைசலை ஊற்றி 10 நிமிடங்கள் பச்சை வாசனை போகும் வரை கொதிக்கவிடவும்.', instructionHi: 'इमली का पानी डालें और 10 मिनट तक उबालें जब तक कि कच्चापन खत्म न हो जाए।' },
      { step: 5, instruction: 'Gently drop fish steaks into the simmering curry. Cook covered on low heat for 5-6 minutes without stirring with a spoon (rotate pot gently). Rest 30 minutes before serving with hot rice.', instructionTa: 'மீன் துண்டுகளை மெதுவாக போட்டு 5-6 நிமிடங்கள் வேகவைத்து இறக்கவும். சாதத்துடன் பரிமாறவும்.', instructionHi: 'मछली के टुकड़े धीरे से डालें और 5-6 मिनट धीमी आंच पर पकाएं। गरमागरम चावल के साथ परोसें।' }
    ],
    nutrition: { calories: 290, protein: 28, carbohydrates: 14, fat: 14, fiber: 3, sugar: 3, isEstimated: true }
  },

  // 11. Crispy South Indian Masala Dosa
  {
    id: 'rec-11',
    title: 'Crispy South Indian Masala Dosa',
    titleTa: 'மொரு மொரு மசாலா தோசை',
    titleHi: 'कुरकुरा मसाला डोसा',
    description: 'Golden paper-thin fermented rice and lentil crepe stuffed with spiced fragrant potato masala, served with chutneys.',
    descriptionTa: 'மொருமொருப்பான அரிசி உளுந்து தோசையினுள் உருளைக்கிழங்கு மசாலா வைத்து செய்யப்படும் உணவக சுவை மசாலா தோசை.',
    descriptionHi: 'चावल और उड़द दाल के घोल से बना सुनहरा कुरकुरा डोसा, जिसमें मसालेदार आलू का भर्ता भरा जाता है।',
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
    rating: 4.9,
    ratingCount: 320,
    ingredients: [
      { id: 'ing-43', name: 'Fermented Dosa Batter', nameTa: 'தோசை மாவு', nameHi: 'डोसा बैटर', quantity: 2, unit: 'cups', category: 'Pantry' },
      { id: 'ing-01', name: 'Potato', nameTa: 'உருளைக்கிழங்கு', nameHi: 'आलू', quantity: 2, unit: 'boiled & mashed', category: 'Produce' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'sliced', category: 'Produce' },
      { id: 'ing-04', name: 'Green Chilli', nameTa: 'பச்சை மிளகாய்', nameHi: 'हरी मिर्च', quantity: 2, unit: 'slit', category: 'Produce' },
      { id: 'ing-12', name: 'Turmeric Powder', nameTa: 'மஞ்சள் தூள்', nameHi: 'हल्दी पाउडर', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-14', name: 'Mustard Seeds', nameTa: 'கடுகு', nameHi: 'राई', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 1, unit: 'sprig', category: 'Produce' },
      { id: 'ing-44', name: 'Ghee or Sesame Oil', nameTa: 'நெய் அல்லது நல்லெண்ணெய்', nameHi: 'घी या तेल', quantity: 2, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Prepare the potato filling: Temper mustard seeds, curry leaves, and green chillies in oil; sauté onions with turmeric and mashed potatoes for 5 minutes.', instructionTa: 'வாணலியில் கடுகு, பச்சை மிளகாய், வெங்காயம், மஞ்சள் தூள் வதக்கி மசித்த உருளைக்கிழங்கு சேர்த்து மசாலா தயார் செய்யவும்.', instructionHi: 'पैन में राई, मिर्च, प्याज और हल्दी भूनकर मैश किया हुआ आलू मिलाएं और 5 मिनट पकाएं।' },
      { step: 2, instruction: 'Heat a cast-iron tawa or non-stick griddle over medium heat. Sprinkle water and wipe clean.', instructionTa: 'தோசைக் கல்லை சூடாக்கி சிறிது தண்ணீர் தெளித்து துடைக்கவும்.', instructionHi: 'डोसा तवा गरम करें, थोड़ा पानी छिड़कें और कपड़े से पोंछ लें।' },
      { step: 3, instruction: 'Pour a ladle of batter in the center and spread in concentric circles into a thin, even crepe.', instructionTa: 'ஒரு கரண்டி மாவு ஊற்றி வட்டமாக மெலிதாக தேய்க்கவும்.', instructionHi: 'एक बड़ा चमचा बैटर बीच में डालें और गोल-गोल घुमाते हुए पतला फैलाएं।' },
      { step: 4, instruction: 'Drizzle ghee around the edges and cook until the underside turns deeply golden and crispy.', instructionTa: 'சுற்றிலும் நெய் ஊற்றி பொன்னிறமாக வேகவிடவும்.', instructionHi: 'किनारों पर घी लगाएं और नीचे से सुनहरा और कुरकुरा होने तक सेकें।' },
      { step: 5, instruction: 'Place a generous spoonful of potato masala in the center, fold over, and serve hot with coconut chutney and sambar.', instructionTa: 'நடுவில் உருளைக்கிழங்கு மசாலா வைத்து மடித்து தேங்காய் சட்னி, சாம்பாருடன் பரிமாறவும்.', instructionHi: 'बीच में आलू मसाला रखें, मोड़ें और नारियल की चटनी व सांभर के साथ परोसें।' }
    ],
    nutrition: { calories: 310, protein: 7, carbohydrates: 48, fat: 10, fiber: 4, sugar: 2, isEstimated: true }
  },

  // 12. South Indian Idli with Fresh Coconut Chutney
  {
    id: 'rec-12',
    title: 'South Indian Idli with Fresh Coconut Chutney',
    titleTa: 'மல்லிகைப் பூ இட்லி மற்றும் தேங்காய் சட்னி',
    titleHi: 'मुलायम इडली और ताजा नारियल की चटनी',
    description: 'Soft, feather-light steamed fermented rice cakes served with aromatic tempered coconut chutney.',
    descriptionTa: 'ஆவியில் வேகவைத்த பஞ்சு போன்ற மல்லிகைப் பூ இட்லி மற்றும் காரசாரமான தேங்காய் சட்னி.',
    descriptionHi: 'भाप में पकी हुई बेहद मुलायम इडली और ताजे पिसे नारियल की तड़के वाली चटनी।',
    imageUrl: 'https://images.unsplash.com/photo-1589301760568-d069929288e7?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Breakfast',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Healthy food'],
    allergens: [],
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    totalTimeMinutes: 15,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.9,
    ratingCount: 290,
    ingredients: [
      { id: 'ing-45', name: 'Idli Batter', nameTa: 'இட்லி மாவு', nameHi: 'इडली बैटर', quantity: 3, unit: 'cups', category: 'Pantry' },
      { id: 'ing-46', name: 'Fresh Grated Coconut', nameTa: 'துருவிய தேங்காய்', nameHi: 'घिसा हुआ नारियल', quantity: 1, unit: 'cup', category: 'Produce' },
      { id: 'ing-04', name: 'Green Chilli', nameTa: 'பச்சை மிளகாய்', nameHi: 'हरी मिर्च', quantity: 2, unit: 'pcs', category: 'Produce' },
      { id: 'ing-47', name: 'Roasted Gram (Pottukadalai)', nameTa: 'பொட்டுக் கடலை', nameHi: 'भुनी चना दाल', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-05', name: 'Ginger', nameTa: 'இஞ்சி', nameHi: 'अदरक', quantity: 0.5, unit: 'inch', category: 'Produce' },
      { id: 'ing-14', name: 'Mustard Seeds', nameTa: 'கடுகு', nameHi: 'राई', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 1, unit: 'sprig', category: 'Produce' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'நमक', quantity: 1, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Grease idli plates with a few drops of sesame oil. Pour batter into each cavity.', instructionTa: 'இட்லி தட்டில் நல்லெண்ணெய் தடவி மாவை ஊற்றவும்.', instructionHi: 'इडली सांचों में थोड़ा तेल लगाएं और बैटर भरें।' },
      { step: 2, instruction: 'Steam in a steamer or idli pot for 10 minutes on high heat until cooked through and springy.', instructionTa: 'இட்லி பாத்திரத்தில் 10 நிமிடங்கள் ஆவியில் வேகவைக்கவும்.', instructionHi: 'इडली पॉट में 10 मिनट तक भाप में पकाएं।' },
      { step: 3, instruction: 'Grind grated coconut, green chillies, roasted gram, ginger, salt, and 0.5 cup water into a smooth chutney.', instructionTa: 'தேங்காய், பச்சை மிளகாய், பொட்டுக்கடலை, இஞ்சி மற்றும் உப்பு சேர்த்து சட்னியாக அரைக்கவும்.', instructionHi: 'नारियल, हरी मिर्च, भुनी चना दाल, अदरक और नमक डालकर पीस लें।' },
      { step: 4, instruction: 'Temper mustard seeds and curry leaves in 1 tsp oil and pour over the chutney. Demold idlis and serve piping hot.', instructionTa: 'கடுகு, கறிவேப்பிலை தாளித்து சட்னியில் கொட்டி சுடச்சுட இட்லியுடன் பரிமாறவும்.', instructionHi: 'राई और कढ़ी पत्ते का तड़का लगाएं। गरम इडली के साथ परोसें।' }
    ],
    nutrition: { calories: 210, protein: 6, carbohydrates: 38, fat: 4, fiber: 3, sugar: 1, isEstimated: true }
  },

  // 13. South Indian Ven Pongal with Ghee
  {
    id: 'rec-13',
    title: 'South Indian Ven Pongal with Ghee',
    titleTa: 'நெய் வெண் பொங்கல்',
    titleHi: 'घी वाली साउथ इंडियन वेन पोंगल',
    description: 'A comforting, melt-in-mouth breakfast porridge made from rice and moong dal tempered with ghee, cashews, cumin, and ginger.',
    descriptionTa: 'பச்சரிசி, பாசிப்பருப்பு மற்றும் தாராளமான நெய், முந்திரி, மிளகு, சீரகம் தாளித்து செய்யப்படும் மணமணக்கும் வெண் பொங்கல்.',
    descriptionHi: 'चावल और मूंग दाल से बनी मुलायम खिचड़ी जिसे देसी घी, काजू, काली मिर्च और जीरे का छौंक दिया जाता है।',
    imageUrl: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Breakfast',
    dietaryTags: ['Vegetarian', 'Gluten-Free'],
    allergens: ['Milk', 'Tree nuts'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 20,
    totalTimeMinutes: 25,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.9,
    ratingCount: 185,
    ingredients: [
      { id: 'ing-48', name: 'Raw Rice', nameTa: 'பச்சரிசி', nameHi: 'कच्चा चावल', quantity: 1, unit: 'cup', category: 'Pantry' },
      { id: 'ing-49', name: 'Moong Dal (Yellow Lentil)', nameTa: 'பாசிப்பருப்பு', nameHi: 'मूंग दाल', quantity: 0.5, unit: 'cup roasted', category: 'Pantry' },
      { id: 'ing-50', name: 'Ghee (Clarified Butter)', nameTa: 'சுத்தமான நெய்', nameHi: 'देसी घी', quantity: 3, unit: 'tbsp', category: 'Dairy' },
      { id: 'ing-28', name: 'Cashew Nuts', nameTa: 'முந்திரி பருப்பு', nameHi: 'काजू', quantity: 12, unit: 'whole', category: 'Pantry' },
      { id: 'ing-25', name: 'Whole Black Pepper', nameTa: 'மிளகு', nameHi: 'काली मिर्च', quantity: 1, unit: 'tsp', category: 'Spices' },
      { id: 'ing-13', name: 'Cumin Seeds', nameTa: 'சீரகம்', nameHi: 'जीरा', quantity: 1, unit: 'tsp', category: 'Spices' },
      { id: 'ing-05', name: 'Ginger', nameTa: 'இஞ்சி', nameHi: 'अदरक', quantity: 1, unit: 'tbsp finely chopped', category: 'Produce' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 2, unit: 'sprigs', category: 'Produce' },
      { id: 'ing-21', name: 'Asafoetida', nameTa: 'பெருங்காயம்', nameHi: 'हींग', quantity: 0.25, unit: 'tsp', category: 'Spices' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'நमक', quantity: 1.25, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Lightly roast moong dal until fragrant. Wash with rice and pressure cook with 4.5 cups water and salt for 4 whistles until very soft.', instructionTa: 'பாசிப்பருப்பை வறுத்து அரிசியுடன் சேர்த்து 4.5 டம்ளர் தண்ணீர், உப்பு சேர்த்து 4 விசில் விட்டு குழைய வேகவைக்கவும்.', instructionHi: 'मूंग दाल को हल्का भूनें। चावल के साथ धोकर 4.5 कप पानी और नमक के साथ 4 सीटी तक पकाएं।' },
      { step: 2, instruction: 'Heat ghee in a pan. Fry cashew nuts until golden and set aside.', instructionTa: 'வாணலியில் நெய் ஊற்றி முந்திரியை பொன்னிறமாக வறுத்து தனியாக வைக்கவும்.', instructionHi: 'पैन में घी गरम करें और काजू को सुनहरा होने तक तलकर निकालें।' },
      { step: 3, instruction: 'In the remaining hot ghee, add cumin seeds, whole peppercorns, chopped ginger, curry leaves, and hing. Let them splutter.', instructionTa: 'அதே நெய்யில் சீரகம், மிளகு, நறுக்கிய இஞ்சி, கறிவேப்பிலை மற்றும் பெருங்காயம் தாளிக்கவும்.', instructionHi: 'बचे घी में जीरा, काली मिर्च, अदरक, कढ़ी पत्ता और हींग चटकाएं।' },
      { step: 4, instruction: 'Pour the hot ghee tempering and cashews over the cooked mash. Mix well while hot and serve with coconut chutney and hot sambar.', instructionTa: 'தாளித்த நெய் கலவை மற்றும் முந்திரியை பொங்கலில் கொட்டி நன்கு கிளறி சாம்பாருடன் பரிமாறவும்.', instructionHi: 'तड़के को पकी हुई पोंगल में डालें और अच्छी तरह मिलाएं। नारियल चटनी और सांभर के साथ परोसें।' }
    ],
    nutrition: { calories: 330, protein: 9, carbohydrates: 46, fat: 12, fiber: 3, sugar: 1, isEstimated: true }
  },

  // 14. Crispy South Indian Medu Vada
  {
    id: 'rec-14',
    title: 'Crispy South Indian Medu Vada',
    titleTa: 'மொறு மொறு மெது வடை',
    titleHi: 'कुरकुरा मेदू वड़ा',
    description: 'Golden donut-shaped crispy lentil fritters with a fluffy interior, seasoned with black pepper, curry leaves, and ginger.',
    descriptionTa: 'உளுத்தம் பருப்பு கொண்டு செய்யப்படும் வெளியில் மொறுமொறுப்பாகவும் உள்ளே பஞ்சு போன்றும் இருக்கும் பாரம்பரிய மெது வடை.',
    descriptionHi: 'उड़द दाल से बना बाहर से कुरकुरा और अंदर से स्पंजी साउथ इंडियन वड़ा, जिसे सांभर में डुबोकर खाया जाता है।',
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
    rating: 4.8,
    ratingCount: 160,
    ingredients: [
      { id: 'ing-15', name: 'Whole Urad Dal (White Lentil)', nameTa: 'உளுத்தம் பருப்பு', nameHi: 'उड़द दाल', quantity: 1, unit: 'cup soaked 2 hours', category: 'Pantry' },
      { id: 'ing-04', name: 'Green Chilli', nameTa: 'பச்சை மிளகாய்', nameHi: 'हरी मिर्च', quantity: 2, unit: 'chopped', category: 'Produce' },
      { id: 'ing-05', name: 'Ginger', nameTa: 'இஞ்சி', nameHi: 'अदरक', quantity: 1, unit: 'inch minced', category: 'Produce' },
      { id: 'ing-25', name: 'Black Peppercorns', nameTa: 'மிளகு', nameHi: 'काली मिर्च', quantity: 1, unit: 'tsp crushed', category: 'Spices' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 2, unit: 'sprigs', category: 'Produce' },
      { id: 'ing-21', name: 'Asafoetida', nameTa: 'பெருங்காயம்', nameHi: 'हींग', quantity: 0.25, unit: 'tsp', category: 'Spices' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'நमक', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { id: 'ing-09', name: 'Cooking Oil', nameTa: 'சமையல் எண்ணெய்', nameHi: 'तेल', quantity: 2, unit: 'cups for frying', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Grind soaked urad dal with minimal drops of ice-cold water into a thick, fluffy batter. Beat vigorously by hand to incorporate air.', instructionTa: 'ஊறிய உளுந்தை சிறிதளவு குளிர்ந்த நீர் தெளித்து கெட்டியாகவும் பஞ்சு போன்றும் ஆட்டி எடுக்கவும்.', instructionHi: 'उड़द दाल को बहुत कम ठंडे पानी के साथ पीसकर गाढ़ा और फूला हुआ बैटर बनाएं।' },
      { step: 2, instruction: 'Mix in chopped green chillies, ginger, crushed pepper, curry leaves, hing, and salt.', instructionTa: 'பச்சை மிளகாய், இஞ்சி, மிளகு, கறிவேப்பிலை, பெருங்காயம் மற்றும் உப்பு சேர்த்து பிசையவும்.', instructionHi: 'हरी मिर्च, अदरक, काली मिर्च, कढ़ी पत्ता, हींग और नमक मिलाएं।' },
      { step: 3, instruction: 'Wet hands with water, take a small portion of batter, shape into a ball, flatten, and make a hole in the center.', instructionTa: 'கைகளில் தண்ணீர் தொட்டு, மாவை உருண்டையாக்கி தட்டி நடுவில் ஓட்டை போடவும்.', instructionHi: 'हाथों को गीला करें, थोड़ा बैटर लेकर बीच में छेद करके वड़ा का आकार दें।' },
      { step: 4, instruction: 'Slide gently into medium-hot oil. Deep fry turning occasionally until evenly golden brown and crisp on both sides. Serve hot with sambar.', instructionTa: 'சூடான எண்ணெயில் போட்டு இருபுறமும் பொன்னிறமாக பொரித்து சாம்பாருடன் பரிமாறவும்.', instructionHi: 'गरम तेल में डालकर दोनों तरफ से सुनहरा होने तक तलें और गरमागरम सांभर के साथ परोसें।' }
    ],
    nutrition: { calories: 250, protein: 8, carbohydrates: 26, fat: 12, fiber: 4, sugar: 1, isEstimated: true }
  },

  // 15. Tangy South Indian Lemon Rice
  {
    id: 'rec-15',
    title: 'Tangy South Indian Lemon Rice',
    titleTa: 'எலுமிச்சை சாதம் (சித்ரான்னம்)',
    titleHi: 'स्वादिष्ट लेमन राइस',
    description: 'Vibrant golden turmeric rice infused with fresh lemon juice, crunchy peanuts, roasted lentils, and curry leaves.',
    descriptionTa: 'பச்சை மிளகாய், வேர்க்கடலை, கடலைப்பருப்பு மற்றும் எலுமிச்சை சாறு தாளித்து செய்யப்படும் சுவையான எலுமிச்சை சாதம்.',
    descriptionHi: 'नींबू के रस, हल्दी, भुनी मूंगफली और दालों के तड़के से बना झटपट और स्वादिष्ट साउथ इंडियन राइस।',
    imageUrl: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Rice dishes',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Quick meals'],
    allergens: ['Peanuts'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    totalTimeMinutes: 15,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.8,
    ratingCount: 145,
    ingredients: [
      { id: 'ing-22', name: 'Cooked Rice (Cooled)', nameTa: 'சமைத்த சாதம்', nameHi: 'पके हुए चावल', quantity: 2, unit: 'cups', category: 'Pantry' },
      { id: 'ing-16', name: 'Fresh Lemon Juice', nameTa: 'எலுமிச்சை சாறு', nameHi: 'नींबू का रस', quantity: 2.5, unit: 'tbsp', category: 'Produce' },
      { id: 'ing-51', name: 'Peanuts', nameTa: 'வேர்க்கடலை', nameHi: 'मूंगफली', quantity: 2, unit: 'tbsp roasted', category: 'Pantry' },
      { id: 'ing-14', name: 'Mustard Seeds', nameTa: 'கடுகு', nameHi: 'राई', quantity: 0.75, unit: 'tsp', category: 'Spices' },
      { id: 'ing-52', name: 'Chana Dal', nameTa: 'கடலைப்பருப்பு', nameHi: 'चना दाल', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { id: 'ing-12', name: 'Turmeric Powder', nameTa: 'மஞ்சள் தூள்', nameHi: 'हल्दी पाउडर', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-04', name: 'Green Chilli', nameTa: 'பச்சை மிளகாய்', nameHi: 'हरी मिर्च', quantity: 2, unit: 'slit', category: 'Produce' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 1, unit: 'sprig', category: 'Produce' },
      { id: 'ing-09', name: 'Sesame Oil', nameTa: 'நல்லெண்ணெய்', nameHi: 'तिल का तेल', quantity: 1.5, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'நमक', quantity: 1, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Spread cooked rice on a wide plate, drizzle 1 tsp sesame oil, and allow to cool completely.', instructionTa: 'சமைத்த சாதத்தை ஒரு தட்டில் பரப்பி சிறிது நல்லெண்ணெய் விட்டு ஆறவைக்கவும்.', instructionHi: 'पके चावल को एक थाली में फैलाएं और हल्का तेल डालकर ठंडा होने दें।' },
      { step: 2, instruction: 'Heat sesame oil in a pan. Add mustard seeds, chana dal, and peanuts; roast until golden and nutty.', instructionTa: 'வாணலியில் எண்ணெய் சூடாக்கி கடுகு, கடலைப்பருப்பு மற்றும் வேர்க்கடலையை பொன்னிறமாக வறுக்கவும்.', instructionHi: 'पैन में तेल गरम करें। राई, चना दाल और मूंगफली को सुनहरा होने तक भूनें।' },
      { step: 3, instruction: 'Add green chillies, curry leaves, and turmeric powder. Turn off heat immediately so turmeric does not burn.', instructionTa: 'பச்சை மிளகாய், கறிவேப்பிலை மற்றும் மஞ்சள் தூள் சேர்த்து உடனடியாக அடுப்பை அணைக்கவும்.', instructionHi: 'हरी मिर्च, कढ़ी पत्ता और हल्दी डालें। गैस तुरंत बंद कर दें ताकि हल्दी जले नहीं।' },
      { step: 4, instruction: 'Pour the seasoned oil over cooled rice. Add salt and fresh lemon juice. Mix gently without breaking rice grains.', instructionTa: 'ஆறிய சாதத்தில் தாளித்த கலவை, உப்பு மற்றும் எலுமிச்சை சாறு சேர்த்து மெதுவாக கிளறவும்.', instructionHi: 'तड़के को चावल पर डालें, नमक और नींबू का रस डालकर हल्के हाथ से मिलाएं।' }
    ],
    nutrition: { calories: 280, protein: 6, carbohydrates: 46, fat: 9, fiber: 3, sugar: 1, isEstimated: true }
  },

  // 16. South Indian Curd Rice with Mustard Tadka
  {
    id: 'rec-16',
    title: 'South Indian Curd Rice with Mustard Tadka',
    titleTa: 'சுவையான தயிர் சாதம் (பாகாபாத்)',
    titleHi: 'पारंपरिक कर्ड राइस (दही चावल)',
    description: 'Refreshing, cooling mashed rice mixed with fresh yogurt and milk, tempered with mustard seeds, ginger, green chillies, and pomegranate.',
    descriptionTa: 'நன்கு குழைந்த சாதத்தில் தயிர், பால் கலந்து கடுகு, இஞ்சி, பச்சை மிளகாய் தாளித்து மாதுளை முத்துகள் சேர்த்து செய்யப்படும் தயிர் சாதம்.',
    descriptionHi: 'दही, दूध और चावल को मिलाकर राई, अदरक, हरी मिर्च और अनार के दानों से तड़का दिया गया ठंडक पहुंचाने वाला दही भात।',
    imageUrl: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Rice dishes',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Healthy food'],
    allergens: ['Milk'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 5,
    totalTimeMinutes: 10,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.9,
    ratingCount: 210,
    ingredients: [
      { id: 'ing-22', name: 'Cooked Soft Rice', nameTa: 'குழைந்த சாதம்', nameHi: 'नरम पका चावल', quantity: 2, unit: 'cups mashed warm', category: 'Pantry' },
      { id: 'ing-38', name: 'Fresh Curd (Yogurt)', nameTa: 'கெட்டி தயிர்', nameHi: 'गाढ़ा दही', quantity: 1, unit: 'cup', category: 'Dairy' },
      { id: 'ing-53', name: 'Milk', nameTa: 'காய்ச்சிய பால்', nameHi: 'दूध', quantity: 0.5, unit: 'cup', category: 'Dairy' },
      { id: 'ing-14', name: 'Mustard Seeds', nameTa: 'கடுகு', nameHi: 'राई', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-05', name: 'Ginger', nameTa: 'இஞ்சி', nameHi: 'अदरक', quantity: 1, unit: 'tsp finely minced', category: 'Produce' },
      { id: 'ing-04', name: 'Green Chilli', nameTa: 'பச்சை மிளகாய்', nameHi: 'हरी मिर्च', quantity: 1, unit: 'chopped', category: 'Produce' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 1, unit: 'sprig', category: 'Produce' },
      { id: 'ing-54', name: 'Pomegranate Seeds', nameTa: 'மாதுளை முத்துக்கள்', nameHi: 'अनार के दाने', quantity: 2, unit: 'tbsp', category: 'Produce' },
      { id: 'ing-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'நमक', quantity: 1, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Mash warm cooked rice thoroughly with a potato masher or back of a ladle.', instructionTa: 'சூடான சாதத்தை கரண்டியால் நன்றாக மசித்துக்கொள்ளவும்.', instructionHi: 'चावल को कलछी से अच्छी तरह मैश कर लें।' },
      { step: 2, instruction: 'Add milk first to avoid souring, then fold in fresh thick yogurt and salt until smooth and creamy.', instructionTa: 'முதலில் பால் சேர்த்து, பின்னர் கெட்டி தயிர் மற்றும் உப்பு சேர்த்து நன்றாக கலக்கவும்.', instructionHi: 'पहले दूध डालें, फिर गाढ़ा दही और नमक डालकर मखमली होने तक मिलाएं।' },
      { step: 3, instruction: 'Heat 1 tsp oil in a small pan. Splutter mustard seeds, ginger, green chillies, and curry leaves.', instructionTa: 'சிறிய வாணலியில் எண்ணெய் சூடாக்கி கடுகு, இஞ்சி, பச்சை மிளகாய், கறிவேப்பிலை தாளிக்கவும்.', instructionHi: 'छोटे पैन में तेल गरम कर राई, अदरक, हरी मिर्च और कढ़ी पत्ता चटकाएं।' },
      { step: 4, instruction: 'Pour hot tempering over curd rice. Top with fresh pomegranate arils and serve with spicy mango pickle.', instructionTa: 'தாளித்ததை சாதத்தில் ஊற்றி மாதுளை முத்துகள் தூவி மாங்காய் ஊறுகாயுடன் பரிமாறவும்.', instructionHi: 'तड़का दही चावल पर डालें, ऊपर से अनार के दाने डालकर अचार के साथ परोसें।' }
    ],
    nutrition: { calories: 230, protein: 7, carbohydrates: 38, fat: 5, fiber: 2, sugar: 4, isEstimated: true }
  },

  // 17. Madurai Street Style Kothu Parotta
  {
    id: 'rec-17',
    title: 'Madurai Street Style Kothu Parotta',
    titleTa: 'மதுரை வீதி சுவை கொத்து பரோட்டா',
    titleHi: 'मदुरै स्टाइल कोथू परोटा',
    description: 'Famous Tamil Nadu street food of flaky shredded parottas beaten vigorously on a hot cast iron griddle with eggs, onions, tomatoes, and salna.',
    descriptionTa: 'பிய்த்துப்போட்ட பரோட்டாவுடன் முட்டை, வெங்காயம், தக்காளி மற்றும் சுவையான சால்னா சேர்த்து கொத்தி செய்யப்படும் மதுரை ஸ்பெஷல் கொத்து பரோட்டா.',
    descriptionHi: 'परोटे के टुकड़ों को अंडों, प्याज, टमाटर और मसालेदार सालना के साथ लोहे के तवे पर कूटकर बनाया गया मदुरै का मशहूर कोथू परोटा।',
    imageUrl: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Dinner',
    dietaryTags: ['Eggetarian', 'High Protein'],
    allergens: ['Wheat', 'Egg'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    totalTimeMinutes: 25,
    servings: 2,
    difficulty: 'Medium',
    rating: 5.0,
    ratingCount: 310,
    ingredients: [
      { id: 'ing-55', name: 'Malabar Parottas', nameTa: 'பரோட்டா', nameHi: 'परोटा', quantity: 3, unit: 'shredded into small pieces', category: 'Pantry' },
      { id: 'ing-10', name: 'Egg', nameTa: 'முட்டை', nameHi: 'अंडा', quantity: 2, unit: 'large', category: 'Protein' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'chopped', category: 'Produce' },
      { id: 'ing-11', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 1, unit: 'chopped', category: 'Produce' },
      { id: 'ing-04', name: 'Green Chilli', nameTa: 'பச்சை மிளகாய்', nameHi: 'हरी मिर्च', quantity: 2, unit: 'chopped', category: 'Produce' },
      { id: 'ing-56', name: 'Chicken or Veg Salna / Gravy', nameTa: 'சால்னா அல்லது குருமா', nameHi: 'सालना या ग्रेवी', quantity: 0.75, unit: 'cup', category: 'Curries' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 2, unit: 'sprigs', category: 'Produce' },
      { id: 'ing-09', name: 'Oil', nameTa: 'எண்ணெய்', nameHi: 'तेल', quantity: 2, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Shred parottas into bite-sized bite pieces.', instructionTa: 'பரோட்டாவை சிறு துண்டுகளாக பிய்த்து வைக்கவும்.', instructionHi: 'परोटों को छोटे-छोटे टुकड़ों में तोड़ लें।' },
      { step: 2, instruction: 'Heat oil on a flat cast-iron tawa. Sauté onions, green chillies, curry leaves, and tomatoes for 3 minutes.', instructionTa: 'தோசைக் கல்லில் எண்ணெய் சூடாக்கி வெங்காயம், பச்சை மிளகாய், கறிவேப்பிலை, தக்காளி வதக்கவும்.', instructionHi: 'तवे पर तेल गरम करें। प्याज, हरी मिर्च, कढ़ी पत्ता और टमाटर 3 मिनट भूनें।' },
      { step: 3, instruction: 'Crack eggs directly onto the tawa and scramble quickly into the onion mixture.', instructionTa: 'முட்டையை உடைத்து ஊற்றி வெங்காய கலவையுடன் சேர்த்து வேகவிடவும்.', instructionHi: 'अंडे फोड़कर तवे पर डालें और तेजी से चलाते हुए भुर्जी बनाएं।' },
      { step: 4, instruction: 'Add shredded parotta pieces and pour hot salna/gravy over everything.', instructionTa: 'பிய்த்த பரோட்டா துண்டுகள் மற்றும் சூடான சால்னாவை ஊற்றவும்.', instructionHi: 'परोटे के टुकड़े और ऊपर से गरम सालना (ग्रेवी) डालें।' },
      { step: 5, instruction: 'Using two metal spatulas or steel tumblers, chop and beat vigorously on the tawa for 3-4 minutes until well-shredded and combined. Serve smoking hot with raita.', instructionTa: 'இரண்டு கரண்டிகளால் வேகமாக கொத்தி ஒன்றாக கலந்து சூடாக பரிமாறவும்.', instructionHi: 'दो तेज किनारों वाली कलछी या कटोरी से तवे पर 3-4 मिनट तक तेजी से कूटें। गरमागरम परोसें।' }
    ],
    nutrition: { calories: 460, protein: 16, carbohydrates: 54, fat: 20, fiber: 4, sugar: 3, isEstimated: true }
  },

  // 18. South Indian Rava Kesari
  {
    id: 'rec-18',
    title: 'South Indian Rava Kesari',
    titleTa: 'கல்யாண வீட்டு ரவா கேசரி',
    titleHi: 'साउथ इंडियन रवा केसरी',
    description: 'A classic celebratory South Indian melt-in-mouth sweet pudding made with roasted semolina, aromatic ghee, saffron, and golden roasted cashews.',
    descriptionTa: 'வறுத்த ரவை, தாராளமான நெய், ஏலக்காய் மற்றும் முந்திரி திராட்சை சேர்த்து செய்யப்படும் கல்யாண வீட்டு ரவா கேசரி.',
    descriptionHi: 'भुनी सूजी, शुद्ध देसी घी, इलायची और केसर से बनी मुंह में घुल जाने वाली पारंपरिक साउथ इंडियन मिठाई।',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Desserts',
    dietaryTags: ['Vegetarian'],
    allergens: ['Milk', 'Tree nuts', 'Wheat'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 15,
    totalTimeMinutes: 20,
    servings: 4,
    difficulty: 'Easy',
    rating: 5.0,
    ratingCount: 245,
    ingredients: [
      { id: 'ing-57', name: 'Rava (Semolina / Sooji)', nameTa: 'ரவை', nameHi: 'सूजी', quantity: 1, unit: 'cup', category: 'Pantry' },
      { id: 'ing-58', name: 'Sugar', nameTa: 'சர்க்கரை', nameHi: 'चीनी', quantity: 1.25, unit: 'cups', category: 'Pantry' },
      { id: 'ing-50', name: 'Ghee', nameTa: 'நெய்', nameHi: 'देसी घी', quantity: 0.5, unit: 'cup', category: 'Dairy' },
      { id: 'ing-28', name: 'Cashews & Raisins', nameTa: 'முந்திரி திராட்சை', nameHi: 'काजू और किशमिश', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-59', name: 'Cardamom Powder', nameTa: 'ஏலக்காய் தூள்', nameHi: 'इलायची पाउडर', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-60', name: 'Saffron / Kesari food color', nameTa: 'கேசரி தூள்', nameHi: 'केसर या केसरी रंग', quantity: 1, unit: 'pinch', category: 'Spices' }
    ],
    instructions: [
      { step: 1, instruction: 'Heat 2 tbsp ghee in a pan; fry cashews and raisins until golden and set aside.', instructionTa: 'வாணலியில் 2 ஸ்பூன் நெய் ஊற்றி முந்திரி மற்றும் திராட்சையை வறுத்து தனியாக வைக்கவும்.', instructionHi: 'पैन में 2 चम्मच घी गरम कर काजू और किशमिश को सुनहरा तलकर निकालें।' },
      { step: 2, instruction: 'In the same pan, roast rava on medium flame for 4 minutes without burning.', instructionTa: 'அதே நெய்யில் ரவையை மிதமான தீயில் 4 நிமிடங்கள் வறுக்கவும்.', instructionHi: 'उसी घी में सूजी को धीमी आंच पर 4 मिनट तक खुशबू आने तक भूनें।' },
      { step: 3, instruction: 'In a separate pot, boil 2.5 cups of water with saffron color. Slowly pour boiling water into roasted rava, stirring continuously to prevent lumps.', instructionTa: '2.5 டம்ளர் தண்ணீரை கொதிக்கவைத்து வறுத்த ரவையில் கட்டிகள் இல்லாமல் ஊற்றி கிளறவும்.', instructionHi: '2.5 कप पानी में केसरिया रंग डालकर उबालें। उबलता पानी भुनी सूजी में लगातार चलाते हुए डालें ताकि गांठ न पड़े।' },
      { step: 4, instruction: 'Once rava is completely cooked and water is absorbed, add sugar and mix well (mixture will loosen).', instructionTa: 'ரவை வெந்தவுடன் சர்க்கரை சேர்த்து கிளறவும் (இளகி வரும்).', instructionHi: 'जब सूजी पूरी तरह पक जाए, तो चीनी मिलाएं। मिश्रण हल्का ढीला हो जाएगा।' },
      { step: 5, instruction: 'Add remaining ghee gradually, cardamom powder, and fried nuts. Stir until it leaves the sides of the pan. Serve warm.', instructionTa: 'மீதமுள்ள நெய், ஏலக்காய் தூள், வறுத்த முந்திரி சேர்த்து சுருண்டு வரும்போது இறக்கி பரிமாறவும்.', instructionHi: 'बचा हुआ घी, इलायची और तले हुए मेवे डालें। जब हलवा बर्तन छोड़ने लगे तो गरमागरम परोसें।' }
    ],
    nutrition: { calories: 360, protein: 4, carbohydrates: 58, fat: 14, fiber: 1, sugar: 34, isEstimated: true }
  },

  // 19. Chettinad Kuzhi Paniyaram
  {
    id: 'rec-19',
    title: 'Chettinad Kuzhi Paniyaram',
    titleTa: 'செட்டிநாடு கார குழிப்பணியாரம்',
    titleHi: 'चेट्टीनाड कुझी पनियारम',
    description: 'Crispy exterior and pillowy soft interior spiced dumplings cooked in a traditional cast-iron appe pan using seasoned dosa batter.',
    descriptionTa: 'கடுகு, வெங்காயம், பச்சை மிளகாய் தாளித்த இட்லி மாவில் பணியாரக்கல்லில் செய்யப்படும் மொறுமொறு கார குழிப்பணியாரம்.',
    descriptionHi: 'इडली-डोसा बैटर में प्याज, मिर्च और कढ़ी पत्ते का तड़का लगाकर अप्पम पैन में बनाए गए कुरकुरे और स्पंजी पनियारम।',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Snacks',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Quick meals'],
    allergens: [],
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    totalTimeMinutes: 22,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.9,
    ratingCount: 175,
    ingredients: [
      { id: 'ing-45', name: 'Idli / Dosa Batter', nameTa: 'இட்லி / தோசை மாவு', nameHi: 'इडली बैटर', quantity: 2, unit: 'cups', category: 'Pantry' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'finely chopped', category: 'Produce' },
      { id: 'ing-04', name: 'Green Chilli', nameTa: 'பச்சை மிளகாய்', nameHi: 'हरी मिर्च', quantity: 2, unit: 'finely chopped', category: 'Produce' },
      { id: 'ing-05', name: 'Ginger', nameTa: 'இஞ்சி', nameHi: 'अदरक', quantity: 1, unit: 'tsp minced', category: 'Produce' },
      { id: 'ing-14', name: 'Mustard Seeds', nameTa: 'கடுகு', nameHi: 'राई', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-52', name: 'Chana Dal', nameTa: 'கடலைப்பருப்பு', nameHi: 'चना दाल', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 1, unit: 'sprig', category: 'Produce' },
      { id: 'ing-09', name: 'Sesame Oil', nameTa: 'நல்லெண்ணெய்', nameHi: 'तिल का तेल', quantity: 2, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Heat 1 tbsp oil in a pan. Temper mustard seeds, chana dal, chopped green chillies, ginger, curry leaves, and onions until translucent.', instructionTa: 'வாணலியில் எண்ணெய் ஊற்றி கடுகு, கடலைப்பருப்பு, பச்சை மிளகாய், இஞ்சி, வெங்காயம் வதக்கவும்.', instructionHi: 'पैन में तेल गरम करें। राई, चना दाल, हरी मिर्च, अदरक और प्याज को हल्का भूनें।' },
      { step: 2, instruction: 'Stir the sautéed tempering directly into the idli batter.', instructionTa: 'வதக்கிய வெங்காய கலவையை இட்லி மாவில் சேர்த்து நன்கு கலக்கவும்.', instructionHi: 'भुने हुए तड़के को इडली बैटर में डालकर अच्छी तरह मिला लें।' },
      { step: 3, instruction: 'Heat a paniyaram / appe pan. Add 3-4 drops of oil into each cavity.', instructionTa: 'பணியாரக்கல்லை சூடாக்கி ஒவ்வொரு குழியிலும் சில துளிகள் எண்ணெய் ஊற்றவும்.', instructionHi: 'पनियारम पैन गरम करें और हर सांचे में 3-4 बूंद तेल डालें।' },
      { step: 4, instruction: 'Pour batter into each hole up to 3/4th full. Cover with a lid and cook on medium-low flame for 3 minutes.', instructionTa: 'ஒவ்வொரு குழியிலும் முக்கால் பங்கு மாவு ஊற்றி மூடி வைத்து 3 நிமிடங்கள் வேகவிடவும்.', instructionHi: 'हर सांचे में 3/4 तक बैटर भरें। ढककर 3 मिनट धीमी आंच पर पकाएं।' },
      { step: 5, instruction: 'Flip each paniyaram using a wooden skewer or spoon and cook for another 2 minutes until golden crisp on both sides. Serve with spicy tomato chutney.', instructionTa: 'பணியாரத்தை திருப்பி போட்டு பொன்னிறமாக வேகவைத்து தக்காளி கார சட்னியுடன் பரிமாறவும்.', instructionHi: 'सींक या चम्मच की मदद से पलटें और दूसरी तरफ से भी कुरकुरा होने तक सेकें। टमाटर की चटनी के साथ परोसें।' }
    ],
    nutrition: { calories: 220, protein: 5, carbohydrates: 34, fat: 7, fiber: 3, sugar: 2, isEstimated: true }
  },

  // 20. Hotel Style Poori Masala
  {
    id: 'rec-20',
    title: 'Hotel Style Poori Masala',
    titleTa: 'சரவணபவன் ஸ்டைல் பூரி மசாலா',
    titleHi: 'होटल स्टाइल पूरी और आलू मसाला',
    description: 'Crispy puffed golden deep-fried pooris paired with authentic South Indian hotel-style creamy spiced potato gravy.',
    descriptionTa: 'சுடச்சுட உப்பிய பூரியுடன் கடலை மாவு மற்றும் இஞ்சி மணத்துடன் செய்யப்படும் ஹோட்டல் ஸ்டைல் உருளைக்கிழங்கு மசாலா.',
    descriptionHi: 'गरमागरम फूली हुई पूरियां और बेसन की ग्रेवी में बना खुशबूदार साउथ इंडियन होटल स्टाइल आलू मसाला।',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Breakfast',
    dietaryTags: ['Vegetarian', 'Vegan'],
    allergens: ['Wheat'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    totalTimeMinutes: 35,
    servings: 3,
    difficulty: 'Medium',
    rating: 4.9,
    ratingCount: 280,
    ingredients: [
      { id: 'ing-61', name: 'Wheat Flour (Atta)', nameTa: 'கோதுமை மாவு', nameHi: 'गेहूं का आटा', quantity: 2, unit: 'cups kneaded into stiff dough', category: 'Pantry' },
      { id: 'ing-01', name: 'Potato', nameTa: 'உருளைக்கிழங்கு', nameHi: 'आलू', quantity: 3, unit: 'boiled & cubed', category: 'Produce' },
      { id: 'ing-02', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 2, unit: 'sliced length-wise', category: 'Produce' },
      { id: 'ing-04', name: 'Green Chilli', nameTa: 'பச்சை மிளகாய்', nameHi: 'हरी मिर्च', quantity: 3, unit: 'slit', category: 'Produce' },
      { id: 'ing-05', name: 'Ginger', nameTa: 'இஞ்சி', nameHi: 'அदरक', quantity: 1, unit: 'tbsp julienned', category: 'Produce' },
      { id: 'ing-03', name: 'Gram Flour (Besan)', nameTa: 'கடலை மாவு', nameHi: 'बेसन', quantity: 1.5, unit: 'tbsp mixed in 0.5 cup water', category: 'Pantry' },
      { id: 'ing-12', name: 'Turmeric Powder', nameTa: 'மஞ்சள் தூள்', nameHi: 'हल्दी पाउडर', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-14', name: 'Mustard Seeds', nameTa: 'கடுகு', nameHi: 'राई', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 2, unit: 'sprigs', category: 'Produce' },
      { id: 'ing-09', name: 'Oil for frying', nameTa: 'சமையல் எண்ணெய்', nameHi: 'तेल', quantity: 2, unit: 'cups', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Make the potato masala: Heat 1 tbsp oil in a pan, temper mustard seeds, chana dal, green chillies, ginger, and curry leaves.', instructionTa: 'வாணலியில் எண்ணெய் சூடாக்கி கடுகு, கடலைப்பருப்பு, பச்சை மிளகாய், இஞ்சி, கறிவேப்பிலை தாளிக்கவும்.', instructionHi: 'पैन में तेल गरम करें। राई, चना दाल, हरी मिर्च, अदरक और कढ़ी पत्ता चटकाएं।' },
      { step: 2, instruction: 'Add sliced onions and turmeric; sauté until translucent. Add boiled potatoes, 1 cup water, and salt; simmer 5 minutes.', instructionTa: 'வெங்காயம், மஞ்சள் தூள் வதக்கி வெந்த உருளைக்கிழங்கு, 1 டம்ளர் தண்ணீர், உப்பு சேர்த்து கொதிக்கவிடவும்.', instructionHi: 'प्याज और हल्दी डालकर हल्का भूनें। उबले आलू, पानी और नमक डालकर 5 मिनट उबालें।' },
      { step: 3, instruction: 'Pour in the dissolved besan slurry and cook for 3 minutes until the gravy turns silky and thick. Turn off heat.', instructionTa: 'கரைத்த கடலை மாவை ஊற்றி 3 நிமிடங்கள் கிளறி கிரேவி கெட்டியானதும் இறக்கவும்.', instructionHi: 'पानी में घुला बेसन डालें और 3 मिनट तक ग्रेवी गाढ़ी होने तक पकाएं।' },
      { step: 4, instruction: 'Roll out small portions of wheat dough into 4-inch discs.', instructionTa: 'கோதுமை மாவை சிறு வட்டங்களாக தேய்க்கவும்.', instructionHi: 'आटे की छोटी-छोटी लोइयां बनाकर पूरी बेल लें।' },
      { step: 5, instruction: 'Deep fry pooris in smoking hot oil, pressing gently with a slotted spoon until fully puffed and golden. Serve immediately with potato masala.', instructionTa: 'சூடான எண்ணெயில் போட்டு பொரித்து உப்பிய பூரியுடன் உருளைக்கிழங்கு மசாலா சேர்த்து பரிமாறவும்.', instructionHi: 'गरम तेल में डालकर कलछी से हल्का दबाते हुए फुलाएं और गरमागरम आलू मसाले के साथ परोसें।' }
    ],
    nutrition: { calories: 420, protein: 10, carbohydrates: 62, fat: 16, fiber: 6, sugar: 3, isEstimated: true }
  }
];

console.log('Processed', recipes.length, 'core Indian and Tamil Nadu recipes.');
