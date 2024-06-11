import { Review } from "./component";
import { useGetUsersQuery } from "../../redux/service/api";
import { selectUserFromResult } from "../../redux/service/api/selectors";

export const ReviewContainer = ({ review }) => {
  const userId = review ? review.userId : null;
  const { data: user } = useGetUsersQuery(undefined, {
    skip: !review,
    selectFromResult: selectUserFromResult(userId),
  });

  if (!user) {
    return;
  }

  return <Review user={user} review={review} />;
};
