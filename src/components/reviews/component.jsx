/* eslint-disable react/jsx-key */
import { Review } from "../review/component";

export const Reviews = ({ reviewIds }) => {
  return ( 
    <div>
      <h3>{reviewIds.length} reviews:</h3>
      <div>
        {reviewIds.map((id) => (
          <Review reviewId={id} />
        ))}
      </div>
    </div>
  );
};