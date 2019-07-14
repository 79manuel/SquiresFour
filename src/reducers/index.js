import { combineReducers } from 'redux';

const MenuListReducer = () => {
  return [
    {
      course: 'Soups',
      items: {
        item1: 'CUP OF SOUP WITH GARLIC TOAST ',
        item2: 'BOWL OF SOUP WITH GARLIC TOAST ',
        item3: 'SOUP & SANDWICH SPECIAL'
      },
      details: {
        details1: '',
        details2: '',
      },
      prices: {
        price1: '$6',
        price2: '$8',
        price3: 'cup $10 | bowl $11'
      }
    },
    {
      course: 'Starters',
      items: {
        item1: 'PITA & TZATZIKI (V)',
        item2: 'DRY RIBS (GF)',
        item3: 'CHICKEN FINGERS',
        item4: 'WINGS (GFM)',
        item5: 'POTATO SKINS (GF)',
        item6: 'MUSHROOM CAPS (GFM)',
        item7: 'CALAMARI',
        item8: 'NACHOS (GF, V)',
        item9: 'NACHOS for Two (GF,V)',
        item10: 'ZUCCHINI STICKS with Ranch (V)'
      },
      details: {
        details1: '',
        details2: '',
        details3: 'Served with honey mustard or plum sauce.',
        details4: 'Try one of our many sauces: Buffalo, Dry Garlic, Honey\n' +
            'Garlic, Honey Mustard, Hot, Teriyaki or Hot’n Sweet.',
        details5: 'Loaded with real bacon, chives and cheese.',
        details6: 'Stuffed with a blend of cream cheese, kamaboko, snow crab\n' +
            'and chives, then baked. Served with garlic bread.',
        details7: 'Lightly battered calamari garnished with banana peppers.\n' +
            'Served with our own tzatziki and sambal aioli.',
        details8: 'Crisp tortillas piled high with cheese, tomatoes, green onions\n' +
            'and black olives. Served with salsa and sour cream.',
        details9: 'The same great nachos only built for sharing.\n' +
            'Taco Beef $3.50              Seasoned Chicken $3.50\n' +
            'Banana Peppers $1.50         Guacamole $3.00\n' +
            'Extra Cheese $2.50',
        details10: ''
      },
      prices: {
        price1: '$8',
        price2: '$12',
        price3: '$11',
        price4: '$14',
        price5: '$12',
        price6: '$12',
        price7: '$15',
        price8: '$14',
        price9: '$22',
        price10: '$10'
      }
    },
    {
      course: 'Salads',
      items: {
        item1: 'CAESAR SALAD (GFM)',
        item2: 'GREEK SALAD (GFM, V)',
        item3: 'CHEF SALAD (GF)',
        item4: 'SPICY THAI CHICKEN SALAD',
        item5: 'MANDARIN PRAWN SALAD (GF)'
      },
      details: {
        details1: '',
        details2: '',
        details3: 'Fresh greens with ham, turkey, hard boiled egg,\n' +
            'tomatoes, cucumber and cheese. Choice of dressing',
        details4: 'Thai marinated chicken breast served over romaine lettuce,\n' +
            'noodles, tomatoes, red onions and peanuts.\n' +
            'Served with peanut sauce.',
        details5: 'Sautéed Prawns, mandarin oranges, diced red onions on a bed\n' +
            'of spinach, served with a mandarin orange sesame dressing\n' +
            'and garnished with tempura battered green beans'
      },
      prices: {
        price1:'$13',
        price2: '$15',
        price3: '$18',
        price4: '$18',
        price5: '$18'
      }
    },
    {
      course: 'Entrees',
      items: {
        item1: 'BABY BACK RIBS (GF)',
        item2: 'NEW YORK STRIPLOIN STEAK (GF)',
        item3: 'WILD SALMON (GF)',
        item4: 'SCHNITZEL',
        item5: '',
        item6: 'BUTTER CHICKEN',
        item7: 'CHICKEN SOUVLAKI (GFM)'
      },
      details: {
        details1:'Baked in our own special BBQ sauce',
        details2: 'Tenderly aged Angus N.Y. Striploin, charbroiled\n' +
            'and served with sautéed mushrooms.',
        details3: 'A grilled wild salmon fillet, topped with a balsamic reduction',
        details4: 'German style pork schnitzel served with mushroom sauce and lemon',
        details5: 'The above entrees served with seasonal vegetables & mashed potatoes, tomato pasta, ' +
            'alfredo pasta or rice.',
        details6: 'Authentic Indian Curry featuring, garlic, ginger, chilies and masala spices. Served with rice & ' +
            'naan bread. Your choice of mild, medium or hot.',
        details7: 'Skewers of seasoned chicken breast, served on rice, with\n' +
            'greek salad, lemon potato, pita and tzatziki.',
      },
      prices: {
        price1: 'Half Rack: $20\n' +
                'Full Rack: $$26',
        price2: '8oz New York: $25\n' +
                'Add garlic shrimp: $6',
        price3: '$21',
        price4: '$20',
        price5: '',
        price6: '$19',
        price7: '$19',
      }
    },
    {
      course: 'Squires Bowls',
      items: {
        item1: 'LINGUINE ALFREDO (V)',
        item2: '',
        item3: 'JAMBALAYA',
        item4: 'SPICY MEATBALL LINGUINE',
        item5: 'STIR-FRY (GFM)'

      },
      details: {
        details1: 'Served with garlic toast',
        details2:'',
        details3: 'Chicken, prawns, chorizo sausage, peppers, & onions in a spicy\n' +
            'tomato sauce. Served with garlic toast.',
        details4: 'Hand made meatballs, tossed in our own herbed tomato sauce.\n' +
            'Served with garlic toast.',
        details5: 'Sautéed vegetables tossed in our own house-made ginger\n' +
            'sauce. Served over rice or noodles.',
      },
      prices: {
        price1: '$14',
        price2: 'Add Chicken or Prawns: $4',
        price3: '$19',
        price4: '$17',
        price5: 'Vegetarian: $15',
        price6: 'Chicken: $17',
        price7: 'Breaded Beef: $18',
        price8: 'Prawn: $19'
      }
    },
    {
      course: 'Pub Faire',
      items: {
        item1: '',
        item2: 'SQUIRES CLUBHOUSE',
        item3: 'GARDEN PATCH (V)',
        item4: 'REUBEN',
        item5: 'CHICKEN CAESAR WRAP',
        item6: 'SPICY VEGETARIAN WRAP (V)',
        item7: 'CLUBHOUSE WRAP',
        item8: 'BEEF DIP',
        item9: 'PHILLY SANDWICH',
        item10: 'BRATWURST & SAUERKRAUT',
        item11: 'CHICKEN QUESADILLA',
        item12: 'NEW YORK STEAK SANDWICH',
        item13: 'FISH TACOS '
      },
      details: {
        details1: 'Accompanied with your choice of soup, tossed or fries. Sub caesar or yam fries $1.50 • Gluten free Bun $3',
        details2: 'Bacon, lettuce, tomato, cheddar, ham and turkey.',
        details3: 'Tomato, sprouts, cucumber, onion, lettuce, guacamole\n' +
            'and swiss cheese',
        details4: 'Grilled corned beef, sauerkraut and swiss cheese on rye.',
        details5: 'Chicken breast, crisp romaine and our own homemade\n' +
            'caesar dressing.',
        details6: 'Avocado, spicy fried pickles, chipotle mayo, lettuce,\n' +
            'tomato and cheese',
        details7: 'Chicken breast, mixed cheese, chipotle mayo, bacon,\n' +
            'tomato and lettuce.',
        details8: '',
        details9: 'Shaved beef, onions, peppers\n' +
            'topped with swiss cheese, then baked.',
        details10: 'Served on a warmed hoagie bun with smokey mustard.',
        details11: 'Peppers, onions and a jack/cheddar cheese blend in\n' +
            'a grilled roma tomato tortilla. Served with salsa\n' +
            'and sour cream',
        details12: 'A N.Y. Striploin, served with sautéed mushrooms\n' +
            'and garlic toast',
        details13: 'Battered cod served with chili lime slaw and sambal aioli.'
      },
      prices: {
        prices1: '',
        prices2: '$16',
        price3: '$15',
        price4: '$14',
        price5: '$14',
        price6: '$17',
        price7: '$15',
        price8: '$15',
        price9: '$17',
        price10: '$14',
        price11: '$16',
        price12: '$20',
        price13: '$14'
      }
    },
    {
      course: 'Gourmet Burguers',
      items: {
        item1:'',
        item2: 'SQUIRES BURGER',
        item3: 'MUSHROOM BURGER',
        item4: 'FRIED CHICKEN BURGER',
        item5: 'CHIPOTLE BURGER',
        item6: 'FISH BURGER'
      },
      details: {
        details1: 'Our burgers are served with lettuce, tomato, pickle and your choice of salad or fries.\n' +
            'Your choice of beef patty,veggie patty or chicken breast • Gluten free bun $3',
        details2: 'Bacon, cheddar cheese, sautéed mushrooms and onions.',
        details3: 'Sautéed mushrooms.',
        details4: 'House breaded and fried chicken breast, spicy sambal aioli,\n' +
            'jalapeño jack cheese',
        details5: 'Fried pickles, chipotle mayo, jalapeño jack cheese.',
        details6: 'Filet of Tilapia baked with garlic and lemon,\n' +
            'served with tartar sauce.'
      },
      prices: {
        price1: '',
        price2: '$17',
        price3: '$16',
        price4: '$18',
        price5: '$18',
        price6: '$19'
      }
    },
    {
      course: 'British Fairs',
      items: {
        item1:'',
        item2: 'SALISBURY STEAK',
        item3: 'LIVER & ONIONS ',
        item4: 'SHEPARDS PIE',
        item5: 'FISH & CHIPS'
      },
      details: {
        details1: 'British fare served with choice of soup, tossed or fries • Sub caesar or yam fries $1.50',
        details2: 'A 6oz ground chuck steak with sautéed onions, mushrooms,\n' +
            'mashed potatoes, seasonal vegetables and gravy.',
        details3: 'Lightly floured and grilled. Served with sautéed onions,\n' +
            'mashed potatoes, seasonal dinner vegetables and gravy',
        details4: 'Traditional British pie of beef and vegetables covered with mashed potatoes and gravy',
        details5: 'Coated in our own beer tempura and served with tartar.'
      },
      prices: {
        price1: '',
        price2: '$17',
        price3: '$18',
        price4: '$17',
        price5: '1 piece: $14',
        price6: '2 piece: $19'
      }
    },
    {
      course: 'Squires Breakfast Menu (8am - 11am)',
      items: {
        item1: 'SQUIRES BREAKFAST STEAL',
        item2: 'GREEK YOGURT with strawberries and granola',
        item3: 'BACON, SAUSAGE, or HAM and EGGS . ',
        item4: 'BREAKFAST WRAP',
        item5: 'GREEK WRAP',
        item6: 'BREAKFAST SKILLET',
        item7: 'MEDITERRANEAN SKILLET',
        item8: 'CHIPOTLE SKILLET'
      },
      details: {
        details1:'2 eggs, 2 slices bacon, 1 slice toast ½ order hash browns',
        details2: '',
        details3: '2 eggs (bacon, sausages or ham) 2 slices toast, hash browns',
        details4: 'Served with Hash browns. Chipotle mayo, scrambled eggs, cheese.',
        details5: 'Served with Hash browns. Tzatziki, scrambled eggs, cheese, olives, red onion,\n' +
            'tomatoes, spinach',
        details6: 'Served with side toast. Hash browns, 2 eggs, cheese, green onions',
        details7: 'Served with side toast. Hash browns, 2 eggs, feta cheese, olives, red onion, tomatoes,\n' +
            'spinach, tzatziki',
        details8: 'Served with side toast. Hash browns, 2 eggs, cheese, peppers, onions, chipotle mayo.'
      },
      prices: {
        price1: '$7',
        price2: '$7',
        price3: '$10',
        price4: '$12',
        price5: '$12',
        price6: '$14',
        price7: '$14',
        price8: '$14'
      }
    },
    {
      course: 'Desserts',
      items: {
        item1:'',
        item2: 'STRAWBERRY CHEESECAKE (V)',
        item3: 'MOLTEN CHOCOLATE CAKE (V)',
        item4: 'FEATURE DESSERT'
      },
      details: {
        details1: 'A perfect way to end a wonderful experience...\n' +
            'Try one of our decadent desserts.',
        details2: 'Whipped cheesecake made from scratch, topped with strawberries and whipped cream',
        details3: 'Whipped cheesecake made from scratch, topped with strawberries and whipped cream',
        details4: 'Ask your server about today’s feature selection.'
      },
      prices: {
        price1: '',
        price2: '$7',
        price3: '$9',
        price4: ''
      }
    },
    {
      course: 'Specialty Coffee',
      items: {
        item1:'SQUIRES COFFEE',
        item2: 'MILLIONAIRE COFFEE',
        item3: 'IRISH COFFEE',
        item4: 'B-52',
        item5: 'CAFE BUENO',
        item6: 'POLAR BEAR',
        item7: 'MONTE CRISTO',
        item8: 'SPANISH COFFEE',
        item9: 'BLUEBERRY TEA'
      },
      details: {
        details1: 'Amaretto & Tia Maria',
        details2: 'Kahlúa, Baileys, Grand Marnier & Frangelico',
        details3: 'Irish Whisky & Kahlúa',
        details4: 'Grand Marnier, Kahlúa & Baileys',
        details5: 'Kahlúa & Brandy',
        details6: 'Peppermint Schnapps & Baileys\n' +
            '(with hot chocolate)',
        details7: 'Grand Marnier & Kahlúa',
        details8: 'Brandy & Tia Maria',
        details9: 'Amaretto & Grand Marnier'
      },
      prices: {
        price1: '',
        price2: '',
        price3: '',
        price4: '',
        price5: '',
        price6: '',
        price7: '',
        price8: '',
        price9: ''
      }
    },

  ]
};

const selectedMenuItem = (selectedMenuItem = null, action) => {
  if (action.type === 'SELECT_MENU_COURSE') {
    return action.payload;
  }
  return selectedMenuItem;
};

export default combineReducers({
  menuItems: MenuListReducer,
  selectedMenuItem: selectedMenuItem
})

