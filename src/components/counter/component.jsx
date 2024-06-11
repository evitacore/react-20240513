import { Button } from "../button/component";
import styles from './styles.module.scss';

export const Counter = ({ value, decrement, increment, min = 0, max = 5 }) => {
  return (
    <div className={styles.root}>
      <Button className={styles.button} onClick={decrement} disabled={value === min}>-</Button>
      <span className={styles.value}>{value}</span>
      <Button className={styles.button} onClick={increment} disabled={value === max}>+</Button>
    </div>
  );
};