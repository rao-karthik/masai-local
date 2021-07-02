import React from 'react'
import { Button } from './Button';
import { Header } from './Header'

export const Counter = () => {

    const [ count, setCount ] = React.useState<number>(0);

    const habdleClick = (value: number) =>{
        setCount(count + value);
    };
    
    return (
        <div>
            <Header label="Counter" />
            <Header label={`${count}`} />
            <Button handleClick={()=>habdleClick(-1)} label="REDUCE" />
            <Button handleClick={()=>habdleClick(1)} label="ADD" />
        </div>
    )
}
