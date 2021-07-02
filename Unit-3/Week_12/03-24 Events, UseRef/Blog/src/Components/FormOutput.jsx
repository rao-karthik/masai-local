import React from 'react'

export const FormOutput = ({id, title, body, author, pvt, category, handleToggle, image}) => {
    return (
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <div>
                <img style={{width:'100px', height:'100px'}} src={image} />
            </div>
            <div>
                <h3>Title: {title}</h3>
                <p>{body}</p>
                <h4>by: {author}</h4>
                <label>
                    Private: 
                    <input type="checkbox" checked={pvt} onChange= {()=>handleToggle(id)} />
                </label>
                <p>Category: {category}</p>
            </div>
        </div>
    )
}
