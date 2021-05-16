import * as ACTIONS_TYPES from '../constants/actionTypes';

const initialState = {
  data: false,
};

const loaderStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.UPDATE_LOADER_STATE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default loaderStateReducer;
