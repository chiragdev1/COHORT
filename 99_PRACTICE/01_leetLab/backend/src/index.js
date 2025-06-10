import express from 'express'
import dotenv from 'dotenv'


import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import problemRoutes from './routes/problem.routes.js'

const app = express()
dotenv.config()

const port = process.env.PORT || 3001

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRoutes)
app.use("api/v1/problems", problemRoutes)

app.get("/", (req, res) => {
   res.send("<h1>Welcome to LeetLab🔥</h1>"); 
});


app.listen(port, ()=>{
   console.log("Server is running on port", port)
})