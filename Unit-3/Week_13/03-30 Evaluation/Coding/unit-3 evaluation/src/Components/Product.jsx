import { useState, useEffect, useRef } from 'react'
import { ProductInput } from './ProductInput';
import { getData, postData } from './dataAPI';
import { ProductList } from './ProductList';
import {v4 as uuid} from 'uuid';

const initDetails = {
    title: '',
    cost: '',
    category: 'fruits',
    image: ''
}

export const Product = () => {

    const [input, setInput] = useState(initDetails)
    const { title, cost, category} = input;

    const [productData, setProductData] = useState([]);

    const [page, setPage] = useState(1);
    const limit = 5;

    const imageRef = useRef();

    const handleChange = (e)=>{
        const {name, value} = e.target;
        console.log(name, value)
        const updatedData = {
            ...input,
            [name] : value
        };

        setInput(updatedData);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const img = URL.createObjectURL(imageRef.current.files[0])

        const payload = [
            ...productData,
            {
                id: uuid(),
                title,
                cost,
                category,
                image: img
            }
        ]
        
        setProductData(payload)
    }

    const handleGetData = ()=>{
        getData(page)
        .then(res=>{
            const recData = res.data
            // console.log(recData)
            setProductData(recData);
        })
    }

    useEffect(()=>{
        handleGetData()
    }, [page]);

    return (
        <div>
            <ProductInput {...input} handleChange = {handleChange} handleSubmit = {handleSubmit} imageRef = {imageRef} />

            <ProductList data = {productData} page = {page} setPage = {setPage} />
        </div>
    )
}
