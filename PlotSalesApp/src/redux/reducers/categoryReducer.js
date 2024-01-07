// categoryReducer.js
import {
  SET_CATEGORY_DATA,
  SELECT_CATEGORY,
  ADD_CATEGORY,
} from "../actions/categoryActions";

const initialState = {
  categoryData: [],
  selectedCategory: null, // Initially, no category is selected
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY_DATA:
      return {
        ...state,
        categoryData: action.payload,
      };
    case SELECT_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    case ADD_CATEGORY:
      return {
        ...state,
        categoryData: [...state.categoryData, action.payload], // Add the new category to the existing data
      };
    default:
      return state;
  }
};

export default categoryReducer;
