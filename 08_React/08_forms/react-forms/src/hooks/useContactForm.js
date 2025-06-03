import { useState } from "react";

export function useContactForm() {
   const [loading, setLoading] = useState(false)
   const [errorMessage, setErrorMessage] = useState(null)
   const [successMessage, setSuccessMessage] = useState(null)

   const submitContact = async ( formData) => {
      setLoading(true)
      setErrorMessage(null)
      setSuccessMessage(null)

      try {
         const res = await fetch("/api/contact",{
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
         })

         const data = await res.json()
         if(!res.ok) throw new Error(data.error || "Something went wrong in submitContact")
         setSuccessMessage(data.message || "message sent")
      
      } catch (error) {
         setErrorMessage(error.message || "Request Failed")
      } finally {
         setLoading(false)
      }

   }

   return {successMessage, loading, errorMessage, submitContact}
}