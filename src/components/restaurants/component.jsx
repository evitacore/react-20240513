/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Restaurant } from "../restaurant/component";
import { RestaurantTabs } from "../restaurant-tabs/component";
import { useSelector } from "react-redux";

export const Restaurants = () => {
  const initialRestaurantId = useSelector(state => state.restaurant.ids[0])
  const [activeRestaurantId, setActiveRestaurantId] = useState(initialRestaurantId);

  return <div>
    <RestaurantTabs 
      onTabClick={setActiveRestaurantId} 
      activeTabId={activeRestaurantId} 
    />
    <Restaurant restaurantId={activeRestaurantId} />
  </div>;
};