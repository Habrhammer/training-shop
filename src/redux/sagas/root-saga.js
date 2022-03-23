import { all } from "redux-saga/effects";
import {productsSaga} from "./productSagas";

export default function* rootSaga() {
   yield all([
     productsSaga(),
   ])
 }