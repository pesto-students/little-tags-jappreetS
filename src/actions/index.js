import REQUEST from '../utils/http.service';
import {
  ERROR_OCCURRED,
  GET_ALL_CATEGORIES,
  GET_PRODUCT_DETAIL,
  GET_PRODUCTS_LIST,
  SET_AUTH_USER,
  UPDATE_ADDRESSES,
  UPDATE_CART,
  UPDATE_LOADER_STATE,
  UPDATE_ORDERS,
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
    dispatch(updateLoaderState(true));
    const res = await REQUEST({
      method: 'GET',
      url: `/products/category/${id}`,
    });
    if (!!res.status) {
      dispatch(updateLoaderState(false));
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
    dispatch(updateLoaderState(true));
    const res = await REQUEST({
      method: 'GET',
      url: `/products/${id}`,
    });
    if (!!res.status) {
      dispatch(updateLoaderState(false));
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

const updateAddresses = (data) => {
  return {
    type: UPDATE_ADDRESSES,
    payload: data,
  };
};

const updateCartAction = (data) => {
  return {
    type: UPDATE_CART,
    payload: data,
  };
};

const updateLoaderState = (data) => {
  return {
    type: UPDATE_LOADER_STATE,
    payload: data,
  };
};

const updateOrdersList = (data) => {
  return {
    type: UPDATE_ORDERS,
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
  updateAddresses,
  updateCartAction,
  updateLoaderState,
  updateOrdersList,
  updateSelectedAddress,
  updateSideMenuState,
};
