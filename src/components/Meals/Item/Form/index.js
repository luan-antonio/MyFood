import * as S from "./styles";

import Input from "../../../UI/Input";

const Form = (props) => {
  return (
    <S.Form>
      <Input
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </S.Form>
  );
};

export default Form;
