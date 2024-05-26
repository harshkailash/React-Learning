import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter]= useState(-10);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    if(counter>=20){
      setCounter(20)
      counter=20
    }
  }
  const decreaseValue = () => {
    if(counter<=0){
      setCounter(0)
      counter=0
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={decreaseValue}>remove value</button>
    </>
  )
}

export default App
