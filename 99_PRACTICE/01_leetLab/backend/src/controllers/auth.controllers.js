import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import {db} from '../libs/db.js'
import {UserRole} from '../generated/prisma/index.js'

export const register = async (req, res) => {
   // todo Get data from req.body
   const {email, name, password} = req.body

   if(!email || !name || !password){
      return res.status(401).json({
         success: true,
         message: "Invalid Credentials"
      })
   }
   // todo tryCatch
   try {
      
      // todo check for existing user with the same email
      const existingUser = await db.user.findUnique({
         where: {
            email
         }
      })

      if(existingUser) {
         
         return res.status(409).json({
            success: false,
            message: "User already exists",
         })
      }

      // todo hash the password using bcryptjs
      const hashedPassword = await bcrypt.hash(password, 10)

      // todo create new user
      const newUser = await db.user.create({
         data: {
            email,
            name, 
            password: hashedPassword,
            role: UserRole.USER
         }
      })

      if(!newUser) {
         return res.status(500).json({
            success: false,
            message: "User could not be created due to server error"
         })
      }

      // todo assign a jwt token

      const token = jwt.sign({id:newUser.id}, process.env.JWT_SECRET, {expiresIn: "7d",});

      if (!token) {
         return res.status(500).json({
            success: false,
            message: "User not registered, jwt token not assigned",
         });
      }
      

      // todo store the token in cookies
      res.cookie("jwt", token, {
         httpOnly: true,
         sameSite: 'strict',
         secure: process.env.NODE_ENV !== "development",
         maxAge: 1000 * 60 * 60 * 24 
      })

      // todo success response 201
      res.status(201).json({
         success: true,
         message: "User registered",
         user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
         }
      })

   } catch (error) {
      
      // todo Handle error in catch 500
      console.log(`User Registration failed. error: ${error}`);
      res.status(400).json({
         success: false,
         message: `User Registration failed.`,
      });
   }
}

export const login = async (req, res) => {
   // todo get email and password from req.body
   const {email, password} = req.body

   // validate input data
   if(!email || !password){
      return res.status(401).json({
         success: false,
         message: "invalid credentials"
      })
   }

   // todo tryCatch
   try {
      // todo check if user exist 401
      const user = await db.user.findUnique({
         where: {
            email
         },
      });

      if (!user) {
         return res.status(404).json({
            success: false,
            message: "User doesn't exist.",
         });
      }

      // todo match the passwords
      const isMatch = await bcrypt.compare(password, user.password)

      // todo assign jwt token
      const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '7d'})

      // todo store token in cookie
      res.cookie("jwt", token, {
         httpOnly: true,
         sameSite: "strict",
         secure: process.env.NODE_ENV !== "development",
         maxAge: 1000 * 60 * 60 * 24,
      });

      // todo Success response 200
      res.status(200).json({
         success: true,
         message: "Logged In"
      })
   } catch (error) {

      // todo Handle errros in catch 500
      console.log("Error logging in", error)
      res.status(500).json({
         success: false,
         message: "Login failed."
      })
   }
   
}

export const logout = async (req, res) => {
   try {
      
      // todo Clear jwt token from the cookies
      res.clearCookie("jwt", {
         httpOnly: true,
         sameSite: "strict",
         secure: process.env.NODE_ENV !== "development"
      })

      // todo Success response 204
      res.status(200).json({
         success: true,
         message: "User Logged Out"
      })
   } catch (error) {

      // todo Handle errors in catch 500
      console.log("Logout failed ", error)

      res.status(500).json({
         success: false,
         message: "Logout failed"
      })
      
   }
}

export const check = async (req, res) => {
   // todo return the user from req.body
   const user = req.user
   if(!user){
      return res.status(400).json({
         success: false,
         message: "User not logged in"
      })
   }
   // todo send success, message, user in response
   res.status(200).json({
      success: true,
      message: "User checked"
   })
}