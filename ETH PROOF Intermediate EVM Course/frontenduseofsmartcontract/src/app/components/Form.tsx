"use client"
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useState } from 'react';
const Forms = ({ address, amount,contarct }) => {

    const [formWalletAdress, setFormWalletAdress] = useState(address);
    const [fromWalletAmount, setFromWalletAmount] = useState(amount);
    const [reciverAdress, setReciverAdress] = useState("");
    const [recviedAmount, setRecivedAmount] = useState("");


    const sendAmount=async()=>{
        const data=await contarct.methods.addToBlockChain("0x54AaA12FC847669cA3D0089c01D90603F365d3a0",0.001).call((error,result)=>{
            if(!error){
                console.log(result)
            }
            else{
                console.log(error)
            }
        })
        console.log(data);
    }

    const getAllTransaction=async()=>{
        const allTransaction=await contarct.method.getAllTransactions().call((err,result)=>{
            if(!err){
                console.log(result)
            }
            else{
                console.log(err)
            }
        })
     
    }



    const transactionCount=async()=>{
        const allTransactionCount=await contarct.method.getAllTransactionsCount().call((err,result)=>{
            if(!err){
                console.log(result)

            }
            else{
                console.log(err)
            }
        });
        
    }

    return (
        <>
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
                                setFormWalletAdress(e.target.value)
                            }}
                            defaultValue="Enter Recvier Adress Here"
                        />
                    </Box>

                    <Box>
                        <TextField

                            id="outlined-helperText"
                            label="Sending Amount"
                            defaultValue="0"
                            onChange={(e)=>{
                                setFromWalletAmount(e.target.value)
                            }}
                            sx={{ width: '100%' }}
                        />
                    </Box>
                </Box>

                <Box sx={{marginTop:'40px',display:'flex',justifyContent:'center'}} >
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={()=>sendAmount()}>Send Amount</Button>
                        <Button variant="contained" onClick={()=>getAllTransaction()} >All Transaction </Button>
                        <Button variant="contained" onClick={()=>transactionCount()} >Total Number of your transaction</Button>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default Forms;