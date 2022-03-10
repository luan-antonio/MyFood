import * as S from "./styles";
import mealsImg from "../../../assets/meals.jpg";

const MainImage = () => {
  return (
    <S.MainImage>
      <img src={mealsImg} alt="A table full of delicious food" />
    </S.MainImage>
  );
};

export default MainImage;
