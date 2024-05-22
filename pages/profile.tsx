/* eslint-disa  le */
import * as THREE from "three";
import { Canvas } from '@react-three/fiber';
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



  useEffect(() => {
  
    

  async function initGame() {
        
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
        console.log((response.data.data))

        
      })
      .catch((error: any) => {
        console.log(error);
      });
      
    } else {
      
    }
  
  
  };

    return () => {
      
      initGame()
    };
  }, [clickCount, publicKey?.toBase58()]);

  
  
  return (
    <div className="mx-auto container flex w-full max-w-mdjustify-center">


      <div className="container min-h-2/4 bar" style={{minHeight:"50vh"}}>
        <div className="row flex d-flex justify-center content-center">
            <div className="col-6 flex flex-col min-w-full">
               <p className="text-3xl text-center text-amber-500 shadow-md font-bold bold">WALLET</p>
                <p className="text-2xl text-center text-amber-500">{publicKey?.toBase58()}</p>
            </div>
            <div className="col-6 flex flex-col min-w-full">
              <p className="text-3xl text-center text-amber-700">Clicks</p>
              <div><p className="text-3xl text-center text-amber-700">{totalClick}</p></div>
            </div>
        </div>
      </div>


      {/* <Footer  /> */}
    </div>

  )
} 