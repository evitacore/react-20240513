import { Reviews } from "./component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api";
import { NewReviewFormContainer } from "../new-review-form/container";
import { useParams } from "react-router-dom";

export const ReviewsContainer = () => {
  const { restaurantId } = useParams();
  const { data: reviews } = useGetReviewsByRestaurantIdQuery(restaurantId);

  if (!reviews) {
    return;
  }

  return (
    <>
      <Reviews reviews={reviews} />
      <NewReviewFormContainer restaurantId={restaurantId} />
    </>
  );
};
