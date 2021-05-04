import * as ACTIONS_TYPES from '../constants/actionTypes';

const initialState = {
  categories: [],
};

const allCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default allCategoriesReducer;
