import { useState } from "react";

export const Count = ({ minValue = 0, maxValue = 5 }) => {
  const [count, setCount] = useState(0);
  
  const decrement = () => {
    if(count > minValue) {
        setCount(count - 1);
    }
  }

  const increment = () => {
    if(count < maxValue) {
        setCount(count + 1);
    }
  }
        
  return <div>
    <button onClick={decrement}>-</button>
    {count}
    <button onClick={increment}>+</button>
  </div>;
};