/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { Menu } from "./component";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { useCallback, useEffect, useMemo } from "react";
import { REQUEST_STATUS } from "../../redux/ui/request/constants";
import { useLazyRequest } from "../../hooks/use-lazy-request";

export const MenuContainer = ({ restaurantId }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  const params = useMemo(() => ({ restaurantId }), [restaurantId]);
  const [fetchDishesStatus, fetchDishes] = useLazyRequest(
    getDishesByRestaurantId,
    params
  );

  const handleRefreshClick = useCallback(
    (forceRefetch = true) => fetchDishes({ restaurantId, forceRefetch }),
    [restaurantId, fetchDishes]
  );

  useEffect(() => {
    handleRefreshClick(false);
  }, [handleRefreshClick]);

  if (fetchDishesStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>;
  }

  if (!dishIds?.length) {
    return null;
  }

  return <Menu dishIds={dishIds} onRefreshClick={handleRefreshClick} />;
};
