import { FC } from "react";
import { Outlet } from "react-router-dom";

export const RestaurantsPage: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
