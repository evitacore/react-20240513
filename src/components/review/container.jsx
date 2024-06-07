import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectReviewById } from "../../redux/entities/review/selectors";

export const ReviewContainer = ({ id }) => {
  const review = useSelector(state => selectReviewById(state, id));
  const user = useSelector(state => state.user.entities[review.userId])

  return <Review user={user} review={review} />;
};