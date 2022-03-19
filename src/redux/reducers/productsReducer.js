import { productsAPI } from "../../api/api";

const SET_PRODUCTS = "SET_PRODUCTS";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const SET_ERROR = "SET_ERROR";

let initialState = {
  products: {
    men: [],
    women: [],
  },
  isLoading: false,
  isError: false,
  statusError: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.products,
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

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

export const toggleIsLoading = (isLoading) => {
  return {
    type: TOGGLE_IS_LOADING,
    isLoading,
  };
};

export const setError = (isError, statusError = null) => {
  console.log(statusError);
  return {
    type: SET_ERROR,
    isError,
    statusError,
  };
};

export const requestProducts = () => {
  return async (dispatch) => {
    dispatch(toggleIsLoading(true));
    let data = await productsAPI.getProducts();
    console.log(data);
    console.log("!");
    data
      ? data.status >= 200 && data.status < 400
        ? dispatch(setProducts(data.data))
        : dispatch(setError(true, data.status))
      : dispatch(setError(true));
    dispatch(toggleIsLoading(false));
  };
};
