import { useParams } from "react-router-dom";
import { Dish } from "../components/dish/component";
import { useGetDishByIdQuery } from "../redux/service/api";
import { useCart } from "../hooks/use-cart";

export const DishPage = () => {
  const { dishId } = useParams();
  const { data: dish, isFetching } = useGetDishByIdQuery(dishId);
  const { count, increment, decrement } = useCart(dishId);

  if (isFetching) {
    return <div>Loading</div>;
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
