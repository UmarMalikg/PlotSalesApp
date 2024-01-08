// paymentMethodReducer.js
import {
  SET_RESERVATION_DATA,
  SELECT_RESERVATION_DATA,
  ADD_RESERVATION,
} from "../actions/reservationActions";

const initialState = {
  reservationData: [],
  selectedReservation: null, // Initially, no payment method is selected
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESERVATION_DATA:
      return {
        ...state,
        reservationData: action.payload,
      };
    case SELECT_RESERVATION_DATA:
      return {
        ...state,
        selectedReservation: action.payload,
      };
    case ADD_RESERVATION:
      return {
        ...state,
        // Add the new payment method to the existing array
        reservationData: [...state.reservationData, action.payload],
      };
    default:
      return state;
  }
};

export default reservationReducer;
