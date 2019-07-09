import { combineReducers } from 'redux';

const MenuListReducer = () => {
  return [
    {
      course: 'Soups',
      items: {
        item1: 'CUP OF SOUP WITH GARLIC TOAST . . . . . . . $6',
        item2: 'BOWL OF SOUP WITH GARLIC TOAST . . . . . $8',
        item3: 'SOUP & SANDWICH\n' +
            'SPECIAL . . . . . . . . . . . . . . . . . . . . . cup $10 | bowl $11'
      },
      details: {
        details1: '',
        details2: '',
      }
    },
    {
      course: 'Starters',
      items: {
        item1: 'PITA & TZATZIKI V . . . . . . . . . . . . . . . . . . . . . . . . . . $8',
        item2: 'DRY RIBS GF . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . $12',
        item3: 'CHICKEN FINGERS . . . . . . . . . . . . . . . . . . . . . . . . $11',
        item4: 'WINGS GFM . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . $14',
      },
      details: {
        details1: '',
        details2: '',
        details3: 'Served with honey mustard or plum sauce.',
        details4: 'Try one of our many sauces: Buffalo, Dry Garlic, Honey\n' +
            'Garlic, Honey Mustard, Hot, Teriyaki or Hot’n Sweet.',
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

