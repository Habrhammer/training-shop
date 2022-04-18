import * as axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { setRequestError, setRequestSuccess } from "../reducers/cartReducer";

const apiConnection = async (data) => {
  return await axios
    .post("https://training.cleverland.by/shop/cart", {
      ...data,
    })
    .then((response) => {
      return response;
    });
};

function* postOrder({ payload }) {
  try {
    const { data } = yield call(apiConnection, payload);
    yield put(setRequestSuccess(data));
  } catch (error) {
    yield put(setRequestError(error));
  }
}

export function* orderSaga() {
  yield takeLatest("REQUEST_IS_SENDING", postOrder);
}
