import { useState } from 'react';
import Cart from './Components/Cart';
import './Styles/home.css';

function App() {

  const [cartClicked, setCartClicked] = useState(false);

  const handleClose = () => {
    setCartClicked(false);
  }

  const items = [
    {
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: '22.99'
    },
    {
      name: 'Schnitzel',
      description: 'A German speciality!',
      price: '16.50'
    },
    {
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: '12.99'
    },
    {
      name: 'Green Bowl',
      description: 'Healthy... and green...',
      price: '22.99'
    },
  ]
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {cartClicked && <Cart handleClose={handleClose}/>}
      <div className='header'>
        <span className='headerName'>ReactMeals</span>
        <div className='cart' onClick={() => setCartClicked(true)} style={{cursor: 'pointer'}}>
          <span>Your cart</span>
          <div className='cartItems'>
            <span>0</span>
          </div>
        </div>
      </div>
      <section className='summary'>
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favorite meal from our broad sections of available meals and enjoy a delicious lunch or dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
      </section>
      <div className='foodList'>
        {items.map((item) => {
          return (
            <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
              <ul style={{listStyleType: 'none'}}>
                <li style={{fontWeight: 'bold'}}>{item.name}</li>
                <li style={{fontStyle: 'italic'}}>{item.description}</li>
                <li style={{color: 'red'}}>{item.price}</li>
              </ul>
              <form style={{flexDirection: 'column', display: 'flex', alignItems: 'center'}}>
                <div style={{marginBottom: '10px'}}>
                  <label style={{fontWeight: 'bold'}}>Amount</label>
                  <input type='text' style={{width: '40px', marginLeft: '20px'}}/>
                </div>
                <input type='button' value='+Add' style={{backgroundColor: '#80471c', color: 'white', borderRadius: '20px', width: '80%'}}/>
              </form>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
