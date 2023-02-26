import { useContext } from "react";
import cartContext from "./cartContext";

const Header = (props) => {

  const cartCtx = useContext(cartContext);

  const noOfItems = cartCtx.items.length;

  return (
    <div className='header'>
      <span className='headerName'>ReactMeals</span>
      <div className='cart' onClick={props.handleOpen} style={{ cursor: 'pointer' }}>
        <span>Your cart</span>
        <div className='cartItems'>
          <span>{noOfItems}</span>
        </div>
      </div>
    </div>
  )
}

export default Header;