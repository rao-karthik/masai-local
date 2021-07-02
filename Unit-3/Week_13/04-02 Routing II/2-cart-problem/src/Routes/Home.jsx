import React from 'react'
import { Product } from '../Components/Product';
import { AppContext } from '../Contexts/AppContextProvider';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 890px;
    margin: auto;
    margin-top: 20px;
`;

export const Home = () => {

    const { products } = React.useContext(AppContext);

    const handleAdd = ()=>{

    }
    
    return (
        <>
            <Container>
                {
                    products && products.map(pdt=> <Product key={pdt.id} {...pdt} />)
                }
            </Container>
        </>
    )
}