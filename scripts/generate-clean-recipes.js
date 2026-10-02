const fs = require('fs');

// Unique image replacement map for any repeated images in the original 52 recipes
const imageReplacements = {
  // rec-36 Crispy Stuffed Potato Samosa
  'rec-36': 'https://images.unsplash.com/photo-1601050690184-a14a706b8d4c?auto=format&fit=crop&w=800&q=80',
  // rec-41 Crispy South Indian Medu Vada
  'rec-41': 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
  // rec-51 Warm Sweet Gulab Jamun
  'rec-51': 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&w=800&q=80',
  // rec-23 Mediterranean Shakshuka
  'rec-23': 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80',
  // rec-03 South Indian Potato Podimas
  'rec-03': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
  // rec-13 South Indian Ven Pongal
  'rec-13': 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=80',
  // rec-14 Tangy South Indian Lemon Rice
  'rec-14': 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80',
  // rec-16 North Indian Restaurant Style Dal Tadka
  'rec-16': 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=800&q=80',
  // rec-20 Refreshing Indian Mango Lassi
  'rec-20': 'https://images.unsplash.com/photo-1571006687898-75d3151c72cf?auto=format&fit=crop&w=800&q=80',
  // rec-21 South Indian Curd Rice
  'rec-21': 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=800&q=80',
  // rec-30 Creamy Spinach Palak Paneer
  'rec-30': 'https://images.unsplash.com/photo-1589647363585-745280b22d4a?auto=format&fit=crop&w=800&q=80',
  // rec-31 North Indian Rajma Masala
  'rec-31': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
  // rec-34 Fresh Guacamole with Tortilla Chips
  'rec-34': 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?auto=format&fit=crop&w=800&q=80',
  // rec-35 Spicy South Indian Chettinad Mushroom Curry
  'rec-35': 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
  // rec-37 Nutritious Banana Oatmeal Energy Pancakes
  'rec-37': 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80',
  // rec-38 Japanese Miso Tofu Noodle Soup
  'rec-38': 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
  // rec-39 Mexican Fiesta Loaded Burrito Bowl
  'rec-39': 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80',
  // rec-40 Warm Mediterranean Spiced Lentil Soup
  'rec-40': 'https://images.unsplash.com/photo-1583032015879-1144a1599ce3?auto=format&fit=crop&w=800&q=80',
  // rec-42 North Indian Stuffed Aloo Paratha
  'rec-42': 'https://images.unsplash.com/photo-1626777553630-5e6e5dd22a3f?auto=format&fit=crop&w=800&q=80',
  // rec-43 South Indian Idli with Coconut Chutney
  'rec-43': 'https://images.unsplash.com/photo-1589301760568-d069929288e7?auto=format&fit=crop&w=800&q=80',
  // rec-44 Loaded Cheddar & Chive Baked Potato
  'rec-44': 'https://images.unsplash.com/photo-1568584711271-6c929fb49b60?auto=format&fit=crop&w=800&q=80',
  // rec-45 Spicy Penne all'Arrabbiata
  'rec-45': 'https://images.unsplash.com/photo-1621996346565-e3d5d6281080?auto=format&fit=crop&w=800&q=80',
  // rec-46 Authentic South Indian Avial
  'rec-46': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  // rec-47 Creamy Tomato Basil Soup with Croutons
  'rec-47': 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
  // rec-48 Spicy Cheesy Quesadilla
  'rec-48': 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=800&q=80',
  // rec-49 Crispy Garlic Broccoli & Mushroom Stir Fry
  'rec-49': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  // rec-50 Traditional South Indian Tomato Thokku
  'rec-50': 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
  // rec-52 Spiced Indian Aloo Matar Paneer Curry
  'rec-52': 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
  // rec-22 Crispy Falafel Wrap
  'rec-22': 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80',
  // rec-12 Homestyle North Indian Aloo Gobi
  'rec-12': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80' // will be given distinct below
};

