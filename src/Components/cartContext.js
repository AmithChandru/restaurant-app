import React from "react";

const cartContext = React.createContext({
  items: [],
  totalAmount: [],
  addItem: (item) => {},
  removeItem: (id) => {}
})

export default cartContext;