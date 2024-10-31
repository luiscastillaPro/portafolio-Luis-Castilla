import React from "react";
import "../../styles/modal.css";

const Modal = ({ visible, onClose, title, description }) => {
    if (!visible) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="close-button">X</button>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Modal;