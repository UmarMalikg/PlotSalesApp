// paymentMethodReducer.js
import {
  SET_PAYMENT_METHOD_DATA,
  SELECT_PAYMENT_METHOD,
  ADD_PAYMENT_METHOD,
} from "../actions/paymentMethodActions";

const initialState = {
  paymentMethodData: [],
  selectedPaymentMethod: null, // Initially, no payment method is selected
};

const paymentMethodReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAYMENT_METHOD_DATA:
      return {
        ...state,
        paymentMethodData: action.payload,
      };
    case SELECT_PAYMENT_METHOD:
      return {
        ...state,
        selectedPaymentMethod: action.payload,
      };
    case ADD_PAYMENT_METHOD:
      return {
        ...state,
        // Add the new payment method to the existing array
        paymentMethodData: [...state.paymentMethodData, action.payload],
      };
    default:
      return state;
  }
};

export default paymentMethodReducer;
