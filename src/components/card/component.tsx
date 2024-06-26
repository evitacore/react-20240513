import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { FC } from "react";

type CardProps = {
  title: string;
  to: string;
  img: string;
};

export const Card: FC<CardProps> = ({ title, to, img }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.root, {
          [styles.active]: isActive,
        })
      }
      to={to}
    >
      <span className={styles.title}>{title}</span>
      {img.length > 0 && (
        <div className={styles.container}>
          <img className={styles.image} src={img} alt={title} />
        </div>
      )}
    </NavLink>
  );
};
