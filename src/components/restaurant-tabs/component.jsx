/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { Tab } from "../tab/component";

export const RestaurantTabs = ({ onTabClick, activeTabId }) => {
  const restaurants = useSelector((state) => state.restaurant.entities);

  return <div>
    {Object.values(restaurants).map(({ name, id }) => (
      <Tab title={name} onClick={() => onTabClick(id)} isActive={activeTabId === id} />
    ))}
  </div>;
};
