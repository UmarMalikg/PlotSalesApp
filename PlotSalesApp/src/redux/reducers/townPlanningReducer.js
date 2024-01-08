// paymentMethodReducer.js
import {
  SET_TOWN_PLANNING_DATA,
  SELECT_TOWN_PLANNING_DATA,
  ADD_TOWN_PLANNING,
} from "../actions/townPlanningActions";

const initialState = {
  townPlanningData: [],
  selectedTownPlanning: null, // Initially, no payment method is selected
};

const townPlanningReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOWN_PLANNING_DATA:
      return {
        ...state,
        townPlanningData: action.payload,
      };
    case SELECT_TOWN_PLANNING_DATA:
      return {
        ...state,
        selectedTownPlanning: action.payload,
      };
    case ADD_TOWN_PLANNING:
      return {
        ...state,
        // Add the new payment method to the existing array
        townPlanningData: [...state.townPlanningData, action.payload],
      };
    default:
      return state;
  }
};

export default townPlanningReducer;
