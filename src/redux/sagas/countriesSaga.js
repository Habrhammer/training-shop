import * as axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import API from "../endpoints/api";
import { COUNTRIES_IS_LOADING, setCountries, setCountriesError } from "../reducers/cartReducer";

function* loadCountries() {
  try {
    const { data } = yield call(axios.get, API.COUNTRIES);
    yield put(setCountries(data));
  } catch (error) {
    console.log(error);
    yield put(setCountriesError(error));
  }
}

export function* countriesSaga() {
  yield takeLatest(COUNTRIES_IS_LOADING, loadCountries);
}

export default countriesSaga;
