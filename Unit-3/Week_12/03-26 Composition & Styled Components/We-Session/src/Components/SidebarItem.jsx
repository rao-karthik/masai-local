import React from 'react';
import styles from './Sidebar.module.css'

export const SidebarItem = ({icon, label}) => {
    return (
        <div className = {styles.outer}>
            <div className = {styles.container}>
                <div>{icon}</div>
                <div>{label}</div>
            </div>
        </div>
    )
}
