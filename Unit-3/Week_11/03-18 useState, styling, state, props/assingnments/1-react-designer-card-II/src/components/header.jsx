import React from 'react';
import styles from './header.module.css'

function HeaderPart(){
    return (
        <>
            <header className= {styles.headerBox}>
                <div className = {styles.logo}>
                    <div className= {styles.imgBox}>
                        <img src="https://via.placeholder.com/150" alt="logo"/>
                    </div>
                    <h3>TipWallets</h3>
                </div>
                <div className = {styles.tabs}>
                    <p>Home</p>
                    <p>Profile</p>
                    <p>Settings</p>
                    <p>About</p>
                    <p>Contact</p>
                    <div>
                        <p>Sign Out -></p>
                    </div>
                </div>
            </header>
            <div className = {styles.backgroundCol}></div>
        </>
    );
};

export default HeaderPart;