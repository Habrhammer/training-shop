import * as axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { setRequestError, setRequestSuccess } from "../reducers/cartReducer";

const apiConnection = async (data) => {
  return await axios
    .post("https://training.cleverland.by/shop/cart", {
      ...data,
    })
    .then((response) => {
      console.log(response);
      return response;
    });
};

function* postOrder({ payload }) {
  console.log("searchParams", payload);
  try {
    const { data } = yield call(apiConnection, payload);
    console.log("postOrder", data);
    yield put(setRequestSuccess(data));
  } catch (error) {
     console.log(error)
    yield put(setRequestError(error));
  }
}

export function* orderSaga() {
  yield takeLatest("REQUEST_IS_SENDING", postOrder);
}
