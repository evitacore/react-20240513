/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./component";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";

export const MenuContainer = ({ restaurantId }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  if (!dishIds) {
    return;
  }

  return <Menu dishIds={dishIds} />;
};
