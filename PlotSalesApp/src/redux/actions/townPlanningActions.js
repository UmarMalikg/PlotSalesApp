// categoryActions.js
import axios from "axios";
import { api } from "../../api/api";

// Action Types
export const SET_TOWN_PLANNING_DATA = "SET_TOWN_PLANNING_DATA";
export const SELECT_TOWN_PLANNING_DATA = "SELECT_TOWN_PLANNING_DATA";
export const ADD_TOWN_PLANNING = "ADD_TOWN_PLANNING";

// Action Creators
export const setTownPlanningData = (townPlanningData) => ({
  type: SET_TOWN_PLANNING_DATA,
  payload: townPlanningData,
});

export const selectTownPlanningData = (townPlanningId) => ({
  type: SELECT_TOWN_PLANNING_DATA,
  payload: townPlanningId,
});

export const addTownPlanningDataToStore = (townPlanningData) => ({
  type: ADD_TOWN_PLANNING,
  payload: townPlanningData,
});

// Thunk Action to Fetch Category Data
export const fetchTownPlanningData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${api}/townPlanning`);
      dispatch(setTownPlanningData(response.data));
    } catch (error) {
      console.error("Error fetching Town Planning data:", error);
    }
  };
};

export const addTownPlanning = (townPlanningData) => {
  return async (dispatch) => {
    console.log(townPlanningData);
    try {
      // Send a POST request to your server's API endpoint to add the town planning data
      const response = await axios.post(
        `${api}/townPlanning`,
        townPlanningData
      );
      dispatch(addTownPlanningDataToStore(response.data));
    } catch (error) {
      console.error("Error adding Town Planning:", error);
    }
  };
};
