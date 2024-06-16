/* eslint-disable react/jsx-key */
import { DishContainer } from "../dish/container";

export const Menu = ({ dishes }) => {
  return (
    <div>
      <h3>Menu</h3>
      <div>
        {dishes.map((dish) => (
          <DishContainer itemId={dish.id} />
        ))}
      </div>
    </div>
  );
};
