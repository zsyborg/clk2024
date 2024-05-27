/* eslint-disable */
"use client"
import React, { useEffect, useMemo, useState,  } from 'react'
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import FaqBar from '../components/FaqBar/FaqBar'
import styles from '../components/FaqBar/FaqBar.module.css'
import { createClient } from '@supabase/supabase-js'
import Footer from '../components/Footer/Footer'
const supabaseUrl = 'https://lrquyravgthhihlevuqk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxycXV5cmF2Z3RoaGlobGV2dXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0NDU3NTQsImV4cCI6MjAzMTAyMTc1NH0.zZTDxZCA5VJ82CTexj8oSW2WBiEZj2pPWFj3s-k15j8'
const supabase = createClient(supabaseUrl, supabaseKey)




export default function FaqPage() {

  const { connected, publicKey, sendTransaction } = useWallet()
  const { connection } = useConnection()



        const FAQData = [
            {
                question: "What's SolClicker?",
                answer: "SolClicker is an addictive idle clicker game set in the world of Solana blockchain. Your mission? Click on the SolCoin to earn points and climb the leaderboard!"
            },
            {
                question: "How do I play SolClicker?",
                answer: "You can play SolClicker by simply clicking on the SolCoin repeatedly. Each click earns you points that help you climb the leaderboard."
            },
            {
                question: "What are the points used for?",
                answer: "Points in SolClicker are used to track your ranking on the leaderboard and to purchase upgrades that increase the number of points you earn per click."
            },
            {
                question: "Is SolClicker free to play?",
                answer: "Yes, SolClicker is completely free to play. There are no upfront charges or hidden fees."
            },
            {
                question: "Can I play SolClicker on mobile?",
                answer: "Yes, SolClicker can be played on mobile devices. It is optimized for both desktop and mobile play."
            }
        ]


  return (
    <div className="container flex-col">
            
            <h1 className="title text-white">
                Have questions? We are here to help!
            </h1>
            <div className={styles.faqBox}>
                <h2 className="text-white text-center text-3xl mt-3">FAQs</h2>
                {FAQData.map((faq, index) => (
                    <FaqBar key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
            <div className="w-1/3 mt-12">
                <Footer/>
            </div>
        </div>
  )
}
