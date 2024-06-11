import { MenuContainer } from "../menu/container";
import { ReviewForm } from "../review-form/component";
import { ReviewsContainer } from "../reviews/container";

export const Restaurant = ({ restaurant }) => {
  const { name, id } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {<MenuContainer restaurantId={id} />}
      {<ReviewsContainer restaurantId={id} />}
      <ReviewForm restaurantId={id} />
    </div>
  );
};
