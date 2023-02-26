import './Cart.css';
import Modal from './Modal';

const Cart = (props) => {

  const cartItems = [
    {
      name: 'Sushi',
      quantity: '2',
      price: '12.99'
    }
  ]

  return (
    <Modal>
      <ul className="cart-items">
        {cartItems.map((item) => {
          return (
            <li>{item.name}</li>
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