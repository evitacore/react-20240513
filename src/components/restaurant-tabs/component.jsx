/* eslint-disable react/jsx-key */
import { useSearchParams } from "react-router-dom";
import { Tab } from "../tab/component";
import styles from "./styles.module.scss";

export const RestaurantTabs = ({ restaurants }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  return (
    <div className={styles.root}>
      <input
        placeholder="Enter value"
        value={searchValue}
        onChange={(e) => setSearchParams({ search: e.target.value })}
      />
      {restaurants
        .filter(
          ({ name }) =>
            name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        )
        .map(({ name, id }) => (
          <Tab title={name} to={`${id}`} />
        ))}
    </div>
  );
};
