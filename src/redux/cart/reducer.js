import {
  ADDTOCART,
  DECREMENTQUANTITY,
  DELETE,
  INCREMENTQUANTITY,
} from './actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART: {
      const productExist = state.find(
        (product) => product.id === action.payload?.product?.id
      );
      if (productExist) {
        return state.map((product) => {
          if (product.id === action.payload.product.id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
      } else {
        return [...state, { ...action.payload.product, quantity: 1 }];
      }
    }
    case INCREMENTQUANTITY: {
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    }
    case DECREMENTQUANTITY: {
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    }
    case DELETE: {
      return state.filter((product) => product.id !== action.payload.productId);
    }
    default:
      return state;
  }
};

export default reducer;
