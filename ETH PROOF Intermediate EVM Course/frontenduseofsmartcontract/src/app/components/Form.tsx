"use client"
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forms = ({ address, amount,contract,web3Provider }) => {

    const [formWalletAdress, setFormWalletAdress] = useState(address);
    const [fromWalletAmount, setFromWalletAmount] = useState(amount);
    const[recvierDetails,setReciverDetails]=useState({
        address:"",
        amount:""
    })



    useEffect(()=>{
        setFormWalletAdress(address)
        setFromWalletAmount(amount)
    },[formWalletAdress,fromWalletAmount])

    

    const sendAmount=async()=>{

        try{
          
            const tx=await contract.functions.transfer(recvierDetails.address,{from:formWalletAdress,
            value:ethers.utils.parseEther(recvierDetails.amount),})
            
            toast(`${tx.hash}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
            });

            setReciverDetails({address:"",amount:""})
        }
        catch(err){
            toast(`${err}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
                });
        }

        

        
    }

    const getLastTransaction=async()=>{
        const index=await contract.getTransactionCount();

        const data=await contract.getTransaction(index-1);
        toast(`Transaction details of ${index-1} is ${data[0]}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            });

     
    }



    const transactionCount=async()=>{
        const data=await contract.getTransactionCount();
        toast(`There is total ${data} transaction complted`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            });
        
    }

    return (
        <>
        <ToastContainer/>
            <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                <Box>
                    <Typography variant='h3' sx={{ textAlign: "center" }}>
                        Transfer Crypto Across The World
                    </Typography>
                </Box>

                <Box sx={{ marginTop: '100px', display: 'flex', justifyContent: "center" }}>
                    <Box sx={{ justifyContent: "flex-start", width: '50%' }} >
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Your Adress"
                            defaultValue={`${formWalletAdress}`}
                            
                            sx={{ width: '50%' }}
                        />
                    </Box>

                    <Box>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Wallet Amount"
                            defaultValue={`${fromWalletAmount}`}

                            sx={{ width: '100%' }}
                        />
                    </Box>

                </Box>
                <Box sx={{ marginTop: '40px', display: 'flex', justifyContent: "center" }}>
                    <Box sx={{ justifyContent: "flex-start", width: '50%' }} >
                        <TextField
                            required
                            id="outlined-required"
                            label="Reciver Adress"
                            onChange={(e)=>{
                                setReciverDetails({...recvierDetails,address:e.target.value})
                            }}
                            placeholder="ENTER RECVIER ADDRESS HERE"
                        />
                    </Box>

                    <Box>
                        <TextField

                            id="outlined-helperText"
                            label="Sending Amount"
                            
                            onChange={(e)=>{
                                setReciverDetails({...recvierDetails,amount:e.target.value})
                            }}
                            sx={{ width: '100%' }}
                            placeholder="0"
                        />
                    </Box>
                </Box>

                <Box sx={{marginTop:'40px',display:'flex',justifyContent:'center'}} >
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={()=>sendAmount()}>Send Amount</Button>
                        <Button variant="contained" onClick={()=>getLastTransaction()} >Get Details of last Transaction</Button>
                        <Button variant="contained" onClick={()=>transactionCount()} >Total Number of your transaction</Button>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default Forms;