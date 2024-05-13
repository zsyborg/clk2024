// Leaderboard.js
import React from 'react';
import styles from "./Leaderboard.module.css";
import profile from "./profile.png";
import first from "./1st.png";
import smallcoin from "./smallcoin.png";


const Leaderboard = () => {
    const leaderboardData = [
        {
            daily: { placeSrc: first, profileSrc: profile, username: "User1" },
            weekly: "",  // Placeholder, replace with actual data structure
            monthly: { iconSrc: smallcoin, value: "200,000" }
        },
        {
            daily: { placeSrc: first, profileSrc: profile, username: "User2" },
            weekly: "",
            monthly: { iconSrc: smallcoin, value: "150,000" }
        },
        // More entries as needed...
    ];

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <tbody>
                    <tr className='tr'>
                        <td className={styles.small}>Daily</td>
                        <td className={styles.large}>Weekly</td>
                        <td className={styles.small}>Monthly</td>
                    </tr>
                    {leaderboardData.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.small}>
                                <div className={styles.dailyContainer}>
                                    <img className={styles.place} src="/stats.png" alt="" />
                                    <img className={styles.profile} src="/profile.png" alt="" />
                                    <p className={styles.username}>{item.daily.username}</p>
                                </div>
                            </td>
                            <td className={styles.large}>
                                {item.weekly}
                            </td>
                            <td className={styles.small}>
                                <div className={styles.monthlyContainer}>
                                    <img src="/smallcoin.png" alt="" />
                                    {item.monthly.value}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;
