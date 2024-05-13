import React, { useState } from "react";  // Import useState from React
import styles from "./Activity.module.css";
import star from "./star.png";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const modalDataDUMMY = {
    text: "This boost will increase your points by xxx",
    title: "Multi Click",
    totalAmount: "5",
    tasks: "5",

}

const Activity = ({type, data, modalData}) => {
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
                <p>{data.completedTasks}/{data.totalTasks} Left</p>
            </div>
            <div className={styles.button} onClick={handleUseClick}>
                <p>Use</p>
            </div>
            <ModalOverlay isOpen={isOpen} setIsOpen={setIsOpen} data={modalDataDUMMY} /> 
        </div>
    );
};

export default Activity;
