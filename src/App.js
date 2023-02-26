import './Styles/home.css';

function App() {
  return (
    <div>
      <div className='header'>
        <span className='headerName'>ReactMeals</span>
        <div className='cart'>
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
    </div>
  );
}

export default App;
