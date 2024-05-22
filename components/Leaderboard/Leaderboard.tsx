// Leaderboard.js
import React, { useEffect, useMemo, useState, } from 'react'
import styles from "./Leaderboard.module.css";
import profile from "./profile.png";
import first from "./1st.png";
import smallcoin from "./smallcoin.png";
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lrquyravgthhihlevuqk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxycXV5cmF2Z3RoaGlobGV2dXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0NDU3NTQsImV4cCI6MjAzMTAyMTc1NH0.zZTDxZCA5VJ82CTexj8oSW2WBiEZj2pPWFj3s-k15j8'
const supabase = createClient(supabaseUrl, supabaseKey)

let sdata = []
let wonka = []
let leaderdata = ""

// const [leads, setLeads] = useState()

const sampledata = [{
    "wallet": "389ryhaf",
    "clicks": 20,
    "level": 40,
    "name": "zasha",
    "misc": ""
},

{
    "wallet": "nvkjushuf8owa787*",
    "clicks": 200,
    "level": 40,
    "name": "zsyboy",
    "misc": ""

},
{
    "wallet": "jKHKJGklny893y4",
    "clicks": 4520,
    "level": 40,
    "name": "webg",
    "misc": ""

},
{
    "wallet": "asmks345454hdusyu",
    "clicks": 520,
    "level": 40,
    "name": "hjhfyuyu",
    "misc": ""

},
]

const sorted = sampledata.sort((a) => a.clicks)
const chat = [...sampledata].sort((a,b) => a.clicks - b.clicks)
const chat1 = [...chat].sort((a,b) => a.clicks - b.clicks)

console.log(chat1);


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



    // useEffect(() => {
    //     async function getTodos() {
          
    //       wonka = await supabase
    //       .from('clickdb')
    //       .select('*')
    
    //       sdata = wonka.data
    //       console.log(wonka)
    //     }
    
    //     getTodos()
    //   }, [])
    


    return (
        <div className={styles.container}>
            <div className="row flex flex-row">
            <div className='col-8 flex contents'>
            <table className="table justify-center">
                <tbody className='mb-3 mt-3'>
                    {/* <tr className='tr'> */}
                        <td className={styles.small} style={{fontWeight:"bold", fontSize:'1.5rem'}}>WALLET</td>
                        <td className={styles.large} style={{fontWeight:"bold", fontSize:'1.5rem'}}>CLICKS</td>
                        {/* <td className={styles.small}>Monthly</td> */}
                    {/* </tr> */}

                    {chat.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.small}>
                                <div className={styles.dailyContainer}>
                                    {/* <img className={styles.place} src="/stats.png" alt="" /> */}
                                    {/* <img className={styles.profile} src="/profile.png" alt="" /> */}
                                    <p className={styles.username}>{item.wallet}</p>
                                </div>
                            </td>
                            
                            
                            <td className={styles.small}>
                                <div className={styles.monthlyContainer}>
                                    <img src="/smallcoin.png" alt="" />
                                    {item.clicks}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                </div>
            </div>
        </div>
    );
}

export default Leaderboard;
