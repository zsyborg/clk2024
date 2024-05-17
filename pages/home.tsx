/* eslint-disable */
import { WalletNotConnectedError } from "@solana/wallet-adapter-base"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js"
import React, { useEffect, useState } from 'react'
import trophy from "./trophy.png"

// import ConnectWalletButton from "@/components/connect-wallet-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Typography } from "@/components/ui/typography"
import { cn } from "@/utils/cn"
import truncate from "@/utils/truncate"
import axios from 'axios'

import Footer from '../components/Footer/Footer'
import LoadingBar from '../components/LoadingBar/LoadingBar'
import MessageBar from '../components/MessageBar/MessageBar'
import Trophy from '../components/Trophy/Trophy'

type ResultStatus = "idle" | "success" | "failed"

export default function HomePage() {
  const [receiver, setReceiver] = useState("")
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ResultStatus>("idle")
  const [signature, setSignature] = useState("")
  const [effect, setEffect] = useState(false);
  const [showPlusOne, setShowPlusOne] = useState(false);
  const [isClicked,   setIsClicked] = useState(false);

  const { connected, publicKey, sendTransaction } = useWallet()
  const { connection } = useConnection()

  const [clickCount, setClickCount] = useState(0);
  const [totalClick, settotalClick] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameError, setGameError] = useState("");
  const [gameAccountPublicKey, setGameAccountPublicKey] = useState("");
  const [sdata, setData] = useState([]);
  const [isGameReady, setIsGameReady] = useState(false);
  const [clicks, setClicks] = useState(0);



  function solclick() {
    setClickCount(prevCount => prevCount + 1);
    setEffect(true)
    setIsGameReady(true);
    console.log("Clicked")
    setTimeout(() => {
      setShowPlusOne(false);
    }, 3000);
  }


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

  
  async function handleClick() {
    setEffect(true)
    setIsGameReady(true);


    if (publicKey) {
    setIsGameReady(true);

      // console.log("My wallet " + publicKey.toBase58())
      setEffect(true)
      setShowPlusOne(true);
      // Hide "+1" after 1 second
      setTimeout(() => {
      setShowPlusOne(false);
      // setClickCount(0)
      // console.log("PATCH Clicks + " + totalClick)
      }, 3000);

 
  } else{
    setIsGameReady(true);

    // console.log("My wallet " + publicKey.toBase58())
    setEffect(true)
    setShowPlusOne(true);
    // Hide "+1" after 1 second
    setTimeout(() => {
    setShowPlusOne(false);
    // setClickCount(0)
    }, 3000);
    

  }

}




  
  
  async function initGame() {
        
    if (publicKey) { 
  
      // let chkdata = {
        // wallet: publicKey?.toBase58(),
      // };
      


      
      if (level <= 10){
        document.querySelector('meme')?.classList.remove('animate-bounce')
      } else if (level <= 20){
        console.log("dance20")
      } else if(level <= 30){
        console.log("dance30")
      } else if(level <= 40){
        console.log("dance40")
      } else if(level <= 50){
        console.log("dance50")
      } else if(level <= 60){
        console.log("dance2")
      } else if(level <= 70){
        console.log("dance2")
      } else if(level <= 80){
        console.log("dance2")
      } else if(level <= 90){
        console.log("dance2")
      } else if(level <= 100){
        console.log("dance2")
      }


      // const { data } = await supabase.from('clicker').select().returns<Database>()
      // console.log(data)

      // axios.post('/api/users/check', chkdata)
      // .then((response: any) => {
        // 
        // settotalClick(response.data.data.clicks)
        // console.log("Total Clicks = " + response.data.data.clicks)
        // console.log("Current Click Count = " + clickCount)
        // settotalClick(response.data.data.clicks)
        // setLevel(response.data.data.level)
  
        // if (response.data.data === false) {
           // Create New User
           setIsGameReady(true);
          // console.log(("Creating a new User"))
            // let newusrdata = {
              // wallet: publicKey?.toBase58(),
              // clicks: 0,
              // level: 0
            // };
            // axios.post('/api/users', newusrdata)
            // .then((response: any) => {
              // console.log(response)
              // setIsGameReady(true);
              // return response
            // })
            // .catch((error: any) => {
              // console.log(error); 
              // 
            // });
        // } else {
      
          // axios.get('/api/users')
          // .then((response: any) => {
            // console.log(response.data.data)
            // setData(response.data.data)
            // if (response.data.data === false) {
            //  setIsGameReady(false) 
            // }
            // return response.data.data
            // data.map((item, index) => (
            //   {item.wallet === wallet ? (
            //     {setClickCount(item.clicks)}
            //   ) : (
            //     {item.wallet}
            //   )}
            // ))
            
            // if (data.wallet === wallet.publicKey.toBase58()) {
            //   setClickCount(data.clicks)
            //   console.log("Total Clicks" + data.clicks)
            // }
            

          // })
          // .catch((error: any) => {
            // console.log(error);
            // 
          // });
    
        // }
  
        
      // })
      // .catch((error: any) => {
        // console.log(error);
      // });
      
      
     
  
  
  
  
  
      
      // const gameState = await getCurrentGame({ wallet, endpoint });
      // setClicks(gameState.clicks);
      // setGameAccountPublicKey(gameState.gameAccountPublicKey);
      // setSolanaExplorerLink(
      //   `https://explorer.solana.com/address/${gameAccountPublicKey}/anchor-account?cluster=${network}`
      // );
      // setGameError(gameState.errorMessage);
      
    // } else {
      // setIsGameReady(false);
      // setClicks(0);
      // setGameAccountPublicKey("");
      
      // setSolanaExplorerLink("");
      // setGameError("");
    }
  
  
  }
  
    
//  initGame()
const handleRelease = () => {
  setIsClicked(false);
};





  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6 justify-center overflow-hidden">
      {/* <Trophy /> */}
      <div className="container">
      <div className="row flex-row flex justify-center items-center" style={{justifyContent:"center"}}>
        <div className="col-6 flex flex-col justify-center items-center text-center">

        <img className="trophyImg" src="/trophy.png" alt="" />
        
        </div>
        <div className="col-6 flex flex-col justify-center items-center text-center">
        <p className="text text-white">{clickCount}</p>
        </div>
      </div>
    </div>
        {/* <MessageBar message={"Connect Wallet To Start Playing"} type={"INVITE"} /> */}
        {/* <LoadingBar percentage={50} /> */}
        {/* <CoinClicker /> */}
      {/* <ConnectWalletButton/> */}


        <div className="container">
            <img src="/union.png" className="union" alt="" />
            <img
                src="/ogcoin.png"
                className="coin"
                alt=""
                onMouseDown={solclick}
                onMouseUp={handleRelease}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{transform:"rotateZ(90deg)"}}
            />
            
            {showPlusOne && Array.from({ length: clickCount }).map((_, index) => (
                <div key={index} className="plusOne" >+1</div>
            ))}
              {/* style={{top: rand+"%", left: rand+"%"}} */}

            {/* <h3 className="text-white text-2xl">Clicks: {clickCount}</h3>
            <h3 className="text-white text-2xl">Level: {level}</h3>  */}
             

        </div>


        <Footer />
    </div>
  )
}