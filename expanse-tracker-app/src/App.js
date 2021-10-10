import './App.css';
import Expanse from './Components/Expanse';
import Balance from './Components/Balance';
import TransactionHistory from './Components/TransactionHistory';
import AddTransaction from './Components/AddTransaction';

function App() {
    return (
        <div className="App">
            <Expanse />
            <Balance/>
            <TransactionHistory/>
            <AddTransaction/>
            
        </div>
    );
}

export default App;
