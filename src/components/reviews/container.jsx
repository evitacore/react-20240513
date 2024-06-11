import { Reviews } from "./component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api";

export const ReviewsContainer = ({ restaurantId }) => {
  const { data: reviews } = useGetReviewsByRestaurantIdQuery(restaurantId);

  if (!reviews) {
    return;
  }

  return <Reviews reviews={reviews} />;
};
