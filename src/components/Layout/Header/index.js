import * as S from "./styles";

import HeaderCartButton from "../HeaderCartButton";


const Header = (props) => {
  return (
    <S.Header>
      <h1>MyFood</h1>
      <HeaderCartButton></HeaderCartButton>
    </S.Header>
  );
};

export default Header;
