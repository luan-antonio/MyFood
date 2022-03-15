import * as S from "./styles";

import Input from "../../../UI/Input";

const Form = () => {
  return (
    <S.Form>
      <Input
        label="Amount"
        input={{
          id: "amount",
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
