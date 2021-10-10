import './App.css';
import counterContext from './Components/CounterContext';
import Parent from './Components/Parent';
import React,{useState} from 'react'


function App() {
  // const [count , setCount] = useState(30);
  const countState = useState(1);
  return (
    <counterContext.Provider value={countState} >

      <div className="App">
        <Parent name='Muhammad Hamza Farooq' />
      </div>
    </counterContext.Provider>
  );
}

export default App;
