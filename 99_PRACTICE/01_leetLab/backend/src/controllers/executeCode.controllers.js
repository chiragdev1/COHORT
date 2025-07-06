

export const executeCode = async (req, res) => {
   // extract userId from req.user
   // extract {source_code, language_id, stdin, expected_output, problem_id}
   // validate testcases stdin isArray and length, expected_output isArray and length === stdin.length
   // prepare each testcase for judge0 batch submissions
   // send batch of submission
   // poll judge0 for submissions
   // success message
}