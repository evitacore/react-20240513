/* eslint-disable react/jsx-key */
import { RestaurantTabContainer } from "../restaurant-tab/container";

export const RestaurantTabs = ({ restaurantIds, onTabClick, activeTabId }) => {
  return (
    <div>
      {restaurantIds.map((id) => (
        <RestaurantTabContainer
          id={id}
          onClick={() => onTabClick(id)}
          isActive={activeTabId === id}
        />
      ))}
    </div>
  );
};
