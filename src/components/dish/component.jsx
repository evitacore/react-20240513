/* eslint-disable react/jsx-key */
import { Ingredient } from "../ingredient/component";

export const Dish = ({ item }) => {
  return <div>
    <span>{item.name + ": "}</span>
    <span>{item.price + "$"}</span>
    <div>
      {"Ingredients:  "}
      {item.ingredients.map((ingredient) => (
        <Ingredient ingredient={ingredient} />
      ))}
    </div>
  </div>;
};