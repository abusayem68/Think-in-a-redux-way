import { useSelector } from 'react-redux';
import Product from './Product';

const Products = () => {
  const products = useSelector((state) => state.shop);

  let content = '';
  if (products.length > 0) {
    content = products.map((product) => (
      <Product
        key={product.id}
        product={product}
      />
    ));
  } else {
    content = <p>No product found!</p>;
  }
  return (
    <>
      {/* <!-- products container --> */}
      <div
        className="productContainer"
        id="lws-productContainer">
        {content}
      </div>
      {/* <!-- products container ends --> */}
    </>
  );
};

export default Products;
