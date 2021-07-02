import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../Contexts/AppContextProvider';

const Table = styled.div`
    border: 1px solid black;
    width: 700px;
    margin: 20px;
    margin: auto;
`;
    
const TR = styled.tr`

`;

const TH = styled.th`
    border: 1px solid black;
    width: 200px;
    height: 30px;
`;

const TD = styled.td`
    border: 1px solid black;
    width: 200px;
    height: 30px;
`;



export const CartItem = () => {

    const { products } = React.useContext(AppContext);

    let total = 0;
    let totalPrice = 0;
    
    return (
        <div style={{margin:"30px 0"}}>
            <Table>
                <thead>
                    <TR>
                        <TH>Item</TH>
                        <TH>Qty</TH>
                        <TH>Price (in Rs)</TH>
                        <TH>Final Price</TH>
                    </TR>
                </thead>
                <tbody>
                        {
                            products?.map(item=>{
                                if(item.quantity > 0){
                                    total += item.quantity;
                                    totalPrice += item.quantity * item.price
                                    return (
                                        <TR style={{textAlign: "center"}} >
                                            <TD>{item.product}</TD>
                                            <TD>{item.quantity}</TD>
                                            <TD>{item.price}</TD>
                                            <TD>{item.quantity * item.price}</TD>
                                        </TR>
                                    )
                                }
                            })
                        }
                    <TR style={{textAlign: "center"}} >
                        <TH colSpan="3" >Total Price</TH>
                        <TD>{totalPrice}</TD>
                    </TR>
                </tbody>
            </Table>
        </div>
    )
}
