import * as ACTIONS_TYPES from '../constants/actionTypes';

const initialState = {
  data: [],
};

const updateCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.UPDATE_CART:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default updateCartReducer;
