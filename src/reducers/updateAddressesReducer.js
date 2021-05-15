import * as ACTIONS_TYPES from '../constants/actionTypes';

const initialState = {
  data: [],
};

const updateAddressesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.UPDATE_ADDRESSES:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default updateAddressesReducer;
