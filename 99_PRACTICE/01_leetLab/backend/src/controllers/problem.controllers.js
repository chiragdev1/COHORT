import { db } from "../libs/db.js";

export const createProblem = async ( req, res) => {
   // get data from body
   // check user role again
   // trycatch
   // Loop through the referenceSolutions and extract [language, solutionCode] from Object.entries
   // get languageId from method
   // loop through the testcases and get input, output from them
   // Make the first call to judge0 with language_id, source_code, stdin, expected_output using submitBatch
   // execute polling using the tokens from submitBatch
   // Loop through the results to check for a failed test case
}

export const getAllProblems = async (req, res) => {
   // get all the problems from db
   // 
}

export const getProblemById = async (req, res) => {}

export const deleteProblemById = async (req, res) => {}

export const updateProblemById = async (req, res) => {}

export const getSolvedProblems = async (req, res) => {}