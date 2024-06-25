import { RestaurantCards } from "./component";
import { useGetRestaurantsQuery } from "../../redux/service/api";

export const RestaurantCardsContainer = () => {
  const { data: restaurants, isLoading, isFetching } = useGetRestaurantsQuery();

  if (!restaurants) {
    return;
  }

  return (
    <>
      {isLoading && <div>Loading</div>}
      {isFetching && <div>isFetching</div>}
      {restaurants?.length > 0 && <RestaurantCards restaurants={restaurants} />}
    </>
  );
};
