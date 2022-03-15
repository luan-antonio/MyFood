import * as S from "./styles";
import Card from "../../UI/Card";
import DUMMY_MEALS from "../dummy-meals";

const Available = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <li>{meal.name}</li>;
  });

  return (
    <S.Available>
      <ul>{mealsList}</ul>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </S.Available>
  );
};

export default Available;
