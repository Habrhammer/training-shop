import { all, spawn } from "redux-saga/effects";
import { productSaga } from "./productSaga";
import { productsSaga } from "./productsSaga";

export default function* rootSaga() {
  yield all([spawn(productsSaga), spawn(productSaga)]);
}
