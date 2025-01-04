import { all, call, put, takeLatest } from "redux-saga/effects";
import { createAction } from "@reduxjs/toolkit";
import api from "../../../../services/api";
import { clearCars, updateCarsData, updategetAllCars } from "./cars.store";
import { toast } from "react-toastify";
import { baseUrlApi } from "../../utils/cars.constants";

export const getAllCars = createAction("cars/getAllCars");
export const getByIdCars = createAction("cars/getByIdCars");
export const deleteCars = createAction("cars/deleteCars");
export const postCars = createAction("cars/postCars");
export const putCars = createAction("cars/putCars");

function* getAllCarsSagas() {
  try {
    const { data } = yield call(api.get, `/${baseUrlApi}`);

    yield put(clearCars());
    yield put(updategetAllCars(data));
  } catch (error) {
    console.log("Tratar o erro:", error);
  }
}

function* getByIdCarsSagas({ payload }) {
  try {
    const { data } = yield call(
      api.get,
      `/${baseUrlApi}/${"id?id="}${payload.id}`
    );

    const prepareData = {
      ...data,
    };

    yield put(updateCarsData(prepareData));
  } catch (error) {
    console.log("Tratar o erro:", error);
  }
}

function* deleteCarsSagas({ payload }) {
  try {
    yield call(api.delete, `/${baseUrlApi}/${"id?id="}${payload.id}`);

    yield put(getAllCars());
    toast.success("Sucesso");
  } catch (error) {
    console.log("Tratar o erro:", error);
  }
}

function* postCarsSagas({ payload }) {
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
    yield put(getAllCars());
    toast.success("Sucesso");
  } catch (error) {
    console.log("Tratar o erro:", error);
  }
}

function* putCarsSagas({ payload }) {
  try {
    yield call(
      api.put,
      `/${baseUrlApi}/${"id?id="}${payload.id}`,
      payload.data
    );

    yield put(getAllCars());
    toast.success("Sucesso");
  } catch (error) {
    console.log("Tratar o erro:", error);
  }
}

export default all([
  takeLatest(getAllCars.type, getAllCarsSagas),
  takeLatest(getByIdCars.type, getByIdCarsSagas),
  takeLatest(deleteCars.type, deleteCarsSagas),
  takeLatest(postCars.type, postCarsSagas),
  takeLatest(putCars.type, putCarsSagas),
]);
