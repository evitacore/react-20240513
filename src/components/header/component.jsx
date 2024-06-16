import styles from './styles.module.scss';
import { ThemeToggler } from '../theme-toggler/component';
import { AuthorizationButton } from '../authorization-button/component';
import { CartIndicatorContainer } from '../cart-indicator/container';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
  <header className={styles.header}>
    <Link to="/">Home</Link>
    <Link to="/restaurants">Restaurants</Link>
    <ThemeToggler />
    <CartIndicatorContainer />
    <AuthorizationButton />
  </header>
  );
};