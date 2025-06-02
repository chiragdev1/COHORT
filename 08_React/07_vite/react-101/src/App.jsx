import { useState } from "react"

 const App = () => {

  const [count, setCount] = useState(
     Number(localStorage.getItem("dayCount")) || 0
  );
  const addDay = () => {
    setCount( prev => prev + 1)
    // setCount( prev => prev + 1)
    // setCount( prev => prev + 10) // Bad code
    localStorage.setItem('dayCount',(count + 1).toString())
    // sessionStorage.setItem('dayCount', (count + 1).toString())
  }

  
  return (
    <div>
      <h1>Welcome to DSADEN</h1>
      <p>One stop solution for your DSA!</p>
      <h4>DayCount: {count}</h4>
      <button onClick={addDay}>Done for the day</button>
    </div>
  )


}

export default App