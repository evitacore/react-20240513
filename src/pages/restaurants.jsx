import { RestaurantTabsContainer } from "../components/restaurant-tabs/container";
import { Outlet } from "react-router-dom";

export const RestaurantsPage = () => {
  return (
    <div>
      <RestaurantTabsContainer />
      <Outlet />
    </div>
  );
};
