import * as S from "./styles";

const Item = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <S.Item>
      <div>
        <h2>{props.name}</h2>
        <div className="summary">
          <span className="price">{price}</span>
          <span className="amount">x {props.amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </S.Item>
  );
};

export default Item;