import express from 'express'

import { deleteProblemById, getAllProblems, getProblemById, getSolvedProblems, updateProblemById } from '../controllers/problem.controllers.js'

 const problemRoutes = express.Router()


problemRoutes.get('/problems', getAllProblems)

problemRoutes.get('/:id', getProblemById)

problemRoutes.put('/:id', updateProblemById)

problemRoutes.delete('/:id', deleteProblemById)

problemRoutes.get('/solved-problems', getSolvedProblems)

export default problemRoutes