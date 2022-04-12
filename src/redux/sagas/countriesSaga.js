import * as axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { setCountries, setCountriesError } from "../reducers/cartReducer";

const apiConnection = async () => {
  return await axios
    .get("https://training.cleverland.by/shop/countries")
    .then((response) => {
      console.log(response);
      return response;
    });
};

function* loadCountries() {
  try {
    const {data} = yield call(apiConnection);
    yield put(setCountries(data));
  } catch (error) {
    yield put(setCountriesError(error));
  }
}

export function* countriesSaga() {
   yield takeLatest("COUNTRIES_IS_LOADING", loadCountries)
}

export default countriesSaga;
