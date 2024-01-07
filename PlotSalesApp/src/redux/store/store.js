import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import categoriesReducer from "../reducers/categoryReducer";
import reservationReducer from "../reducers/reservationRducer";
import paymnentMethodReducer from "../reducers/paymentReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  reservations: reservationReducer,
  paymentMethods: paymnentMethodReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
