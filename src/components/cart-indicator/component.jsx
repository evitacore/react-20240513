import { Button } from "../button/component";
import styles from "./styles.module.scss";
import cartLogo from "/cartLogo.svg";
import trashLogo from "/trashLogo.svg";

export const CartIndicator = ({ count, onClearClick }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <span className={styles.icon}>
          <img src={cartLogo} />
        </span>
        <span>Cart: {count}</span>
        {count > 0 && (
          <Button onClick={onClearClick} className={styles.button}>
            <span className={styles.icon_clear}>
              <img src={trashLogo} />
            </span>
          </Button>
        )}
      </div>
    </div>
  );
};
