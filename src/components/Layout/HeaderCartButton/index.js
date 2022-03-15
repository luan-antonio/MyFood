import { useContext, useEffect, useState } from "react";

import * as S from "./styles";
import CartCtx from "../../../store/Cart/context";
import CartIcon from "../../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartCtx);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  const cartItemsQt = cartCtx.items.reduce((currValue, item) => {
    return currValue + item.amount;
  }, 0);

  return (
    <S.HeaderCartButton
      onClick={props.onClick}
      className={btnIsHighlighted && "bump"}
    >
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{cartItemsQt}</span>
    </S.HeaderCartButton>
  );
};

export default HeaderCartButton;
