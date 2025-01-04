import { combineReducers } from "redux";

import activeMenuReducer from "./../activeMenuReducer";
import drivers from "../../components/Driver/store/index.store";
import cars from "../../components/Cars/store/index.store";

export default combineReducers({
  menu: activeMenuReducer,
  drivers: drivers,
  cars: cars,
});
