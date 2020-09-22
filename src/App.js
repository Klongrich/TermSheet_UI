import React , {useEffect, useState} from 'react';

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

  const [staking, setStaking] = useState("30.00%");
  const [team, setTeam] = useState("10.00%");
  const [marketing, setMarketing] = useState("8.59%");
  const [unlocked, setUnlocked] = useState("Marketing: 5%")
  const [total, setTotal] = useState(36.00);

  const [liqPercent, setLiqPercent] = useState("8");
  const [ethLiq, setEthliq] = useState(12.83);
  const [lidLiq, setLidliq] = useState(2.57)

  //const [presale, setPresale] = useState(); Always 30%

  function calculate_outcome() {
    get_total_distrubtion();
    get_token_price();
  }

  async function get_total_distrubtion() {

    console.log(parseFloat(marketing));
    console.log(parseFloat(staking));
    console.log(parseFloat(team));

    setTotal(((parseFloat(marketing) + parseFloat(staking) + parseFloat(team) + 36) - 100) * -1);

  }

  function get_token_price() {
    return (
      (parseFloat(supply) * ((total / 100) * 0.83)) / (parseFloat(hardcap) * 0.5)
    )
  };

  return (

    <>
      <h2>Term Sheet App </h2>
      
      <h2>Inital</h2>

      <ul>
        <li> HardCap: <br />
          <input type="text" placeholder={hardcap} onChange={e => setHardcap(e.target.value)} />
        </li>


        <li>SoftCap: <br />
          <input type="text" placeholder={softCap} onChange={e => setSoftCap(e.target.value)} />
        </li>


        <li>Supply: <br />
          <input type="text" placeholder={supply} onChange={e => setSupply(e.target.value)} />
        </li>
      </ul>

      <h2> Token Distribution </h2>
      <ul>
        <li>Staking: <br />
          <input type="text" placeholder={staking} onChange={e => setStaking(e.target.value)} />
        </li>

        <li>Team <br /> 
          <input type="text" placeholder={team} onChange={e => setStaking(e.target.value)} />
        </li>

        <li> Marketing <br />
          <input type="text" placeholder={marketing} onChange={e => setStaking(e.target.value)} />  
        </li> 

        <li> Unlocked <br />
          <input type="text" placeholder={unlocked} onChange={e => setStaking(e.target.value)} />  
        </li> <br />

        <li>Remaing: {total} </li> <br />
        
        <li>Presale: 30%</li>
        <li>liq (eth): {ethLiq}% </li>
        <li>liq (lid): {lidLiq}% </li>
        <li>LID Fee: 1%</li>
      </ul>

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

      <div />

      <button onClick={() => calculate_outcome()}
              Style="display: inline-block">
        Submit
      </button>

      <br /> 
     <p> Token Price:  {get_token_price()} </p>
     <p> LIQ: {total}% </p>

    </>
    
  )
}

export default App;
