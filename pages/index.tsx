import { WalletNotConnectedError } from "@solana/wallet-adapter-base"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js"
import React, { useEffect, useState } from 'react'
import trophy from "./trophy.png"

import ConnectWalletButton from "@/components/connect-wallet-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Typography } from "@/components/ui/typography"
import { cn } from "@/utils/cn"
import truncate from "@/utils/truncate"
import axios from 'axios'

import CoinClicker from '../components/CoinClicker/CoinClicker'
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



  const submitTransaction = async () => {
    if (!publicKey) throw new WalletNotConnectedError()

    try {
      setLoading(true)
      setResult("idle")
      setSignature("")
      const ix = SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(receiver),
        lamports: parseFloat(amount) * LAMPORTS_PER_SOL,
      })
      const tx = new Transaction().add(ix)
      const signature = await sendTransaction(tx, connection)
      await connection.confirmTransaction(signature, "processed")
      setSignature(signature)
      setResult("success")
    } catch (error) {
      console.error(error)
      setResult("failed")
    } finally {
      setLoading(false)
    }
  }



  
  async function handleClick() {

    if (publicKey) {
      console.log("My wallet " + publicKey.toBase58())
      
      setEffect(true)

    // console.log("PATCH Clicks + " + totalClick)

    setShowPlusOne(true);
        // Hide "+1" after 1 second
setTimeout(() => {
  setShowPlusOne(false);
  // setClickCount(0)
}, 3000);



    setClickCount(clickCount + 1)
    settotalClick(totalClick + 1)
    
    localStorage.setItem('clicks', clickCount.toString())
    localStorage.setItem('level', level.toString())
    const klick = localStorage.getItem('clicks')
    const lvl = localStorage.getItem('level')
    // Check if the totalClicks is a multiple of 10
    // if (clickCount % 10 === 0) {
      // Level up and double the required clicks for the next level
      // setLevel(level + 1);
      // localStorage.setItem('level', level.toString())



      //  let clkdata = {
        // wallet: publicKey,
        // clicks: klick,
        // level: lvl
      // };



      // console.log("Patched Data" + clkdata)
      // axios.patch('/api/users', clkdata)
      // .then((response) => {
      //   console.log(response)
      //   // settotalClick(response.data.data.clicks)
      // })
      // .catch((error) => {
      //   console.log(error);
      // });

    
// console.log("Total Clicks " + clickCount)
// console.log("Reached Level " + level)

    // } 
  } //if considtion

}




  
  
  async function initGame() {
        
    if (publicKey) { 
  
      let chkdata = {
        wallet: publicKey?.toBase58(),
      };
      


      
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

      axios.post('/api/users/check', chkdata)
      .then((response: any) => {
        
        settotalClick(response.data.data.clicks)
        console.log("Total Clicks = " + response.data.data.clicks)
        console.log("Current Click Count = " + clickCount)
        settotalClick(response.data.data.clicks)
        setLevel(response.data.data.level)
  
        if (response.data.data === false) {
           // Create New User
           setIsGameReady(false);
          console.log(("Creating a new User"))
            let newusrdata = {
              wallet: publicKey?.toBase58(),
              clicks: 0,
              level: 0
            };
            axios.post('/api/users', newusrdata)
            .then((response: any) => {
              console.log(response)
              setIsGameReady(true);
              return response
            })
            .catch((error: any) => {
              console.log(error); 
              
            });
        } else {
      
          axios.get('/api/users')
          .then((response: any) => {
            console.log(response.data.data)
            setData(response.data.data)
            if (response.data.data === false) {
             setIsGameReady(false) 
            }
            return response.data.data
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
            
          })
          .catch((error: any) => {
            console.log(error);
            
          });
    
        }
  
        
      })
      .catch((error: any) => {
        console.log(error);
      });
      
      
     
  
  
  
  
  
      
      // const gameState = await getCurrentGame({ wallet, endpoint });
      // setClicks(gameState.clicks);
      // setGameAccountPublicKey(gameState.gameAccountPublicKey);
      // setSolanaExplorerLink(
      //   `https://explorer.solana.com/address/${gameAccountPublicKey}/anchor-account?cluster=${network}`
      // );
      // setGameError(gameState.errorMessage);
      
    } else {
      // setIsGameReady(false);
      // setClicks(0);
      // setGameAccountPublicKey("");
      
      // setSolanaExplorerLink("");
      // setGameError("");
    }
  
  
  }
  
    
//  initGame()




  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6 justify-center">
      <ConnectWalletButton/>
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


        <div className="container">
            <img src="/union.png" className="union" alt="" />
            <img
                src="/coin.png"
                className="coin"
                alt=""
                onMouseDown={handleClick}
                // onMouseUp={handleRelease}
                // onTouchStart={handleTouchStart}
                // onTouchEnd={handleTouchEnd}
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
