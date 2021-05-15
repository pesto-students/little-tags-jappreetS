import { combineReducers } from 'redux';

import allCategoriesReducer from './allCategoriesReducer';
import errorMessagesReducer from './errorMessagesReducer';
import ordersListReducer from './ordersListReducer';
import productDetailReducer from './productDetailReducer';
import productsListReducer from './productsListReducer';
import sessionReducer from './sessionReducer';
import sideMenuStateReducer from './sideMenuStateReducer';
import updateAddressesReducer from './updateAddressesReducer';
import updateCartReducer from './updateCartReducer';
import updatedSelectedAddressReducer from './updatedSelectedAddressReducer';

const rootReducer = combineReducers({
  addresses: updateAddressesReducer,
  allCategories: allCategoriesReducer,
  cart: updateCartReducer,
  errorMessages: errorMessagesReducer,
  ordersList: ordersListReducer,
  productDetail: productDetailReducer,
  productsList: productsListReducer,
  selectedAddress: updatedSelectedAddressReducer,
  sessionState: sessionReducer,
  sideMenuState: sideMenuStateReducer,
});

export default rootReducer;
