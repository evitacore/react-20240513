import { Button } from "../button/component";
import styles from './styles.module.scss';

export const Counter = ({ value, decrement, increment }) => {
  return (
    <div className={styles.root}>
      <Button className={styles.button} onClick={decrement} >-</Button>
      <span className={styles.value}>{value}</span>
      <Button className={styles.button} onClick={increment} >+</Button>
    </div>
  );
};