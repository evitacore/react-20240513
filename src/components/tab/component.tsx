import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { FC } from "react";

type TabProps = {
  title: string;
  to: string;
};

export const Tab: FC<TabProps> = ({ title, to }) => {
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
