import * as axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import API from "../endpoints/api";
import { CITIES_IS_LOADING, setCities, setCitiesError } from "../reducers/cartReducer";

function* loadCities({ payload }) {
  try {
    const { data } = yield call(
      axios.post,
      API.CITIES,
      payload
    );
    yield put(setCities(data));
  } catch (error) {
    yield put(setCitiesError(error));
  }
}

export function* citiesSaga() {
  yield takeLatest(CITIES_IS_LOADING, loadCities);
}
