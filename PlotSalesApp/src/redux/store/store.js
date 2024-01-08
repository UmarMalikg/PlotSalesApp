import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import categoriesReducer from "../reducers/categoryReducer";
import paymnentMethodReducer from "../reducers/paymentReducer";
import reservationReducer from "../reducers/reservationRducer";
import bookingReducer from "../reducers/bookingReducer";
import townPlanningReducer from "../reducers/townPlanningReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  paymentMethods: paymnentMethodReducer,
  reservations: reservationReducer,
  bookings: bookingReducer,
  townPlannings: townPlanningReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
