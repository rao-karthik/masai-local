import React from 'react';
import styles from './body.module.css'
import BodyBottom from './body/bodyBottom'

function BodyPart(){
    const data = [
        {
            image: "https://via.placeholder.com/100",
            title: "Bitcoin ($btc)",
            subtitle: "Lorem ipsum dolor sit amet consectetur",
            copyAddr: "Copy Address",
            qrCode: "QR Code"
        },
        {
            image: "https://via.placeholder.com/100",
            title: "Ripple ($xrp)",
            subtitle: "Lorem ipsum dolor sit amet consectetur",
            copyAddr: "Copy Address",
            qrCode: "QR Code"
        },
        {
            image: "https://via.placeholder.com/100",
            title: "Dogecoin ($doge)",
            subtitle: "Lorem ipsum dolor sit amet consectetur",
            copyAddr: "Copy Address",
            qrCode: "QR Code"
        }
    ]

    return (
        <div className = {styles.bodyBox}>
            <div className= {styles.contentBox}>
                <div className = {styles.imgBox}>
                    <img src="https://via.placeholder.com/300" alt="image"/>
                </div>
                <h1>Sudo_Overflow</h1>
                <p>Hey This is my TipWallet's profile, thank you for supporting my work</p>
            </div>
            {
                data.map((item)=>
                    <BodyBottom image = {item.image} title = {item.title} subtitle = {item.subtitle} copyAddr = {item.copyAddr} qrCode = {item.qrCode} />
                )
            }
        </div>
    )
}

export default BodyPart;