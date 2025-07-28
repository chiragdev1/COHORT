import User from '../models/User.model.js'
import nodemailer from 'nodemailer'

const registerUser = async (req, res) => {
   const {name, email, password} = req.body

   //  VALIDATION
   if(!name || !email || !password){
      return res.status(200).json({
         success: false,
         message: 'Invalid credentials'
      })
   }

   try {
      //  Check if user already exists
      const user = await User.findOne(email); // Database is in another continent
      console.log("user: ", user);
      if (user) {
         return res.status(400).json({
            success: false,
            message: `User already Exists.`,
         });
      }

      // Create a new user  in database
      const newUser = await User.create({ name, email, password }); // Database is in another continent
      console.log("New user: ", newUser);
      if (!newUser) {
         return res.status(400).json({
            success: false,
            message: "Failed to create new User",
         });
      }

      // Verify the user
      const token = crypto.randomBytes(32).toString('hex')
      console.log(token)
      if(!token){
         return res.status(401).json({
            success: false,
            message: 'Registeration failed, error in generating token'
         })
      }
      await user.updateOne({verificationToken: token})
      await user.save()

      // Send verification token via email
      const transport = nodemailer.createTransport({
         host: "live.smtp.mailtrap.io",
         port: 587,
         auth: {
            user: process.env.MAILTRAP_USERNAME,
            pass: process.env.MAILTRAP_PASSWORD,
         },
      });

      res.status(200).json({
         success: true,
         message: `User registered successfuly`,
      });


   } catch (error) {
      res.status(404).json({
         success: false,
         message: `Failed to register user, ${error}`
      })
   }

}

const loginUser = async (req, res) => {
   res.status(200).json({
      success: true,
      message: 'Login Successful'
   })
}

const logoutUser = async (req, res,) => {

}

const forgotPassword = async (req, res) => {

}

const resetPassword = async (req, res) => {

}

const verifyEmail = async (req, res) => {

}

const resendVerificationEmail = async (req, res) => {

}

const getProfile = async (req, res) => {

}

const refreshAccessToken = async (req, res) => {

}

export { registerUser, loginUser}