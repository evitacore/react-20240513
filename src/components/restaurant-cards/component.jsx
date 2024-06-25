import styles from "./styles.module.scss";
import { Card } from "../card/component";
import { Input } from "../input/component";

export const RestaurantCards = ({ restaurants, searchValue, onSearchValueChange }) => {
  return (
    <div className={styles.root}>
      <Input value={searchValue} setValue={onSearchValueChange} placeholder="Search restaurant" />
      <div className={styles.cards}>
        {restaurants
          .filter(
            ({ name }) =>
              name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
          )
          .map(({ name, id, img }) => (
            <Card title={name} to={`${id}`} img={img} key={id} />
          ))}
      </div>
    </div>
  );
};
