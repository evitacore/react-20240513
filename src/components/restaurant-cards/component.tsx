import styles from "./styles.module.scss";
import { Card } from "../card/component";
import { Input } from "../input/component";
import { FC } from "react";
import { RestaurantProps } from "../../types/restaurant";

export const RestaurantCards: FC<RestaurantProps> = ({ restaurants, searchValue, onSearchValueChange }) => {
  return (
    <div className={styles.root}>
      <Input value={searchValue} setValue={onSearchValueChange} placeholder="Search restaurant" />
      <div className={styles.cards}>
        {restaurants
          .map(({ name, id, img }) => (
            <Card title={name} to={`${id}`} img={img} key={id} />
          ))}
      </div>
    </div>
  );
};
