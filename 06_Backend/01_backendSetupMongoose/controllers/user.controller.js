import User from '../models/User.model.js'


const registerUser = async (req, res) => {
   const {name, email, password} = req.body

   if(!name || !email || !password){
      return res.status(200).json({
         success: false,
         message: 'Invalid credentials'
      })
   }

   // Check if user already exists
   const user = User.findOne(email)
   console.log(user)

}

const loginUser = async (req, res) => {
   res.status(200).json({
      success: true,
      message: 'Login Successful'
   })
}

export { registerUser, loginUser}