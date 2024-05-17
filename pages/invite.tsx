/* eslint-disable */
import React, { useEffect, useMemo, useState  } from 'react'
import { WalletNotConnectedError } from "@solana/wallet-adapter-base"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js"
import ConnectWalletButton from "@/components/connect-wallet-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Typography } from "@/components/ui/typography"
import { cn } from "@/utils/cn"
import truncate from "@/utils/truncate"
import axios from 'axios'

import InviteBar from '../components/InviteBar/InviteBar'
import Friends from '../components/Friends/Friends'
import Footer from '../components/Footer/Footer'



type ResultStatus = "idle" | "success" | "failed"

export default function StatsPage() {
  const [receiver, setReceiver] = useState("")
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ResultStatus>("idle")
  const [signature, setSignature] = useState("")
  const [effect, setEffect] = useState(false);

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






  

const dailyData = [
    {
        title: "Invite 1 friend",
        amount: "+300",
      
    },
    {
        title: "Invite 1 friend",
        amount: "+100",
      
    },
];



  return (
    <div className="mx-auto my-20 flex w-full max-w-md flex-col gap-6 p-6 justify-center">
        <h1 className='text-white'>Invite friends to earn points on Solclicker</h1>
        <h2 className='text-white'>Invite to get bonuses</h2>
        {/* {dailyData.map((item,key) => ( */}
            {/* <InviteBar data={item} key={key} /> */}
        {/* ))} */}

        {/* <h2>Friends</h2>

        <Friends /> */}
        <Footer/> 
        
    </div>
  )
}
