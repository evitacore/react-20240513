import { useGetRestaurantsQuery } from "../../redux/service/api";
import { selectEntityFromResult } from "../../redux/service/api/selectors";
import { Outlet, useParams } from "react-router-dom";
import { NavigationTabs } from "../navigation-tabs/component";

export const RestaurantContainer = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();

  if (!restaurantId) {
    return null;
  }

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    skip: !restaurantId,
    selectFromResult: selectEntityFromResult(restaurantId),
  });

  if (!restaurant) {
    return <div>No restaurant</div>;
  }

  return (
    <>
      <NavigationTabs />
      <h2>{restaurant.name}</h2>
      <Outlet />
    </>
  );
};
