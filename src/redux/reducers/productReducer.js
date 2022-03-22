import { productsAPI } from "../../api/api";

const SET_PRODUCT = "SET_PRODUCT";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const SET_ERROR = "SET_ERROR";

const initialState = {

   product: {},
   isLoading: false,
   isError: false,
   statusError: null,
}

export const productReducer = (state = initialState, action) => {
   console.log(action.product);
   switch (action.type) {
     case SET_PRODUCT: {
       return {
         ...state, product: action.product
       };
     }
     case TOGGLE_IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        isError: action.isError,
        statusError: action.statusError,
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
     dispatch(setProduct(data));
   };
 };

