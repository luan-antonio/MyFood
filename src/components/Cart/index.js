import { useContext } from "react";

import * as S from "./styles";
import CartCtx from "../../store/Cart/context";
import Modal from "../UI/Modal";
import Item from "./Item";

const Cart = (props) => {
  const cartCtx = useContext(CartCtx);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const items = (
    <ul style={{ padding: 0 }}>
      {cartCtx.items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></Item>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      <S.Cart>
        {items}
        <div className="total">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className="button">Order</button>}
        </div>
      </S.Cart>
    </Modal>
  );
};

export default Cart;
