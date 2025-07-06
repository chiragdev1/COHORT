import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'


import authRoutes from './routes/auth.routes.js'
import problemRoutes from './routes/problem.routes.js'
import executeCodeRoutes from './routes/executeCode.routes.js'

dotenv.config()
const app = express()

const port = process.env.PORT || 3001

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())

// Routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/problems", problemRoutes)
app.use("/api/v1/execute-code", executeCodeRoutes)

// Home page/ Landing page
app.get("/", (req, res) => {
   res.send("<h1>Welcome to LeetLab🔥</h1>"); 
});

// Assigning PORT
app.listen(port, ()=>{
   console.log("Server is running on port", port)
})