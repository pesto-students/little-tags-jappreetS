import * as ACTIONS_TYPES from '../constants/actionTypes';

const initialState = {
  errorMessage: '',
};

const errorMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.ERROR_OCCURRED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default errorMessagesReducer;
