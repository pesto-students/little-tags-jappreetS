import * as ACTIONS_TYPES from '../constants/actionTypes';

const initialState = {
  data: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.UPDATE_ORDERS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default ordersReducer;
