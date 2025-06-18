import { db } from "../libs/db.js";


export const authenticateUser = async( req, res, next) => {

   // Get the jwt token from cookie
   const jwtToken = req.cookies["jwt"]
   let decoded

   try {

      decoded = await jwt.verify(jwtToken, process.env.JWT_SECRET);

      // verify the user in database using id
      const user = db.user.findUnique({
         where: {
            id: decoded.id
         }, select: {
            email: true,
            name: true,
            avatar: true,
            role: true
         }
      })

      // TODO Add better response messages
      if(!user) {
         return res.status(404).json({
            success: false,
            message: "User doesn't exist"
         })
      }
      // send the user in req.user
      req.user = user
      next()
      
   } catch (error) {
      console.log("Invalid user")
      // TODO write better error messages
      res.status(401).json({
         success: false,
         message: "User not authenticated"
      })
   }
   // handle server side error in catch
   next()
}

export const checkAdmin = async (req, res, next) => {
   // Get the userId from jwt token
   const token = req.cookies['jwt']
   console.log('token', token)
   let decoded
   try {
      decoded = await jwt.verify(token, process.env.JWT_SECRET);
      
      // get the user role from database
      const user = decodeBase64.user.findUnique({
         where: {
            id: decoded.id,
         }, select: {
            role: true
         }
      })

      // check if user is admin
      if(!user || user.role !== 'ADMIN') {
         return res.status(401).json({
            success: false,
            message: "User not authorized"
         })
      }

      // handle server side error
   } catch (error) {
      console.log("Error checking user role", error)
      res.status(400).json({
         success: false,
         message: "Failed to check user role"
      })
   }
   next()
}