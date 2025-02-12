import React from "react";
import "../app/globals.css";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="block sm:hidden">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>  
        {children}
      </div>
    </div>
  );
};
export default Modal;