import React , {useEffect, useState} from 'react';
import styled from "styled-components";
import { CSVLink } from "react-csv";

import get_token_price from '../utils/calculate_toke_price'
import {useHardCap} from '../state/index'

import data from '../data.json';

const ResultsContainer = styled.div`
  font-family: Gotham, sans-serif;
  background-color:#737373;
  
  margin-top: 5px;
  margin-bottom: 40px;

  font-weight: bold;

  ul {
    margin-right: 80px;
    margin-top: -5px;
    width: 250px;
  }

  h2 {
    margin-right: 750px
  }

`

export default function Results ( {
  token_price,
  hardcap,
  softCap,
  supply,
  liq,
  staking,
  team,
  marketing,
  unlocked,
  ethLiq,
  lidLiq
}) {
    return (
        <>
        <ResultsContainer> 
            <h2> Result: ${data.Token}</h2>

            <ul Style="float: left">
                <li> Token Price: {token_price} </li>
                <li> LIQ: {liq}%  </li>
                <li>  Hardcap: {hardcap}  </li>
                <li> Softcap: {softCap} </li>
            </ul>

            <ul Style="float: left">
                <li>Staking: {staking}% </li>
                <li>Team: {team}% </li>
                <li>Marketing: {marketing}% </li>
                <li>Unlocked: {unlocked} 5% </li>
            </ul>

            <ul Style="display: inline-block">
                <li>Presale: 30%</li>
                <li>Liq (eth): {ethLiq}% </li>
                <li>Lia (lid): {lidLiq}% </li>
                <li>LID Fee: 1%</li>
            {/*   <li>Total {get_total_distrubtion()}% </li> */}
            </ul>


            <br /> 

            <button Style="font-size: 18px;
                            display: inline-block;
                            border:2px solid #D8E0E7;
                            border-radius:25px;
                            background-color: #D8E0E7;
                            width: 173px;
                            height: 35px;
                            margin-bottom:20px;
                            margin-left: 30px;
                            z-index: 2;
                            "
            // onClick={() => calculate_outcome()}
            >
                Submit
            </button>  

            <br />

            {/* <CSVLink data={csvData}>Download CSV</CSVLink>    */}   
      </ResultsContainer> 
    </>
    )
}