import {
  ADDTOCART,
  DECREMENTQUANTITY,
  DELETE,
  INCREMENTQUANTITY,
} from './actionTypes';

export const addToCart = (product) => {
  return {
    type: ADDTOCART,
    payload: {
      product,
    },
  };
};

export const incrementQuantity = (productId) => {
  return {
    type: INCREMENTQUANTITY,
    payload: {
      productId,
    },
  };
};

export const decrementQuantity = (productId) => {
  return {
    type: DECREMENTQUANTITY,
    payload: {
      productId,
    },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: DELETE,
    payload: {
      productId,
    },
  };
};
