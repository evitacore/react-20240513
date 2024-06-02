import { Ingredients } from "../ingredients/component";
import { Counter } from "../counter/component";
import { useCount } from "../../hooks/use-count";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const Dish = ({ dish }) => {
  const {count, increment, decrement} = useCount();
  const {currentUser} = useContext(UserContext);
  const {name, price, ingredients} = dish;

  return <div>
    <div>{name}</div>
    <Ingredients ingredients={ingredients} />
    {currentUser && <Counter
      value={count}
      decrement={decrement}
      increment={increment}
    />}
    <div>Price: {count * price}</div>
  </div>;
};