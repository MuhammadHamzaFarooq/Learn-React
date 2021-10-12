import './App.css';
import React from 'react';
import GitRepos from './GitRepos';

function App() {

  // const [data, setData] = useState({});


  // useEffect( () => {

  //   async function getData(){
  //     let apiRes = await fetch('https://jsonplaceholder.typicode.com/todos/5');
  //     let jsonData = await apiRes.json();
  //     console.log(jsonData)
  //     setData(jsonData)
  //   }
  //   getData()

  // }, [])


  // console.log(data)

  return (
    <div className="App">
      {/* <h1>Learn Use Effect Hook  </h1>
      <h2>Title : {data.title} </h2>
      <h2>ID : {data.id} </h2>
      <h2>{`Completed : ${data.completed} `}</h2> */}
      <GitRepos />
    </div>
  );
}

export default App;
