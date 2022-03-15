import * as S from "./styles";

const Input = (props) => {
  return (
    <S.Input>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </S.Input>
  );
};

export default Input;
