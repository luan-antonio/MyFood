import * as S from "./styles";

const Item = ({ meal }) => {
  const price = `$${meal.price.toFixed(2)}`;

  return (
    <S.Item>
      <div>
        <h3>{meal.name}</h3>
        <div className="description">{meal.description}</div>
        <div className="price">{price}</div>
      </div>
      <div></div>
    </S.Item>
  );
};

export default Item;
