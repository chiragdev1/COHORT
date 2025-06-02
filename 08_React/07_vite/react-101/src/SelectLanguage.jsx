import { useEffect, useState } from "react"

const SelectLanguage = () => {
   const testArray = [
      { id: "09238e23001", name: "JavaScript" },
      { id: "09238e23002", name: "Python" },
      { id: "09238e23003", name: "Java" },
      { id: "09238e23004", name: "C++" },
      { id: "09238e23005", name: "C#" },
      { id: "09238e23006", name: "Go" },
      { id: "09238e23007", name: "Rust" },
      { id: "09238e23008", name: "TypeScript" },
      { id: "09238e23009", name: "PHP" },
      { id: "09238e23010", name: "Ruby" },
      { id: "09238e23011", name: "Swift" },
      { id: "09238e23012", name: "Kotlin" },
      { id: "09238e23013", name: "Scala" },
      { id: "09238e23014", name: "Perl" },
      { id: "09238e23015", name: "R" },
      { id: "09238e23016", name: "Dart" },
      { id: "09238e23017", name: "Haskell" },
      { id: "09238e23018", name: "Elixir" },
      { id: "09238e23019", name: "C" },
      { id: "09238e23020", name: "MATLAB" },
   ];


   const [language, setLanguage] = useState([])
   const [error, setError] = useState("")


   useEffect( () => {
      // fetch('url')
      // .then( res => res.json())
      // .then( data => setLanguage(data))
      // .catch(err => setError(err))
      setLanguage(testArray)
   }, [])


   return (
      <div>
      <h2>Available Languages</h2>
         <ul>
            {language.map( lang => (
               <li key={lang.id}>{lang.name}</li>
            ))}
         </ul>
      </div>
   )


}

export default SelectLanguage