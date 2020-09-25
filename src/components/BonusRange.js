import React , {useEffect, useState} from 'react';
import {BonusData} from '../config'

import Modal from 'react-modal';

const bonusOptions = [
    {
        id: "1",
        type: "25% - 10%",
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
    {
        id: "2",
        type: "35% - 5%",
        info: BonusData
    },
    {
        id: "3",
        type: "30% - 10%",
        info: BonusData
    },
    {
        id: "4",
        type: "10% - 1%",
        info: BonusData
    },
]
 
const customStyles = {
  content : {
    top                   : '220px',
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

export default function BonusRange ({token_price}) {
    var subtitle;

    const [modalIsOpen , setIsOpen] = useState(false);
    const [bonusData, setBonusData] = useState(BonusData);
    
    function openModal() {
      setIsOpen(true);
    }
   
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
   
    function closeModal(){
      setIsOpen(false);
    }

    function sayhey(){
        console.log("hey");
    }

    function get_total_tokens(){
        var totalAmount;

        totalAmount = 0;
        {bonusData.map(data => 
            totalAmount += parseFloat((data.Amount * (parseFloat(token_price) * data.Percentage + parseFloat(token_price))).toFixed(2))
        )}
        return (totalAmount);
    }
    
    return (
        <>

         <div Style="display:inline-block;
            margin-bottom: 100px;
            background-color: white;
            color: #0c65EB;
            width: 398px;">

            <h2 Style="float: left"> Bonus Range </h2>

            <h3 Style="margin-left: 150px" onClick={openModal}> Select</h3>

            <Modal  isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    >
            
                <h2 ref={_subtitle => (subtitle = _subtitle)}> Select Bonus Strucuter </h2>

                {bonusOptions.map(data =>
                    <button onClick={() => setBonusData(data.info)}> {data.id} : ({data.type}) </button>
                )}
                <p>Create Own</p>

                <button onClick={closeModal}>close</button>

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

        <p Style="margin-left: 180px;
                 font-weight: bold;">Total Tokens: {get_total_tokens().toFixed(0)} </p>
        </div>
      </>
    )
}