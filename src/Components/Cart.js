import { useContext } from 'react';
import './Cart.css';
import cartContext from './cartContext';
import Modal from './Modal';

const Cart = (props) => {

  const cartCtx = useContext(cartContext);

  const cartItems = cartCtx.items;
  const amountItems = cartCtx.amount;

  return (
    <Modal>
      <ul className="cart-items">
        {cartItems.map((item) => {
          let amount = amountItems.get(item.id);
          console.log(amount);
          return (
            <div className='item'>
              <div className='details'>
                <span>{item[0].name}</span>
                <div>
                  <span>{item[0].price}</span>
                  <span style={{marginLeft: '30px'}}>X {amount}</span>
                </div>
              </div>
              <div className='buttons'>
                <button>-</button>
                <button style={{marginLeft: '20px'}}>+</button>
              </div>
            </div>
          )
        })}
      </ul>
      <div className="total">
        <span>Total Amount</span>
        <span>25.98</span>
      </div>
      <div className="actions">
        <button className="button-alt" onClick={props.handleClose}>Close</button>
        <button className="button">Order</button>
      </div>
    </Modal>
  )
}

export default Cart;