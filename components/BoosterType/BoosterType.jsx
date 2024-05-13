import React, { useState } from "react";  // Import useState from React

import styles from "./BoosterType.module.css"
import star from "./star.png"
import smalltrophy from "./smalltrophy.png"
import ModalOverlay from '../ModalOverlay/ModalOverlay'

const modalDataDUMMY = {
    text: "This boost will increase your points by xxx",
    title: "Multi Click",
    totalAmount: "5",
    tasks: "5",

}

const BoosterType = ({type, data, modalData}) => {
    const [isOpen, setIsOpen] = useState(false);  // Initially set isOpen to false

    const handleUseClick = () => {
        setIsOpen(true);  // Set isOpen to true when the "Use" button is clicked
    };
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={star} alt="" />
            </div>
            <div className={styles.title}>
                <p>{data.title}</p>
            </div>
            <div className={styles.progress}>
                <img src={smalltrophy} alt="" />
                <p>{data.amount}</p>
            </div>
            <div className={styles.button} onClick={handleUseClick}>
                <p>Get</p>
            </div>
            <ModalOverlay isOpen={isOpen} setIsOpen={setIsOpen} data={modalDataDUMMY} /> 
        </div>
    );
}

export default BoosterType