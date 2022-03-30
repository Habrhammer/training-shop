import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { productsReducer } from "./productsReducer";
import { reviewFormReducer } from "./reviewFormReducer";
import { formsReducer } from "./subscribeReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  product: productReducer,
  subscribeForm: formsReducer,
  footerSubscribeForm: formsReducer,
  reviewForm: reviewFormReducer
});
