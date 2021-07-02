import React from 'react'

export const StopWatch = () => {

    const [timer, setTimer] = React.useState(0);

    const timeRef = React.useRef(null);

    const handleStart = ()=>{
        if(timeRef.current !== null){
            return;
        }
        timeRef.current = setInterval(()=>{
            setTimer((prev) => prev + 1)
        }, 1000)
    }

    const handleStop = ()=>{
        clearInterval(timeRef.current);
        timeRef.current = null;
    }

    const handleReset = ()=>{
        handleStop();
        setTimer(0);
    }

    React.useEffect (()=>{
        return ()=> {
            timeRef.current && handleStop();
        }
    }, [])

    return (
        <div>
            <h1>Timer</h1>
            <p>{timer}</p>
            <button onClick = {handleStart} >Start</button>
            <button onClick = {handleStop} >Stop</button>
            <button onClick = {handleReset} >Reset</button>
        </div>
    )
}
