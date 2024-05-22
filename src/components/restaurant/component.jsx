import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurant }) => {
  const {name, menu, reviews} = restaurant;

  return <div>
    <h2>{name}</h2>
    <Menu menu={menu} />
    <Reviews reviews={reviews} />
  </div>;
};