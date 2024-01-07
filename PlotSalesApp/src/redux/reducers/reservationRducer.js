// categoryReducer.js
import { SET_RESERVATION_DATA } from "../actions/reservationActions";

const initialState = {
  reservationData: [],
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESERVATION_DATA:
      return {
        ...state,
        reservationData: action.payload,
      };
    default:
      return state;
  }
};

export default reservationReducer;
