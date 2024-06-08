import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { selectUserById } from "../../redux/entities/user/selectors";

export const ReviewContainer = ({ id }) => {
  const review = useSelector(state => selectReviewById(state, id));
  const userId = [review ? review.userId : null];
  const user = useSelector(state => selectUserById(state, userId))
  
  if (!review) {
    return null;
  }

  return <Review user={user} review={review} />;
};