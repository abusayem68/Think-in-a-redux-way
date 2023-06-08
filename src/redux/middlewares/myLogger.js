import {
  ADDTOCART,
  DECREMENTQUANTITY,
  DELETE,
  INCREMENTQUANTITY,
} from '../cart/actionTypes';
import { removeFromCart } from '../cart/actions';
import { addQuantity, removeQuantity } from '../shop/actions';

const myLogger = (store) => (next) => (action) => {
  const { shop, cart } = store.getState();
  switch (action.type) {
    case ADDTOCART: {
      const selectedProduct = shop.find(
        (product) => product.id === action.payload.product.id
      );
      if (selectedProduct.quantity >= 1) {
        store.dispatch(removeQuantity(selectedProduct.id, 1));
        return next(action);
      } else {
        alert('Stock out!');
        return;
      }
    }
    case INCREMENTQUANTITY: {
      const selectedProduct = shop.find(
        (product) => product.id === action.payload.productId
      );
      if (selectedProduct.quantity >= 1) {
        store.dispatch(removeQuantity(selectedProduct.id, 1));
        return next(action);
      } else {
        alert('Stock out!');
        return;
      }
    }
    case DECREMENTQUANTITY: {
      const selectedProductInCart = cart.find(
        (product) => product.id === action.payload.productId
      );
      if (selectedProductInCart) {
        if (selectedProductInCart.quantity > 1) {
          store.dispatch(addQuantity(selectedProductInCart.id, 1));
          return next(action);
        } else if (selectedProductInCart.quantity === 1) {
          store.dispatch(removeFromCart(selectedProductInCart.id));
          return;
        }
        return;
      }
      return;
    }
    case DELETE: {
      const selectedProductInCart = cart.find(
        (product) => product.id === action.payload.productId
      );
      if (selectedProductInCart) {
        store.dispatch(
          addQuantity(selectedProductInCart.id, selectedProductInCart.quantity)
        );
        return next(action);
      }
      return;
    }

    default:
      return next(action);
  }
};

export default myLogger;
