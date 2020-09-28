import React , {useEffect, useState} from 'react';
import {BonusData} from '../config'
import  {Get_liq_percentage} from '../utils/calculate_bonus'
import styled from "styled-components";

import Modal from 'react-modal';

const bonusOptions = [
    {
        id: "1",
        type: "25% - 10%",
        info: [{
                Percentage: 0.25,
                Amount: 200.00
            },
            {
                Percentage: 0.20,
                Amount: 300.00
            },
            {
                Percentage: 0.15,
                Amount: 500.00
            },
            {
                Percentage: 0.10,
                Amount: 250.00
            }]
    },
    {
        id: "2",
        type: "35% - 5%",
        info:  [{
            Percentage: 0.35,
            Amount: 400.00
        },
        {
            Percentage: 0.10,
            Amount: 100.00
        },
        {
            Percentage: 0.08,
            Amount: 200.00
        },
        {
            Percentage: 0.05,
            Amount: 550.00
        }]
    },
    {
        id: "3",
        type: "30% - 10%",
        info:  [{
            Percentage: 0.30,
            Amount: 250.00
        },
        {
            Percentage: 0.20,
            Amount: 250.00
        },
        {
            Percentage: 0.10,
            Amount: 175.00
        },
        {
            Percentage: 0.00,
            Amount: 550.00
        }]
    },
    {
        id: "4",
        type: "10% - 1%",
        info: [{
            Percentage: 0.714,
            Amount: 200.00
        },
        {
            Percentage: 0.714,
            Amount: 300.00
        },
        {
            Percentage: 0.714,
            Amount: 500.00
        },
        {
            Percentage: 0.714,
            Amount: 250.00
        }]
    },
]


const customStyles = {
  content : {
    top                   : '320px',
    left                  : '30%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding : "0",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "20px",
    borderRadius: "15px"
  }
};

const SelectBonusStructer = styled.div`
    border: 2px solid #E4E4E4;
    border-radius: 15px;
    padding: 0px;
    margin-bottom: 15px;
    text-align: center;
    margin-right: 50px;

    :hover{
        cursor: pointer;
        background-color: #ededed;
    }
`

const Input = styled.input`
    margin-top: 3px;
    margin-right: 10px;
    border-radius: 8px;
    border: 2px solid #d1d1d1;
    padding: 5px;
    width: 250px;

    :focus{
        outline: 0;
        box-shadow: 0 0 5px blue;
      }
`

const CloseButton = styled.button`
    font-size: 18px;
    display: inline-block;
    margin-top: 30px;

    border:2px solid #D8E0E7;
    border-radius:8px;
    background-color: #D8E0E7;

    width: 123px;
    height: 35px;

    z-index: 2;
    text-decoration: none;
`

const Button = styled.button`
    font-size: 16px;
    display: inline-block;

    border:2px solid #D8E0E7;
    border-radius: 8px;

    background-color: #4A4A4A;
    color: white;
    width: 123px;
    height: 35px;
    margin-right: 20px;
    z-index: 2;
    text-decoration: none;
`

