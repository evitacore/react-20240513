/* eslint-disable react/jsx-key */
import { RestaurantTabs } from "./component";
import { useGetRestaurantsQuery } from "../../redux/service/api";

export const RestaurantTabsContainer = () => {
  const { data: restaurants, isLoading, isFetching } = useGetRestaurantsQuery();

  if (!restaurants) {
    return;
  }

  return (
    <>
      {isLoading && <div>Loading</div>}
      {isFetching && <div>isFetching</div>}
      {restaurants?.length > 0 && <RestaurantTabs restaurants={restaurants} />}
    </>
  );
};
