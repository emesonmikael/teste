import logo from './logo.svg';
import './App.css';
import {ethers} from 'ethers';
import {useState} from 'react';
import { getTokenBalance, getBnbBalance, transferBnb, transferToken, getTransaction } from './MetaMaskService';
function App() {
const [toAddress, setToAddress] = useState("0x000000000000000000000000000000000000dead");
const [quantity, setQuantity] = useState("");
 const [contract, setContract] = useState("0x6c4fbe6aefd6e2f541c99fc807436fc152af14bf");
  const [myAddress, setMyAddress] = useState("");
  const [balance, setBalance] = useState('');
  const [message, setMessage] = useState('');
const [error, setError] = useState('');
 
async function transfer() {
    let result;
     
      result = await transferToken(toAddress, contract, quantity);

    setMessage(JSON.stringify(result));
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
transfer();
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
                <button onClick={doSignIn}>
                  Sign In with MetaMask
                </button>
                <button onClick={doSignUp}>
                  Sign Up with MetaMask
                </button>
 <p>
        <select className="form-select" onChange={evt => setQuantity(evt.target.value)}>
          <option value="BNB">BNB</option>
          <option value="20">EI</option>
        </select>
        
      </p>
<button onClick={transfer}>
                  Comprar
                </button>
              </>
            )
            : (
              <>
                <p>
                  Wallet: {wallet}
                </p>
                <button onClick={doLogout}>
                  Logout
                </button>
 <p>
<img src="https://i.ibb.co/FWNP740/IMG-0485.jpg" alt="IMG-0485" border="0"/>
</p>
        <p>
        <select className="form-select" onChange={evt => setQuantity(evt.target.value)}>
          <option value="BNB">BNB</option>
          <option value="20">EI</option>
        </select>
        
      </p>
		<button onClick={transfer}>
                  Comprar
                </button>
<hr />
      <p>
        {message} 
     
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
