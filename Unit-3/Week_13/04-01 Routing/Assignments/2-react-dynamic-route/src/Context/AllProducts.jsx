import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

export const AllProducts = () => {

    const [data, setData] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const location = useLocation();

    const getPageNumber = ()=>{
        const q = new URLSearchParams(location.search);
        return q.get("page") || 1;
    }

    const [page, setPage] = React.useState(()=> getPageNumber())

    const getData = (page=1, limit=2)=>{
        setIsLoading(true);
        axios.get("https://json-server-mocker-kartik.herokuapp.com/productDetail", {
            params: {
                _page: page,
                _limit: 5
            }
        })
        .then(res=>{
            setData(res.data)
        })
        .catch(err=>{
            setIsError(true);
            setIsLoading(false);
        })
        .finally(res=>{
            setIsLoading(false);
        })
    }

    React.useEffect(()=>{
        getData()
    },[])
    
    return (
        isLoading ? <div>...Loading</div> :
        isError ? <div>Something Went Wrong</div> :
        <div style= {{display: "flex", flexDirection: "column"}}>
            Products
            {
                data.map(pdt=> {
                    return (
                        <div key={pdt.id}>
                            <Link to= {`/products/${pdt.id}`} >{pdt.name}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
