import './style.css';
import { ThemeToggler } from '../theme-toggler/component';
import { AuthorizationButton } from '../authorization-button/component';


export const Header = () => {

  return (
  <header className="header">
    <ThemeToggler />
    <AuthorizationButton />
    
  </header>
  );
};