import { createPortal } from "react-dom";
import './style.css';
import { Button } from "../button/component";

export const Modal = ({ children, onClose }) => {
  return createPortal(
    <>
      <div onClick={onClose} className="modal-overlay"></div>
      <div className="modal-content"> 
        <Button onClick={onClose}>Close</Button>
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
};