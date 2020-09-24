import React , {useEffect, useState} from 'react';

const bonusData = [
    {
        Range: 0.25,
        Amount: 200.00
    },
    {
        Range: 0.20,
        Amount: 300.00
    },
    {
        Range: 0.15,
        Amount: 500.00
    },
    {
        Range: 0.10,
        Amount: 250.00
    }
]

export default function bonusRange({token_supply, token_price}) {

    return (
        <>
    <ul Style="float: left">
        <li>Range</li>
        {bonusData.map(data => 
            <li> {data.Amount} </li>    
        )}
    </ul>

    <ul Style="float: left">
        <li>Bonus</li>
        {bonusData.map(data => 
            <li> {data.Range * 100}% </li>    
        )}
    </ul>

    <ul Style="float: left">
        <li>Base Price</li>
        {bonusData.map(data => 
            <li> {(parseFloat(token_price) *  data.Range + parseFloat(token_price)).toFixed(0)} </li>    
        )}
    </ul>

    <ul Style="display: inline-block">
        <li> Tokens </li>
        {bonusData.map(data => 
            <li> { (data.Amount * (parseFloat(token_price) *  data.Range + parseFloat(token_price))).toFixed(0)}</li>    
        )}   
    </ul>
      </>
    )
}