"use client"
// Leaderboard.js
import React, {useEffect, useState} from 'react';
import styles from "./Leaderboard.module.css";
import profile from "./profile.png";
import first from "./1st.png";
import smallcoin from "./smallcoin.png";
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pqpayyxkvsfoddpbdwyq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxcGF5eXhrdnNmb2RkcGJkd3lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNjcxMDUsImV4cCI6MjAyOTk0MzEwNX0.yKp-tNgNR0UirxrqHT0TmPQBoRUaVhzf1rTef86ukRY"
const supabase = createClient(supabaseUrl, supabaseKey)

let ldata = [] 


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


    useEffect(() => {
        async function getTodos() {
          
          const { data: wonka, error } = await supabase
          .from('wonka')
          .select('*')
    
          ldata = wonka
          console.log(ldata)
        }
    
        getTodos()
      }, [])
    
    


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
