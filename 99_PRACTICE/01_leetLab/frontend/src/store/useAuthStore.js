import {create} from 'zustand'
import axiosInstance from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create( (set) => ({
   authUser: null,
   isSigningUp: false,
   isLogingIn: false,
   isCheckingAuth: false,

   checkAuth: async () => {
      set({isCheckingAuth: true})
      try {
         const res = await axiosInstance.get('/auth/check-auth')
         console.log("User data--------",res.data)
         set({authUser: res.data.user})
      } catch (e) {
         console.log("Error checking auth",e)
         set({authUser: null})
      }finally {
         set({isCheckingAuth: false})
      }
   },
   
   signUp: async (data) => {
      set({isSigningUp: true})
      try {
         const res = await axiosInstance.post('/auth/register', data)
         set({authUser: res.data.user})
         toast.success('Sign up successful')
      } catch (e) {
         console.log("Error checking auth",e)
         set({authUser: null})
         toast.error('Sign up failed')
      }finally {
         set({isSigningUp: false})
      }
   },
}))