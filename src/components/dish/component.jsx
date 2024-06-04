import { Ingredients } from "../ingredients/component";
import { Counter } from "../counter/component";
import { useCount } from "../../hooks/use-count";
import { useUser } from "../../contexts/user/hooks";
import { useSelector } from "react-redux";
import styles from './styles.module.scss'

export const Dish = ({ dishId }) => {
  const dish = useSelector(state => state.dish.entities[dishId])
  const {count, increment, decrement} = useCount();
  const {user} = useUser();
  const {name, price, ingredients} = dish;

  return <div className={styles.root}>
    <div>
      <div className={styles.title}>{name} ${price}</div>
      <div className={styles.ingredients}>
        <Ingredients ingredients={ingredients} />
      </div>
      {user && <Counter
        value={count}
        decrement={decrement}
        increment={increment}
      />}
    </div>
    <div className={styles.image} />
  </div>;
};