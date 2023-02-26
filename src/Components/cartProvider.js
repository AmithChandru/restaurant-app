import cartContext from "./cartContext";

const CartProvider = (props) => {

  const addItemHandler = (item) => {
    CartContext.items.push(item);
  }

  const removeItemHandler = (id) => {
    CartContext.items.filter((ele) => {
      return ele.id !== id
    })
  }

  const CartContext = {
    items: [],
    amount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }

  return (
    <cartContext.Provider value={CartContext}>
      {props.children}
    </cartContext.Provider>
  )
}

export default CartProvider;