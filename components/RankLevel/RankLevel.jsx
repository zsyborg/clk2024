import React from 'react'
import styles from "./RankLevel.module.css"
import trophy from "./trophy.png"
import left from "./left.png"
import right from "./right.png"
import LoadingBar from "../LoadingBar/LoadingBar"
import MessageBar from '../MessageBar/MessageBar'
import Leaderboard from "../Leaderboard/Leaderboard"
import Footer from '../Footer/Footer'

const RankLevel = () => {
  return (
    <div className={styles.container}>
        {/* <div className={styles.trophyContainer}>
            <img className={styles.left} src="/left.png" alt="" />
            <img className={styles.trophy} src="/trophy.png" alt="" />
            <img className={styles.right} src="/right.png" alt="" />
        </div>
        <LoadingBar percentage={10} />
        <MessageBar message={"10/3k"} /> */}
        {/* <h2 className='text-center'>Your Rank Level</h2> */}
        <h2 className='text-center text-2xl'>Leaderboard</h2>
        <Leaderboard />
        <Footer/>
    </div>
  )
}

export default RankLevel