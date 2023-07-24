import { combineReducers } from "redux";
import driversReducer from "./drivers/drivers.store";

const drivers = combineReducers({
    driversData: driversReducer,
});

export default drivers;
