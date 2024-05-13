import React, { useState } from "react";  // Import useState from React
import handshake from "./handshake.png"
import smallcoin from "./smallcoin.png"
import styles from "./InviteBar.module.css"

import ModalOverlay from '../ModalOverlay/ModalOverlay'
import InviteModal from "../InviteModal/InviteModal";

const modalDataDUMMY = {
    amount: "+100",

}

const InviteBar = ({type, data, modalData}) => {
    const [isOpen, setIsOpen] = useState(false);  // Initially set isOpen to false

    const handleUseClick = () => {
        setIsOpen(true);  // Set isOpen to true when the "Use" button is clicked
    };
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/handshake.png" alt="" />
            </div>
            <div className={styles.title}>
                <p className="text-white">{data.title}</p>
            </div>
            <div className={styles.progress}>
                <img src="/smallcoin.png" alt="" />
                <p className="text-white">{data.amount}</p>
            </div>
            <div className={styles.button} onClick={handleUseClick}>
                <p className="text-white">Invite Friend</p>
            </div>
            <InviteModal isOpen={isOpen} setIsOpen={setIsOpen} data={modalDataDUMMY} /> 
        </div>
    );
}

export default InviteBar