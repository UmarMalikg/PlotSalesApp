// categoryActions.js
import axios from "axios";
import { api } from "../../api/api";

// Action Types
export const SET_RESERVATION_DATA = "SET_RESERVATION_DATA";
export const SELECT_RESERVATION_DATA = "SELECT_RESERVATION_DATA";
export const ADD_RESERVATION = "ADD_RESERVATION";

// Action Creators
export const setReservationData = (reservationData) => ({
  type: SET_RESERVATION_DATA,
  payload: reservationData,
});

export const selectReservationData = (reservationId) => ({
  type: SELECT_RESERVATION_DATA,
  payload: reservationId,
});

export const addReservationDataToStore = (reservationData) => ({
  type: ADD_RESERVATION,
  payload: reservationData,
});

// Thunk Action to Fetch Category Data
export const fetchReservationData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${api}/reservation`);
      dispatch(setReservationData(response.data));
    } catch (error) {
      console.error("Error fetching Reservation data:", error);
    }
  };
};

export const addReservation = (reservationData) => {
  return async (dispatch) => {
    console.log(reservationData);
    try {
      // Send a POST request to your server's API endpoint to add the employee
      const response = await axios.post(
        `${api}/reservation`,
        reservationData,
        {}
      );

      dispatch(addReservationDataToStore(response.data));
    } catch (error) {
      console.error("Error adding an Reservation:", error);
    }
  };
};
