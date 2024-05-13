import React, { useState } from "react";
import union from "./union.png";
import coin from "./coin.png";
import styles from "``./CoinClicker.module.css";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from 'axios'

const CoinClicker = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [showPlusOne, setShowPlusOne] = useState(false);
   
    const [receiver, setReceiver] = useState("")
    const [amount, setAmount] = useState("")
    const [loading, setLoading] = useState(false)
    // const [result, setResult] = useState<ResultStatus>("idle")
    const [signature, setSignature] = useState("")
    const [effect, setEffect] = useState(false);
  
    const { connected, publicKey, sendTransaction } = useWallet()
    // const { connection } = useConnection()
  
    const [clickCount, setClickCount] = useState(0);
    const [totalClick, settotalClick] = useState(0);
    const [level, setLevel] = useState(0);
    const [gameError, setGameError] = useState("");
    const [gameAccountPublicKey, setGameAccountPublicKey] = useState("");
    const [sdata, setData] = useState([]);
    const [isGameReady, setIsGameReady] = useState(false);
    const [clicks, setClicks] = useState(0);









    const handleClick = () => {
        // setClickCount(prevCount => prevCount + 1);
        setShowPlusOne(true);

        // Hide "+1" after 1 second
        setTimeout(() => {
            setShowPlusOne(false);
            setClickCount(0)
        }, 3000);



    
      
      
        // setEffect(true)

      // console.log("PATCH Clicks + " + totalClick)

          



      settotalClick(totalClick + 1)
      const newclicks = clickCount + 1
      setClickCount(newclicks)
      
      localStorage.setItem('clicks', clickCount.toString())
      localStorage.setItem('level', level.toString())
      const klick = localStorage.getItem('clicks')
      const lvl = localStorage.getItem('level')


      // Check if the totalClicks is a multiple of 10
      if (newclicks % 10 === 0) {
        // Level up and double the required clicks for the next level
        setLevel(level + 1);
        localStorage.setItem('level', level.toString())



         let clkdata = {
          wallet: publicKey.toBase58(),
          clicks: newclicks,
          level: level
        };
        axios.post('/api/users/check', clkdata)
        .then((response) => {
            console.log(response)
        })
            .catch((error) => {
                console.log(error);
              });
              
        



        // console.log("Patched Data" + clkdata)
        // axios.patch('/api/users', clkdata)
        // .then((response) => {
        //   console.log(response)
        //   // settotalClick(response.data.data.clicks)
        // })
        // .catch((error) => {
        //   console.log(error);
        // });

      
        
    } 
    console.log("Total Clicks " + clickCount)
    console.log("Reached Level " + level)


    };


    const handleRelease = () => {
        setIsClicked(false);
    };

    const handleTouchStart = () => {
        setIsClicked(true);
        setShowPlusOne(true);

        // Hide "+1" after 1 second
        setTimeout(() => {
            setShowPlusOne(false);
        }, 1000);
    };

    const handleTouchEnd = () => {
        setIsClicked(false);
    };

    const maxLimit = 100
    const top = Math.random() * maxLimit
    const rand = Math.floor(top)
    // console.log("Rand" + rand)

    return (
        <div className={styles.container}>
            <img src="/union.png" className="union" alt="" />
            <img
                src="/coin.png"
                className="coin"
                alt=""
                onMouseDown={handleClick}
                onMouseUp={handleRelease}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            />
            
            {showPlusOne && Array.from({ length: clickCount }).map((_, index) => (
                <div key={index} className={styles.plusOne} style={{top: rand+"%", left: rand+"%"}} >+1</div>
            ))}
              

            {/* <h3 className="text-white text-2xl">Clicks: {clickCount}</h3>
            <h3 className="text-white text-2xl">Level: {level}</h3>  */}
             

        </div>
    );
};

export default CoinClicker;
