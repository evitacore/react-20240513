import { Dish } from "./component";
import { useCart } from "../../hooks/use-cart";
import { useParams } from "react-router-dom";
import { useGetDishByIdQuery } from "../../redux/service/api";

export const DishContainer = ({ itemId }) => {
  const { dishId } = useParams();
  const { data: dish } = useGetDishByIdQuery(itemId || dishId);
  const { count, increment, decrement } = useCart(itemId || dishId);

  if (!dish) {
    return null;
  }

  return (
    <Dish
      dish={dish}
      count={count}
      increment={increment}
      decrement={decrement}
    />
  );
};
