import './App.css';
import React from 'react'
import Expanse from './Components/Expanse';
import Balance from './Components/Balance';
import TransactionHistory from './Components/TransactionHistory';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './ContextApi/TransactionContext';

function App() {


    return (

        <GlobalProvider>
            <div className="App">
                <Expanse />
                <Balance />
                <TransactionHistory />
                <AddTransaction />
            </ div >
        </GlobalProvider>

    );
}

export default App;
