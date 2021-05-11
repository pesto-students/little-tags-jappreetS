import * as ACTIONS_TYPES from '../constants/actionTypes';

const initialState = {
  addresses: [],
};

const updateAddressListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.UPDATE_ADDRESS_LIST:
      return {
        ...state,
        addresses: action.payload,
      };
    default:
      return state;
  }
};

export default updateAddressListReducer;
