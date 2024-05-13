import React from "react";
import styles from "./Navbar.module.css";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ConnectWalletButton from "@/components/connect-wallet-button"

const Navbar = ({ type }) => {
    // const connected = true;
  const { connected, publicKey, sendTransaction } = useWallet()
  const { connection } = useConnection()

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                {type === "HOMEPAGE" ? (
                    connected ? (
                    <ConnectWalletButton/>
                        
                    ) : (
                        <ConnectWalletButton/>
                    )
                ) : (
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                )}
            </div>
            <div className={styles.right}>{connected && <>0xr..23</>}</div>
        </div>
    );
};

export default Navbar;
