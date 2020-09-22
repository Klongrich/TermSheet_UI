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

  const [staking, setStaking] = useState();
  const [team, setTeam] = useState();
  const [marketing, setMarketing] = useState();
  const [total, setTotal] = useState();

  //const [presale, setPresale] = useState(); Always 30%

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
        </li> <br />

        <li>Total: {total} </li> <br />
        
        <li>Presale: 30%</li>
        <li>liq (eth): </li>
        <li>liq (lid): </li>
        <li>Fee 1%</li>
      </ul>

    <h2> Bonus Range </h2> 
      <ul>
        <li> 0 </li>
        <li> 250 </li>
        <li> 500 </li>
        <li> 1000 </li>
        <li> 1250 </li>
      </ul>

      <button>
        Submit
      </button>

    </>
    
  )
}

export default App;
