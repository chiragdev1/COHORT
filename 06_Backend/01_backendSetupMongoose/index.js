import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './utils/db.js'
import userRoutes from './routes/user.route.js'


dotenv.config()

const app = express()
const port = process.env.PORT || 3000


app.use(cors({
   origin: process.env.BASE_URL,
   credentials: true,
   methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
   allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use(express.urlencoded( {extended:true} ))


app.get('/', (req, res) => {
   console.log( req)
   res.send(`<h1>Home page</h1>`)
})

app.use('/api/v1/users', userRoutes)

app.get('/chirag', (req, res) => {
   res.send('<h1>Welcome Chirag!</h1>')
})

// connect to db
db()

app.listen(port, (err) => {
   if(err)console.log('Error running', err)
   console.log('Running on port', port)
})