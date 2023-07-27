import { all, call, put, takeLatest } from "redux-saga/effects";
import { createAction } from "@reduxjs/toolkit";
import api from "../../../../services/api";
import { baseUrlApi } from "../../utils/drivers.constants";
import { updateDriversData, updategetAllDrivers } from "./drivers.store";

export const getAllDrivers = createAction("drivers/getAllDrivers");
export const getByIdDrivers = createAction("drivers/getByIdDrivers");
export const deleteDrivers = createAction("drivers/deleteDrivers");
export const postDrivers = createAction("drivers/postDrivers");
export const putDrivers = createAction("drivers/putDrivers");

function* getAllDriversSagas() {
  try {
    const { data } = yield call(api.get, `/${baseUrlApi}`);
    yield put(updategetAllDrivers(data));
  } catch (error) {
    console.log("Tratar o erro:", error);
  }
}

function* getByIdDriversSagas({ payload }) {
  try {
    const { data } = yield call(
      api.get,
      `/${baseUrlApi}/${"id?id="}${payload.id}`
    );

    const prepareData = {
      ...data,
    };
    console.log("Dentro SagasByid", prepareData);
    yield put(updateDriversData(prepareData));
  } catch (error) {
    console.log("Rota:", `/${baseUrlApi}/${"id?id="}${payload.id}`);
    console.log("Tratar o erro:", error);
  }
}

function* deleteDriversSagas({ payload }) {
  try {
    yield call(api.delete, `/${baseUrlApi}/${"id?id="}${payload.id}`);
    yield put(getAllDrivers());
  } catch (error) {
    console.log("Tratar o erro:", error);
  }
}

//////imprementar/////////////////////////////////
function* postDriversSagas({ payload }) {
  //   const { establishmentReducer } = yield select();
  //   const { companyReferenceId, startValidityDate } = establishmentReducer;

  try {
    const { data } = yield call(api.post, `/${baseUrlApi}`, payload.data, {
      //   headers: {
      //     //   company_reference_id: companyReferenceId,
      //     //   start_validity_date: startValidityDate,
      //   },
    });
    console.log("DentroSagas:", data);
    yield put(getAllDrivers());
  } catch (error) {
    console.log("Tratar o erro:", error);
  }
}

function* putDriversSagas({ payload }) {
  try {
    yield call(
      api.put,
      `/${baseUrlApi}/${"id?id="}${payload.id}`,
      payload.data
    );

    yield put(getAllDrivers());
  } catch (error) {
    console.log("Tratar o erro:", error);
  }
}

export default all([
  takeLatest(getAllDrivers.type, getAllDriversSagas),
  takeLatest(getByIdDrivers.type, getByIdDriversSagas),
  takeLatest(deleteDrivers.type, deleteDriversSagas),
  takeLatest(postDrivers.type, postDriversSagas),
  takeLatest(putDrivers.type, putDriversSagas),
]);
