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
      console.log(response);
      return response;
    });
}

function* loadProduct({ payload }) {
  try {
    const { data } = yield call(getProductRequest, payload.id);
    console.log(data);
    yield put(setProduct(data));
  } catch (error) {
    console.log(error.response);
    yield put(setProductError(error));
  }
}

export function* productSaga() {
  yield takeLatest("LOAD_PRODUCT", loadProduct);
}

export default productSaga;
