import data from '../data.json'
import {useState, useEffect} from 'react';
import { useGlobal } from 'react';


//const [hardcap, setHardcap] = useState(data.hardcap);

export function useHardCap({action, value}) {
    const [hardcap, setHardcap] = useState(data.hardcap);
  
    useEffect(() => {
      function handleUpdate(value) {
        setHardcap(value);
      }

      if (action == "update"){
        handleUpdate(value);
      }

    }, [])
    return hardcap
}

// export const [softCap, setSoftCap] = useState(data.softcap);
// export const [supply, setSupply] = useState(data.supply);
// export const [liq, setLiq] = useState(data.liq);
  
// export const [staking, setStaking] = useState(data.staking);
// export const [team, setTeam] = useState(data.team);
// export const [marketing, setMarketing] = useState(data.marketing);
// export const [unlocked, setUnlocked] = useState(data.unlocked)
  
// export const [ethLiq, setEthliq] = useState(data.ethLiq);
// export const [lidLiq, setLidliq] = useState(data.lidLiq);