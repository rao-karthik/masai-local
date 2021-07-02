import React, { useState } from 'react'
import { Header } from './Header/Header';
import { StopWatch } from './StopWatch';
import { Timer } from './Timer';

export const Clock = () => {

    const [active, setActive] = useState("TIMER");

    const handleTabChange = (title)=>{
        setActive(title)
    }
    
    return (
        <>
            <div style={{display:'flex'}}>
                {
                    ["TIMER", "STOPWATCH"].map(title=> <Header key={title}
                                                            active={title===active}
                                                            handleClick={handleTabChange}
                                                            title={title} />)
                }
            </div>
            <div>
                <StopWatch hidden ={active !== "STOPWATCH"} />
                <Timer hidden = {active !== "TIMER"} />
            </div>
        </>
    )
}