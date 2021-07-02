import React from 'react';

export interface ITodoItem {
    id: number,
    title: string,
    status: boolean
}

export const TodoItem = ({id, title, status} : ITodoItem) => {
    return (
        <div>
            <h4>{title}</h4>
            <p>{`id: ${id} - status: ${status}`}</p>
        </div>
    )
}