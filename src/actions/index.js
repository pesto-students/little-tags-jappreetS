import {
  SET_AUTH_USER,
  UPDATE_SIDE_MENU_STATE,
} from './../constants/actionTypes';

const setAuthUser = (authUser) => {
  return {
    type: SET_AUTH_USER,
    payload: authUser,
  };
};

const updateSideMenuState = (state) => {
  return {
    type: UPDATE_SIDE_MENU_STATE,
    payload: state,
  };
};

export { setAuthUser, updateSideMenuState };
