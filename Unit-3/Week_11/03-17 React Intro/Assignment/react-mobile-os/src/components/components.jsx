import React from 'react';
import styles from './components.module.css'

function MobileOS(){
    return (
        <div className = {styles.mobile}>
            <h1>Mobile Operating System</h1>
            <ul>
                <li>Android</li>
                <li>Blackberry</li>
                <li>iPhone</li>
                <li>Windows Phone</li>
            </ul>
            <h1>Mobile Manufacutrers</h1>
            <ul>
                <li>Samsung</li>
                <li>HTC</li>
                <li>Micromax</li>
                <li>Apple</li>
            </ul>
        </div>
    )
}

export default MobileOS;