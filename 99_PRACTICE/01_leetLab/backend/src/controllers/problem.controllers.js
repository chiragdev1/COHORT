import { db } from "../libs/db.js";
import { getJudge0LanguageId, pollBatchResults, submitBatch } from "../libs/judge0.libs.js";

export const createProblem = async ( req, res) => {
   // get data from body
   const {title, description, difficulty, tags, examples, constraints, testcases, codeSnippets, referenceSolution} = req.body
   // check user role again
   if(req.user.role !== "ADMIN") {
      return res.status(403).json({
         success: false,
         message: "User not authorized to create problem"
      })
   }
   // validate the data
   
   // trycatch
   try {
      // Loop through the referenceSolutions and extract [language, solutionCode] from Object.entries

      for (const [language, solutionCode] of Object.entries(referenceSolution) ) {
         
         // get languageId from method
         const languageId = getJudge0LanguageId(language);

         if (!languageId) {
            return res.status(400).json({
               success: false,
               message: "Language not supported!",
            });
         }

         // Array of submisssions for each language
         // loop through the testcases and get input, output from them
         const submissions = testcases.map(({ input, output }) => ({
            source_code: solutionCode,
            language_id: languageId,
            stdin: input,
            expected_output: output,
         }));

         // Make the first call to judge0 with language_id, source_code, stdin, expected_output using submitBatch
         const submissionResults = await submitBatch(submissions);

         const tokens = submissionResults.map((res) => res.token);

         // execute polling using the tokens from submitBatch
         const results = await pollBatchResults(tokens);

         // Loop through the results to check for a failed test case
         for (let i = 0; i < results.length; i++) {
            const result = results[i];

            if (result.status.id !== 3) {
               return res.status(400).json({
                  message: `error: Testcase ${
                     i + 1
                  } failed for language ${language}`,
               });
            }
         }

         const newProblem = await db.problem.create({
            data: {
               title,
               description,
               difficulty,
               tags,
               examples,
               constraints,
               testcases,
               codeSnippets,
               referenceSolution,
               userId: req.user.id,
            },
         });

         return res.status(201).json(newProblem);
      }
   } catch (error) {
      
   }
}

export const getAllProblems = async (req, res) => {
   // get all the problems from db
   // 
}

export const getProblemById = async (req, res) => {}

export const deleteProblemById = async (req, res) => {}

export const updateProblemById = async (req, res) => {}

export const getSolvedProblems = async (req, res) => {}