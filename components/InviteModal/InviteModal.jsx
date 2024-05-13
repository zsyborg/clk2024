import React from "react";
import styles from "./InviteModal.module.css";
import handshake from "./handshake.png";
import smallcoin from "./smallcoin.png";
const InviteModal = ({ isOpen, setIsOpen, data }) => {
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
                <div
                    className={styles.top}
                    onClick={handleClose}
                    style={{ cursor: "pointer" }}
                >
                    X
                </div>
                <div className={styles.imageContainer}>
                    <img src="/handshake.png" alt="" />
                </div>
                <div className={styles.bottom}>
                    <h3 className="text-white text-3xl">Invite a friend and get</h3>
                    <div className={styles.textContainer}>
                        <img src="/smallcoin.png" alt="" />
                        <p className="text-white">{data.amount} </p>
                    </div>
                </div>

                <div className={styles.button}>
                    <p className="text-white text-center">Invite Link</p>
                    <p className="text-white text-center">Solclicker.com/InviteLink</p>
                </div>
            </div>
        </div>
    );
};

export default InviteModal;
