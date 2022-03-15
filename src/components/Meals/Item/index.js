import * as S from "./styles";

import Form from "./Form";

const Item = ({ meal }) => {
  const price = `$${meal.price.toFixed(2)}`;

  return (
    <S.Item>
      <div>
        <h3>{meal.name}</h3>
        <div className="description">{meal.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <Form id={meal.id}/>
      </div>
    </S.Item>
  );
};

export default Item;
