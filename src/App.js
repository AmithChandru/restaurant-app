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
    </div>
  );
}

export default App;
