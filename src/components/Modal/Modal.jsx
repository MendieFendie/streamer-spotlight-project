import React from "react";
import StreamerSubmissionForm from "../StreamerSubmissionForm/StreamerSubmissionForm";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, onFormSubmit }) => {
  if (!isOpen) {
    return null;
  }

  const handleFormSubmit = (newStreamer) => {
    onFormSubmit(newStreamer);
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Submit a Streamer</h2>
        <StreamerSubmissionForm onFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default Modal;
