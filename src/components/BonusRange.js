import React , {useEffect, useState} from 'react';
import {BonusData , BonusOptions} from '../config'
import styled from "styled-components";

import get_total_tokens from '../utils/get_total_tokens'
import  get_liq_percentage from '../utils/calculate_liq_percentage'

import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '255px',
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

    width: 280px;

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

const CreateButton = styled.button`
    font-size: 16px;
    display: inline-block;

    border:2px solid #D8E0E7;
    border-radius: 8px;

    background-color: #4A4A4A;
    color: white;
    width: 280px;
    height: 35px;
    margin-right: 20px;
    z-index: 2;
    text-decoration: none;

    padding-top: 5px;
    padding-bottom: 5px;
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

    const [modalIsOpen , setIsOpen] = useState(false);
    const [HardCap, setHardCap] = useState(hardcap);
    const [bonusData, setbonusData] = useState(BonusData);

    const [newRanges, setNewRanges] = useState([{value: null}]);
    const [newPercentages, setNewPercentages] = useState([{value: null}]);

    const [bonusPageState, setBonusPageState] = useState("preset");
    const [newBonusRange, setNewBonusRange] = useState([ {Percentage: newPercentages , Amount: newRanges }])

    function create_new_bonus() {
        for (var i = 0; i < newRanges.length; i++) {
            newBonusRange.push({ 
                                 Percentage: parseFloat(newPercentages[i].value) / 100 ,
                                 Amount: parseFloat(newRanges[i].value)  
                                })
        }
        setbonusData(newBonusRange.splice(1));
        setIsOpen(false);
    }

    function updateHardCap(){
        var sum = 0;

        {newRanges.map( data =>
            sum += parseFloat(data.value)
        )}

        setHardCap(parseFloat(hardcap) - parseFloat(sum))
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

    function checkKey(key){
        if (key == 13) {
            handleAdd()
        }
    }

    function get_bonus_options () {

        if (bonusPageState == "preset") {
            return (
            <>
             
             <h2 Style="color: #f00"> Select Bonus Structure </h2>

                {BonusOptions.map(data =>
                    <SelectBonusStructer> 
                        <p onClick={() => setbonusData(data.info)}> {data.type} </p>
                    </SelectBonusStructer>
                )}

            <CreateButton Style="margin-top: 80px;" onClick={() => setBonusPageState("CreatingOwn")}> 
                Create Own 
            </CreateButton>
            </>
            );
        } else {
            return (
                <>
                <h2  Style="Color: #f00 ">Create Own </h2>

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
                <div key={`${newBonusRange}-${idx}`}>
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
                )                        
            })}

            <p>ETH left: {HardCap}</p>

            <Button onClick={() => handleAdd()}>
                Add
            </Button>

            <Button onClick={() => create_new_bonus()}>
                Submit
            </Button>
            <br />
            <CloseButton onClick={() => setBonusPageState("preset")}>
                Go Back
            </CloseButton>
            <br />
            </>
        )}
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
                        .:hover {
                            color: red;
                        }
                        " onClick={() => setIsOpen(true)}> Select</h3>

            <Modal  isOpen={modalIsOpen}
                    onRequestClose={() => setIsOpen(false)}
                    style={customStyles}
                    >

                {get_bonus_options()}

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
                Recommend LIQ: {(get_liq_percentage(supply, hardcap, bonusData) * 100).toFixed(2)}%
        </p>
        
        <p Style="margin-left: 200px;
                 font-weight: bold;">
                Total Tokens: {get_total_tokens(bonusData, token_price).toFixed(0)} </p>
        </div>       
      </>
    )
}