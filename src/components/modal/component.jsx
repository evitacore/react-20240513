import { createPortal } from "react-dom";
import './style.css';

export const Modal = ({ children, onClose }) => {
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      {createPortal(
        <div className="modal-overlay" onClick={handleClickOutside}>
          <div className="modal-content"> 
            {children}
          </div>
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
};