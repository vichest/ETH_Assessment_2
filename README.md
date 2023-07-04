# assessment_2
## SPDX-License-Identifier: MIT

## Solidity Version

The code is written in Solidity version 0.8.9. Make sure you have the appropriate Solidity compiler installed to compile and interact with this code.

## Contract: test

This is a Solidity smart contract named `test`. It has the following features:

### State Variables

- `balance`: A `uint256` variable that represents the current balance of the contract.

### Events

- `Deposit(uint256 amount)`: An event that is emitted when a deposit is made to the contract. It includes the `amount` of the deposit as a parameter.

- `Withdraw(uint256 amount)`: An event that is emitted when a withdrawal is made from the contract. It includes the `amount` of the withdrawal as a parameter.

### Constructor

- `constructor(uint initBalance) payable`: The constructor function that initializes the contract with an initial balance (`initBalance`). The `payable` modifier allows the contract to receive Ether during deployment.

### Functions

- `getBalance()`: A view function that returns the current balance of the contract.

- `deposit(uint256 _amount) payable`: A function that allows users to deposit a specified amount (`_amount`) to the contract. The `payable` modifier allows the function to receive Ether. It updates the `balance` variable, emits a `Deposit` event, and performs assertions to ensure the transaction is completed successfully.

- `withdraw(uint256 _withdrawAmount)`: A function that allows users to withdraw a specified amount (`_withdrawAmount`) from the contract. It checks if the contract has sufficient balance and reverts if the balance is insufficient. It updates the `balance` variable, emits a `Withdraw` event, and performs assertions to ensure the transaction is completed successfully.

- `error InsufficientBalance(uint256 balance, uint256 withdrawAmount)`: A custom error that is used when a withdrawal amount exceeds the contract balance.

**Note:** Some parts of the code are commented out or disabled (e.g., owner-related functionality and import statement). You may uncomment and modify those parts according to your specific requirements.

*************************************************************************************************************************************************
# ATM Application

This is a simple ATM (Automated Teller Machine) application built using React.js and Ethereum. It allows users to connect their Metamask wallet, view their account balance, and perform deposit and withdrawal operations.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repository
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to see the application running.

## Requirements

- MetaMask wallet: Ensure that you have the MetaMask wallet extension installed in your browser.

## Usage

1. Connect Metamask Wallet: Click the "Please connect your Metamask wallet" button to connect your Metamask wallet to the application. You will be prompted to authorize the connection.

2. Account Information: Once connected, you will see your account address and current balance displayed on the screen.

3. Deposit: Click the "Deposit 1 ETH" button to deposit 1 ETH to the ATM contract. This will trigger a transaction, and after it is confirmed, your balance will be updated.

4. Withdraw: Click the "Withdraw 1 ETH" button to withdraw 1 ETH from the ATM contract. This will trigger a transaction, and after it is confirmed, your balance will be updated.

## Note

- This application uses the `ethers.js` library to interact with the Ethereum network.
- The contract address and ABI (Application Binary Interface) for the ATM contract are provided in the code. Make sure they are correct and correspond to the deployed contract you intend to interact with.
- The gas limit for the transactions is manually set to 30,000,000 (3e7). You may adjust this value according to your needs.
- Some parts of the code are commented out or disabled. You may uncomment and modify those parts if required.

## Styling

The application has a simple and elegant user interface with a dark theme. It uses CSS styles to define the layout and appearance of the elements.
***********************************************************************************************************************************************
# Deploy Test Contract

This script is used to deploy a contract named "test" to the Ethereum network using the Hardhat framework.

## Prerequisites

- Hardhat: Make sure you have Hardhat installed globally or locally in your project. You can install it using npm:

  ```bash
  npm install --global hardhat
  ```

## Usage

1. Configure Hardhat: Set up the Hardhat environment by creating a `hardhat.config.js` file in the root of your project. Refer to the [Hardhat documentation](https://hardhat.org/getting-started/) for more information on configuring Hardhat.

2. Contract Deployment: Open a terminal, navigate to your project directory, and execute the following command:

   ```bash
   npx hardhat run <script>
   ```

   Replace `<script>` with the path to this script file.

   This command will compile your contracts, deploy the "test" contract with an initial balance of 1 ETH, and display the contract's address once it is deployed.

## Note

- This script uses the `hardhat` package and the Hardhat Runtime Environment (`hre`) to compile and deploy contracts.
- The `getContractFactory` function is used to retrieve the contract factory for the "test" contract.
- The `deploy` function is used to deploy the contract with the specified initial balance.
- The contract deployment is an asynchronous operation, so the script uses `async/await` to handle it.
- Errors are caught and logged to the console, and the process exit code is set to 1 if an error occurs.

***********************************************************************************************************************************************

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.

After this, the project will be running on your localhost. 
Typically at http://localhost:3000/
