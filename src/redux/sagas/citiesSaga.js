import * as axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { setCities, setCitiesError } from "../reducers/cartReducer";

const apiConnection = async ({city, country}) => {
   return await axios
     .post("https://training.cleverland.by/shop/search/cities", 
     {
       city: city,
       country: country,
     }
     )
     .then((response) => {
       return response;
     })
  
 };


 function* loadCities({payload}) {
  try {
    const {data} = yield call(apiConnection, payload);
    yield put(setCities(data));
  } catch (error) {
    yield put(setCitiesError(error));
  }
}


export function* citiesSaga() {
   yield takeLatest("CITIES_IS_LOADING", loadCities)
}