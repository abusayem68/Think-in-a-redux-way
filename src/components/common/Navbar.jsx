import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.png';

const Navbar = ({ setIsHome, setIsCart }) => {
  const cart = useSelector((state) => state.cart);

  const totalProductQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const handleRouteChangeToHome = (e) => {
    e.preventDefault();
    setIsHome(true);
    setIsCart(false);
  };
  const handleRouteChangeToCart = (e) => {
    e.preventDefault();
    setIsHome(false);
    setIsCart(true);
  };
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a
          onClick={handleRouteChangeToHome}
          href="/">
          <img
            src={logo}
            alt="LWS"
            className="max-w-[140px]"
          />
        </a>

        <div className="flex gap-4">
          <a
            onClick={handleRouteChangeToHome}
            href="/"
            className="navHome"
            id="lws-home">
            Home
          </a>
          <a
            onClick={handleRouteChangeToCart}
            href="/cart"
            className="navCart"
            id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totalProductQuantity}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
