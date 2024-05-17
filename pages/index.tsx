/* eslint-disable */
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
import { Canvas } from '@react-three/fiber'
import ThreeScene from '../components/ThreeScene';
type ResultStatus = "idle" | "success" | "failed"
export default function HomePage() {

  return ( 
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ThreeScene />
    
    {/* <Footer /> */}
    </div>
  )
}