import { useReducer } from "react";

import context from "./context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  const actionTypes = {
    ADD: () => {
      const existindCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existindCartItem = state.items[existindCartItemIndex];
      let updatedItems;

      if (existindCartItem) {
        const updatedItem = {
          ...existindCartItem,
          amount: existindCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existindCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    },
    REMOVE: () => {
      const existindCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existindCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existindCartItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    },
  };
  return actionTypes[action.type]() || defaultState;
};

const CartProvider = (props) => {
  const [state, dispatcher] = useReducer(reducer, defaultState);

  const addToCart = (item) => {
    dispatcher({ type: "ADD", item });
  };

  const removeFromCart = (id) => {
    dispatcher({ type: "REMOVE", id });
  };

  const ctx = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addToCart,
    removeItem: removeFromCart,
  };

  return <context.Provider value={ctx}>{props.children}</context.Provider>;
};

export default CartProvider;
