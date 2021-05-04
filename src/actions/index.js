import REQUEST from '../utils/http.service';
import {
  ERROR_OCCURRED,
  GET_ALL_CATEGORIES,
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

const getAllCategoriesAction = () => {
  return (dispatch) => {
    return REQUEST({
      method: 'GET',
      url: '/products/categories',
    }).then((res) => {
      if (!!res.status) {
        dispatch({
          type: GET_ALL_CATEGORIES,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_OCCURRED,
          payload: res.data,
        });
      }
    });
  };
};

export { setAuthUser, updateSideMenuState, getAllCategoriesAction };
