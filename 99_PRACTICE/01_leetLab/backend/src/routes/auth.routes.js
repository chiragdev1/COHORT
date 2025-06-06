import express from 'express'
import { check, login, logout, register } from '../controllers/auth.controllers.js'

 const authRoutes = express.Router()

authRoutes.post("/register", register)
authRoutes.post("/login", login)
authRoutes.get("/logout", logout)
authRoutes.post("/check", check)

export default authRoutes