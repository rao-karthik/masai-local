import React from 'react';

interface ITodoInputProps {
    onClick: (value: string | null)=> void
}

export const TodoInput = ({ onClick}: ITodoInputProps) => {

    const [ state, setState ] = React.useState<string | undefined>(undefined);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
        setState(e.target.value)
    }

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        if(!state){
            onClick(null)
            return
        }
        onClick(state)
    }
    
    return (
        <div style={{padding:"10px"}}>
            <input type="text" value={state} onChange={handleChange} placeholder="Enter Something" />
            <button onClick={handleSubmit} >ADD</button>
        </div>
    )
}