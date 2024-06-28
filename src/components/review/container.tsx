import { Review } from "./component";
import { useGetUsersQuery } from "../../redux/service/api";
import { selectEntityFromResult } from "../../redux/service/api/selectors";
import { FC } from "react";
import { ReviewType } from "../../types/review";

type ReviewContainerProps = {
  review: ReviewType
}

export const ReviewContainer: FC<ReviewContainerProps> = ({ review }) => {
  const userId: any = review ? review.userId : null;
  const { data: user } = useGetUsersQuery(undefined, {
    skip: !review,
    selectFromResult: selectEntityFromResult(userId),
  });

  if (!user) {
    return;
  }

  return <Review user={user} review={review} />;
};
