import * as ACTIONS_TYPES from '../constants/actionTypes';

const initialState = {
  data: null,
};

const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.ORDER_DETAILS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default orderDetailsReducer;
