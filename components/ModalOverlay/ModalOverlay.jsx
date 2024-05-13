import React from 'react';
import styles from "./ModalOverlay.module.css";
import stars from "./stars.png";

const ModalOverlay = ({isOpen, setIsOpen ,data}) => {

  const handleClose = () => {
    setIsOpen(false);
  };


  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) { 
      handleClose();
    }
  };


  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.container} onClick={handleBackdropClick}>
        <div className={styles.box} onClick={(e) => e.stopPropagation()}> 
            <div className={styles.top} onClick={handleClose} style={{ cursor: 'pointer' }}>
                X
            </div>
            <div className={styles.imageContainer}>
                <img src={stars} alt="" />
            </div>
            <div className={styles.bottom}>
                <h3 className={styles.title}>{data.title}</h3>
                <p className={styles.progress}>{data.tasks}/{data.totalAmount} Left</p>
                <p className={styles.description}>{data.text}</p>
            </div>

            <div className={styles.button}>
                <p>Use</p>
            </div>
        </div>
    </div>
  )
}

export default ModalOverlay;
