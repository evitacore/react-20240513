import { Ingredients } from "../ingredients/component";
import { Counter } from "../counter/component";
import { useCount } from "../../hooks/use-count";
import { useUser } from "../contexts/user/hooks";

export const Dish = ({ dish }) => {
  const {count, increment, decrement} = useCount();
  const {user} = useUser();
  const {name, price, ingredients} = dish;

  return <div>
    <div>{name}</div>
    <Ingredients ingredients={ingredients} />
    {user && <Counter
      value={count}
      decrement={decrement}
      increment={increment}
    />}
    <div>Price: {count * price}</div>
  </div>;
};