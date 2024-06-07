import { Ingredients } from "../ingredients/component";
import { Counter } from "../counter/component";
import { useUser } from "../../contexts/user/hooks";
import styles from "./styles.module.scss";

export const Dish = ({ dish, count, decrement, increment }) => {
  const { user } = useUser();
  const { name, price, ingredients } = dish;

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.title}>
          {name} ${price}
        </div>
        <div className={styles.ingredients}>
          <Ingredients ingredients={ingredients} />
        </div>
        {user && (
          <Counter value={count} decrement={decrement} increment={increment} />
        )}
      </div>
      <div className={styles.image} />
    </div>
  );
};
