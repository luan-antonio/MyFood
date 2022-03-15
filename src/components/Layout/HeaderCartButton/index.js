import { useContext } from "react";

import * as S from "./styles";
import CartCtx from "../../../store/Cart/context";
import CartIcon from "../../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartCtx);

  const cartItemsQt = cartCtx.items.reduce((currValue, item) => {
    return currValue + item.amount;
  }, 0);

  return (
    <S.HeaderCartButton onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{cartItemsQt}</span>
    </S.HeaderCartButton>
  );
};

export default HeaderCartButton;
