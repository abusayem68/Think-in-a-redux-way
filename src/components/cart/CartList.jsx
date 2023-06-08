import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartList = () => {
  const cart = useSelector((state) => state.cart);

  // decide what to render
  let content = '';
  if (cart.length > 0) {
    content = cart.map((product) => (
      <CartItem
        key={product.id}
        product={product}
      />
    ));
  } else {
    content = <p>No product in cart </p>;
  }
  return <div className="space-y-6">{content}</div>;
};

export default CartList;
