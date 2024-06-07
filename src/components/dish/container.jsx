import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { Dish } from "./component";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }
  return <Dish dish={dish} />;
};
