import REQUEST from '../utils/http.service';
import {
  ERROR_OCCURRED,
  GET_ALL_CATEGORIES,
  GET_PRODUCT_DETAIL,
  GET_PRODUCTS_LIST,
  SET_AUTH_USER,
  UPDATE_SIDE_MENU_STATE,
} from './../constants/actionTypes';

const getAllCategoriesAction = () => {
  return async (dispatch) => {
    const res = await REQUEST({
      method: 'GET',
      url: '/products/categories',
    });
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
  };
};

const getProductsByCategoryIdAction = (id) => {
  return async (dispatch) => {
    const res = await REQUEST({
      method: 'GET',
      url: `/products/category/${id}`,
    });
    if (!!res.status) {
      dispatch({
        type: GET_PRODUCTS_LIST,
        payload: res.data,
      });
    } else {
      dispatch({
        type: ERROR_OCCURRED,
        payload: res.data,
      });
    }
  };
};

const getProductDetailByIdAction = (id) => {
  return async (dispatch) => {
    const res = await REQUEST({
      method: 'GET',
      url: `/products/${id}`,
    });
    if (!!res.status) {
      dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: res.data,
      });
    } else {
      dispatch({
        type: ERROR_OCCURRED,
        payload: res.data,
      });
    }
  };
};

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

export {
  getAllCategoriesAction,
  getProductsByCategoryIdAction,
  getProductDetailByIdAction,
  setAuthUser,
  updateSideMenuState,
};
