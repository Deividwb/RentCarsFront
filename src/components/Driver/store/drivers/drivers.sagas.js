import { all, call, put, takeLatest } from "redux-saga/effects";
import { createAction } from "@reduxjs/toolkit";
import api from "../../../../services/api";
import { baseUrlApi } from "../../utils/drivers.constants";
import { updateDriversData, updateGetAllDrivers } from "./drivers.store";
import { toast } from "react-toastify";

export const getAllDrivers = createAction("drivers/getAllDrivers");
export const getByIdDrivers = createAction("drivers/getByIdDrivers");
export const getViaCep = createAction("drivers/getViaCep");
export const deleteDrivers = createAction("drivers/deleteDrivers");
export const postDrivers = createAction("drivers/postDrivers");
export const putDrivers = createAction("drivers/putDrivers");

function* getAllDriversSagas() {
  try {
    const { data } = yield call(api.get, `/${baseUrlApi}`);

    yield put(updateGetAllDrivers(data));
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
    yield put(updateDriversData(prepareData));
  } catch (error) {
    console.log("Tratar o erro:", error);
  }
}

function* deleteDriversSagas({ payload }) {
  try {
    const resp = yield call(
      api.delete,
      `/${baseUrlApi}/${"id?id="}${payload.id}`
    );

    yield put(getAllDrivers());
    toast.success(resp.data);
  } catch (error) {
    console.log("Tratar o erro:", error);
  }
}

function* postDriversSagas({ payload }) {
  try {
    const resp = yield call(api.post, `/${baseUrlApi}`, payload.data);

    toast.success(resp.data);
  } catch (error) {
    toast.success("Sucesso");
  }
}

function* putDriversSagas({ payload }) {
  try {
    const data = yield call(
      api.put,
      `/${baseUrlApi}/${"id?id="}${payload.id}`,
      payload.data
    );
    yield put(updateGetAllDrivers(data));
  } catch (error) {
    console.log("Tratar o erro:", error);
  }
}

function* getViaCepSagas({ payload }) {
  try {
    const { data } = yield call(
      api.get,
      `https://viacep.com.br/ws/${payload.cep}/json/`
    );
    const prepareData = {
      ...data,
      city: data.localidade,
      district: data.bairro,
      street: data.logradouro,
    };

    if (!prepareData.erro) {
      yield put(updateDriversData(prepareData));
    } else {
      toast.error("Atenção: Confira o CEP digitado!!");
    }
  } catch (error) {
    toast.error("CEP não Existe");
  }
}

export default all([
  takeLatest(getAllDrivers.type, getAllDriversSagas),
  takeLatest(getByIdDrivers.type, getByIdDriversSagas),
  takeLatest(getViaCep.type, getViaCepSagas),
  takeLatest(deleteDrivers.type, deleteDriversSagas),
  takeLatest(postDrivers.type, postDriversSagas),
  takeLatest(putDrivers.type, putDriversSagas),
]);
