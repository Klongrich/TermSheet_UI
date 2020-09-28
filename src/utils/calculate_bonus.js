import React , {useEffect, useState} from 'react';
//import {BonusData} from '../config'

export function Get_liq_percentage({token_supply, ETH_HardCap, BonusData}) {
    
    var Result;
    var presale_tokens;

    token_supply = 300000.00;
    ETH_HardCap = 1250.00;
    presale_tokens = token_supply * 0.3

    var totalAmount;
    var ref;
    var sampleAmount;
    var bonusPrice;
    var targetPrice;
    var eth_liq;
    var Result;

    totalAmount = 0;
    {BonusData.map(data => 
        totalAmount += ((data.Percentage * data.Amount) + data.Amount)
    )}

    ref = ((BonusData[0].Amount) + (BonusData[0].Percentage * BonusData[0].Amount)) / totalAmount;
    sampleAmount = presale_tokens  * ref;

    bonusPrice = sampleAmount / BonusData[0].Amount;
    targetPrice = bonusPrice / (1 + BonusData[0].Percentage);

    eth_liq = ((ETH_HardCap / 2) * targetPrice) / token_supply;

    Result = eth_liq / 0.83322517845;
    
    //For Testing and Debuging
    console.log("Total Amount: " + totalAmount);
    console.log("ref: " + ref);
    console.log("sampleAmount: " + sampleAmount);
    console.log("bonusPrice: " + bonusPrice);
    console.log("targetPrice: " + targetPrice);
    console.log("eth_liq: " + eth_liq);
    console.log("Result: ", Result);

    return (
        <>
        {Result}
        </>
    );
}