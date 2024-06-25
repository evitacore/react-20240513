import { useSearchParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { Card } from "../card/component";
import { Input } from "../input/component";

export const RestaurantCards = ({ restaurants }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  return (
    <div className={styles.root}>
      <Input value={searchValue} setValue={(e) => setSearchParams({ search: e.target.value })} placeholder="Search restaurant" />
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
