// import { THEMES } from "../contexts/theme/constants";
import styles from './styles.module.scss';
import { useTheme } from "../../contexts/theme/hooks";
import classNames from 'classnames';

export const Button = ({type, disabled, onClick, children, className}) => {
  const theme = useTheme();

  return (
    <button 
      type={type}
      disabled={disabled} 
      className={classNames(styles.root, styles[theme], className)} 
      onClick={onClick}
    >
      <span className={styles.children}>{children}</span>
    </button>
  );
};