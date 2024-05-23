/* eslint-disa  le */
import * as THREE from "three";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { UnrealBloomPass } from "@/components/TransparentBackgroundFixedUnrealBloomPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import Moon from '../components/Moon';
// import Coin from '@/components/CoinClicker/CoinClicker';
import {
  WalletNotConnectedError
} from "@solana/wallet-adapter-base"
import {
  useConnection,
  useWallet
} from "@solana/wallet-adapter-react"
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction
} from "@solana/web3.js"
import React, {
  useEffect,
  useState
} from 'react'
import trophy from "./trophy.png"


import ConnectWalletButton from "@/components/connect-wallet-button"
import {
  Button
} from "@/components/ui/button"
import {
  Input
} from "@/components/ui/input"
import {
  Typography
} from "@/components/ui/typography"
import {
  cn
} from "@/utils/cn"
import truncate from "@/utils/truncate"
import axios from 'axios'

import CoinClicker from '../components/CoinClicker/CoinClicker'
import Footer from '../components/Footer/Footer'
import LoadingBar from '../components/LoadingBar/LoadingBar'
import MessageBar from '../components/MessageBar/MessageBar'
import Trophy from '../components/Trophy/Trophy'
// import { Canvas } from '@react-three/fiber'
import ThreeScene from '../components/ThreeScene';
type ResultStatus = "idle" | "success" | "failed"
export default function HomePage() {


  const [receiver, setReceiver] = useState("")
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ResultStatus>("idle")
  const [signature, setSignature] = useState("")
  const [effect, setEffect] = useState(false);
  const [showPlusOne, setShowPlusOne] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
  const [spin, setSpin] = useState(false)


  useEffect(() => {
  
    

  function initGame() {
        
    if (publicKey) { 
  
      let chkdata = {
        wallet: publicKey?.toBase58(),
      };
    
      axios.post('/api/users/check', chkdata)
      .then((response: any) => {
        
        settotalClick(response.data.data.clicks)
        console.log("Total Clicks = " + response.data.data.clicks)
        console.log("Current Click Count = " + clickCount)
        settotalClick(response.data.data.clicks)
        setLevel(response.data.data.level)
        console.log((response.data.data))
        if (response.data.data === false) {

          // Create New User
           setIsGameReady(false);
          console.log(("Creating a new User"))
          localStorage.setItem('wallet', publicKey.toBase58())
          localStorage.setItem('clicks', clickCount.toLocaleString())

            let newusrdata = {
              wallet: publicKey?.toBase58(),
              clicks: 0,
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
            
          })
          .catch((error: any) => {
            console.log(error);
            
          });
    
        }
  
        
      })
      .catch((error: any) => {
        console.log(error);
      });
      
    } else {
      
    }
  
  
  };

    initGame()


  }, [clickCount, publicKey?.toBase58()]);

  
  

  function solclick() {
    const finalclick = totalClick + 1
    settotalClick(finalclick);
    console.log(finalclick)
    setEffect(true)
    setShowPlusOne(true)
    setIsGameReady(true);
    setSpin(true)
    let chkdata = {
      wallet: publicKey?.toBase58(),
      clicks: totalClick
    };


      // if(publicKey){
      // Checking is user exits
        axios.patch('/api/users/', chkdata)
      .then((response: any) => {
        setSpin(false)
        console.log(response)

      })
      .catch((error: any) => {
        console.log(error)
      });
    // }
    console.log("Clicked")
    setTimeout(() => {
      setShowPlusOne(false);
    }, 3000);
  }

  const handleTouchStart = () => {
    setIsClicked(true);
    setShowPlusOne(true);
    setSpin(false)

    // Hide "+1" after 1 second
    setTimeout(() => {
      setShowPlusOne(false);
    }, 1000);
  };

  const handleTouchEnd = () => {
    setIsClicked(false);
  };


  const handleRelease = () => {
    setIsClicked(false);
  };




  return (
    <div className="mx-auto flex flex-col justify-center">
      {/*
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       

        <ThreeScene/> 
        */}


      <div className="container">
        <div className="row flex-row flex justify-center items-center" style={{ justifyContent: "center" }}>
          <div className="col-6 flex flex-col justify-center items-center text-center">

            <img className="trophyImg" width={400} src="/trophy.png" alt="" />

          </div>
          <div className="col-6 flex flex-col justify-center items-center text-center">
            <p className="text text-amber-100" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>{totalClick}</p>
          </div>
        </div>
      </div>

      {/* <MessageBar message={"Connect Wallet To Start Playing"} type={"INVITE"} /> */}
      {/* <LoadingBar percentage={50} /> */}
      {/* <CoinClicker /> */}
      {/* <ConnectWalletButton/> */}


{ spin ? <div className="container spn">
  <img src="/spinner.gif" width={50} className="d-inline"/>
  <h2 className="text-white d-inline">Registering Clicks</h2>
</div>
 : <div></div> }

      <div className="container">
        <img src="/ogcoin.png" className="coin" alt="" onMouseDown={solclick} onMouseUp={handleRelease} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ transform: "rotateZ(90deg)" }} />
        
        <img src="/union.png" className="union" alt="Spinner" />

        {/* {showPlusOne && Array.from({ length: clickCount }).map((_, index) => ( */}
          {/* <div key={index} className="plusOne" >+1</div> */}
        {/* ))} */}
        {/* style={{top: rand+"%", left: rand+"%"}} */}

        {/* <h3 className="text-white text-2xl">Clicks: {clickCount}</h3>
            <h3 className="text-white text-2xl">Level: {level}</h3>  */}


      </div>


      {/* <Footer  /> */}
    </div>

  )
}