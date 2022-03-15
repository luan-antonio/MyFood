import React from "react";

import * as S from "./styles";

const Input = React.forwardRef((props, ref) => {
  return (
    <S.Input>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref}{...props.input} />
    </S.Input>
  );
});

export default Input;
