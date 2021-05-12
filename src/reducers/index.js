import { combineReducers } from 'redux';

import allCategoriesReducer from './allCategoriesReducer';
import errorMessagesReducer from './errorMessagesReducer';
import orderDetailsReducer from './orderDetailsReducer';
import productDetailReducer from './productDetailReducer';
import productsListReducer from './productsListReducer';
import sessionReducer from './sessionReducer';
import sideMenuStateReducer from './sideMenuStateReducer';
import updateAddressListReducer from './updateAddressListReducer';
import updateCartReducer from './updateCartReducer';
import updatedSelectedAddressReducer from './updatedSelectedAddressReducer';

const rootReducer = combineReducers({
  addressList: updateAddressListReducer,
  allCategories: allCategoriesReducer,
  cart: updateCartReducer,
  errorMessages: errorMessagesReducer,
  orderDetails: orderDetailsReducer,
  productDetail: productDetailReducer,
  productsList: productsListReducer,
  selectedAddress: updatedSelectedAddressReducer,
  sessionState: sessionReducer,
  sideMenuState: sideMenuStateReducer,
});

export default rootReducer;
