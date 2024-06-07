import { Menu } from "../menu/component";
import { ReviewForm } from "../review-form/component";
import { ReviewsContainer } from "../reviews/container";

export const Restaurant = ({ restaurant, dishIds }) => {
  const { name, id } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {!!dishIds?.length && <Menu dishIds={dishIds} />}
      {<ReviewsContainer restaurantId={id} />}
      <ReviewForm />
    </div>
  );
};
