/* eslint-disable react/jsx-key */
import { ReviewContainer } from "../review/container";

export const Reviews = ({ reviewIds }) => {
  return ( 
    <div>
      <h3>{reviewIds.length} reviews:</h3>
      <div>
        {reviewIds.map((id) => (
          <ReviewContainer id={id} />
        ))}
      </div>
    </div>
  );
};