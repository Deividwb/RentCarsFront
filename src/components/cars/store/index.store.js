import { combineReducers } from "redux";
import carsReducer from "./cars/cars.store";

const cars = combineReducers({
  carsData: carsReducer,
});

export default cars;
