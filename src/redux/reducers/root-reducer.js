import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { productsReducer } from "./productsReducer";



export const rootReducer = combineReducers(
   {
      cart: cartReducer,
      products: productsReducer,
      product: productReducer
   }
)


