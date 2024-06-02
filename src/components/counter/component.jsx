import { Button } from "../button/component";

export const Counter = ({ value, decrement, increment }) => {
  return (
    <div>
      <Button onClick={decrement} >-</Button>
      <span>{value}</span>
      <Button onClick={increment} >+</Button>
    </div>
  );
};