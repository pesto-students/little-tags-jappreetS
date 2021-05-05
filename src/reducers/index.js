import { combineReducers } from 'redux';

import allCategoriesReducer from './allCategoriesReducer';
import errorMessagesReducer from './errorMessagesReducer';
import productDetailReducer from './productDetailReducer';
import productsListReducer from './productsListReducer';
import sessionReducer from './sessionReducer';
import sideMenuStateReducer from './sideMenuStateReducer';
import updateCartReducer from './updateCartReducer';

const rootReducer = combineReducers({
  allCategories: allCategoriesReducer,
  cartState: updateCartReducer,
  errorMessages: errorMessagesReducer,
  productDetail: productDetailReducer,
  productsList: productsListReducer,
  sessionState: sessionReducer,
  sideMenuState: sideMenuStateReducer,
});

export default rootReducer;
