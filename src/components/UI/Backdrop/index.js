import * as S from "./styles";

const Backdrop = (props) => {
  return <S.Backdrop onClick={props.onClick}>{props.children}</S.Backdrop>;
};

export default Backdrop;
