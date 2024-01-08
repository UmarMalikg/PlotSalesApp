import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import categoriesReducer from "../reducers/categoryReducer";
import paymnentMethodReducer from "../reducers/paymentReducer";
import reservationReducer from "../reducers/reservationRducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  paymentMethods: paymnentMethodReducer,
  reservations: reservationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
