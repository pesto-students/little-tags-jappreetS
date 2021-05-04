import * as ACTIONS_TYPES from '../constants/actionTypes';

const initialState = {
  product: null,
};

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_PRODUCT_DETAIL:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productDetailReducer;
