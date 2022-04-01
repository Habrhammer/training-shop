import { call, put, takeLatest } from "redux-saga/effects";
import * as axios from "axios";
import { setProduct } from "../reducers/productReducer";

const apiConnection = async (data) => {
  return await axios
    .post("https://training.cleverland.by/shop/product/review", {
      id: data.id,
      name: data.name,
      text: data.review,
      rating: +data.rating,
    })
    .then((response) => {
      return response;
    });
};

// const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

function* postForm(action) {
  try {
    const data = yield call(apiConnection, action.data);
    yield put(setProduct(data.data));
    yield put({ type: "REVIEW_FORM_SUCCESS", data: data });
    // yield call(delay, 1500);
    // yield put({ type: "REVIEW_FORM_SUCCESS", data: {} });
  } catch (e) {

    // yield put({ type: "REVIEW_FORM_FAILED", error: e.response });
    yield put({ type: "REVIEW_FORM_FAILED", error: true });
   
  }
}

function* reviewFormSaga() {
  yield takeLatest("REVIEW_FORM_REQUESTED", postForm);
}

export default reviewFormSaga;
