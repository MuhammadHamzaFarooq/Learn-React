import './App.css';
import React from 'react'
import LineChart from './Components/LineChart';
import DoughnutChart from './Components/DoughnutChart';
function App() {
  return (
    <div className="App">
     <LineChart />
     <DoughnutChart  />
    </div>
  );
}

export default App;
