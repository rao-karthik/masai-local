import React from 'react';
import styles from "./components.module.css"

function ReactMenu({label}){
    return (
        <div className = {styles.box}>
            <p>{label}</p>
        </div>
    )
}

export default ReactMenu;