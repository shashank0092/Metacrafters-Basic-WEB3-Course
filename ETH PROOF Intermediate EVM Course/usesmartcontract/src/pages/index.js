import { useState } from "react";
import { ethers } from "ethers";
import { abi, smartContarctAdress } from "../constants/index"
import Web3 from "web3";

const Home = () => {
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState(null);
  const web3 = new Web3("https://eth-goerli.g.alchemy.com/v2/p455lghLZelJEBcu4BH44h9ZGjFUH5go");
  const contract = new web3.eth.Contract(abi, smartContarctAdress);


  console.log(contract)



  const connectMetamask = async () => {
    if (window.ethereum || window.web3) {
      const getAccounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      })

      setAccount(getAccounts[0]);


      const getAccountAmountInHex = await window.ethereum.request(
        {
          method: "eth_getBalance",
          params: [getAccounts[0], 'latest']
        }
      )

      console.log(getAccountAmountInHex)

      const amountInEther = await ethers.utils.formatEther(getAccountAmountInHex);
      setAmount(amountInEther)


    }
    else {
      alert("Please Intall Metamask");
    }
  }


  
  const transferFunds= async () => {
    await contract.methods.transfer().call((err, res) => {
      if (!err) {
        console.log("The result is->", res)
      }
      else {
        console.log("The error is->", err)
      }
    })
  }
  return (
    <>

      <div className="card text-center">
        <div className="card-header">Funding</div>
        <div className="card-body">
          <h5 className="card-title">Balance:
            {
              amount == null ? (
                <p>
                  Please Connect Metmask
                </p>
              ) : (
                <p>{amount}</p>
              )
            }

          </h5>
          <div className="card-text">
            Account:
            {
              account == null ? (
                <p>Please Connect To Metamask</p>
              ) : (
                <p>{account}</p>
              )
            }
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => connectMetamask()}
          >
            Connect to metamask
          </button>
          &nbsp;
          <button type="button" className="btn btn-success " onClick={() => transferFunds()} >
            Transfer
          </button>
          &nbsp;
          <button type="button" className="btn btn-primary " >
            Withdraw
          </button>
        </div>
        <div className="card-footer text-muted">Code Eater</div>
      </div>

    </>
  )
}

export default Home;