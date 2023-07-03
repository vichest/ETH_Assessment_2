import { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../artifacts/contracts/test.sol/test.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);

  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const atmABI = atm_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(account);
    }
  };

  const handleAccount = (account) => {
    if (account) {
      console.log("Account connected: ", account);
      setAccount(account);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);

    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

    setATM(atmContract);
  };

  const getBalance = async () => {
    if (atm) {
      setBalance((await atm.getBalance()).toNumber());
    }
  };

  const deposit = async () => {
    if (atm) {
      // manually set the gas limit to 3*10^7
      let tx = await atm.deposit(1, { gasLimit: 3e7 });
      await tx.wait();
      getBalance();
    }
  };

  const withdraw = async () => {
    if (atm) {
      // manually set the gas limit to 3*10^7
      let tx = await atm.withdraw(1, { gasLimit: 3e7 });
      await tx.wait();
      getBalance();
    }
  };

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>;
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return (
        <button onClick={connectAccount}>
          Please connect your Metamask wallet
        </button>
      );
    }

    if (balance == undefined) {
      getBalance();
    }

    return (
      <div class="overlay">
        <p>Your Balance: {balance}</p>
        <p>Your Account: {account}</p>
        <button onClick={deposit}>Deposit 1 ETH</button>
        <button onClick={withdraw}>Withdraw 1 ETH</button>
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header>
        <h1>𝔀𝓮𝓵𝓬𝓸𝓶𝓮</h1>
        <p>Ԝ𝗁ɑ𝗍 ɣ𝗈υ ⍵ɑ𐓣𝗍 𝗍𝗈 ᑯ𝗈:</p>
      </header>
      {initUser()}
      <style jsx>
        {`
          .container {
            text-align: center;
            background-color: black;
            background-size: cover;
            color: #fff;
            font-family: "Arial", sans-serif;
          }

          header {
            padding: 30px;
          }

          h1 {
            font-family: "Dancing Script", cursive;
            font-size: 80px;
            margin-bottom: 30px;
          }

          p {
            font-size: 18px;
            margin-bottom: 10px;
          }

          button {
            background-color: #4caf50;
            color: #fff;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
          }

          button:hover {
            cursor: pointer;
          }
        `}
      </style>
    </main>
  );
}
// const deposit = async() => {
//   if (atm) {
//     // manually set the gas limit to 100,000
//     let tx = await atm.deposit(1, {gasLimit: 3e7});
//     await tx.wait()
//     getBalance();
//   }
// };

// const withdraw = async() => {
//   if (atm) {
//     // manually set the gas limit to 100,000
//     let tx = await atm.withdraw(1, {gasLimit: 3e7});
//     await tx.wait()
//     getBalance();
//   }
// };
