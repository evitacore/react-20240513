import { Menu } from "../menu/component";
import { ReviewForm } from "../review-form/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {!!menu?.length && <Menu dishIds={menu} />}
      {!!reviews?.length && <Reviews reviewIds={reviews} />}
      <ReviewForm />
    </div>
  );
};
