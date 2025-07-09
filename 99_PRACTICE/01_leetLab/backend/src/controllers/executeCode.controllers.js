import { pollBatchResults, submitBatch } from "../libs/judge0.libs.js";


export const executeCode = async (req, res) => {
   // extract userId from req.user
   const userId = req.user.id

   // extract {source_code, language_id, stdin, expected_outputs, problem_id}
   const {source_code, language_id, stdin, expected_outputs, problem_id} = req.body

   // validate testcases stdin isArray and length, expected_output isArray and length === stdin.length (400, invalid or missing testcases)
   if(!Array.isArray(stdin) || stdin.length === 0 || !Array.isArray(expected_outputs) || expected_outputs.length !== stdin.length) {
      console.log("stdin", stdin)
      return res.status(400).json({ error: "invalid or missing testcases" });
   }

   try {
      // prepare each testcase for judge0 batch submissions
      const submissions = stdin.map( (input, i) => ({
         source_code,
         language_id,
         stdin: input,

      }))

      // send batch of submission
      const submitBatchResults = await submitBatch(submissions)
      console.log("submitBatchResults--------- ", submitBatchResults)

      const tokens = submitBatchResults.map( res => (res.token))

      // poll judge0 for submissions
      const results = await pollBatchResults(tokens)

      console.log("Results from pollBatchResults", results)

      res.status(200).json({
         success: true,
         message: "Code executed successfully"
      })
   } catch (error) {
      console.log("Error in executeCode Controller", error)
      return res.status(500).json({
         success: false,
         error: "Failed to execute code"
      })
   }
}