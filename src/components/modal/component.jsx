import { createPortal } from "react-dom";
import styles from './styles.module.scss';
import { Button } from "../button/component";

export const Modal = ({ children, onClose }) => {
  return createPortal(
    <>
      <div onClick={onClose} className={styles.overlay}></div>
      <div className={styles.content}> 
        <div className={styles.button}><Button className={styles.close} onClick={onClose}></Button></div>
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
};