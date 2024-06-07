/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { RestaurantTabs } from "./component";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabsContainer = ({...props}) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return <RestaurantTabs {...props} restaurantIds={restaurantIds} />
};
