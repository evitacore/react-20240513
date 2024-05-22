import { Ingredients } from "../ingredients/component";
import { Count } from "../count/component";

export const Dish = ({ dish }) => {
  const {name, price, ingredients} = dish;
  const minValue = 0, maxValue = 5;

  return <div>
    <span>{name + ": "}</span>
    <span>{price + "$"}</span>
    <Ingredients ingredients={ingredients} />
    <Count minValue={minValue} maxValue={maxValue} />
  </div>;
};