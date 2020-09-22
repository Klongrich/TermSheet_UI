import React , {useEffect, useState} from 'react';
import styled from "styled-components";

const Container = styled.div`
  font-family: Gotham, sans-serif;
`
const ILOdata = {
    hardcap: "",
    softcap: "",
    supply: "",
    staking: "",
    presale: "",
    team: "",
    marketing: "",
    total: "",
}

function App() {

  const [hardcap, setHardcap] = useState("1250");
  const [softCap, setSoftCap] = useState("500");
  const [supply, setSupply] = useState("300000");
  const [liq, setLiq] = useState("15.41%");

  const [staking, setStaking] = useState("30.00%");
  const [team, setTeam] = useState("10.00%");
  const [marketing, setMarketing] = useState("8.59%");
  const [unlocked, setUnlocked] = useState("Marketing: 5%")

  const [ethLiq, setEthliq] = useState(12.83);
  const [lidLiq, setLidliq] = useState(2.57)

  //const [presale, setPresale] = useState(); Always 30%

  function calculate_outcome() {
    get_total_distrubtion();
    get_token_price();
  }

  function get_total_distrubtion() {

    console.log(parseFloat(marketing));
    console.log(parseFloat(staking));
    console.log(parseFloat(team));

    //36 comes from 30% presale, 5% unlocked, 1% LID fee
    return(parseFloat(marketing) 
    + parseFloat(staking) 
    + parseFloat(team) 
    + parseFloat(ethLiq)
    + parseFloat(lidLiq)
    + 36)
  }

  function get_token_price() {
    return (
      (parseFloat(supply) * (ethLiq / 100)) / (parseFloat(hardcap) * 0.5)
    )
  };

  function calculate_liq(liq) {
    setEthliq(liq * 0.83);
    setLidliq(liq * 0.17);
  }

  return (

    <>
    <Container>
      <h2>Term Sheet App </h2>
      

      <div Style="float: left"> 
      <h2>Inital</h2>
      <ul>
        <li> HardCap: <br />
          <input type="text" 
                  placeholder={hardcap} 
                  step=".01"
                  onChange={e => setHardcap(e.target.value)} />
        </li>


        <li>SoftCap: <br />
          <input type="text" 
                 placeholder={softCap} 
                 step=".01"
                 onChange={e => setSoftCap(e.target.value)} />
        </li>


        <li>Supply: <br />
          <input  type="text" 
                  placeholder={supply} 
                  step=".01"
                  onChange={e => setSupply(e.target.value)} />
        </li>

        <li>LIQ: <br />
          <input  type="text" 
                  placeholder={liq}
                  step=".01" 
                  onChange={e => calculate_liq(e.target.value)} />
        </li>
      </ul>
      </div>

  <div Style="float: left">
      <h2> Token Distribution </h2>
      <ul>
        <li>Staking: <br />
          <input  type="text" 
                  placeholder={staking}
                  step=".01" 
                  onChange={e => setStaking(e.target.value)} />
        </li>

        <li>Team <br /> 
          <input  type="text" 
                  placeholder={team}
                  step=".01" 
                  onChange={e => setTeam(e.target.value)} />
        </li>

        <li> Marketing <br />
          <input type="number" 
                 placeholder={marketing}
                 step="0.01" 
                 onChange={e => setMarketing(e.target.value)} />  
        </li> 

        <li> Unlocked <br />
          <input type="text" 
                 placeholder={unlocked}
                 step=".01" 
                 onChange={e => setUnlocked(e.target.value)} />  
        </li> <br />

        <li>Remaing: {(get_total_distrubtion() - 100) * -1} </li> <br />

      </ul>
    </div>

<div Style="display:inline-block;
            margin-bottom: 100px;">
    <h2> Bonus Range </h2>
    
      <ul Style="float: left">
        <li>Range</li>
        <li> 0 </li>
        <li> 250 </li>
        <li> 500 </li>
        <li> 1000 </li>
        <li> 1250 </li>
      </ul>

      <ul Style="float: left;">
        <li> BasePrice </li>
        <li> 77 </li>
        <li> 74 </li>
        <li> 71 </li>
        <li> 68 </li>
        <li> 65 </li>
      </ul>

      <ul Style="float: left;">
        <li> Referal </li>
        <li> 75 </li>
        <li> 72 </li>
        <li> 69 </li>
        <li> 66 </li>
        <li> 64 </li>
      </ul>

      <ul Style="display: inline-block">
        <li> Tokens </li>
        <li> 2300 </li>
        <li> 2100 </li>
        <li> 1890 </li>
        <li> 1740 </li>
        <li> 1570 </li>
      </ul>
  </div>


      <h2> Result </h2>


    <ul Style="float: left">
        <li>Staking: {staking}</li>
        <li>Team: {team}</li>
        <li>Marketing: {marketing} </li>
        <li>Unlocked: marketing 5% </li>
    </ul>

    <ul Style="float: left">
        <li>Presale: 30%</li>
        <li>Liq (eth): {ethLiq}% </li>
        <li>Lia (lid): {lidLiq}% </li>
        <li>LID Fee: 1%</li>
      {/*   <li>Total {get_total_distrubtion()}% </li> */}
    </ul>

    
    <ul Style="display: inline-block">
        <li>Token Price: {get_token_price()}</li>
        <li>Hardcap: {hardcap}</li>
        <li>Softcap: {softCap} </li>
        <li>LIQ: {liq} </li>

        <br /> <br /> <br /> <br />
        <button onClick={() => calculate_outcome()}
              Style="display: inline-block">
        Submit
      </button>

    </ul>


      <br /> 
     
    </Container>
    </>
    
  )
}

export default App;
