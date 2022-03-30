import { all, spawn } from "redux-saga/effects";
import formSaga from "./formSaga";
import { productSaga } from "./productSaga";
import { productsSaga } from "./productsSaga";
import reviewFormSaga from "./reviewFormSaga";


export default function* rootSaga() {
  yield all([
    spawn(productsSaga),
    spawn(productSaga),
    spawn(formSaga),
    spawn(reviewFormSaga),
  ]);
}
