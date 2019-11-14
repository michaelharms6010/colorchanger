import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  let [boxClass, setBoxClass] = useState("greenBox")

  const turnRed = _ => setBoxClass("redBox");
  const turnGreen = _ => setBoxClass("greenBox")

  return (
    <div className="App">
      <div className={`box ${boxClass}`}>{boxClass}</div>
      <button onClick={turnGreen}>Turn Green</button>
      <button onClick={turnRed}>Turn Red</button>
    </div>
  );
}

export default App;
