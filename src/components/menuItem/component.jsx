/* eslint-disable react/jsx-key */
import { MenuIngredient } from "../menuIngredient/component";

export const MenuItem = ({ item }) => {
  return <div>
    <span>{item.name + ": "}</span>
    <span>{item.price + "$"}</span>
    <div>
      {"Ingredients:  "}
      {item.ingredients.map((ingredient) => (
        <MenuIngredient ingredient={ingredient} />
      ))}
    </div>
  </div>;
};