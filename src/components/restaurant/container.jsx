import { Restaurant } from "./component";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { selectEntityFromResult } from "../../redux/service/api/selectors";

export const RestaurantContainer = ({ id }) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    // pollingInterval: 1000,
    skip: !id,
    selectFromResult: selectEntityFromResult(id),
  });

  if (!restaurant) {
    return <div>No restaurant</div>;
  }

  return <Restaurant restaurant={restaurant} />;
};
