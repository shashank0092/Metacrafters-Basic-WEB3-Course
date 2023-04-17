"use client"
import { useEffect, useState } from "react"
import { address } from "./constant/constants"
import "./globals.css"
import Forms from "./components/Form"
import Navbar from "./components/Navbar"
import {ethers} from "ethers"
import abi from "./constant/Transaction.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {

  const [walletAdress, SetWalletAdress] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null)
  const [contract,setContract]=useState(null);
  const[web3Provider,setWeb3Provider]=useState(null)

  // const window={};
  // if (typeof window !== 'undefined') {
  //   // const {ethereum}=window;
  //   } else {
  //   console.log('You are on the server,Cannot execute')
  //  }
  // const {ethereum}=window;
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

        const amountInEther=await ethers.utils.formatEther(amountInHex);
        console.log(amountInEther)
        setWalletBalance(amountInEther);
        



      }

      connect();
    }
    else {
      alert("Install Metamask");
    }
  })

  

  useEffect(()=>{
    const fetchContract=async()=>{
    const provider=await new ethers.providers.Web3Provider(window.ethereum);
    const signer= await provider.getSigner()
    const contractFetched=await new ethers.Contract(address,abi.abi,signer);
    console.log(contractFetched)
    setContract(contractFetched)
    setWeb3Provider(provider)}
    
    fetchContract()
  },[])



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
                <Forms address={walletAdress} amount={walletBalance} contract={contract} web3Provider={web3Provider} />
              )
            }
          </div>
        </div>
     </div>

    </>
  )
}

export default Home;