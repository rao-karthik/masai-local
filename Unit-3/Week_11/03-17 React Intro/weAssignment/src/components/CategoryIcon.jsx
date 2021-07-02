import React from "react";
import styles from "./CategoryIcon.Module.css"

function CategoryIcon({label, src}){
    return (
        <div className = {styles.container}>
            <img src= {src} />
            <p>{label}</p>
        </div>
    )
}

export default CategoryIcon;