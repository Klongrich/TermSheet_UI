import React , {useEffect, useState} from 'react';
import styled from "styled-components";
import data from '../data.json';

import {get_liq_percentage} from '../utils/calculate_bonus'

export default function ToeknPresale() {

  const [hardcap, setHardcap] = useState(data.hardcap);
  const [softCap, setSoftCap] = useState(data.softcap);
  const [supply, setSupply] = useState(data.supply);
  const [liq, setLiq] = useState(data.liq);

  const [ethLiq, setEthliq] = useState(data.ethLiq);
  const [lidLiq, setLidliq] = useState(data.lidLiq);

  //const [presale, setPresale] = useState(); Always 30%

  function calculate_outcome() {
    get_token_price();
    setLiq(get_liq_percentage(supply , hardcap))
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

  return (

    <>
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

    {/* <p> {get_liq_percentage(supply , hardcap)}</p> */}
    </>
    
  )
}

