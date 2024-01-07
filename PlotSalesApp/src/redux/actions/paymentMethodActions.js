// categoryActions.js
import axios from "axios";
import { api } from "../../api/api";

// Action Types
export const SET_PAYMENT_METHOD_DATA = "SET_PAYMENT_METHOD_DATA";

// Action Creators
export const setPaymentMethodData = (paymentMethodData) => ({
  type: SET_PAYMENT_METHOD_DATA,
  payload: paymentMethodData,
});

// Thunk Action to Fetch Category Data
export const fetchReservationData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${api}/paymentMethods`);
      dispatch(setPaymentMethodData(response.data));
    } catch (error) {
      console.error("Error fetching Categories data:", error);
    }
  };
};
