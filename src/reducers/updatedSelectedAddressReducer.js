import * as ACTIONS_TYPES from '../constants/actionTypes';

const initialState = {
  address: null,
};

const updatedSelectedAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.UPDATE_SELECTED_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};

export default updatedSelectedAddressReducer;
