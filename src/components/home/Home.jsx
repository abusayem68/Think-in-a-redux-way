import AddProductForm from './AddProductForm';
import Products from './Products';

const Home = () => {
  return (
    <div className="productWrapper">
      <Products />
      <div>
        <AddProductForm />
      </div>
    </div>
  );
};

export default Home;
