import React , {useEffect, useState} from 'react';
import {bonusData} from '../config'

export default function bonusRange({token_price}) {

    function get_total_tokens(){
        var totalAmount;

        totalAmount = 0;
        {bonusData.map(data => 
            totalAmount += parseFloat((data.Amount * (parseFloat(token_price) * data.Percentage + parseFloat(token_price))).toFixed(2))
        )}
        return (totalAmount);
    }
    
    return (
        <>
         <div Style="display:inline-block;
            margin-bottom: 100px;
            background-color: white;
            color: #0c65EB;
            width: 398px;">
            <h2> Bonus Range </h2>

        <ul Style="float: left">
            <li>Range</li>
            {bonusData.map(data => 
                <li> {data.Amount} </li>    
            )}
        </ul>

        <ul Style="float: left">
            <li>Bonus</li>
            {bonusData.map(data => 
                <li> {data.Percentage * 100}% </li>    
            )}
        </ul>

        <ul Style="float: left">
            <li>Price</li>
            {bonusData.map(data => 
                <li> {(parseFloat(token_price) * data.Percentage + parseFloat(token_price)).toFixed(0)} </li>    
            )}
        </ul>

        <ul Style="display: inline-block">
            <li> Tokens </li>
            {bonusData.map(data => 
                <li> { (data.Amount * (parseFloat(token_price) * data.Percentage + parseFloat(token_price))).toFixed(0)}</li>    
            )}   
        </ul>

        <p Style="margin-left: 180px;
                 font-weight: bold;">Total Tokens: {get_total_tokens().toFixed(0)} </p>
        </div>
      </>
    )
}