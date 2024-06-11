import { useSelector } from "react-redux";
import { Restaurant } from "./component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return <div>No restaurant</div>;
  }

  return <Restaurant restaurant={restaurant} />;
};
