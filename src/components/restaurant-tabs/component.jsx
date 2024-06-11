/* eslint-disable react/jsx-key */
import { Tab } from "../tab/component";

export const RestaurantTabs = ({ restaurants, onTabClick, activeTabId }) => {
  return (
    <div>
      {restaurants.map(({ name, id }) => (
        <Tab
          title={name}
          onClick={() => onTabClick(id)}
          isActive={activeTabId === id}
        />
      ))}
    </div>
  );
};
