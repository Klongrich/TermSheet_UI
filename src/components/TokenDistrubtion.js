import React , {useEffect, useState} from 'react';
import styled from "styled-components";
import { CSVLink } from "react-csv";

import data from '../data.json';

export default function TokenDistrubtion() {

  const [staking, setStaking] = useState(data.staking);
  const [team, setTeam] = useState(data.team);
  const [marketing, setMarketing] = useState(data.marketing);
  const [unlocked, setUnlocked] = useState(data.unlocked)

  //const [presale, setPresale] = useState(); Always 30%

  function get_total_distrubtion() {

    console.log(parseFloat(marketing));
    console.log(parseFloat(staking));
    console.log(parseFloat(team));

    //36 comes from 30% presale, 5% unlocked, 1% LID fee
    //Need to add LIQ percentage
    return((parseFloat(marketing) 
    + parseFloat(staking) 
    + parseFloat(team) 
    + 36).toFixed(2))
  }

  return (
    <>
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
    </>
  )
}

