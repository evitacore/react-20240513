import styles from './styles.module.scss';
import { ThemeToggler } from '../theme-toggler/component';
import { AuthorizationButton } from '../authorization-button/component';

export const Header = () => {
  return (
  <header className={styles.header}>
    <ThemeToggler />
    <AuthorizationButton />
  </header>
  );
};