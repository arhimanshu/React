import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let counter=15;
function App() {
  const [count, setCount] = useState(0)
const addt=()=>{
  setCount(count+1);
  console.log("value added",Math.random(),count);
}
const subt=()=>{
  count>0? setCount(count-1) : setCount(0) ;
  console.log("value added",Math.random(),count);}
  return (
    <>
      <h1>hello boo</h1>
      <h2>counter val : {count}</h2>
      <button onClick={addt}>add</button>
      <button onClick={subt}>sub</button>
      <button>sub</button>
    </>
  )
}

export default App
