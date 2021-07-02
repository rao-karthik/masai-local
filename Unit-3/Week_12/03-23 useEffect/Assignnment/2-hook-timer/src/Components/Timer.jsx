import {useState, useEffect} from 'react'
import { TimerDisp } from './TimerDisp'

export const Timer = ({start = 10, end = 0}) => {

    const [timer, setTimer] = useState(start);

    useEffect(()=>{
        console.log("hello")
        if(timer !== 0){
            const id = setInterval(()=>{
                setTimer((prev)=>{
                    if (prev === end){
                        clearInterval(id)
                        return prev;
                    }
                    else {
                        return prev - 1;
                    }
                })
                return ()=>{
                    clearInterval(id)
                }
            }, 1000)
        }
    }, [])

    const handleStart = ()=>{
        
    }

    return (
        <div>
            <TimerDisp timer= {timer} />
        </div>
    )
}
