import * as ACTIONS_TYPES from '../constants/actionTypes';

const initialState = {
  products: null,
};

const productsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_PRODUCTS_LIST:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsListReducer;
