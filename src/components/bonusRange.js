import React , {useEffect, useState} from 'react';
import {bonusData} from '../config'

export default function bonusRange({token_price}) {

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
                <li> {data.Percentage * 100}% </li>    
            )}
        </ul>

        <ul Style="float: left">
            <li>Base Price</li>
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
      </>
    )
}