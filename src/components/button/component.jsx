import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import './style.css';

export const Button = ({type, disabled, onClick, children}) => {
  const { theme } = useContext(ThemeContext);
  const buttonClass = theme === 'default' ? 'default' : 'alternative';

  return <button type={type} disabled={disabled} className={buttonClass} onClick={onClick}>{children}</button>;
};