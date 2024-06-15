import { MenuContainer } from "../menu/container";
import { NewReviewFormContainer } from "../new-review-form/container";
import { ReviewsContainer } from "../reviews/container";

export const Restaurant = ({ restaurant }) => {
  const { name, id } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {<MenuContainer restaurantId={id} />}
      {<ReviewsContainer restaurantId={id} />}
      <NewReviewFormContainer restaurantId={id} />
    </div>
  );
};
