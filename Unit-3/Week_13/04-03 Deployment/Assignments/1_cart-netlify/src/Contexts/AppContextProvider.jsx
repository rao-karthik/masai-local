import React from 'react';
import { getData, incQuant, decQuant, toggleQuant } from '../Components/apiData';

export const AppContext = React.createContext();

export const AppContextProvider = ({children}) => {

    const [products, setProducts] = React.useState([]);

    const handleGetData = ()=>{
        getData()
        .then(res=>{
            setProducts(res.data)
            console.log(res.data)
        })
    }

    const handleAdd = (id, quantity)=>{
        toggleQuant(id, quantity)
        .then(()=>{
            handleGetData();
        })
    }

    React.useEffect(()=>{
        handleGetData()
    },[])

    const countInc = (id, quantity)=>{
        // incQuant(id, quantity)
        // .then(()=>{
        //     handleGetData()
        // })
        
        const updatedData = products.map(item=> item.id === id ? {...item, quantity: quantity+1} : item);
        setProducts(updatedData)
        // console.log(products)
    }

    const countDec = (id, quantity)=>{
        const updatedData = products.map(item=> item.id === id ? {...item, quantity: quantity-1} : item);
        setProducts(updatedData)
        // console.log(products)

        // decQuant(id, quantity)
        // .then(()=>{
        //     handleGetData()
        // })
    }

    const value = {
        countInc,
        countDec,
        products,
        handleAdd
    }

    return (
        <AppContext.Provider value = {value}>
            {children}
        </AppContext.Provider>
    )
}
