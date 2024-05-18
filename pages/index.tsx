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


  const handleRelease = () => {
    setIsClicked(false);
  };



  //   const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera(
  //   75,
  //   window.innerWidth / window.innerHeight,
  //   0.1,
  //   1000
  // );

  // const canvReference = document.getElementById("root") as HTMLCanvasElement;
  // const renderer = new THREE.WebGLRenderer({
  //   canvas: canvReference,
  //   alpha: true,
  // });
  // renderer.setClearColor(0xff0000, 0);
  // renderer.setSize(window.innerWidth, window.innerHeight);

  // const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 4, 1, 0.1);
  // const composer = new EffectComposer(renderer)
  // const renderPass = new RenderPass(scene, camera)
  // composer.addPass(renderPass)
  // composer.addPass(bloomPass)

  // const geometry = new THREE.SphereGeometry(10, 32, 32);
  // const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  // const sun = new THREE.Mesh(geometry, material);
  // scene.add(sun);
  // const controls = new OrbitControls(camera, renderer.domElement);

  // const moons: Moon[] = [];
  // _.range(0, 100).forEach(() => {
  //   const moon = new Moon(sun);
  //   scene.add(moon);
  //   moons.push(moon);
  // });

  // camera.position.z = -75;
  // camera.position.x = -75;
  // camera.position.y = -75;

  // const animate = function () {
  //   requestAnimationFrame(animate);
  //   controls.update();
  //   moons.forEach((m) => m.render());
  //   composer.render();
  // };

  // animate();



  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6 justify-center overflow-hidden">
      {/*
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       

        <ThreeScene/> 
        */}


      <div className="container">
        <div className="row bar flex-row flex justify-center items-center" style={{ justifyContent: "center" }}>
          <div className="col-6 flex flex-col justify-center items-center text-center">

            <img className="trophyImg" width={400} src="/trophy.png" alt="" />

          </div>
          <div className="col-6 flex flex-col justify-center items-center text-center">
            <p className="text text-amber-100" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>{clickCount}</p>
          </div>
        </div>
      </div>

      {/* <MessageBar message={"Connect Wallet To Start Playing"} type={"INVITE"} /> */}
      {/* <LoadingBar percentage={50} /> */}
      {/* <CoinClicker /> */}
      {/* <ConnectWalletButton/> */}


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