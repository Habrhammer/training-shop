import { put, takeEvery } from "redux-saga/effects";
import { productsAPI } from "../../api/api";
import {
  setProducts,
  setError,
  TOGGLE_IS_LOADING,
} from "../reducers/productsReducer";

const fetchAsync = async (func) => {
  const response = await func();
  console.log(response);
  if (response.status >= 200 && response.status < 400) {
    return await response;
  }
  throw response.status;
};

function* fetchProducts() {
  try {
    const { data } = yield fetchAsync(productsAPI.getProducts);
    yield put(setProducts(data));
  } catch (error) {
    yield put(setError(true, error));
  }
}

export function* productsSaga() {
  yield takeEvery(TOGGLE_IS_LOADING, fetchProducts);
}

export default productsSaga;
