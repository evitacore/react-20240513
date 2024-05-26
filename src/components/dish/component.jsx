import { Ingredients } from "../ingredients/component";
import { Counter } from "../counter/component";
import { useCount } from "../../hooks/use-count";

export const Dish = ({ dish }) => {
  const {count, increment, decrement} = useCount();
  const {name, price, ingredients} = dish;

  return <div>
    <div>{name}</div>
    <Ingredients ingredients={ingredients} />
    <Counter
      value={count}
      decrement={decrement}
      increment={increment}
    />
    <div>Price: {count * price}</div>
  </div>;
};