export default function BonusRange ({token_price, supply, hardcap}) {
    var subtitle;

    const [modalIsOpen , setIsOpen] = useState(false);
    const [HardCap, setHardCap] = useState(hardcap);
    const [bonusData, setbonusData] = useState(BonusData);

    const [newRanges, setNewRanges] = useState([{value: null}]);
    const [newPercentages, setNewPercentages] = useState([{value: null}]);

    const [newBonusRange, setNewBonusRange] = useState([ {Percentage: newPercentages , Amount: newRanges }])

    function create_new_bonus(){
        for (var i = 0; i < newRanges.length; i++) {
            newBonusRange.push({ 
                                 Percentage: parseFloat(newPercentages[i].value) / 100 ,
                                 Amount: parseFloat(newRanges[i].value)  
                                })
        }
        console.log(newBonusRange);
        setbonusData(newBonusRange.splice(1));
    }

    function updateHardCap(){
        var sum = 0;

        {newRanges.map( data =>
            sum += parseFloat(data.value)
        )}

        setHardCap(parseFloat(hardcap) - parseFloat(sum))
        console.log(sum);
    }

    function updateNewRanges(i, event) {
        const values = [...newRanges];
        values[i].value = event.target.value;
        setNewRanges(values);

        updateHardCap();
      }

    function updateNewPercentages(i, event) {
        const values = [...newPercentages];
        values[i].value = event.target.value;
        setNewPercentages(values);
      }
    
      function handleAdd(i) {
        const ranges = [...newRanges];
        const percentages = [...newPercentages];

        ranges.push({ value: null });
        percentages.push({ value: null})
        
        setNewRanges(ranges);
        setNewPercentages(percentages);
      }
    
    
      function handleRemove(i) {
        const ranges = [...newRanges];
        const percentages = [...newPercentages];

        ranges.splice(i, 1);
        percentages.splice(i, 1);
        
        setNewRanges(ranges);
        setNewPercentages(percentages)
      }
    
    function openModal() {
      setIsOpen(true);
    }
   
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
   
    function closeModal(){
      setIsOpen(false);
    }

    function updateBonusData(data){
        setbonusData(data);
    }

    function get_total_tokens(){
        var totalAmount;

        totalAmount = 0;
        {bonusData.map(data => 
            totalAmount += parseFloat((data.Amount * (parseFloat(token_price) * data.Percentage + parseFloat(token_price))).toFixed(2))
        )}
        return (totalAmount);
    }

    function checkKey(key){
        if (key == 13) {
            handleAdd()
        }
    }

    function get_liq_percentage(token_supply, ETH_HardCap) {
    
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
            totalAmount += ((data.Percentage * data.Amount) + data.Amount)
        )}
    
        ref = ((bonusData[0].Amount) + (bonusData[0].Percentage * bonusData[0].Amount)) / totalAmount;
        sampleAmount = presale_tokens  * ref;
    
        bonusPrice = sampleAmount / bonusData[0].Amount;
        targetPrice = bonusPrice / (1 + bonusData[0].Percentage);
    
        eth_liq = ((ETH_HardCap / 2) * targetPrice) / token_supply;
    
        Result = (eth_liq / 0.83322517845) * 100
        
        //For Testing and Debuging
        // console.log("Total Amount: " + totalAmount);
        // console.log("ref: " + ref);
        // console.log("sampleAmount: " + sampleAmount);
        // console.log("bonusPrice: " + bonusPrice);
        // console.log("targetPrice: " + targetPrice);
        // console.log("eth_liq: " + eth_liq);
        // console.log("Result: ", Result);
    
        return (
            <>
            Recommend LIQ: {Result.toFixed(2)}%
            </>
        );
    }
    
    return (
        <>

         <div Style="display:inline-block;
            margin-bottom: 100px;
            background-color: white;
            color: #0c65EB;
            width: 398px;">

            <h2> Bonus Range </h2>

            <h3 Style="text-decoration: underline;
                        margin-left: 40px;
                        margin-bottom: -5px;
                        margin-top: -10px;
                        " onClick={openModal}> Select</h3>

            <Modal  isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    >
            
                <h2 ref={_subtitle => (subtitle = _subtitle)}> Select Bonus Structure </h2>

                {bonusOptions.map(data =>
                    <SelectBonusStructer> 
                    <p onClick={() => updateBonusData(data.info)}> ({data.type}) </p>
                    </SelectBonusStructer>
                )}
                
                <h3  Style="Color: #f00 ">Create Own</h3>

                <ul Style="list-style-type: none">
                    
                    <li Style="float: left;
                                margin-left: 40px;
                                "
                                >
                                Amount </li>
                    
                    <li Style="display: inline-block;
                               margin-left: 190px;"
                               >
                                Percentage </li>
                </ul>
                
                {newRanges.map((newBonusRange, idx) => {
                    return (
                    <div key={`${newBonusRange}-${idx}`} Style=" input {
                        margin-top: 3px;
                        border-radius: 5px;
                        border: 2px solid black;
                        padding: 5px;
                        width: 250px;
                      }">
                        <Input
                            type="text"
                            placeholder={newRanges[idx].value}
                            onChange={e => updateNewRanges(idx, e)}
                            />

                        <Input
                            type="text"
                            placeholder={newPercentages[idx].value} 
                            onChange={e => updateNewPercentages(idx, e)}
                            onKeyDown={e => checkKey(e.keyCode)}
                            />
                        
                        <button type="button" onClick={() => handleRemove(idx)}>
                        X
                        </button>
                    </div>
                    );
                })}
                
                <p>ETH left: {HardCap}</p>

                <Button onClick={() => handleAdd()}>
                    Add
                </Button>

                <Button onClick={() => create_new_bonus()}>
                    Submit
                </Button>
                <br />
               <CloseButton onClick={closeModal}> Close </CloseButton>

            </Modal>
                        
        <ul Style="float: left">
            <li>Range</li>
            {bonusData.map(data => 
                <li> {data.Amount} </li>    
            )}
        </ul>

        <ul Style="float: left">
            <li>Bonus</li>
            {bonusData.map(data => 
                <li> {(data.Percentage * 100).toFixed(2)}% </li>    
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
            
        <p Style="margin-left: 40px;
                 font-weight: bold;">
                {get_liq_percentage(supply, hardcap)}
        </p>
        

        <p Style="margin-left: 200px;
                 font-weight: bold;">Total Tokens: {get_total_tokens().toFixed(0)} </p>
        </div>

       
      </>
    )
}