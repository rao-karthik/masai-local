import React from 'react'

export const FormInput = ({title, body, author, pvt, category, imageRef, handleSubmit, handleChange}) => {
    return (
        <>
            <form onSubmit = {handleSubmit} >
                <div>
                    <label>
                        Title: 
                        <input type="text" placeholder = "Title" name = "title" value = {title} onChange = {handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Body: 
                        <textarea type="text" placeholder = "Type Here " name = "body" value = {body} onChange = {handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Author: 
                        <input type="text" placeholder = "Auhtor" name = "author" value = {author} onChange = {handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Private: 
                        <input type="checkbox" name = "pvt" checked = {pvt} onChange = {handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Category: 
                        <select name="category" onChange = {handleChange} value = {category} >
                            <option value="sports">Sports</option>
                            <option value="music">Music</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="food">Food</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        BlogForm Image:
                        <input ref = {imageRef} type="file" name = "image" />
                    </label>
                </div>
                
                <input type="submit" value= "Submit" />
            </form>
        </>
    )
}
