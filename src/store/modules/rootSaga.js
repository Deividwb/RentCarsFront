import { all } from "redux-saga/effects";

import driversSagas from "../../components/Driver/store/drivers/drivers.sagas";
import carsSagas from "../../components/Cars/store/cars/cars.sagas";

export default function* rootSaga() {
  return yield all([driversSagas, carsSagas]);
}
