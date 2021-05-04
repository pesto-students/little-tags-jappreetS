import { combineReducers } from 'redux';

import allCategoriesReducer from './allCategoriesReducer';
import errorMessagesReducer from './errorMessagesReducer';
import productDetailReducer from './productDetailReducer';
import productsListReducer from './productsListReducer';
import sessionReducer from './sessionReducer';
import sideMenuStateReducer from './sideMenuStateReducer';

const rootReducer = combineReducers({
  allCategories: allCategoriesReducer,
  errorMessages: errorMessagesReducer,
  productDetail: productDetailReducer,
  productsList: productsListReducer,
  sessionState: sessionReducer,
  sideMenuState: sideMenuStateReducer,
});

export default rootReducer;
