import { Button } from "../button/component";
import styles from './styles.module.scss';

export const Tab = ({ title, onClick, isActive }) => {
  return <Button className={styles.button} onClick={() => onClick()} disabled={isActive}>{title}</Button>;
};