import { useState } from "react";
import cartContext from "./cartContext";

const CartProvider = (props) => {

  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState(new Map());

  const addItemHandler = (item) => {
    setItems((state) => [
      ...state,
      item
    ])
  }

  const removeItemHandler = (id) => {
    CartContext.items.filter((ele) => {
      return ele.id !== id
    })
  }

  const addAmountHandler = (id, amount) => {
    setAmount((state) => ({
      ...state,
      [id]: amount
    }))
  }

  const decreaseAmountHandler = (id, amount) => {
    setAmount((state) => ({
      ...state,
      [id]: amount
    }))
  }

  const CartContext = {
    items: items,
    amount: amount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    addAmount: addAmountHandler,
    decreaseAmount: decreaseAmountHandler
  }

  return (
    <cartContext.Provider value={CartContext}>
      {props.children}
    </cartContext.Provider>
  )
}

export default CartProvider;