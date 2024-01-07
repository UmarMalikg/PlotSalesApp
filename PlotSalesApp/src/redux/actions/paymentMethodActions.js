// categoryActions.js
import axios from "axios";
import { api } from "../../api/api";

// Action Types
export const SET_PAYMENT_METHOD_DATA = "SET_PAYMENT_METHOD_DATA";
export const SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD";
export const ADD_PAYMENT_METHOD = "ADD_PAYMENT_METHOD";

// Action Creators
export const setPaymentMethodData = (paymentMethodData) => ({
  type: SET_PAYMENT_METHOD_DATA,
  payload: paymentMethodData,
});

export const selectPaymentMethod = (paymentId) => ({
  type: SELECT_PAYMENT_METHOD,
  payload: paymentId,
});

export const addPaymentMethodDataToStore = (paymentMethodData) => ({
  type: ADD_PAYMENT_METHOD,
  payload: paymentMethodData,
});

// Thunk Action to Fetch Category Data
export const fetchPaymentMethodData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${api}/paymentMethods`);
      dispatch(setPaymentMethodData(response.data));
    } catch (error) {
      console.error("Error fetching Payment Method data:", error);
    }
  };
};

export const addPaymentMethod = (paymentMethodData) => {
  return async (dispatch) => {
    console.log(paymentMethodData);
    try {
      // Send a POST request to your server's API endpoint to add the employee
      const response = await axios.post(
        `${api}/paymentMethods`,
        paymentMethodData,
        {}
      );

      dispatch(addPaymentMethodDataToStore(response.data));
    } catch (error) {
      console.error("Error adding an payment Method:", error);
    }
  };
};
