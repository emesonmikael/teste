import logo from './logo.svg';
import './App.css';
import {ethers} from 'ethers';
import {useState} from 'react';

function App2() {
const [error, setError] = useState('');

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
                <button onClick={doSignIn}>
                  Sign In with MetaMask
                </button>
                <button onClick={doSignUp}>
                  Sign Up with MetaMask
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
