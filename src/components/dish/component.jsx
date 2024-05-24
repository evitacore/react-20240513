import { Ingredients } from "../ingredients/component";
import { Counter } from "../counter/component";
import { useState } from "react";
const initialValue = 0;

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(initialValue);
  const {name, price, ingredients} = dish;

  return <div>
    <span>{name + ": "}</span>
    <span>{price + "$"}</span>
    <Ingredients ingredients={ingredients} />
    <Counter value={count} onChange={setCount} />
    <div>Price: {count * price}</div>
  </div>;
};