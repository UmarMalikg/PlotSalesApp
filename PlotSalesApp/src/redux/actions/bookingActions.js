// categoryActions.js
import axios from "axios";
import { api } from "../../api/api";

// Action Types
export const SET_BOOKING_DATA = "SET_BOOKING_DATA";
export const SELECT_BOOKING_DATA = "SELECT_BOOKING_DATA";
export const ADD_BOOKING = "ADD_BOOKING";

// Action Creators
export const setBookingData = (bookingData) => ({
  type: SET_BOOKING_DATA,
  payload: bookingData,
});

export const selectBookingData = (bookingId) => ({
  type: SELECT_BOOKING_DATA,
  payload: bookingId,
});

export const addBookingDataToStore = (bookingData) => ({
  type: ADD_BOOKING,
  payload: bookingData,
});

// Thunk Action to Fetch Category Data
export const fetchBookingData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${api}/plotBooking`);
      dispatch(setBookingData(response.data));
    } catch (error) {
      console.error("Error fetching Booking data:", error);
    }
  };
};

export const addBooking = (bookingData) => {
  return async (dispatch) => {
    console.log(bookingData);
    try {
      // Send a POST request to your server's API endpoint to add the employee
      const response = await axios.post(`${api}/plotBooking`, bookingData, {});

      dispatch(addBookingDataToStore(response.data));
    } catch (error) {
      console.error("Error adding an Booking:", error);
    }
  };
};
