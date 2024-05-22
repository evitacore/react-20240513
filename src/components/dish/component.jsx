import { Ingredients } from "../ingredients/component";
import { Counter } from "../counter/component";

export const Dish = ({ dish }) => {
  const {name, price, ingredients} = dish;
  const minValue = 0, maxValue = 5;

  return <div>
    <span>{name + ": "}</span>
    <span>{price + "$"}</span>
    <Ingredients ingredients={ingredients} />
    <Counter minValue={minValue} maxValue={maxValue} />
  </div>;
};