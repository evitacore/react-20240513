/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { selectReviewIds } from "../../redux/entities/review/selectors";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";

export const ReviewsContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviewIds = useSelector(selectReviewIds)

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  return <div>{reviewIds && <Reviews reviewIds={reviewIds} />} </div> ;
};
