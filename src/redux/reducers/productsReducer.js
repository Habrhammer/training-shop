const SET_PRODUCTS = "SET_PRODUCTS";
export const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
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
    case TOGGLE_IS_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.products,
        isLoading: false,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        isLoading: false,
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

export const toggleIsLoading = () => {
  return {
    type: TOGGLE_IS_LOADING,
  };
};

export const setError = (isError, statusError = null) => {
  return {
    type: SET_ERROR,
    isError,
    statusError,
  };
};



export const requestProducts = () => (dispatch) => {
  dispatch(toggleIsLoading());
};

/* export const requestProducts = () => {
  return async (dispatch) => {
    dispatch(toggleIsLoading(true));
    let data = await productsAPI.getProducts();
    data
      ? data.status >= 200 && data.status < 400
        ? dispatch(setProducts(data.data))
        : dispatch(setError(true, data.status))
      : dispatch(setError(true));
    dispatch(toggleIsLoading(false));
  };
}; */
