import { useParams } from "react-router-dom";
import { Dish } from "../components/dish/component";
import { useGetDishByIdQuery } from "../redux/service/api";
import { useCart } from "../hooks/use-cart";
import { DishType } from "../types/dish";
import { FC } from "react";

export const DishPage: FC = () => {
  const { dishId } = useParams<Record<string, string>>();

  if (!dishId) {
    return <div>Dish ID is missing</div>;
  }

  const { data: dish, isFetching } = useGetDishByIdQuery(dishId);
  const { count, increment, decrement } = useCart(dishId);

  if (isFetching) {
    return <div>Loading</div>;
  }

  if (!dish) {
    return <div>Dish not found</div>;
  }

  return (
    <Dish
      dish={dish as DishType}
      count={count}
      increment={increment}
      decrement={decrement}
    />
  );
};
