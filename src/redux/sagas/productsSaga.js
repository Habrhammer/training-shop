import * as axios from "axios";
import { put, call,takeLatest } from "redux-saga/effects";
import {
  setProducts,
  setError,
} from "../reducers/productsReducer";

const getProductsRequest = async () => {
  return await axios.get(`https://training.cleverland.by/shop/products`).then((response)=>{
    return response;
  });

};

function* fetchProducts() {
  try {
    const { data } = yield call(getProductsRequest);
    yield put(setProducts(data));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* productsSaga() {
  yield takeLatest("TOGGLE_IS_LOADING", fetchProducts);
}

export default productsSaga;
