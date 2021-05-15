import * as ACTIONS_TYPES from '../constants/actionTypes';

const initialState = {
  data: [],
};

const ordersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.UPDATE_ORDERS_LIST:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default ordersListReducer;
