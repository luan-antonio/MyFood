import * as S from "./styles";

import Card from "../../UI/Card";
import Item from "../Item";
import DUMMY_MEALS from "../dummy-meals";

const Available = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <Item
        key={meal.id}
        meal={meal}
      />
    );
  });

  return (
    <S.Available>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </S.Available>
  );
};

export default Available;
