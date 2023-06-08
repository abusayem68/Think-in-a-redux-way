import { useDispatch } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../redux/cart/actions';
const CartItem = ({ product }) => {
  const { img, name, category, id, quantity, price } = product;
  const dispatch = useDispatch();

  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };
  const handleDeleteFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const calculatedPrice = (quantity, price) => {
    return quantity * price;
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img
          className="lws-cartImage"
          src={img}
          alt="product"
        />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleIncrementQuantity(id)}
            className="lws-incrementQuantity">
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            onClick={() => handleDecrementQuantity(id)}
            className="lws-decrementQuantity">
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT{' '}
          <span className="lws-calculatedPrice">
            {calculatedPrice(quantity, price)}
          </span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          onClick={() => handleDeleteFromCart(id)}
          className="lws-removeFromCart">
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
