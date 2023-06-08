import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/actions';

const Product = ({ product }) => {
  const { name, category, price, quantity, img } = product;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    if (quantity > 0) {
      dispatch(addToCart({ ...product }));
    } else {
      alert('This product stock Out!');
    }
  };
  return (
    <>
      {/* <!-- product item --> */}
      <div className="lws-productCard">
        <img
          className="lws-productImage"
          src={img}
          alt="product"
        />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{name}</h4>
          <p className="lws-productCategory">{category}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">{price}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{quantity}</span>
            </p>
          </div>
          <button
            disabled={quantity <= 0}
            onClick={() => handleAddToCart(product)}
            className="lws-btnAddToCart">
            Add To Cart
          </button>
        </div>
      </div>
      {/* <!-- product item ends --> */}
    </>
  );
};
Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
