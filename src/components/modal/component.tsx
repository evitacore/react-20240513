import { createPortal } from "react-dom";
import styles from "./styles.module.scss";
import { Button } from "../button/component";
import { FC, ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modal");

  if (!modalRoot) {
    console.error("Modal root element not found");
    return null;
  }

  return createPortal(
    <>
      <div onClick={onClose} className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.button}>
          <Button className={styles.close} onClick={onClose}></Button>
        </div>
        {children}
      </div>
    </>,
    modalRoot
  );
};
