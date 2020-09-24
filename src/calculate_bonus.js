import React , {useEffect, useState} from 'react';

const bonusData = [
    {
        Range: 0.50,
        Amount: 200.00
    },
    {
        Range: 0.10,
        Amount: 300.00
    },
    {
        Range: 0.05,
        Amount: 500.00
    },
    {
        Range: 0.00,
        Amount: 250.00
    }
]

export default function get_liq_percentage(token_supply, ETH_HardCap) {
    
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
    {bonusData.map(data => 
        totalAmount += ((data.Range * data.Amount) + data.Amount)
    )}

    ref = ((bonusData[0].Amount) + (bonusData[0].Range * bonusData[0].Amount)) / totalAmount;
    sampleAmount = presale_tokens  * ref;

    bonusPrice = sampleAmount / bonusData[0].Amount;
    targetPrice = bonusPrice / (1 + bonusData[0].Range);

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
        <p>This is the LIQ percentage: {Result} </p>
    )
}