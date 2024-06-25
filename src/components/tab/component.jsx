import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Tab = ({ title, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.tab, {
          [styles.active]: isActive,
        })
      }
      to={to}
    >
      {title}
    </NavLink>
  );
};
