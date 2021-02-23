import "./styles.css";
import {useState} from 'react';
import Navbar from './Navbar.js'

export default function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
      <Navbar/>
      <p>{number}</p>
      <button onClick={()=>setNumber(number +1)}>Increment</button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
