import React, { useState } from 'react';
import { RestaurentDetails } from './restaurentDetails';
import data from '../data.json';

export const RestaurentList = () => {

    const [details, setDetails] = React.useState(data);

    const [filterRating, setFilterRating] = React.useState(0);

    const [paymentMethod, setPaymentMethod] = React.useState("all");

    const [sortByCost, setSortByCost] = React.useState(null);

    const [perPage, setPerPage] = React.useState(5);

    const [activePage, setActivePage] = React.useState(1)

    const filterCondition = ({rating, payment_methods}, index)=>{
        const {cash, card} = payment_methods;

        //payment condition
        let paymentCondition = true;

        if(paymentMethod === "cash"){
            paymentCondition = cash ? true : false;
        }
        else if(paymentMethod === 'card'){
            paymentCondition = card? true : false
        }  

        // page Condition

        const offset = (activePage-1)*perPage;
        const pageCondition = index>=offset && index <  offset+perPage

        return rating >= filterRating && paymentCondition && pageCondition;
    }

    const sortCondition = (a, b)=> {
        if(sortByCost == null){
            return null
        }
        if(sortByCost === "asc"){
            return a.costForTwo - b.costForTwo
        }
        if(sortByCost === "desc"){
            return b.costForTwo - a.costForTwo
        }
    }
    
    const totalPages = Math.ceil(details.length / 5);

    return (
        <div>
            <div>
                {
                    [4, 3, 2, 1, 0].map((rating, i) => <button onClick = {()=>setFilterRating(rating)} >{rating === 0? "All" : `${rating} and Above`}</button> )
                }
            </div>
            <br/>
            <div>
                {
                    ["cash", "card", "all"].map(method=> <button onClick ={()=>setPaymentMethod(method)}>{method}</button>)
                }
            </div>
            <br/>
            <div>
                {
                    ["asc", "desc"].map((order, i)=> <button onClick = {()=> setSortByCost(order)} >{order === "asc" ? "Ascending" : "Descending"}</button> )
                }
            </div>
            <br/>
            <div>
                {
                    new Array(totalPages).fill(0).map((el, idx) => <button key= {idx} onClick = {()=> setActivePage(idx + 1)} >{ idx + 1} </button> )
                }
            </div>
            <br/>
            <hr/>
            <div>
                {
                    details && details?.filter(filterCondition).sort(sortCondition).map((item, idx) => <RestaurentDetails key = {item.id} data = {item} />)
                }
            </div>
        </div>
    )
}
    