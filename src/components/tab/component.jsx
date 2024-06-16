import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Tab = ({ title, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.root, {
          [styles.active]: isActive,
        })
      }
      to={to}
    >
      {title}
      {/* {({ isActive }) => `${title}${isActive ? "-active" : ""}`} */}
    </NavLink>
  );
};
