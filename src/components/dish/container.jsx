import { useDispatch, useSelector } from "react-redux";
import { Dish } from "./component";
import { selectDishCount } from "../../redux/ui/cart/selectors";
import { useCallback } from "react";
import { decrement, increment } from "../../redux/ui/cart";

export const DishContainer = ({ dish }) => {
  const { id } = dish;
  const count = useSelector((state) => selectDishCount(state, id));
  const dispatch = useDispatch();

  const handleIncrement = useCallback(
    () => dispatch(increment(id)),
    [dispatch, id]
  );

  const handleDecrement = useCallback(
    () => dispatch(decrement(id)),
    [dispatch, id]
  );

  if (!dish) {
    return null;
  }

  return (
    <Dish
      dish={dish}
      count={count}
      increment={handleIncrement}
      decrement={handleDecrement}
    />
  );
};
