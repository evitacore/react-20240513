import { FC } from "react";
import { DishType } from "../../types/dish";
import { DishContainer } from "../dish/container";

type MenuProps = {
  dishes: DishType[]
}

export const Menu: FC<MenuProps> = ({ dishes }) => {
  return (
    <div>
      <h3>Menu</h3>
      <div>
        {dishes.map((dish) => (
          <DishContainer itemId={dish.id} key={dish.id} />
        ))}
      </div>
    </div>
  );
};
