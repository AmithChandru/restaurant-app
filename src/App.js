import { useState } from 'react';
import Cart from './Components/Cart';
import CartProvider from './Components/cartProvider';
import FoodList from './Components/FoodList';
import Header from './Components/Header';
import Summary from './Components/Summary';
import './Styles/home.css';

function App() {

  const [cartClicked, setCartClicked] = useState(false);

  const handleOpen = () => {
    setCartClicked(true);
  }

  const handleClose = () => {
    setCartClicked(false);
  }

  return (
    <CartProvider>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {cartClicked && <Cart handleClose={handleClose} />}
        <Header handleOpen={handleOpen} />
        <Summary />
        <FoodList />
      </div>
    </CartProvider>
  );
}

export default App;
