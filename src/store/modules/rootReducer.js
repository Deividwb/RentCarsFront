import { combineReducers } from "redux";

import activeMenuReducer from "./../activeMenuReducer";
import drivers from "../../components/Driver/store/index.store";

export default combineReducers({
  menu: activeMenuReducer,
  drivers: drivers,
});
