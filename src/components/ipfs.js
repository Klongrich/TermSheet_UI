import React , {useEffect, useState} from 'react';
import styled from "styled-components";

const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

export default function SubmitIPFSData () {

    const [ipfsHash, setIpfsHash] = useState("null");

    async function Submit_Data () {
    
        const data = JSON.stringify({
            name: "Testing Stuff",
            link0: "More Test",
            link1: "github.com",
            link2: "myfacebook.com"
          })
        const ipfsHash = await ipfs.add(data);

        setIpfsHash(ipfsHash);
    }

    useEffect(() => {
        Submit_Data();
    })


    return (
        <>
        <p>Hello World:  {ipfsHash} </p>
        </>
    );

}