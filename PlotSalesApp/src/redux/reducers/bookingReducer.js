// paymentMethodReducer.js
import {
  SET_BOOKING_DATA,
  SELECT_BOOKING_DATA,
  ADD_BOOKING,
} from "../actions/bookingActions";

const initialState = {
  bookingData: [],
  selectedBooking: null, // Initially, no payment method is selected
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKING_DATA:
      return {
        ...state,
        bookingData: action.payload,
      };
    case SELECT_BOOKING_DATA:
      return {
        ...state,
        selectedBooking: action.payload,
      };
    case ADD_BOOKING:
      return {
        ...state,
        // Add the new payment method to the existing array
        bookingData: [...state.bookingData, action.payload],
      };
    default:
      return state;
  }
};

export default bookingReducer;
