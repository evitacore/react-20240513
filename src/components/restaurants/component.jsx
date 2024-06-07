/* eslint-disable react/jsx-key */
import { useState } from "react";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { RestaurantContainer } from "../restaurant/container";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  return <div>
    <RestaurantTabsContainer 
      onTabClick={setActiveRestaurantId} 
      activeTabId={activeRestaurantId} 
    />
    <RestaurantContainer id={activeRestaurantId} />
  </div>;
};