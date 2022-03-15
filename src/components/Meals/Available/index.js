import * as S from "./styles";
import DUMMY_MEALS from "../dummy-meals";

const Available = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <li>{meal.name}</li>;
  });

  return (
    <S.Available>
      <ul>{mealsList}</ul>
    </S.Available>
  );
};

export default Available;
