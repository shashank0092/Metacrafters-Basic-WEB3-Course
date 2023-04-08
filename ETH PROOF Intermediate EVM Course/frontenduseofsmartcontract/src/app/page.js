"use client"
import { useEffect, useState } from "react"
import Web3 from "web3"
import { address, abi } from "./constant/constants"
import "./globals.css"
import Forms from "./components/Form"
import Navbar from "./components/Navbar"
import {ethers} from "ethers"

const Home = () => {

  const [walletAdress, SetWalletAdress] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null)

  useEffect(() => {
    if (window.ethereum) {
      const connect = async () => {

        const address = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
       

        SetWalletAdress(address[0])
       
        const amountInHex=await window.ethereum.request({
          method:'eth_getBalance',
          params:[address[0],'latest']
        })

        const amountInEther=await ethers.utils.formatEther(amountInHex)
        setWalletBalance(amountInEther);
        



      }

      connect();
    }
    else {
      alert("Install Metamask");
    }
  })

  const API_KEY = process.env.API_KEY;

  const provider = new Web3.providers.HttpProvider(`https://eth-goerli.g.alchemy.com/v2/${API_KEY}`)
  const web3 = new Web3(provider);
  const contract = new web3.eth.Contract(abi, address);
  console.log(contract)



  return (

    <>

     <div>
        <div>
          <div>
            <Navbar/>
          </div>
          <div style={{marginTop:"20px"}}>
            {
              walletAdress==null || walletBalance==null?(
                <div>
                  <p>Use Metamask</p>
                </div>
              ):(
                <Forms address={walletAdress} amount={walletBalance} contarct={contract} />
              )
            }
          </div>
        </div>
     </div>

    </>
  )
}

export default Home;