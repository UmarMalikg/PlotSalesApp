// categoryActions.js
import axios from "axios";
import { api } from "../../api/api";

// Action Types
export const SET_CATEGORY_DATA = "SET_CATEGORY_DATA";
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const ADD_CATEGORY = "ADD_CATEGORY";

// Action Creators
export const setCategoryData = (categoryData) => ({
  type: SET_CATEGORY_DATA,
  payload: categoryData,
});

export const selectCategory = (categoryId) => ({
  type: SELECT_CATEGORY,
  payload: categoryId,
});

export const addCategoryToStore = (categoryData) => ({
  type: ADD_CATEGORY,
  payload: categoryData,
});

// Thunk Action to Fetch Category Data
export const fetchCategoryData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${api}/categories`);
      dispatch(setCategoryData(response.data));
    } catch (error) {
      console.error("Error fetching Categories data:", error);
    }
  };
};

export const addCategory = (categoryData) => {
  return async (dispatch) => {
    console.log(categoryData);
    try {
      // Send a POST request to your server's API endpoint to add the employee
      const response = await axios.post(`${api}/categories`, categoryData, {});

      dispatch(addCategoryToStore(response.data));
    } catch (error) {
      console.error("Error adding an category:", error);
    }
  };
};
