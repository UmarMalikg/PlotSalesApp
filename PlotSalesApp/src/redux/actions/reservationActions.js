// categoryActions.js
import axios from "axios";
import { api } from "../../api/api";

// Action Types
export const SET_RESERVATION_DATA = "SET_RESERVATION_DATA";

// Action Creators
export const setReservationData = (reservationData) => ({
  type: SET_RESERVATION_DATA,
  payload: reservationData,
});

// Thunk Action to Fetch Category Data
export const fetchReservationData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${api}/reservation`);
      dispatch(setReservationData(response.data));
    } catch (error) {
      console.error("Error fetching Categories data:", error);
    }
  };
};
