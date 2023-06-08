import { useState } from 'react';
import Cart from './components/cart/Cart';
import Navbar from './components/common/Navbar';
import Home from './components/home/Home';

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isCart, setIsCart] = useState(false);
  return (
    <>
      <Navbar
        setIsHome={setIsHome}
        setIsCart={setIsCart}
      />
      <main className="py-16">
        {isHome && <Home />}
        {isCart && <Cart />}
      </main>
    </>
  );
}

export default App;
