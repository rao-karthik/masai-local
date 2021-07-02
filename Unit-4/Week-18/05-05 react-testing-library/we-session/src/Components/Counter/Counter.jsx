import React from 'react'
import { Button } from '../Button/Button';

export const Counter = ({ initialValue=0, label="Counter" }) => {

    const [ value, setValue ] = React.useState(initialValue);
    
    return (
        <div>
            <h3 data-testid="counter-header">{label}</h3>
            <h4 data-testid="counter-value">{value}</h4>
            <div>
                <Button label="ADD" onClick={()=>setValue(value+1)} />
                <Button label="REDUCE" onClick={()=>setValue(value-1)} />
            </div>
        </div>
    )
}
