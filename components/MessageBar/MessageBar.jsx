import React from "react";
// import styles from "./MessageBar.module.css";
import pfp from "./pfp.png";
import smallcoin from "./smallcoin.png"
const MessageBar = ({ message, type }) => {
    const images = [pfp, pfp, pfp, pfp, pfp, pfp, pfp];

    if (type === "STATS") {
        return (
            <div className="container">
                <div className="pfps">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt=""
                            style={{ zIndex: images.length - index }}
                        />
                    ))}
                </div>
                <div className="info">30,000+ Solclickers</div>
            </div>
        );
    } else if (type === "INVITE") {
        return (
            <div className="container">
                <div className="count">
                    <p>+0</p>
                    <img src="/smallcoin" alt="" />
                </div>
                {message}
            </div>
        );
    } else {
        return <div className="container">{message}</div>;
    }
};

export default MessageBar;
