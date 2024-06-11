/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";
import { selectRestaurantReviewIds } from "../../redux/entities/restaurant/selectors";

export const ReviewsContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  if (!reviewIds) {
    return;
  }

  return <Reviews reviewIds={reviewIds} />;
};
