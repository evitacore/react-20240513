import { Dish } from "./component";
import { useCart } from "../../hooks/use-cart";
import { useParams } from "react-router-dom";
import { useGetDishByIdQuery } from "../../redux/service/api";
import { FC } from "react";

interface DishContainerProps {
  itemId?: string;
}

interface UseCartReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const DishContainer: FC<DishContainerProps> = ({ itemId }) => {
  const { dishId } = useParams<{ dishId: string }>();
  const id = itemId || dishId;

  if (!id) {
    return null;
  }

  const { data: dish } = useGetDishByIdQuery(id);
  const { count, increment, decrement } = useCart(id) as UseCartReturn;

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
