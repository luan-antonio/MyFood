import { useContext } from "react";

import * as S from "./styles";
import CartCtx from "../../../store/Cart/context";
import Form from "./Form";

const Item = ({ meal }) => {
  const cartCtx = useContext(CartCtx);
  const price = `$${meal.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount,
      price: meal.price,
    });
  };

  return (
    <S.Item>
      <div>
        <h3>{meal.name}</h3>
        <div className="description">{meal.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <Form id={meal.id} onAddToCart={addToCartHandler} />
      </div>
    </S.Item>
  );
};

export default Item;
