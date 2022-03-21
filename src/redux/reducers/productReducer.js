import { productsAPI } from "../../api/api";

const SET_PRODUCT = "SET_PRODUCT";

const initialState = {

   product: {}
}

export const productReducer = (state = initialState, action) => {
   console.log(action.product);
   switch (action.type) {
     case SET_PRODUCT: {
       return {
         ...state, product: action.product
       };
     }
     default: {
       return state;
   }
   }
 };

 export const setProduct = (product) => {
console.log(product);
   return {
     type: SET_PRODUCT,
     product,
   };
 };

 export const requestProduct = (id) => {
   return async (dispatch) => {
     let data = await productsAPI.getProduct(id);
     console.log(data);
     dispatch(setProduct(data));
   };
 };

