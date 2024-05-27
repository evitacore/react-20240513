export const Counter = ({ value, decrement, increment }) => {
  return (
    <div>
      <button onClick={decrement} >-</button>
      <span>{value}</span>
      <button onClick={increment} >+</button>
    </div>
  );
};