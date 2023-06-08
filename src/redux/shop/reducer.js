import { ADDPRODUCT, ADDQUANTITY, REMOVEQUANTITY } from './actionTypes';

const initialState = [];

const nextId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(maxId, product.id),
    0
  );
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return [...state, { id: nextId(state), ...action.payload.product }];
    case ADDQUANTITY:
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            quantity: product.quantity + action.payload.quantity,
          };
        }
        return product;
      });
    case REMOVEQUANTITY:
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            quantity: product.quantity - action.payload.quantity,
          };
        }
        return product;
      });
    default:
      return state;
  }
};

export default reducer;
