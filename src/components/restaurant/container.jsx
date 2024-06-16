import { useGetRestaurantsQuery } from "../../redux/service/api";
import { selectEntityFromResult } from "../../redux/service/api/selectors";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { useState } from "react";
import classNames from "classnames";

export const RestaurantContainer = () => {
  const location = useLocation();
  const currentTab = location.pathname.split("/").pop() === "reviews";
  const [activeTab, setActiveTab] = useState(currentTab ? "reviews" : "menu"); //menu, review
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    skip: !restaurantId,
    selectFromResult: selectEntityFromResult(restaurantId),
  });

  if (!restaurant) {
    return <div>No restaurant</div>;
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(tab);
  };

  return (
    <>
      <div className={styles.tabs}>
        <span
          className={classNames(
            styles.tab,
            activeTab === "menu" ? styles.active : ""
          )}
          onClick={() => handleTabClick("menu")}
        >
          Menu
        </span>
        <span
          className={classNames(
            styles.tab,
            activeTab === "reviews" ? styles.active : ""
          )}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews
        </span>
      </div>
      <h2>{restaurant.name}</h2>
      <Outlet />
    </>
  );
};
