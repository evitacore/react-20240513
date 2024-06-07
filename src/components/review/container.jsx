import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { selectUserById } from "../../redux/entities/user/selectors";

export const ReviewContainer = ({ id }) => {
  const review = useSelector(state => selectReviewById(state, id));
  const user = useSelector(state => selectUserById(state, review.userId))

  return <div>{review && <Review user={user} review={review} />}</div>;
};