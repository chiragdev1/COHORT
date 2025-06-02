import { useEffect, useState } from "react";


export function useSpecialChai() {

   const dummyData = {
      id: 1,
      name: "Masala Chai",
      origin: "India",
      ingredients: ["Black Tea", "Milk", "Sugar", "Cardamom", "Ginger"],
      caffeineLevel: "Medium",
      price: 2.5,
      available: true,
      rating: 4.7,
   };
    
   
   // Set variables to be returned by the hook
   const [chai, setChai] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect( () => {

      fetch("/api/")

   }, []) // No dependency array => it will run once
}