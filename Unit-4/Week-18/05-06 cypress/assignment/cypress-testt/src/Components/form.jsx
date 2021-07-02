import React from 'react';
import { Input } from './Input';
import { OutPut } from './OutPut';

export const Form = () => {

    const [value, setValue] = React.useState("");
    const [ data, setData ] = React.useState([]);

    const handleChange = (val)=>{
        // const { value } = e.target;

        setValue(val)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newVal = new FormData(e.target)

        const payload = [
            ...data,
            value
        ];
        setData(payload);
    }
    
    return (
        <div>
            <Input value={value} onChange={handleChange} handleSubmit={handleSubmit} />
            <ul className='data-list'>
                {
                    data?.map(item=>(
                        <OutPut value={item} />
                    ))
                }
            </ul>
        </div>
    )
}