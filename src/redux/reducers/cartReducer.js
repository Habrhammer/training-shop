const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const SET_COUNTRIES = "SET_COUNTRIES";
const COUNTRIES_IS_LOADING = "COUNTRIES_IS_LOADING";
const SET_COUNTRIES_ERROR = "SET_COUNTRIES_ERROR";
const CITIES_IS_LOADING = "CITIES_IS_LOADING";
const SET_CITIES = "SET_CITIES";
const SET_CITIES_ERROR = "SET_CITIES_ERROR";
const REQUEST_IS_SENDING = "REQUEST_IS_SENDING";
const SET_REQUEST_SUCCESS = "SET_REQUEST_SUCCESS";
const SET_REQUEST_ERROR = "SET_REQUEST_ERROR";
const CART_RESET = "CART_RESET";

const initialState = {
  order: [],
  countries: [],
  cities: [],
  isLoading: false,
  error: null,
  message: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        order: [...state.order, action.product],
      };
    }
    case REMOVE_PRODUCT_FROM_CART: {
      return {
        ...state,
        order: state.order.filter((p) => p.id !== action.id),
      };
    }
    case INCREASE_QUANTITY: {
      return {
        ...state,
        order: state.order.map((product) => {
          return product.id === action.id
            ? { ...product, quantity: product.quantity + 1 }
            : product;
        }),
      };
    }
    case DECREASE_QUANTITY: {
      return {
        ...state,
        order: state.order.map((product) => {
          return product.id === action.id
            ? {
                ...product,
                quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
              }
            : product;
        }),
      };
    }
    case COUNTRIES_IS_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SET_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
        isLoading: false,
        isError: null,
      };
    }
    case SET_COUNTRIES_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
        countries: [],
      };
    }
    case CITIES_IS_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SET_CITIES: {
      return {
        ...state,
        cities: action.payload,
        isLoading: false,
        isError: null,
      };
    }
    case SET_CITIES_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        error:action.payload,
        cities: [],
      };
    }
    case REQUEST_IS_SENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SET_REQUEST_SUCCESS: {
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        isError: null,
      };
    }
    case SET_REQUEST_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    }
    case CART_RESET: {
      return {
        order: [],
        countries: [],
        cities: [],
        isLoading: false,
        error: null,
        message: null,
      }
    }
    default: {
      return state;
    }
  }
};

export const addToCart = (product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    id,
  };
};

export const increaseQuantity = (id, sum) => {
  return {
    type: INCREASE_QUANTITY,
    id,
    sum,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: DECREASE_QUANTITY,
    id,
  };
};

export const setCountries = (countries) => {
  return {
    type: SET_COUNTRIES,
    payload: countries,
  };
};

export const countriesIsLoading = () => {
  return {
    type: COUNTRIES_IS_LOADING,
  };
};

export const setCountriesError = (error) => {
  return {
    type: SET_COUNTRIES_ERROR,
    payload: error,
  };
};

export const setCities = (cities) => {
  return {
    type: SET_CITIES,
    payload: cities,
  };
};

export const setCitiesError = (error) => {
  return {
    type: SET_CITIES_ERROR,
    payload: error,
  };
};

export const requestIsSending = () => {
  return {
    type: REQUEST_IS_SENDING,
  };
};

export const setRequestSuccess = (message) => {
  return {
    type: SET_REQUEST_SUCCESS,
    payload: message,
  };
};

export const setRequestError = (error) => {
  return {
    type: SET_REQUEST_ERROR,
    payload: error,
  };
};

export const cartReset = () => {
  return {
    type: CART_RESET
  }
}

export const requestCountries = () => {
  return countriesIsLoading();
};

export const requestCities = (searchParam) => {
  return { type: CITIES_IS_LOADING, payload: searchParam };
};

export const postOrderRequest = (order) => {
  return { type: REQUEST_IS_SENDING, payload: order };
};
