import { all, call, put, takeLatest } from "redux-saga/effects";
import { createAction } from "@reduxjs/toolkit";
import api from "../../../../services/api";
import { baseUrlApi } from "../../utils/drivers.constants";
import { updategetAllDrivers } from "./drivers.store";

export const getAllDrivers = createAction("drivers/getAllDrivers");
export const postDrivers = createAction("drivers/postDrivers");

// export const getByIdEfdSocialSecurityContribution = createAction(
//   "efdSocialSecurityContribution/getByIdEfdSocialSecurityContribution"
// );
// export const deleteEfdSocialSecurityContribution = createAction(
//   "efdSocialSecurityContribution/deleteEfdSocialSecurityContribution"
// );
// export const getAllEfdSocialSecurityContribution = createAction(
//   "efdSocialSecurityContribution/getAllEfdSocialSecurityContribution"
// );
// export const createEfdSocialSecurityContribution = createAction(
//   "efdSocialSecurityContribution/createEfdSocialSecurityContribution"
// );
// export const updateEfdSocialSecurityContribution = createAction(
//   "efdSocialSecurityContribution/updateEfdSocialSecurityContribution"
// );
// export const getModalEfdSocialSecurityContribution = createAction(
//   "efdSocialSecurityContribution/getModalEfdSocialSecurityContribution"
// );

function* getAllDriversSagas() {
  try {
    const { data } = yield call(api.get, `/${baseUrlApi}`);
    yield put(updategetAllDrivers(data));
  } catch (error) {
    console.log("Tratar o erro:", error);
  }
}

function* postDriversSagas() {
  //   const { establishmentReducer } = yield select();
  //   const { companyReferenceId, startValidityDate } = establishmentReducer;

  try {
    const { data } = yield call(api.post, `/${baseUrlApi}`, {
      //   headers: {
      //     //   company_reference_id: companyReferenceId,
      //     //   start_validity_date: startValidityDate,
      //   },
    });
    console.log("DentroSagas:", data);
    // yield put(updategetAllDrivers(data));
  } catch (error) {
    // yield put(updategetAllDrivers([]));
  }
}

// function* createEfdSocialSecurityContributionSagas({ payload }) {
//   const { establishmentReducer } = yield select();
//   const { companyReferenceId, startValidityDate } = establishmentReducer;
//   yield call(
//     apiTax.post,
//     `/${baseUrlApi}/${baseUrlRouteItems}/${payload.parentId}/${baseUrlRouteAdjustment}`,
//     payload.data,
//     {
//       headers: {
//         company_reference_id: companyReferenceId,
//         start_validity_date: startValidityDate,
//       },
//     }
//   );
//   //   yield put(postEfdTableContribution());
// }

// function* updateEfdSocialSecurityContributionSagas({ payload }) {
//   const { establishmentReducer } = yield select();
//   const { companyReferenceId, startValidityDate } = establishmentReducer;
//   yield call(
//     apiTax.put,
//     `/${baseUrlApi}/${baseUrlRouteItems}/${payload.parentId}/${baseUrlRouteAdjustment}/${payload.id}`,
//     payload.data,
//     {
//       headers: {
//         company_reference_id: companyReferenceId,
//         start_validity_date: startValidityDate,
//       },
//     }
//   );
//   //   yield put(postEfdTableContribution());
// }

// function* deleteEfdSocialSecurityContributionSagas({ payload }) {
//   const { establishmentReducer } = yield select();
//   const { companyReferenceId, startValidityDate } = establishmentReducer;

//   yield call(
//     apiTax.delete,
//     `/${baseUrlApi}/${baseUrlRouteItems}/${payload.parentId}/${baseUrlRouteAdjustment}/${payload.id}`,
//     payload.data,
//     {
//       headers: {
//         company_reference_id: companyReferenceId,
//         start_validity_date: startValidityDate,
//       },
//     }
//   );
//   //   yield put(postEfdTableContribution());
// }

// function* getModalEfdSocialSecurityContributionSagas({ payload }) {
//   const { data } = yield call(
//     apiTax.get,
//     `/${baseUrlApi}/${baseUrlRoute_Items}/${payload.parentId}/${baseUrlRouteInvoices}`
//   );
//   yield put(updateOctoVisibilityModal(data));
// }

export default all([
  takeLatest(getAllDrivers.type, getAllDriversSagas),
  takeLatest(postDrivers.type, postDriversSagas),

  //   takeLatest(
  //     createEfdSocialSecurityContribution.type,
  //     withDefaultInterceptor(createEfdSocialSecurityContributionSagas)
  //   ),
  //   takeLatest(
  //     deleteEfdSocialSecurityContribution.type,
  //     withDefaultInterceptor(deleteEfdSocialSecurityContributionSagas)
  //   ),
  //   takeLatest(
  //     updateEfdSocialSecurityContribution.type,
  //     withDefaultInterceptor(updateEfdSocialSecurityContributionSagas)
  //   ),
  //   takeLatest(
  //     getModalEfdSocialSecurityContribution.type,
  //     withInterceptor(getModalEfdSocialSecurityContributionSagas)
  //   ),
]);
