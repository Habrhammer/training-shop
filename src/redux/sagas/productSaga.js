import * as axios from "axios";
import {
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import {
  setProduct,
  setProductError,
} from "../reducers/productReducer";


async function getProductRequest(id) {
  return await axios
    .get(`https://training.cleverland.by/shop/product/${id}`)
    .then((response) => {
      return response;
    });
}

function* loadProduct({ payload }) {
  try {
    const { data } = yield call(getProductRequest, payload.id);
    yield put(setProduct(data));
  } catch (error) {
    yield put(setProductError(error));
  }
}

export function* productSaga() {
  yield takeLatest("LOAD_PRODUCT", loadProduct);
}

export default productSaga;
