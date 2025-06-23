import axios from "axios";

export const getJudge0LanguageId = (language) => {
   const languageMap = {
      "JAVASCRIPT": 63,
      "JAVA": 62,
      "PYTHON": 71,
   }
   return languageMap[language.toUpperCase()]
}

export const submitBatch = async (submissions) => {
   // Make a POST request to Judge0 API to submit batch of submissions
   const {data} = await axios.post(`${process.env.JUDGE0_API_URL}/submissions/batch?base64_encoded=false`, {submissions})

   // submissions should be an array of objects with language_id, source_code, stdin, expected_output
   console.log("submissions Results",data)
   // Return the response from Judge0 API
}

const sleep = (ms) => new Promise( (resolve) => setTimeout(resolve,ms))

export const pollBatchResults = async (tokens) => {
   // Make a GET request to Judge0 API to poll the results of the batch submissions
   while(true) {
      const {data} = await axios.get(`${process.env.JUDGE0_API_URL}/submissions/batch`, {
         params: {
            tokens: tokens.join(","),
            base64_encoded: false
         }
      })

      const results = data.submissions

      const isAllDone = results.every( (r) => r.status.id !== 1 && r.status.id !== 2)

      if(isAllDone) return results

      await sleep(1000)
   }

   // tokens should be an array of submission tokens returned from submitBatch
   // Return the results from Judge0 API
}