// Additional rich authentic Tamil Nadu and Indian recipes
const additionalRecipes = [
  // rec-53. Chettinad Chicken Sukka
  {
    id: 'rec-53',
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
    ratingCount: 220,
    ingredients: [
      { id: 'ing-53-01', name: 'Chicken (Bone-in or Boneless)', nameTa: 'சிக்கன்', nameHi: 'चिकन', quantity: 500, unit: 'g bite-sized', category: 'Meat' },
      { id: 'ing-53-02', name: 'Shallots (Small Onion)', nameTa: 'சின்ன வெங்காயம்', nameHi: 'छोटे प्याज', quantity: 15, unit: 'chopped', category: 'Produce' },
      { id: 'ing-53-03', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 1, unit: 'chopped', category: 'Produce' },
      { id: 'ing-53-04', name: 'Ginger Garlic Paste', nameTa: 'இஞ்சி பூண்டு விழுது', nameHi: 'अदरक लहसुन पेस्ट', quantity: 1.5, unit: 'tbsp', category: 'Produce' },
      { id: 'ing-53-05', name: 'Black Peppercorns', nameTa: 'கருப்பு மிளகு', nameHi: 'काली मिर्च', quantity: 1.5, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-53-06', name: 'Fennel Seeds (Sombu)', nameTa: 'சோம்பு', nameHi: 'सौंफ', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-53-07', name: 'Coriander Seeds', nameTa: 'மல்லி விதை', nameHi: 'धनिया बीज', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-53-08', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 3, unit: 'sprigs', category: 'Produce' },
      { id: 'ing-53-09', name: 'Coconut Oil or Sesame Oil', nameTa: 'நல்லெண்ணெய்', nameHi: 'तेल', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-53-10', name: 'Salt', nameTa: 'உப்பு', nameHi: 'नमक', quantity: 1.25, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Dry roast black peppercorns, fennel seeds, and coriander seeds until aromatic; cool and grind into fresh Chettinad spice powder.', instructionTa: 'மிளகு, சோம்பு, மல்லி விதைகளை வறுத்து ஆறியதும் பொடியாக அரைத்துக்கொள்ளவும்.', instructionHi: 'काली मिर्च, सौंफ और साबुत धनिये को सूखा भूनकर दरदरा मसाला पीस लें।' },
      { step: 2, instruction: 'Heat oil in a pan, add curry leaves and chopped shallots. Sauté until deep golden brown.', instructionTa: 'வாணலியில் எண்ணெய் ஊற்றி கறிவேப்பிலை மற்றும் சின்ன வெங்காயம் சேர்த்து பொன்னிறமாக வதக்கவும்.', instructionHi: 'पैन में तेल गरम करें, कढ़ी पत्ता और छोटे प्याज डालकर सुनहरा होने तक भूनें।' },
      { step: 3, instruction: 'Add ginger-garlic paste and tomatoes; sauté for 3 minutes until soft.', instructionTa: 'இஞ்சி பூண்டு விழுது மற்றும் தக்காளி சேர்த்து 3 நிமிடங்கள் வதக்கவும்.', instructionHi: 'अदरक-लहसुन पेस्ट और टमाटर डालकर 3 मिनट भूनें।' },
      { step: 4, instruction: 'Add chicken pieces, turmeric, and salt. Cook covered on medium heat for 12 minutes without adding water.', instructionTa: 'சிக்கன் துண்டுகள், மஞ்சள் தூள் மற்றும் உப்பு சேர்த்து தண்ணீர் ஊற்றாமல் மூடி வைத்து 12 நிமிடங்கள் வேகவிடவும்.', instructionHi: 'चिकन के टुकड़े, हल्दी और नमक डालें। बिना पानी डाले ढककर 12 मिनट पकाएं।' },
      { step: 5, instruction: 'Add the freshly ground Chettinad spice powder and toss on high heat until the masala coats the chicken and turns semi-dry/sukka. Garnish with fresh curry leaves.', instructionTa: 'அரைத்த செட்டிநாடு மசாலாவை சேர்த்து சுக்கா ஆகும் வரை நன்கு கிளறி இறக்கவும்.', instructionHi: 'पिसा हुआ मसाला डालें और तेज आंच पर सूखा होने तक भूनें। कढ़ी पत्ते से सजाएं।' }
    ],
    nutrition: { calories: 340, protein: 32, carbohydrates: 8, fat: 20, fiber: 3, sugar: 2, isEstimated: true }
  },

  // rec-54. Tamil Nadu Ambur Mutton Biryani
  {
    id: 'rec-54',
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
      { id: 'ing-54-01', name: 'Mutton (Goat Meat)', nameTa: 'மட்டன் (ஆட்டுக்கறி)', nameHi: 'मटन', quantity: 500, unit: 'g tender cut', category: 'Meat' },
      { id: 'ing-54-02', name: 'Seeraga Samba Rice', nameTa: 'சீரக சம்பா அரிசி', nameHi: 'जीरा सांबा चावल', quantity: 2, unit: 'cups soaked 20m', category: 'Pantry' },
      { id: 'ing-54-03', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 3, unit: 'sliced', category: 'Produce' },
      { id: 'ing-54-04', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 2, unit: 'chopped', category: 'Produce' },
      { id: 'ing-54-05', name: 'Red Chilli Paste', nameTa: 'மிளகாய் விழுது', nameHi: 'लाल मिर्च पेस्ट', quantity: 2, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-54-06', name: 'Ginger Garlic Paste', nameTa: 'இஞ்சி பூண்டு விழுது', nameHi: 'अदरक लहसुन पेस्ट', quantity: 2, unit: 'tbsp', category: 'Produce' },
      { id: 'ing-54-07', name: 'Curd (Yogurt)', nameTa: 'தயிர்', nameHi: 'दही', quantity: 0.5, unit: 'cup', category: 'Dairy' },
      { id: 'ing-54-08', name: 'Mint & Coriander', nameTa: 'புதினா கொத்தமல்லி', nameHi: 'पुदीना और धनिया', quantity: 1, unit: 'cup chopped', category: 'Produce' },
      { id: 'ing-54-09', name: 'Cooking Oil & Ghee', nameTa: 'எண்ணெய் மற்றும் நெய்', nameHi: 'तेल और घी', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-54-10', name: 'Salt', nameTa: 'உப்பு', nameHi: 'नमक', quantity: 2, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Pressure cook mutton with a pinch of turmeric, 1 tsp ginger-garlic paste, and 1 cup water for 5-6 whistles until 80% tender.', instructionTa: 'மட்டனை மஞ்சள் தூள், இஞ்சி பூண்டு விழுது சேர்த்து குக்கரில் 5-6 விசில் விட்டு வேகவைக்கவும்.', instructionHi: 'मटन को हल्दी, अदरक-लहसुन और पानी के साथ कुकर में 5-6 सीटी लगाकर 80% तक पका लें।' },
      { step: 2, instruction: 'In a thick-bottomed biryani pot, heat oil and ghee. Sauté sliced onions until golden brown.', instructionTa: 'பிரியாணி பாத்திரத்தில் எண்ணெய் மற்றும் நெய் ஊற்றி வெங்காயத்தை பொன்னிறமாக வதக்கவும்.', instructionHi: 'भारी तले वाले बर्तन में तेल और घी गरम करें। प्याज को सुनहरा भूरा होने तक भूनें।' },
      { step: 3, instruction: 'Add red chilli paste, ginger-garlic paste, tomatoes, curd, mint, and cooked mutton with its broth. Cook for 8 minutes.', instructionTa: 'மிளகாய் விழுது, இஞ்சி பூண்டு, தக்காளி, தயிர், புதினா மற்றும் வெந்த மட்டனை அதன் சாற்றுடன் சேர்த்து கொதிக்கவிடவும்.', instructionHi: 'मिर्च पेस्ट, अदरक-लहसुन, टमाटर, दही, पुदीना और उबला मटन सूप के साथ डालकर 8 मिनट पकाएं।' },
      { step: 4, instruction: 'Add soaked Seeraga Samba rice and required water (1:1.5 ratio). Cook until 85% water is absorbed.', instructionTa: 'ஊறிய சீரக சம்பா அரிசி மற்றும் தேவையான தண்ணீர் சேர்த்து 85% நீர் வற்றும் வரை கொதிக்கவிடவும்.', instructionHi: 'भीगा हुआ जीरा सांबा चावल और पानी डालें। 85% पानी सूखने तक पकाएं।' },
      { step: 5, instruction: 'Cover tightly with lid and place on low flame dum for 15 minutes. Rest 10 minutes, fluff gently and serve with onion raita.', instructionTa: 'பாத்திரத்தை மூடி மிதமான தணலில் 15 நிமிடங்கள் தம் போடவும். வெங்காய பச்சடியுடன் பரிமாறவும்.', instructionHi: 'ढक्कन लगाकर 15 मिनट धीमी आंच पर दम दें। 10 मिनट बाद रायते के साथ परोसें।' }
    ],
    nutrition: { calories: 580, protein: 34, carbohydrates: 62, fat: 22, fiber: 4, sugar: 3, isEstimated: true }
  },

  // rec-55. Meen Kuzhambu (Tamil Nadu Fish Curry)
  {
    id: 'rec-55',
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
      { id: 'ing-55-01', name: 'Fresh Fish Steaks (Seer / Rohu / Tilapia)', nameTa: 'மீன் துண்டுகள்', nameHi: 'मछली के टुकड़े', quantity: 500, unit: 'g cleaned', category: 'Fish' },
      { id: 'ing-55-02', name: 'Tamarind', nameTa: 'புளி', nameHi: 'इमली', quantity: 1, unit: 'lemon-sized ball in 2 cups water', category: 'Pantry' },
      { id: 'ing-55-03', name: 'Shallots (Small Onion)', nameTa: 'சின்ன வெங்காயம்', nameHi: 'छोटे प्याज', quantity: 15, unit: 'halved', category: 'Produce' },
      { id: 'ing-55-04', name: 'Garlic', nameTa: 'பூண்டு', nameHi: 'लहसुन', quantity: 10, unit: 'cloves', category: 'Produce' },
      { id: 'ing-55-05', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 2, unit: 'chopped', category: 'Produce' },
      { id: 'ing-55-06', name: 'Fenugreek Seeds (Vendhayam)', nameTa: 'வெந்தயம்', nameHi: 'मेथी दाना', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-55-07', name: 'Kuzhambu Chilli Powder', nameTa: 'குழம்பு மிளகாய் தூள்', nameHi: 'करी मिर्च पाउडर', quantity: 2.5, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-55-08', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 2, unit: 'sprigs', category: 'Produce' },
      { id: 'ing-55-09', name: 'Sesame Oil', nameTa: 'நல்லெண்ணெய்', nameHi: 'तिल का तेल', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-55-10', name: 'Salt', nameTa: 'உப்பு', nameHi: 'नमक', quantity: 1.5, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Heat sesame oil in a clay pot or heavy pan. Add fenugreek seeds, mustard seeds, and curry leaves.', instructionTa: 'நல்லெண்ணெய் ஊற்றி வெந்தயம், கடுகு மற்றும் கறிவேப்பிலை தாளிக்கவும்.', instructionHi: 'कड़ाही में तिल का तेल गरम करें। मेथी दाना, राई और कढ़ी पत्ता डालें।' },
      { step: 2, instruction: 'Add garlic cloves and shallots; sauté on medium heat until golden and fragrant.', instructionTa: 'பூண்டு மற்றும் சின்ன வெங்காயம் சேர்த்து பொன்னிறமாக வதக்கவும்.', instructionHi: 'लहसुन और छोटे प्याज डालकर खुशबू आने तक भूनें।' },
      { step: 3, instruction: 'Add tomatoes, kuzhambu chilli powder, turmeric, and salt. Cook until tomatoes become mushy and oil floats.', instructionTa: 'தக்காளி, குழம்பு மிளகாய் தூள் மற்றும் உப்பு சேர்த்து தக்காளி கரையும் வரை வதக்கவும்.', instructionHi: 'टमाटर, करी पाउडर और नमक डालें। टमाटर गलने तक पकाएं।' },
      { step: 4, instruction: 'Pour the tamarind extract and 1 cup water. Bring to a rolling boil and simmer for 10 minutes until raw tamarind smell goes away.', instructionTa: 'புளி கரைசலை ஊற்றி 10 நிமிடங்கள் பச்சை வாசனை போகும் வரை கொதிக்கவிடவும்.', instructionHi: 'इमली का पानी डालें और 10 मिनट तक उबालें जब तक कि कच्चापन खत्म न हो जाए।' },
      { step: 5, instruction: 'Gently drop fish steaks into the simmering curry. Cook covered on low heat for 5-6 minutes without stirring with a spoon. Rest 30 minutes before serving with hot rice.', instructionTa: 'மீன் துண்டுகளை மெதுவாக போட்டு 5-6 நிமிடங்கள் வேகவைத்து இறக்கவும். சாதத்துடன் பரிமாறவும்.', instructionHi: 'मछली के टुकड़े धीरे से डालें और 5-6 मिनट धीमी आंच पर पकाएं। गरमागरम चावल के साथ परोसें।' }
    ],
    nutrition: { calories: 290, protein: 28, carbohydrates: 14, fat: 14, fiber: 3, sugar: 3, isEstimated: true }
  },

  // rec-56. Madurai Street Style Kothu Parotta
  {
    id: 'rec-56',
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
      { id: 'ing-56-01', name: 'Malabar Parottas', nameTa: 'பரோட்டா', nameHi: 'परोटा', quantity: 3, unit: 'shredded into small pieces', category: 'Pantry' },
      { id: 'ing-56-02', name: 'Egg', nameTa: 'முட்டை', nameHi: 'अंडा', quantity: 2, unit: 'large', category: 'Protein' },
      { id: 'ing-56-03', name: 'Onion', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 1, unit: 'chopped', category: 'Produce' },
      { id: 'ing-56-04', name: 'Tomato', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 1, unit: 'chopped', category: 'Produce' },
      { id: 'ing-56-05', name: 'Green Chilli', nameTa: 'பச்சை மிளகாய்', nameHi: 'हरी मिर्च', quantity: 2, unit: 'chopped', category: 'Produce' },
      { id: 'ing-56-06', name: 'Chicken or Veg Salna / Gravy', nameTa: 'சால்னா அல்லது குருமா', nameHi: 'सालना या ग्रेवी', quantity: 0.75, unit: 'cup', category: 'Curries' },
      { id: 'ing-56-07', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 2, unit: 'sprigs', category: 'Produce' },
      { id: 'ing-56-08', name: 'Oil', nameTa: 'எண்ணெய்', nameHi: 'तेल', quantity: 2, unit: 'tbsp', category: 'Pantry' }
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

  // rec-57. South Indian Rava Kesari
  {
    id: 'rec-57',
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
      { id: 'ing-57-01', name: 'Rava (Semolina / Sooji)', nameTa: 'ரவை', nameHi: 'सूजी', quantity: 1, unit: 'cup', category: 'Pantry' },
      { id: 'ing-57-02', name: 'Sugar', nameTa: 'சர்க்கரை', nameHi: 'चीनी', quantity: 1.25, unit: 'cups', category: 'Pantry' },
      { id: 'ing-57-03', name: 'Ghee', nameTa: 'நெய்', nameHi: 'देसी घी', quantity: 0.5, unit: 'cup', category: 'Dairy' },
      { id: 'ing-57-04', name: 'Cashews & Raisins', nameTa: 'முந்திரி திராட்சை', nameHi: 'काजू और किशमिश', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-57-05', name: 'Cardamom Powder', nameTa: 'ஏலக்காய் தூள்', nameHi: 'इलायची पाउडर', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { id: 'ing-57-06', name: 'Saffron / Kesari food color', nameTa: 'கேசரி தூள்', nameHi: 'केसर या रंग', quantity: 1, unit: 'pinch', category: 'Spices' }
    ],
    instructions: [
      { step: 1, instruction: 'Heat 2 tbsp ghee in a pan; fry cashews and raisins until golden and set aside.', instructionTa: 'வாணலியில் 2 ஸ்பூன் நெய் ஊற்றி முந்திரி மற்றும் திராட்சையை வறுத்து தனியாக வைக்கவும்.', instructionHi: 'पैन में 2 चम्मच घी गरम कर काजू और किशमिश को सुनहरा तलकर निकालें।' },
      { step: 2, instruction: 'In the same pan, roast rava on medium flame for 4 minutes without burning.', instructionTa: 'அதே நெய்யில் ரவையை மிதமான தீயில் 4 நிமிடங்கள் வறுக்கவும்.', instructionHi: 'उसी घी में सूजी को धीमी आंच पर 4 मिनट तक खुशबू आने तक भूनें।' },
      { step: 3, instruction: 'In a separate pot, boil 2.5 cups of water with saffron color. Slowly pour boiling water into roasted rava, stirring continuously to prevent lumps.', instructionTa: '2.5 டம்ளர் தண்ணீரை கொதிக்கவைத்து வறுத்த ரவையில் கட்டிகள் இல்லாமல் ஊற்றி கிளறவும்.', instructionHi: '2.5 कप पानी में केसरिया रंग डालकर उबालें। उबलता पानी भुनी सूजी में लगातार चलाते हुए डालें।' },
      { step: 4, instruction: 'Once rava is completely cooked and water is absorbed, add sugar and mix well (mixture will loosen).', instructionTa: 'ரவை வெந்தவுடன் சர்க்கரை சேர்த்து கிளறவும் (இளகி வரும்).', instructionHi: 'जब सूजी पूरी तरह पक जाए, तो चीनी मिलाएं। मिश्रण हल्का ढीला हो जाएगा।' },
      { step: 5, instruction: 'Add remaining ghee gradually, cardamom powder, and fried nuts. Stir until it leaves the sides of the pan. Serve warm.', instructionTa: 'மீதமுள்ள நெய், ஏலக்காய் தூள், வறுத்த முந்திரி சேர்த்து சுருண்டு வரும்போது இறக்கி பரிமாறவும்.', instructionHi: 'बचा हुआ घी, इलायची और तले हुए मेवे डालें। जब हलवा बर्तन छोड़ने लगे तो गरमागरम परोसें।' }
    ],
    nutrition: { calories: 360, protein: 4, carbohydrates: 58, fat: 14, fiber: 1, sugar: 34, isEstimated: true }
  },

  // rec-58. Chettinad Pepper Chicken Fry
  {
    id: 'rec-58',
    title: 'Chettinad Pepper Chicken Fry',
    titleTa: 'செட்டிநாடு மிளகு சிக்கன் வறுவல்',
    titleHi: 'चेट्टीनाड काली मिर्च चिकन फ्राई',
    description: 'Fiery, aromatic dry roasted chicken infused with crushed black pepper, caramelized shallots, curry leaves, and ginger-garlic.',
    descriptionTa: 'காரம் நிறைந்த கருப்பு மிளகு, சின்ன வெங்காயம், பூண்டு மற்றும் கறிவேப்பிலை மணத்துடன் செய்யப்படும் காரசாரமான சிக்கன் வறுவல்.',
    descriptionHi: 'कुटी हुई काली मिर्च, भुने छोटे प्याज और कढ़ी पत्ते के साथ चेट्टीनाड अंदाज में बना तीखा चिकन फ्राई।',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Dinner',
    dietaryTags: ['High Protein', 'Gluten-Free', 'Quick meals'],
    allergens: [],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    totalTimeMinutes: 30,
    servings: 3,
    difficulty: 'Easy',
    rating: 5.0,
    ratingCount: 195,
    ingredients: [
      { id: 'ing-58-01', name: 'Chicken', nameTa: 'சிக்கன்', nameHi: 'चिकन', quantity: 450, unit: 'g small pieces', category: 'Meat' },
      { id: 'ing-58-02', name: 'Shallots', nameTa: 'சின்ன வெங்காயம்', nameHi: 'छोटे प्याज', quantity: 12, unit: 'sliced', category: 'Produce' },
      { id: 'ing-58-03', name: 'Coarsely Crushed Black Pepper', nameTa: 'இடித்த மிளகுத்தூள்', nameHi: 'कुटी काली मिर्च', quantity: 2, unit: 'tbsp', category: 'Spices' },
      { id: 'ing-58-04', name: 'Ginger Garlic Paste', nameTa: 'இஞ்சி பூண்டு விழுது', nameHi: 'अदरक लहसुन पेस्ट', quantity: 1, unit: 'tbsp', category: 'Produce' },
      { id: 'ing-58-05', name: 'Fennel Powder (Sombu)', nameTa: 'சோம்புத்தூள்', nameHi: 'सौंफ पाउडर', quantity: 1, unit: 'tsp', category: 'Spices' },
      { id: 'ing-58-06', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 3, unit: 'sprigs', category: 'Produce' },
      { id: 'ing-58-07', name: 'Sesame Oil', nameTa: 'நல்லெண்ணெய்', nameHi: 'तेल', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-58-08', name: 'Salt', nameTa: 'உப்பு', nameHi: 'नमक', quantity: 1, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Heat sesame oil in a kadai. Add curry leaves and shallots; fry until golden brown.', instructionTa: 'வாணலியில் எண்ணெய் ஊற்றி கறிவேப்பிலை மற்றும் சின்ன வெங்காயம் சேர்த்து வதக்கவும்.', instructionHi: 'कड़ाही में तेल गरम करें। कढ़ी पत्ता और प्याज डालकर सुनहरा होने तक भूनें।' },
      { step: 2, instruction: 'Add ginger-garlic paste and chicken pieces with turmeric and salt. Sauté on high heat for 3 minutes.', instructionTa: 'இஞ்சி பூண்டு விழுது, சிக்கன் துண்டுகள், மஞ்சள் தூள், உப்பு சேர்த்து வதக்கவும்.', instructionHi: 'अदरक-लहसुन पेस्ट, चिकन, हल्दी और नमक डालकर 3 मिनट तेज आंच पर भूनें।' },
      { step: 3, instruction: 'Cover and cook on medium flame for 12 minutes in its own juices until chicken is completely cooked.', instructionTa: 'மூடி வைத்து மிதமான தீயில் 12 நிமிடங்கள் வேகவிடவும்.', instructionHi: 'ढककर धीमी आंच पर 12 मिनट चिकन के गलने तक पकाएं।' },
      { step: 4, instruction: 'Open lid, sprinkle freshly crushed black pepper and fennel powder. Toss on high heat for 3-4 minutes until dry and coated. Serve hot with rasam rice.', instructionTa: 'மிளகுத்தூள், சோம்புத்தூள் சேர்த்து சுருள வதக்கி ரசம் சாதத்துடன் பரிமாறவும்.', instructionHi: 'काली मिर्च और सौंफ पाउडर छिड़कें। तेज आंच पर 3-4 मिनट सूखा होने तक भूनें।' }
    ],
    nutrition: { calories: 310, protein: 30, carbohydrates: 6, fat: 18, fiber: 2, sugar: 1, isEstimated: true }
  },

  // rec-59. Tamil Nadu Egg Thokku (Muttai Kuzhambu)
  {
    id: 'rec-59',
    title: 'Tamil Nadu Egg Thokku (Muttai Kuzhambu)',
    titleTa: 'செட்டிநாடு முட்டை தொக்கு',
    titleHi: 'तमिलनाडु अंडा थोक्कू (मसालेदार अंडा करी)',
    description: 'Boiled eggs simmered and roasted in a thick, caramelized onion, tomato, and southern spice gravy.',
    descriptionTa: 'வேகவைத்த முட்டையுடன் சின்ன வெங்காயம், தக்காளி மற்றும் மசாலாக்கள் சேர்த்து சுண்ட வதக்கிய செட்டிநாடு முட்டை தொக்கு.',
    descriptionHi: 'उबले अंडों को प्याज, टमाटर और पारंपरिक मसालों की गाढ़ी और चटपटी ग्रेवी में भूनकर बनाया गया अंडा थोक्कू।',
    imageUrl: 'https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?auto=format&fit=crop&w=800&q=80',
    cuisine: 'South Indian',
    category: 'Lunch',
    dietaryTags: ['Eggetarian', 'High Protein', 'Gluten-Free'],
    allergens: ['Egg'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    totalTimeMinutes: 25,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.9,
    ratingCount: 165,
    ingredients: [
      { id: 'ing-59-01', name: 'Eggs (Hard Boiled & Slit)', nameTa: 'வேகவைத்த முட்டை', nameHi: 'उबले अंडे', quantity: 4, unit: 'large', category: 'Protein' },
      { id: 'ing-59-02', name: 'Onions', nameTa: 'வெங்காயம்', nameHi: 'प्याज', quantity: 2, unit: 'finely chopped', category: 'Produce' },
      { id: 'ing-59-03', name: 'Tomatoes', nameTa: 'தக்காளி', nameHi: 'टमाटर', quantity: 2, unit: 'chopped', category: 'Produce' },
      { id: 'ing-59-04', name: 'Ginger Garlic Paste', nameTa: 'இஞ்சி பூண்டு விழுது', nameHi: 'अदरक लहसुन पेस्ट', quantity: 1, unit: 'tsp', category: 'Produce' },
      { id: 'ing-59-05', name: 'Chilli Powder', nameTa: 'மிளகாய் தூள்', nameHi: 'लाल मिर्च पाउडर', quantity: 1, unit: 'tsp', category: 'Spices' },
      { id: 'ing-59-06', name: 'Coriander Powder', nameTa: 'மல்லி தூள்', nameHi: 'धनिया पाउडर', quantity: 1, unit: 'tsp', category: 'Spices' },
      { id: 'ing-59-07', name: 'Curry Leaves', nameTa: 'கறிவேப்பிலை', nameHi: 'कढ़ी पत्ता', quantity: 2, unit: 'sprigs', category: 'Produce' },
      { id: 'ing-59-08', name: 'Cooking Oil', nameTa: 'சமையல் எண்ணெய்', nameHi: 'तेल', quantity: 2, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { step: 1, instruction: 'Heat oil in a pan. Sauté chopped onions and curry leaves until golden brown.', instructionTa: 'வாணலியில் எண்ணெய் ஊற்றி வெங்காயம் மற்றும் கறிவேப்பிலை சேர்த்து வதக்கவும்.', instructionHi: 'पैन में तेल गरम करें। प्याज और कढ़ी पत्ता डालकर सुनहरा होने तक भूनें।' },
      { step: 2, instruction: 'Add ginger-garlic paste and tomatoes; cook until oil separates from the masala.', instructionTa: 'இஞ்சி பூண்டு விழுது மற்றும் தக்காளி சேர்த்து எண்ணெய் பிரியும் வரை வதக்கவும்.', instructionHi: 'अदरक-लहसुन पेस्ट और टमाटर डालकर तेल छूटने तक पकाएं।' },
      { step: 3, instruction: 'Add chilli powder, coriander powder, turmeric, and salt. Add 0.5 cup water and simmer for 5 minutes.', instructionTa: 'மிளகாய் தூள், மல்லி தூள், மஞ்சள் தூள் மற்றும் அரை டம்ளர் தண்ணீர் சேர்த்து கொதிக்கவிடவும்.', instructionHi: 'मिर्च पाउडर, धनिया पाउडर, हल्दी और आधा कप पानी डालकर 5 मिनट पकाएं।' },
      { step: 4, instruction: 'Gently drop the slit boiled eggs into the thick gravy and roast on medium flame for 4 minutes until the gravy coats the eggs glossy. Serve with rice or dosa.', instructionTa: 'வேகவைத்த முட்டைகளை சேர்த்து 4 நிமிடங்கள் மசாலா ஒட்டும் வரை பிரட்டி இறக்கவும்.', instructionHi: 'उबले अंडों को डालें और 4 मिनट तक मसाले में लपेटते हुए भूनें। चावल या डोसे के साथ परोसें।' }
    ],
    nutrition: { calories: 240, protein: 14, carbohydrates: 10, fat: 16, fiber: 2, sugar: 3, isEstimated: true }
  },

  // rec-60. Semiya Paal Payasam
  {
    id: 'rec-60',
    title: 'Semiya Paal Payasam (Vermicelli Milk Pudding)',
    titleTa: 'சேமியா பால் பாயாசம்',
    titleHi: 'सेवई की खीर (सेमिया पायसम)',
    description: 'Creamy, luxurious dessert made by simmering roasted vermicelli in full-cream milk, infused with cardamom, saffron, and ghee-fried cashews.',
    descriptionTa: 'வறுத்த சேமியா, திக்கான பால், சர்க்கரை, ஏலக்காய் மற்றும் நெய்யில் வறுத்த முந்திரி சேர்த்து செய்யப்படும் சுவையான சேமியா பாயாசம்.',
    descriptionHi: 'दूध, भुनी सेवई, इलायची और केसर से बनी बेहद मखमली और स्वादिष्ट खीर जिसे काजू-किशमिश से सजाया जाता है।',
    imageUrl: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
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
    ratingCount: 180,
    ingredients: [
      { id: 'ing-60-01', name: 'Semiya (Vermicelli)', nameTa: 'சேமியா', nameHi: 'सेवई', quantity: 0.75, unit: 'cup roasted', category: 'Pantry' },
      { id: 'ing-60-02', name: 'Full Cream Milk', nameTa: 'பால்', nameHi: 'दूध', quantity: 3.5, unit: 'cups', category: 'Dairy' },
      { id: 'ing-60-03', name: 'Sugar', nameTa: 'சர்க்கரை', nameHi: 'चीनी', quantity: 0.75, unit: 'cup', category: 'Pantry' },
      { id: 'ing-60-04', name: 'Ghee', nameTa: 'நெய்', nameHi: 'देसी घी', quantity: 1.5, unit: 'tbsp', category: 'Dairy' },
      { id: 'ing-60-05', name: 'Cashews & Raisins', nameTa: 'முந்திரி திராட்சை', nameHi: 'काजू किशमिश', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { id: 'ing-60-06', name: 'Cardamom Powder', nameTa: 'ஏலக்காய் தூள்', nameHi: 'इलायची पाउडर', quantity: 0.5, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      { step: 1, instruction: 'Heat ghee in a pot; fry cashews and raisins until plump and golden. Set aside.', instructionTa: 'பாத்திரத்தில் நெய் ஊற்றி முந்திரி, திராட்சையை வறுத்து எடுத்து வைக்கவும்.', instructionHi: 'पैन में घी गरम करें और काजू-किशमिश को सुनहरा तलकर निकाल लें।' },
      { step: 2, instruction: 'In the same pan, roast semiya on low heat until golden brown.', instructionTa: 'அதே நெய்யில் சேமியாவை பொன்னிறமாக வறுக்கவும்.', instructionHi: 'उसी पैन में सेवई को धीमी आंच पर सुनहरा होने तक भूनें।' },
      { step: 3, instruction: 'Bring milk to a gentle boil in a heavy pot. Add roasted vermicelli and simmer for 5-6 minutes until soft and cooked.', instructionTa: 'பாலை கொதிக்கவைத்து, வறுத்த சேமியாவை சேர்த்து 5-6 நிமிடங்கள் வேகவிடவும்.', instructionHi: 'दूध को उबालें, भुनी सेवई डालें और 5-6 मिनट तक नरम होने तक पकाएं।' },
      { step: 4, instruction: 'Add sugar and cardamom powder; stir until dissolved. Simmer for 2 minutes.', instructionTa: 'சர்க்கரை மற்றும் ஏலக்காய் தூள் சேர்த்து 2 நிமிடங்கள் கொதிக்கவிடவும்.', instructionHi: 'चीनी और इलायची पाउडर डालें। चीनी घुलने तक 2 मिनट पकाएं।' },
      { step: 5, instruction: 'Garnish with fried cashews and raisins. Serve warm or chilled.', instructionTa: 'வறுத்த முந்திரி திராட்சை தூவி சூடாகவோ அல்லது குளிர வைத்தோ பரிமாறவும்.', instructionHi: 'तले हुए काजू-किशमिश से सजाएं और गरमागरम या ठंडा परोसें।' }
    ],
    nutrition: { calories: 280, protein: 6, carbohydrates: 44, fat: 9, fiber: 1, sugar: 28, isEstimated: true }
  }
];

// Read original seedRecipes.ts
const originalFile = fs.readFileSync('data/seedRecipes.ts', 'utf8');

// Parse recipe blocks and replace any repeated image with the replacement map
let updatedContent = originalFile;

// Fix backslash in recipe 45 title
updatedContent = updatedContent.replace("title: 'Spicy Penne all\\", "title: \"Spicy Penne all'Arrabbiata\"");

// Update image URLs
for (const [recId, newUrl] of Object.entries(imageReplacements)) {
  // Find recipe by ID and update its imageUrl
  const regex = new RegExp(`(id:\\s*['"]${recId}['"][\\s\\S]*?imageUrl:\\s*['"])[^'"]+(['"])`);
  if (regex.test(updatedContent)) {
    updatedContent = updatedContent.replace(regex, `$1${newUrl}$2`);
    console.log(`Replaced image for ${recId}`);
  }
}

// Ensure rec-12 has a unique image
updatedContent = updatedContent.replace(
  /(id:\s*['"]rec-12['"][\s\S]*?imageUrl:\s*['"])[^'"]+(['"])/,
  `$1https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80$2`
);

// Format additional recipes to typescript code
const additionalCode = additionalRecipes.map(r => {
  return `  ${JSON.stringify(r, null, 2).replace(/"([^"]+)":/g, '$1:')}`;
}).join(',\n\n');

// Insert additional recipes before closing bracket of SEED_RECIPES
const lastIndex = updatedContent.lastIndexOf('];');
if (lastIndex !== -1) {
  updatedContent = updatedContent.slice(0, lastIndex) + ',\n' + additionalCode + '\n];\n';
  console.log('Appended additional recipes.');
}

fs.writeFileSync('data/seedRecipes.ts', updatedContent, 'utf8');
console.log('Successfully wrote updated data/seedRecipes.ts');
