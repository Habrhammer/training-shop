const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";

const initialState = {
  order: [],
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


export const increaseQuantity = (id,sum) => {
   return {
      type: INCREASE_QUANTITY,
      id,sum
   }
}

export const decreaseQuantity = (id) => {
   return {
      type: DECREASE_QUANTITY,
      id
   }
}