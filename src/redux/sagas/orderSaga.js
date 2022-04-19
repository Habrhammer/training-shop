import * as axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import API from "../endpoints/api";
import { REQUEST_IS_SENDING, setRequestError, setRequestSuccess } from "../reducers/cartReducer";

function* postOrder({ payload }) {
  try {
    const { data } = yield call(axios.post, API.CART, {
      ...payload,
    });
    yield put(setRequestSuccess(data));
  } catch (error) {
    yield put(setRequestError(error));
  }
}

export function* orderSaga() {
  yield takeLatest(REQUEST_IS_SENDING, postOrder);
}
