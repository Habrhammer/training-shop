import { all, spawn } from "redux-saga/effects";
import { citiesSaga } from "./citiesSaga";
import countriesSaga from "./countriesSaga";
import formSaga from "./formSaga";
import { orderSaga } from "./orderSaga";
import { productSaga } from "./productSaga";
import { productsSaga } from "./productsSaga";
import reviewFormSaga from "./reviewFormSaga";


export default function* rootSaga() {
  yield all([
    spawn(productsSaga),
    spawn(productSaga),
    spawn(formSaga),
    spawn(reviewFormSaga),
    spawn(countriesSaga),
    spawn(citiesSaga),
    spawn(orderSaga),
  ]);
}
