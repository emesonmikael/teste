import logo from './logo.svg';
import './App.css';
import React from "react";
import {ethers} from 'ethers';
import {useState} from 'react';
import { getTokenBalance, getBnbBalance, transferBnb, transferToken, getTransaction } from './MetaMaskService';

function App() {
	
const [address, setAddress] = useState("");
const [toAddress, setToAddress] = useState("0x8bCea3942295f3b847B49C190862781C4fC2EFe3");
const [quantity, setQuantity] = useState('');
const [stotal, setStotal] = useState('');
const [frete, setFrete] =React.useState(7);
const [total,setTotal] = React.useState('0');
 const [contract, setContract] = useState("0x6A7a3318499B026432Cd74f049226Af6c35aC2e0");
  const [myAddress, setMyAddress] = useState("");
  const [balance, setBalance] = useState('');
  const [message, setMessage] = useState('');
const [message2, setMessage2] = useState('');
const [error, setError] = useState('');
const provider = new ethers.providers.Web3Provider(window.ethereum);
	
	const sum = ()=>{
	const total = quantity + frete;
	const stotal = parseFloat(total);
	setQuantity(total);
	setStotal(stotal);
	setTotal(stotal);
	setMessage2(stotal);
	transfer2();
	};

async function transfer() {
    let result;
     
      result = await transferToken(toAddress, contract, quantity);

    setMessage(JSON.stringify(result.hash));
	setMessage2('https://forms.gle/cp9sZbDeeU1UtjD28');
  window.open("https://forms.gle/cp9sZbDeeU1UtjD28","_blank");
     
  }
	async function transfer1() {
    let result;
     
      result = await transferToken(toAddress, contract, quantity);

    setMessage(JSON.stringify(result.hash));
	
window.open("https://docs.google.com/forms/d/e/1FAIpQLScUKH1bnZ2MNCXcCXXE-ElpfLUjw7X5ZDvyJI11Fo175BeEnw/viewform?usp=sf_link", "_blank");
     
  }
	async function transfer2() {
    let result;
	
      result = await transferToken(toAddress, contract, quantity);

    setMessage(JSON.stringify(result.hash));
	setMessage2('https://forms.gle/WC4bXxQnmh3ztqX16');
window.open("https://forms.gle/WC4bXxQnmh3ztqX16", "_blank");
     
  }
	async function transfer3() {
    let result;
     
      result = await transferToken(toAddress, contract, quantity);

    setMessage(JSON.stringify(result.hash));
	setMessage2('https://forms.gle/bQ13CWnVStteTwxC8');
window.open("https://forms.gle/bQ13CWnVStteTwxC8", "_blank");
     
  }
 


async function doSignIn(){ }

const [wallet, setWallet] = useState('');
 
async function doSignUp(){
  setError('');
	
  if (!window.ethereum) return setError(`No MetaMask found!`);
 
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
      
    if (!accounts || !accounts.length) return setError('Wallet not found/allowed!');
 
 localStorage.setItem('wallet', accounts[0]);
 
  setWallet(accounts[0]);
  }catch(err){
     setError(err.message);
  }

}
function doLogout(){

  localStorage.removeItem('wallet');
  setWallet('');
  setError('');

}
  return (
     <div className="App">
    <header className="App-header">
      
      <div>
        {
          !wallet
            ? (
              <>
		<p>
		<h1>Login</h1>
		</p>
                
                <button onClick={doSignUp}>
                 Entre with sua Carteira
                </button>
 <p>
       
        
      </p>

              </>
            )
            : (
              <>
                <p>
                 
                </p>
			<p>
			 seu saldo : {balance}
	</p>
               
 <p>
<img src="https://i.ibb.co/dJ3PHYW/download-23.jpg" alt="IMG-0485" border="0"/>
</p>
		 <p>
<h2> Fone Bluetooth P47</h2>
</p>
			 <p>
Preço : 8.000 ELE + 7.000 Frete Total 15.000
</p>
        <p>
        <select className="form-select" onChange={evt => setQuantity(evt.target.value)}>
         <option value="BNB">Selecione o token</option>
          <option value="15000">ELE</option>
        </select>
        
      </p>
		<button onClick={transfer}>
                  Comprar
                </button>

			 <p>
<img src="https://i.ibb.co/ZMWnjKp/download-24.jpg" alt="IMG-0485" border="0"/>
</p>
		 <p>
<h2> Tv Box Vontar</h2>
</p>
	 <p>
Preço : 50.000 ELE + 7.000 Frete Total 57.000 ELE
</p>
        <p>
        <select className="form-select" onChange={evt => setQuantity(evt.target.value)}>
         <option value="BNB">Selecione o token</option>
          <option value="57000">ELE</option>
        </select>
        
      </p>
		<button onClick={transfer1}>
                  Comprar
                </button>
	
	 <p>
	<img src="https://i.ibb.co/Nn6Xmvm/download-2.jpg" alt="download-2" border="0"/>

</p>
		 <p>
<h2> Central Mutimidia Acodo com Camera de Ré</h2>
</p>
		<p>
Preço : 34.000 ELE + 7.000 Frete Total 41.000 ELE
</p>
        <p>
        <select className="form-select" onChange={evt => setQuantity(+evt.target.value)}>
         <option value="BNB">Selecione o token</option>
          <option value="41000">ELE</option>
        </select>
        
      </p>
		<button onClick={transfer2}>
                  Comprar
                </button>
			 <p>
	<img src="https://i.ibb.co/5WQHF4b/images-1.jpg" alt="images-1" border="0"/>

</p>
		 <p>
<h2>Mini Caixa de Som Y3</h2>
</p>
			 <p>
Preço : 5.500 ELE + 7.000 Frete Total 12.500 ELE
</p>
        <p>
        <select className="form-select" onChange={evt => setQuantity(evt.target.value)}>
         <option value="BNB">Selecione o token</option>
          <option value="12500">ELE</option>
        </select>
        
      </p>
		<button onClick={transfer3}>
                  Comprar
                </button>
      <p>
        {message} 
     
      </p>
			 <p>
      {message2} 
      </p>
              </>

            )

        }
        {
		
          error ? <p>{error}</p> : <></>
        }
      </div>
    </header>
  </div>
  );
}






export default App;
