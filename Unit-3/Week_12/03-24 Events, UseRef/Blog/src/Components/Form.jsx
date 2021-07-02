import React from 'react'
import {v4 as uuid} from 'uuid';
import { FormInput } from './FormInput';
import { FormOutput } from './FormOutput';

const initData = {
    title: '',
    body: '',
    author: '',
    pvt: false,
    category: 'Sports',
    image: ''
}

export const Form = () => {

    const [blogFormData, setBlogFormData] = React.useState(initData);
    const [blogData, setBlogData] = React.useState([]);

    const [isPrivate, setIsPrivate] = React.useState(false);

    const [imageURL, setImageURL] = React.useState(null);

    const imageRef = React.useRef();

    let {title, body, author, pvt, category, image} = blogFormData;

    const handleChange = (e)=>{
        const {name, value, type, checked} = e.target;

        const val = type === "checkbox" ? checked : value;

        setBlogFormData({
            ...blogFormData,
            [name]: val
        })
    }

    const shwoURLImage = ()=>{
        if(!imageRef.current.files[0]){
            return;
        }
        const img = URL.createObjectURL(imageRef.current.files[0]);
        setImageURL(img);
    }

    const handleToggle = (id)=>{
        const updatedData = blogData.map(item => item.id === id ? {...item, pvt: !item.pvt} : item)
        setBlogData(updatedData)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const img = URL.createObjectURL(imageRef.current.files[0]);
        const payload = [
            ...blogData,
            {
                id: uuid(),
                title,
                body,
                author,
                pvt,
                category,
                image : img
            }
        ];
        setBlogData(payload);
    }

    return (
        <>
            <FormInput {...blogFormData} imageRef = {imageRef} handleChange = {handleChange} handleSubmit = {handleSubmit} />   
            {
                blogData.length > 0 &&
                <>
                    {
                        blogData.filter(item => !item.pvt).map(item => <FormOutput key = {item.id} {...item} handleChange = {handleChange} handleToggle = {handleToggle} />)
                    }

                    <button onClick = {()=> setIsPrivate(state => !state)} >{isPrivate ? "Hide" : "Show"} Private</button>

                    {
                        isPrivate && 
                        <div>
                            {
                                blogData.filter(item => item.pvt === true).map(item => <FormOutput key = {item.id} {...item} handleToggle = {handleToggle} />)
                            }
                        </div>
                    }
                </>
            }
        </>
    )
}
