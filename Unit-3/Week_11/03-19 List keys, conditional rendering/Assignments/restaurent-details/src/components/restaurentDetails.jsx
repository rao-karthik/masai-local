import React, { useState } from 'react';

export function RestaurentDetails({data}){
    const {name, cuisine, costForTwo, minOrder, deliveryTime, payment_methods, rating, votes, reviews, src} = data

    const {card, cash} = payment_methods;

    return (
        <div style = {{border: "1px solid black", margin: "10px"}}>
            <h4>{name}</h4>
            <p>{cuisine}</p>
            <p>Cost for Two: {costForTwo}</p>
            <p>Min Order: {minOrder}</p>
            <p>Delivery Time: {deliveryTime} mins</p>
            <p>Payment Methods: {card && "Card"} {cash && "Cash"}</p>
            <p>Rating: {rating}</p>
            <p>Votes: {votes}</p>
            <p>Reviews: {reviews}</p>
        </div>
    )
}