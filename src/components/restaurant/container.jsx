import { useDispatch, useSelector } from "react-redux";
import { Restaurant } from "./component";
import { selectRestaurantById, selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors";
import { useEffect } from "react";
import { getDishByRestaurantId } from "../../redux/entities/dish/thunks/get-dish-by-restaurant-id";

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const dishIds = useSelector(state => selectRestaurantDishIds(state, id));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishByRestaurantId(id));
  }, [dispatch, id]);

  
  if (!restaurant) {
    return <div>No restaurant</div>;
  }

  return <Restaurant restaurant={restaurant} dishIds={dishIds} />;
};
