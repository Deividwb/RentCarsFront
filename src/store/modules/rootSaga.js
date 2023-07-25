import { all } from "redux-saga/effects";

import driversSagas from "../../components/Driver/store/drivers/drivers.sagas";

export default function* rootSaga() {
  return yield all([driversSagas]);
}
