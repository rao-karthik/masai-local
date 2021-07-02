import React from 'react';
import styles from './bodyBottom.module.css'

function BodyBottom({image, title, subtitle, copyAddr, qrCode}){

    const deleteItem = (e)=>{
        let del = e.target;
        console.log(del);
    }

    return (
        <div className = {styles.bottomBox}>
            <div className = {styles.details}>
                <div className = {styles.imgBox}>
                    <img src= {image} alt=""/>
                </div>
                <div className= {styles.about}>
                    <h5>{title}</h5>
                    <p>{subtitle}</p>
                </div>
            </div>
            <div>
                <div className = {styles.copy}> <p>{copyAddr}</p> </div>
                <div className = {styles.qrCode}> <p>{qrCode}</p> </div>
            </div>
        </div>
    )
}


export default BodyBottom;