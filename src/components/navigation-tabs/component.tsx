import styles from "./styles.module.scss";
import { TABS } from "./constants";
import { Tab } from "../tab/component";
import { FC } from "react";

export const NavigationTabs: FC = () => {
  return (
    <div className={styles.tabs}>
      {TABS.map(({ title, to }) => (
        <Tab title={title} to={to} key={title} />
      ))}
    </div>
  );
};
