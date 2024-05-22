/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  const [selectedRestaurantIndex, setSelectedRestaurantIndex] = useState(0);

  if(!restaurants) {
    return <div>No restaurant</div>
  }

  const selectRestaurant = (index) => {
    if (index !== selectedRestaurantIndex) {
      setSelectedRestaurantIndex(index);
    }
  }

  return <div>
    <div>
      {restaurants.map((restaurant, index) => (
        <button onClick={() => selectRestaurant(index)}>{restaurant.name}</button>
      ))}
    </div>
    <Restaurant restaurant={restaurants[selectedRestaurantIndex]} />
  </div>;
};