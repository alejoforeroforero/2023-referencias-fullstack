import { useState, useEffect } from 'react'
import MousePosition from './Components/MousePosition'

function App() {
  let [on, setOn] = useState(false)

  return (
    <>
      <div>{on ? <MousePosition /> : <h1>Off</h1>}</div>
      <button onClick={()=>setOn(!on)}>{on.toString()}</button>
    </>

  )
}

export default App
