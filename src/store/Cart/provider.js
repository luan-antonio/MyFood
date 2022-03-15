import context from "./context";

const CartProvider = (props) => {
  const addToCart = (item) => {};

  const removeFromCart = (item) => {};

  const ctx = {
    items: [],
    totalAmount: 0,
    addItem: addToCart,
    removeItem: removeFromCart,
  };

  return <context.Provider value={ctx}>{props.children}</context.Provider>;
};

export default CartProvider;
