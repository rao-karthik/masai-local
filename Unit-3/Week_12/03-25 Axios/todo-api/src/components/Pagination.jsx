import React from 'react';
import styles from './Pagination.module.css';
import { getData } from './DataApi.js';

export const Pagination = ({currentPage, onChange, limit}) => {

    return (
        <div className = {styles.paginationBox} >
            <button disabled = {currentPage === 1} onClick = {()=> onChange(currentPage-1)} >Prev</button>
            <p>{currentPage}</p>
            <button onClick = {()=> onChange(currentPage+1)} >Next</button>
        </div>
    )
}
