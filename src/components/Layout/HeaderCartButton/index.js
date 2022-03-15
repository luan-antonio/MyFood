import * as S from "./styles";

import CartIcon from "../../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <S.HeaderCartButton onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </S.HeaderCartButton>
  );
};

export default HeaderCartButton;
