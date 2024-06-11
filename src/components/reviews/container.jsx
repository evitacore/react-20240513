/* eslint-disable react/jsx-key */
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Reviews } from "./component";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";
import { selectRestaurantReviewIds } from "../../redux/entities/restaurant/selectors";
import { useRequest } from "../../hooks/use-request";
import { REQUEST_STATUS } from "../../redux/ui/request/constants";

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );

  const params = useMemo(() => ({ restaurantId }), [restaurantId]);
  const requestStatus = useRequest(getReviewsByRestaurantId, params);

  if(requestStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>
  }

  if (!reviewIds) {
    return;
  }

  return <Reviews reviewIds={reviewIds} />;
};
