import { FC } from "react";
import { ReviewProps } from "../../types/review";
import { ReviewContainer } from "../review/container";

export const Reviews: FC<ReviewProps> = ({ reviews }) => {
  return (
    <div>
      <h3>{reviews.length} reviews:</h3>
      <div>
        {reviews.map((review) => (
          <ReviewContainer review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};
