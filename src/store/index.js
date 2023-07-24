import { combineReducers, legacy_createStore as createStore } from "redux";

import activeMenuReducer from "./activeMenuReducer";
import drivers from "../components/Driver/store/index.store";


const rootReducer = combineReducers({
  menu: activeMenuReducer,
  drivers: drivers
});

export default createStore(rootReducer);
