import styles from './styles.module.scss';
import { ThemeToggler } from '../theme-toggler/component';
import { AuthorizationButton } from '../authorization-button/component';
import { CartIndicatorContainer } from '../cart-indicator/container';

export const Header = () => {
  return (
  <header className={styles.header}>
    <ThemeToggler />
    <CartIndicatorContainer />
    <AuthorizationButton />
  </header>
  );
};