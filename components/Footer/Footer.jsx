import React from "react";
import styles from "./Footer.module.css";
import faq from "./faq.png";
import invite from "./invite.png";
import stats from "./stats.png";
import boost from "./boost.png";
import Link from 'next/link';
const Footer = () => {
    return (
        <div className="cont">
            <div className="row glass flex flex-row justify-around mt-20" style={{alignItems:"center", justifyContent:"space-around"}}>
                <div className="item col col-4 flex-col">
                    <Link href="/">
                    <img src="/home1.png" width={52} alt="" />
                    <p className="text-white text-center">Home</p>
                    </Link>
               
                </div>
                <div className="item col col-4 flex-col">
                    <Link href="/faq">
                        <img src="/faq.png" alt="" />
                        <p className="text-white text-center">FAQs</p>
                    </Link>
                </div>
                <div className="item col col-4 flex-col">
                    <Link href="/stats">
                    <img src="/stats.png" alt="" />
                    <p className="text-white text-center">Stats</p>
                    </Link>
                  
                </div>
                {/* <div className={styles.item}>
                    <Link href="/boosters">
                    <img src="/boost.png" alt="" />
                    <p className="text-white">Boost</p>
                    </Link>
                    
                </div> */}
            </div>
        </div>
    );
};

export default Footer;
