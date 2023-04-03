let EventTest=web3.eth.contract();
let EventTestContract=ClientReceipt.at("0x5FbDB2315678afecb367f032d93F642f64180aa3");


EventTestContract.transfer((err,data)=>{
    if(!err){
        console.log(data);
    }
})