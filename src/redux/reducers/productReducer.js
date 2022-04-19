export const LOAD_PRODUCT = "LOAD_PRODUCT";
export const SET_PRODUCT = "SET_PRODUCT";
export const SET_PRODUCT_ERROR = "SET_PRODUCT_ERROR";

const initialState = {
  product: {},
  isLoading: false,
  isError: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SET_PRODUCT: {
      return {
        ...state,
        product: action.product,
        isLoading: false,
        isError: null,
      };
    }

    case SET_PRODUCT_ERROR: {
      return {
        ...state,
        isError: action.payload,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export const setProduct = (product) => ({
  type: SET_PRODUCT,
  product,
});

export const setProductError = (error) => ({
  type: SET_PRODUCT_ERROR,
  payload: error,
});

export const getProduct = (id) => ({ type: LOAD_PRODUCT, payload: { id } });
