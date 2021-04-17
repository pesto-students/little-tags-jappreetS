import * as ACTIONS_TYPES from './../constants/actionTypes';

const initialState = {
  authUser: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_AUTH_USER:
      return {
        ...state,
        authUser: action.payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;
