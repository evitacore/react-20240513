import styles from "./styles.module.scss";
import { ThemeToggler } from "../theme-toggler/component";
import { AuthorizationButton } from "../authorization-button/component";
import { CartIndicatorContainer } from "../cart-indicator/container";
import { Link } from "react-router-dom";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
      </nav>
      <div className={styles.controls}>
        <ThemeToggler />
        <CartIndicatorContainer />
        <AuthorizationButton />
      </div>
    </header>
  );
};
