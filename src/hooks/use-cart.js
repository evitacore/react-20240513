import { useCallback } from "react";
import { selectDishCount } from "../redux/ui/cart/selectors";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/ui/cart";

export const useCart = (productId) => {
  const count = useSelector((state) => selectDishCount(state, productId));
  const dispatch = useDispatch();

  const handleIncrement = useCallback(
    () => dispatch(increment(productId)),
    [dispatch, productId]
  );

  const handleDecrement = useCallback(
    () => dispatch(decrement(productId)),
    [dispatch, productId]
  );

  return { count, increment: handleIncrement, decrement: handleDecrement}
};