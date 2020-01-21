import { combineReducers } from 'redux';

const MenuListReducer = () => {
  return [
    {
      // course: 'Soups',
      // items: {
      //   item1: 'Cup of Soup with Garlic Toast',
      //   item2: 'Bowl of Soup with Garlic Toast',
      //   item3: 'Soup & Sandwich Special'
      // },
      // details: {
      //   details1: '',
      //   details2: '',
      // },
      // prices: {
      //   price1: '$7',
      //   price2: '$8',
      //   price3: 'cup $11 | bowl $12'
      // }
    },
    {
      course: 'Starters and Appetizers',
      items: {
        item1: 'Wings (GF)',
        item2: 'Pork Dry Ribs',
        item3: 'Potstickers',
        item4: 'Spring Rolls',
        item5: 'Jenga Tofu (GF)',
        item6: 'Calamari',
        item7: 'Chicken Tenders',
        item8: 'Potato Skins (GF)',
        item9: 'Mushroom Caps (GF)',
        item10: 'Pizza Dipping Sticks',
        item11: 'Hot and Sticky Chicken Drumettes (GF)',
        item12: 'Thai Curry Mussels',
        item13: 'Squires Exclusive Platter',
        item14: 'Nachos',
        item15: 'For One',
        item16: 'For Two'
      },
      details: {
        details1: 'Crisp golden chicken wings',
        details2: 'Marinated in chef’s hong kong soya chili sauce served with squires margarita salt ',
        details3: 'Pan fried potstickers filled with pork served with soya sauce',
        details4: 'Fried to golden crispy goodness served with plum sauce',
        details5: 'Pan fried tofu sauteed in ginger cashew sauce, over a bed of fried noodles or rice',
        details6: 'Lightly battered calamari garnished with green onions, served with our tzatziki sauce',
        details7: 'Served with honey mustard sauce',
        details8: 'Stuffed with green onion and bacon topped with chef’s 3 cheese blend',
        details9: 'Stuffed with cream cheese crab and kamaboko, chives and parmesan cheese, served with garlic toast',
        details10: 'Baked to perfection, served with marinara sauce',
        details11: 'Oven roasted sweet BBQ marinated chicken drumettes served with crispy potato chips',
        details12: 'Atlantic mussels boiled in our Thai curry sauce, served with seasoned rice or noodles',
        details13: '½ pound of wings, ½ lb dry ribs, ½ lb sirloin tips, french fries, battered zucchini,  and battered' +
            ' mushrooms, served with your choice of 3 sauces: buffalo, honey mustard, or honey garlic',
        details14: 'Crisp tortillas piled high with cheese sauce, tomatoes, green onions, olives; served with salsa and ' +
            'sour cream '
      },
      prices: {
        price1: '$14',
        price2: '$12',
        price3: '$12',
        price4: '$12',
        price5: '$12',
        price6: '$15',
        price7: '$12',
        price8: '$12',
        price9: '$12',
        price10: '$10',
        price11: '$13',
        price12: '$19',
        price13: '$24',
        price14: '$15',
        price15: '$23',
        price16: 'Add Toppings: Beef $2.50, Chicken $3.00, Guacamole $3.00 ',
        price17: 'Add Toppings: Beef $4.00, Chicken $5.00, Guacamole $5.00'
      }
    },
    {
      course: 'Salads',
      items: {
        item1: '',
        item2: 'Classic House Salad (GF)',
        item3: 'Greek Salad (GF)',
        item4: 'Caesar Salad (GF)',
        item5: 'Cranberry Feta Walnut Salad (GF)',
        item6: 'Spinach Apple Pecan Salad  (GF)'
      },
      details: {
        details1: 'Ask your server to add chicken ($5), tofu ($3), beef ($4), prawns ($5)',
        details2: 'Crisp greens served with our assortment of garden vegetables',
        details3: 'Garden fresh peppers, onions, cucumbers, and tomatoes, topped with olives and feta',
        details4: '4 Pub caesar dressing married with local romaine lettuce, rolled in parmesan cheese',
        details5: 'Iceberg washed in lemon juice, topped with feta and toasted walnuts',
        details6: 'Fresh local spinach with local apples and candied pecans, garnished with goat cheese'
      },
      prices: {
        price1:'',
        price2: '$8',
        price3: '$15',
        price4: '$13',
        price5: '$17',
        price6: '$16'
      }
    },
    {
      course: 'Stir Fry Pasta Bowls',
      items: {
        item1: '',
        item2: '',
        item3: '',
        item4: 'Public House Lazy Lasagna',
      },
      details: {
        details1:'Local vegetables sauteed in your choice of homemade sauce,  and rice or pasta served with garlic toast',
        details2: 'Sauces: Indian Masala • Thai Peanut Sauce • Ginger Soya • Veg Creole • Rosé Sauce • Alfredo • Bolognese',
        details3: 'Pasta: Linguine • Egg Noodle • Oriental Noodle • Bowtie',
        details4: 'Served with garlic toast',
      },
      prices: {
        price1: '',
        price2: '',
        price3: 'Choice of: Veggie $13 • Prawn $18 • Chicken $17 • Beef $17',
        price4: '$17',
      }
    },
    {
      course: 'Flatbread Pizza',
      items: {
        item1: 'Squires Pizza',
        item2: 'Caribbean Delight  ',
        item3: 'Canadian Back Bacon Pizza',
      },
      details: {
        details1: 'Oven roasted flatbread topped with pepperoni, ham, green peppers, onions,  mushrooms, pineapple, ' +
            'banana peppers, and topped with mozza cheese',
        details2:'Marinated chicken in jerk sauce, with peppers and onions,  topped with spicy goat cheese',
        details3: 'Double layered Canadian back bacon and mushrooms, topped with smoked  bacon smothered in trio cheese',
      },
      prices: {
        price1: '$17',
        price2: '$17',
        price3: '$18',
      }
    },
    {
      course: 'Sq Hand-helds',
      items: {
        item1: '',
        item2: 'Beef Dip',
        item3: 'SQ Rueben',
        item4: 'Public House 4 Clubhouse',
        item5: 'Spicy Guacamole Roasted Pepper Lettuce Wrap',
        item6: 'Sirloin Steak Sandwich',
        item7: 'Fish Taco',
        item8: 'Chicken Caesar Wrap',
        item9: 'Chicken Quesadilla',
        item10: 'Memphis-Style Foot Long Hot Dog'
      },
      details: {
        details1: 'Served with choice salad or fries Upgrade to a caesar salad $1.50. Sub root vegetable fries $2.50',
        details2: 'Add peppers and onions (we’ll give you the cheese) to make it a philly $17',
        details3: 'Stacked on a ciabatta bun with dijon mustard',
        details4: 'Bacon, lettuce, tomato, cheddar, ham, and oven roasted turkey',
        details5: 'Crisp iceberg loaded with sprouts and roasted red peppers, onions, carrots',
        details6: 'Marinated in herb lemon oil cooked to your preference. Every day, all day',
        details7: 'Battered cod served with salsa fresca, topped with tomato, green onion, and cheese',
        details8: 'Oven roasted chicken breast with romaine and parmesan cheese',
        details9: 'Classic grilled quesadilla with peppers, onions, chef’s 3 cheese blend, chicken breast served with ' +
            'salsa and sour cream ',
        details10: 'Boiled first, then grilled to finish with BBQ sauce, bacon and green onions, and topped with cheese',
      },
      prices: {
        price1: '',
        price2: '$16',
        price3: '$15',
        price4: '$17',
        price5: '$16',
        price6: '$20',
        price7: '$15',
        price8: '$15',
        price9: '$16',
        price10: '$12'
      }
    },
    {
      course: 'Gourmet Burgers',
      items: {
        item1:'',
        item2: 'Squires Burger',
        item3: 'Chef’s Burger',
        item4: 'Breakfast Burger',
        item5: 'HWY 97 Burger',
        item6: 'Portobello Mushroom Stack (GF)'
      },
      details: {
        details1: 'Our burgers are served with lettuce, tomato, and pickle, with a choice of beef, chicken, or veggie ' +
            'patty; and your choice of salad or fries Upgrade to a caesar salad $1.50. Sub root vegetable fries $2.50',
        details2: 'Bacon, cheddar cheese, sauteed mushrooms, and onions',
        details3: 'Bacon, jack cheese, fried egg, pineapple, banana pepper, teriyaki sauce',
        details4: 'Pancake, bacon, and cheddar cheese, topped with a fried egg smothered in maple syrup',
        details5: 'Grilled salmon burger brushed with pesto, topped with mango salsa',
        details6: 'Sauteed portabella, piled with eggplant, zucchini, onion, tomato, topped with mozza'
      },
      prices: {
        price1: '',
        price2: '$17',
        price3: '$18',
        price4: '$18',
        price5: '$19',
        price6: '$17'
      }
    },
    {
      course: 'Squires favourites',
      items: {
        item1: 'Butter Chicken  ',
        item2: 'Greek Chicken Souvlaki',
        item3: 'Fish ‘n’ Chips'
      },
      details: {
        details1: 'Marinated chicken in masala spices, dropped in cream and butter served  with naan and seasoned rice',
        details2: 'skewers of marinated oven-roasted chicken breast served on rice ,baby lemon potato, greek salad, ' +
            'tzatiki and pita bread.',
        details3: 'Beer tempura battered cod, served with house-made salsa fresca and tartar'
      },
      prices: {
        price1: '$19',
        price2: '$20',
        price3: '$18'
      }
    },
    {
      course: 'Squires Exclusives',
      items: {
        item1: '',
        item2: 'Char-Grilled New York Steak (GF)',
        item3: 'Pork Schnitzel',
        item4: 'Fiery Tunisian Harrisa Lamb (GF)',
        item5: 'Bacon Cheeseburger Meatloaf',
        item6: 'Jamican Jerk Chicken',
        item7: 'Lime Cilantro Salmon Filet (GF)',
        item8: 'Blackened Shrimp with Onions and Tomatoes',
        item9: 'Char-Grilled Salisbury Steak'
      },
      details: {
        details1:'All entrees served with choice of seasonal vegetables/salad  and choice of rice or potato',
        details2: 'Tenderly aged AAA 8oz striploin charbroiled and served with mushrooms',
        details3: 'Traditional German style pork schnitzel served with mushroom sauce and lemon',
        details4: 'Smoked chili peppers and cumin-infused lamb chops grilled to perfection, topped with roasted garlic',
        details5: 'Homemade meatloaf covered in our cheesy gravy',
        details6: 'Marinated chicken breast with onions peppers and pineapple — available mild or spicy',
        details7: 'Filet of salmon grilled with cilantro butter ',
        details8: 'White shrimp sauteed with crunchy onions and roasted peppers, topped with fresh local tomato',
        details9: 'Topped with onions, mushrooms, and our gravy — home made every day'
      },
      prices: {
        price1: '',
        price2: '$26',
        price3: '$19',
        price4: '$21',
        price5: '$17',
        price6: '$20',
        price7: '$20',
        price8: '$19',
        price9: '$17'
      }
    },
    {
      course: 'Desserts',
      items: {
        item1: 'Strawberry Cheesecake',
        item2: 'Peach Cobbler',
        item3: 'Chef\'s Choice'
      },
      details: {
        details1: '',
        details2: '',
        details3: ''
      },
      prices: {
        price1: '$8',
        price2: '$8',
        price3: 'TBD'
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

