import styles from "./styles.module.scss";
import { TABS } from "./constants";
import { Tab } from "../tab/component";

export const NavigationTabs = () => {
  return (
    <div className={styles.tabs}>
      {TABS.map(({ title, to }) => (
        <Tab title={title} to={to} key={title} />
      ))}
    </div>
  );
};
