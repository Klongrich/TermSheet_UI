import React , {useEffect, useState} from 'react';
import styled from "styled-components";
import { CSVLink } from "react-csv";

import data from './data.json';
import LidLogo from './images/logo-lid.png';

import {get_liq_percentage} from './utils/calculate_bonus'
import BonusRange from './components/bonusRange'

const Container = styled.div`
  font-family: 'Gotham', sans-serif;
  background-color: #E4E4E4;;
  margin-top: -20px;
  padding-top: 20px;

  div {
    background-color: #4A4A4A;
    padding-right: 50px;
    border: 2px solid #E4E4E4;
    border-radius: 15px;
    color: #E4E4E4;
    margin-left: 18px;
    margin-right: 18px;
  }
  
  ul {
    list-style-type: none;
  }

  li {
    padding-top: 5px;
  }

  h2 {
    margin-left: 40px;
  }

  input {
    margin-top: 3px;
    border-radius: 5px;
    border: 2px solid black;
    padding: 5px;
    width: 250px;
  }
`

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
function App() {

  const [hardcap, setHardcap] = useState(data.hardcap);
  const [softCap, setSoftCap] = useState(data.softcap);
  const [supply, setSupply] = useState(data.supply);
  const [liq, setLiq] = useState(data.liq);

  const [staking, setStaking] = useState(data.staking);
  const [team, setTeam] = useState(data.team);
  const [marketing, setMarketing] = useState(data.marketing);
  const [unlocked, setUnlocked] = useState(data.unlocked)

  const [ethLiq, setEthliq] = useState(data.ethLiq);
  const [lidLiq, setLidliq] = useState(data.lidLiq);

  //const [presale, setPresale] = useState(); Always 30%

  function calculate_outcome() {
    get_total_distrubtion();
    get_token_price();
    setLiq(get_liq_percentage(supply , hardcap))
  }

  function get_total_distrubtion() {

    console.log(parseFloat(marketing));
    console.log(parseFloat(staking));
    console.log(parseFloat(team));

    //36 comes from 30% presale, 5% unlocked, 1% LID fee
    return((parseFloat(marketing) 
    + parseFloat(staking) 
    + parseFloat(team) 
    + parseFloat(ethLiq)
    + parseFloat(lidLiq)
    + 36).toFixed(2))
  }

  function get_token_price() {
    return (
      (parseFloat(parseFloat(supply) * (ethLiq / 100)) / (parseFloat(hardcap) * 0.5)).toFixed(2)
    )
  };

  function calculate_liq(liq) {
    setEthliq(parseFloat(liq * 0.83).toFixed(2));
    setLidliq(parseFloat(liq * 0.17).toFixed(2))
    setLiq(parseFloat(liq).toFixed(2));
  }

  const csvData = [
    ["Token Presale"],
    ["Price", get_token_price()],
    ["Refferall Fee", "2.5%"],
    ["Hardcap", hardcap],
    ["Softcap", softCap],
    ["Supply", supply],
    ["liq", liq],
    ["", ""],
    ["Token Distribution"],
    ["Fund", "Quantity"],
    ["Staking", staking],
    ["Presale", "30%"],
    ["liq (xxx/ETH)", ethLiq],
    ["liq (xxx/LID)", lidLiq],
    ["Team", team ],
    ["Marketing", marketing],
    ["Unlocked: 5%", unlocked],
    ["", ""],
    ["Ether Distribution (%)"],
    ["Fund", "Quantity", "Remaining", softCap, hardcap],
    ["liq (XXX/ETH)", "50.00%", "50.00%", "", ""],
    ["liq (XXX/LID)", "10.00%", "40.00%", "", ""],
    ["TEAM+FUND", "20.00%", "20.00%", "", ""],
    ["LID", "5.00%", "15.00%", "", ""],
    ["Token Burn", "15.00%", "0.00%", "", ""],
  ];

  return (

    <>
    <Container>
    <img Style="width: 50px;
                height: 50px;
                margin-left: 20px;
                margin-bottom: -70px;"src={LidLogo} />

      <h2 Style=" font-size: 28px;
                  color: #0c65EB;
                  margin-left: 90px;
                  ">
                  Term Sheet App </h2>

      <div Style="float: left;
                  background: linear-gradient(0deg, rgba(12,101,235,1) 0%, rgba(28,158,247,1) 100%);
                  color: white;"> 
      <h2>Token Presale</h2>
      <ul>
        <li> HardCap <br />
          <input type="number" 
                  placeholder={hardcap} 
                  step="0.01"
                  onChange={e => setHardcap(e.target.value)} />
        </li>


        <li>SoftCap <br />
          <input type="number" 
                 placeholder={softCap} 
                 step="0.01"
                 onChange={e => setSoftCap(e.target.value)} />
        </li>


        <li>Supply <br />
          <input  type="number" 
                  placeholder={supply} 
                  step="0.01"
                  onChange={e => setSupply(e.target.value)} />
        </li>

        <li>LIQ <br />
          <input  type="number" 
                  placeholder={liq + "%"}
                  step="0.01" 
                  min="0"
                  max="100"
                  onChange={e => calculate_liq(e.target.value)} />
        </li>
      </ul>
      </div>

  <div Style="float: left;
              background: linear-gradient(0deg, rgba(12,101,235,1) 0%, rgba(28,158,247,1) 100%);
              color: white;">
      <h2> Token Distribution </h2>
      <ul>
        <li>Staking <br />
          <input  type="number" 
                  placeholder={staking + "%"} 
                  step="0.01" 
                  onChange={e => setStaking(e.target.value)} />
        </li>

        <li>Team <br /> 
          <input  type="number" 
                  placeholder={team + "%"}
                  step="0.01" 
                  onChange={e => setTeam(e.target.value)} />
        </li>

        <li> Marketing <br />
          <input type="number" 
                 placeholder={marketing + "%"}
                 step="0.01" 
                 onChange={e => setMarketing(e.target.value)} />  
        </li> 

        <li> Unlocked <br />
          <input type="text" 
                 placeholder={unlocked}
                 onChange={e => setUnlocked(e.target.value)} />  
        </li> 
        
        {/*
        <br />
        <li>Remaing: {(get_total_distrubtion() - 100) * -1}% </li> <br /> */}

      </ul>
    </div>

  <div Style="display:inline-block;
            margin-bottom: 100px;
            background-color: white;
            color: #0c65EB;
            width: 398px;">
    <h2> Bonus Range </h2>

      <BonusRange token_supply={supply}
                  token_price={get_token_price()} />
  </div>


    <ResultsContainer> 
    <h2> Result: ${data.Token}</h2>

    <ul Style="float: left">
        <li> Token Price: {get_token_price()}  </li>
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
       onClick={() => calculate_outcome()}
      >
        Submit
      </button>  

    <br />

      {/* <CSVLink data={csvData}>Download CSV</CSVLink>    */}
      
      </ResultsContainer> 
    </Container>

    <p> {get_liq_percentage(supply , hardcap)}</p>
    </>
    
  )
}

export default App;
