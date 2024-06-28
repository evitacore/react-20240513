import { FC } from "react";
import styles from "./styles.module.scss";

interface CounterProps {
  value: number;
  decrement: () => void;
  increment: () => void;
  min?: number;
  max?: number;
}

export const Counter: FC<CounterProps> = ({
  value,
  decrement,
  increment,
  min = 0,
  max = 5,
}) => {
  return (
    <div className={styles.root}>
      <button
        className={styles.button}
        onClick={decrement}
        disabled={value === min}
      >
        -
      </button>
      <span className={styles.value}>{value}</span>
      <button
        className={styles.button}
        onClick={increment}
        disabled={value === max}
      >
        +
      </button>
    </div>
  );
};
