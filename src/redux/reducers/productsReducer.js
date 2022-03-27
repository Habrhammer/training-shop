const SET_PRODUCTS = "SET_PRODUCTS";
export const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const SET_ERROR = "SET_ERROR";

let initialState = {
  products: {
    men: [],
    women: [],
  },
  isLoading: false,
  isError: null,
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
        isError: null
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
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

export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error
  };
};



export const requestProducts = () => {
  return toggleIsLoading();
};


