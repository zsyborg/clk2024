// Friends.js
import React from "react";
import styles from "./Friends.module.css";
import profile from "./profile.png";
import first from "./1st.png";
import smallcoin from "./smallcoin.png";

const Friends = () => {
    const FriendsData = [
        {
            daily: { placeSrc: first, profileSrc: profile, username: "Users Name" },
            weekly: "", // Placeholder, replace with actual data structure
            monthly: { iconSrc: smallcoin, value: "200,000" },
        },
        {
            daily: { placeSrc: first, profileSrc: profile, username: "Users Name" },
            weekly: "",
            monthly: { iconSrc: smallcoin, value: "150,000" },
        },
        // More entries as needed...
    ];

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <tbody>
                    <tr className="tr">
                        <td className={styles.small}>Daily</td>
                        <td className={styles.large}>Weekly</td>
                        <td className={styles.small}>Monthly</td>
                    </tr>
                    {FriendsData.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.small}>
                                <div className={styles.dailyContainer}>
                                    <img
                                        className={styles.profile}
                                        src={item.daily.profileSrc}
                                        alt=""
                                    />
                                    <div className={styles.innerDaily}>
                                        <h3 className={styles.username}>
                                            {item.daily.username}
                                        </h3>
                                        <div className={styles.coins}>
                                            <img src={smallcoin} alt="" />
                                            <p>200,000</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className={styles.large}>{item.weekly}</td>
                            <td className={styles.small}>
                                <div className={styles.monthlyContainer}>
                                <h3>Users Rank Level</h3>
                                            <p>User Rank</p>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Friends;
