import React from 'react';
import { TodoInput } from './TodoInput';
import { TodoItem, ITodoItem } from './TodoItem';

export const Todo = () => {

    const [ todos, setTodods ] = React.useState<ITodoItem[]>([]);

    const handleAdd = (title: string | null)=>{
        if(title === null){
            alert('please add something');
            return;
        };
        const payload: ITodoItem = {
            title,
            id: todos.length+1,
            status: false
        };
        setTodods([...todos, payload]);
    };
    
    return (
        <div>
            <TodoInput onClick={handleAdd} />
            {
                todos.map(item=><TodoItem key={item.id} {...item} />)
            }
        </div>
    )
}