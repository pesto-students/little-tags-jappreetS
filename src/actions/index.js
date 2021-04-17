import { SET_AUTH_USER } from './../constants/actionTypes';

const setAuthUser = (authUser) => ({
  type: SET_AUTH_USER,
  payload: authUser,
});

export { setAuthUser };
