import { useState, useEffect } from 'react'

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(++count)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <h1>{count}</h1>
    </>

  )
}

export default App
