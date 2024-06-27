import { Ingredients } from "../ingredients/component";
import { Counter } from "../counter/component";
import { useUser } from "../../contexts/user/hooks";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Dish = ({ dish, count, decrement, increment }) => {
  const user = useUser();
  const { name, price, ingredients, id } = dish;

  return (
    <div className={styles.root}>
      <div>
        <Link className={styles.link} to={`/dish/${id}`}>
          <div className={styles.title}>
            {name} ${price}
          </div>
          <div className={styles.ingredients}>
            <Ingredients ingredients={ingredients} />
          </div>
        </Link>
        {user && (
          <Counter value={count} decrement={decrement} increment={increment} />
        )}
      </div>
    </div>
  );
};
