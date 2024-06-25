import { RestaurantCards } from "./component";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { useSearchParams } from "react-router-dom";

export const RestaurantCardsContainer = () => {
  const { data: rawRestaurants, isLoading } = useGetRestaurantsQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!rawRestaurants?.length) {
    return <div>No restaurants</div>;
  }

  const searchValue = searchParams.get("search") || "";
  const restaurants = rawRestaurants.filter(
    ({ name }) => name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  );

  return (
    <RestaurantCards
      restaurants={restaurants}
      searchValue={searchValue}
      onSearchValueChange={(e) =>
        setSearchParams({ search: e.target.value })
      }
    />
  );
};
