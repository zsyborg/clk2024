import React from "react";
import styles from "./StatsInfoCard.module.css";
import info from "./info.png";
const StatsInfoCard = ({ data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h3>{data.name}</h3>
                <img src={info} alt="" />
            </div>
            <h1>{data.value}</h1>
        </div>
    );
};

export default StatsInfoCard;
