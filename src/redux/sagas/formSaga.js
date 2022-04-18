import * as axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

export const apiConnection = async (email) => {
  return await axios
    .post("https://training.cleverland.by/shop/email", {
      mail: email,
    })
    .then((response) => {
      return response;
    });
};

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

function* postForm(action) {

  try {
    const data = yield call(apiConnection, action.data.email);
    yield put({ type: "POST_FORM_SUCCESS", data, formId: action.formId });
    yield call(delay, 2000);
    yield put({ type: "POST_FORM_SUCCESS", data: null, formId: action.formId });
  } catch (e) {
    // yield put({
    //   type: "POST_FORM_FAILED",
    //   error: e.response,
    //   formId: action.formId,
    // });
    yield put({
      type: "POST_FORM_FAILED",
      error: true,
      formId: action.formId,
    });
  }
}

function* formSaga() {
  yield takeLatest("POST_FORM_REQUESTED", postForm);
}

export default formSaga;
