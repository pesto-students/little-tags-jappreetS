import * as ACTIONS_TYPES from '../constants/actionTypes';

const initialState = {
  isSideMenuOpen: false,
};

const sideMenuSateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.UPDATE_SIDE_MENU_STATE:
      return {
        ...state,
        isSideMenuOpen: action.payload,
      };
    default:
      return state;
  }
};

export default sideMenuSateReducer;
