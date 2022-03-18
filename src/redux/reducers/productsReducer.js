import { productsAPI } from "../../api/api";

const SET_PRODUCTS = "SET_PRODUCTS";

let initialState = {
  products: {
    men: [],
    women: [],
  },
  isLoading: false,
  isError: false,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.products,
      };
    }
    default: {
      return state;
  }
  }
};

export const setProducts = (products) => {

  return {
    type: SET_PRODUCTS,
    products,
  };
};

export const requestProducts = () => {
  return async (dispatch) => {
    let data = await productsAPI.getProducts();
    console.log(data);
    dispatch(setProducts(data));
  };
};




