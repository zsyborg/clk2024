import React, { useState } from "react";
import styles from "./FaqBar.module.css";
import questionImg from "./question.png";
import arrow from "./arrow.png";

const FaqBar = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFaq = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.container} onClick={toggleFaq}>
            <div className={styles.imageContainer}>
                <img src={questionImg} alt="" />
            </div>
            <div className={styles.questionContainer}>
                <h3 className={styles.title}>
                    {question}
                </h3>
                <p className={`${styles.answer} ${isOpen ? styles.open : ''}`}>
                   {answer}
                </p>
            </div>
            <div className={styles.arrowContainer}>
                <img
                    className={styles.arrow}
                    src={arrow}
                    alt=""
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
            </div>
        </div>  
    );
};

export default FaqBar;
