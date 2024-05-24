/* eslint-disable react/jsx-key */

import { Tab } from "../tab/component";

export const RestaurantTabs = ({restaurants, onTabClick, activeTabIndex}) => {
  return <div>
      {restaurants.map(({ name }, index) => (
        <Tab title={name} onClick={() => onTabClick(index)} isActive={activeTabIndex === index} />
      ))}
  </div>;
};