import REQUEST from '../utils/http.service';
import {
  ERROR_OCCURRED,
  GET_ALL_CATEGORIES,
  GET_PRODUCT_DETAIL,
  GET_PRODUCTS_LIST,
  UPDATE_ORDERS_LIST,
  SET_AUTH_USER,
  UPDATE_ADDRESS_LIST,
  UPDATE_CART,
  UPDATE_SELECTED_ADDRESS,
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

const updateAddressList = (data) => {
  return {
    type: UPDATE_ADDRESS_LIST,
    payload: data,
  };
};

const updateCartAction = (data) => {
  return {
    type: UPDATE_CART,
    payload: data,
  };
};

const updateOrdersList = (data) => {
  return {
    type: UPDATE_ORDERS_LIST,
    payload: data,
  };
};

const updateSelectedAddress = (data) => {
  return {
    type: UPDATE_SELECTED_ADDRESS,
    payload: data,
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
  updateAddressList,
  updateCartAction,
  updateOrdersList,
  updateSelectedAddress,
  updateSideMenuState,
};
