import { ADDPRODUCT, ADDQUANTITY, REMOVEQUANTITY } from './actionTypes';

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: {
      product,
    },
  };
};

export const addQuantity = (productId, quantity) => {
  return {
    type: ADDQUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
};

export const removeQuantity = (productId, quantity) => {
  return {
    type: REMOVEQUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
};
