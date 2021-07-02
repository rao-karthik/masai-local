import React from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export const ProductDetails = () => {

    const [data, setData] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const { id, page, limit } = useParams()

    const getData = (page=1, limit=2)=>{
        axios.get(`https://json-server-mocker-kartik.herokuapp.com/productDetail/${id}`)
        .then(res=>{
            setData(res.data)
            console.log(res.data)
        })
        .catch(err=>{
            setIsError(true);
            setIsLoading(false);
        })
        .finally(res=>{
            setIsLoading(false);
        })
    }

    const {name, price} = data;

    React.useEffect(()=>{
        getData()
    },[id])

    return (
        isLoading ? <div>...Loading</div> :
        isError ? <div>Something Went Wrong</div> :
        <div>
            <h3>Product: {name}</h3>
            <p>Price: Rs {price}</p>
        </div>
    )
}
