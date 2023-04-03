"use client";
import "./pagestyle.css"
import {ethers} from "ethers"
import { useState } from "react";

const Home = () => {

  const[address,setAddress]=useState("");
  const[balance,setBalance]=useState('');
  const[btnText,setBtnText]=useState("Connect Metamask");
  const connectWallet=()=>{

    if(window.ethereum || window.ethereum.isMetamask){
      console.log("There is metamask");

      const connect=async()=>{
        const address=await window.ethereum.request({method:'eth_requestAccounts'})
        console.log(address);
        setAddress(address[0])

        const balance=await window.ethereum.request({method:'eth_getBalance',params:[address[0],'latest']});
        console.log(balance)
        setBalance(balance)

        setBtnText("Metamask Connected")
      }

      connect()
    }
    else{
      console.log("Please Install METAMASK");
    }
}
 
 
  return (
    <>

      <div className="main-box">
        <div className="header-box" >
          <h1 className="heading">THIS PAGE IS FOR CONNECTING METAMASK</h1>
        </div>

        <div className="connection-btn-box" >
          <button onClick={()=>connectWallet()} className="btn" >{btnText}</button>
        </div>

        <div className="values-box" >
         <p className="value-text" >Adress:{address}</p>
         <p className="value-text" >Value:{balance}</p>
        </div>
      </div>

    </>
  )
}

export default Home;