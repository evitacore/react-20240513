import { THEMES } from "../contexts/theme/constants";
import './style.css';
import { useTheme } from "../contexts/theme/hooks";

export const Button = ({type, disabled, onClick, children}) => {
  const { theme } = useTheme();
  const buttonClass = theme === THEMES.default ? THEMES.default : THEMES.alternative;

  return <button type={type} disabled={disabled} className={buttonClass} onClick={onClick}>{children}</button>;
};