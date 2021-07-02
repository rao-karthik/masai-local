import React, { useRef, useState } from 'react'
import { getTimeInString } from './Time';

export const StopWatch = ({hidden}) => {

    const [time, setTime] = useState(0);
    const [isRunning, setRunning] = useState(false);
    const timer = useRef();

    const startTimer = ()=>{
        if(isRunning){
            return
        }
        timer.current = setInterval(()=>{
            setTime(prev=> prev+1);
        }, 1000);
        setRunning(true); 
    }

    const stopTimer = ()=>{
        clearInterval(timer.current);
        setRunning(false);
    }

    const resetTimer = ()=>{
        setTime(0);
        stopTimer();
    }

    if(hidden){
        return null;
    }
    
    return (
        <div>
            <h3>{getTimeInString(time)}</h3>
            <button onClick= {isRunning? stopTimer : startTimer} >{isRunning?"STOP":"START"}</button>
            <button onClick = {resetTimer}>RESET</button>
        </div>
    )
} 