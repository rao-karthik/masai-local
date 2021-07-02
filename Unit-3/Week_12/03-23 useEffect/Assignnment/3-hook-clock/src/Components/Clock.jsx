import {useState, useEffect} from 'react'

export const Clock = () => {
    const [date, setDate] = useState(new Date)

    // useEffect(()=>{
    //     const id = setInterval(()=>{
    //         setDate(new Date())
    //     }, 1000)
    //     return ()=>{
    //         clearInterval(id)
    //     }
    // }, [])

    const startClock = ()=>{
        const id = setInterval(()=>{
            setDate(new Date())
        }, 1000)
    }

    const[showDate, setShowDate] = useState(false)

    return (
        <div>
           <h2>Clock</h2>
           {
               showDate && 
               <div>
                    <h3>{date.toLocaleTimeString()}</h3>
                    <button onClick = {startClock}>Start Clock</button>
               </div>
           }
           <button onClick= {()=> setShowDate(!showDate)} >Toggle</button>
        </div>
    )
}
