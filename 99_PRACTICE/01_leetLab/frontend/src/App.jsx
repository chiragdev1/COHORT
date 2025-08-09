import React,{ useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore.js";
function App() {
   const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
   useEffect(() => {
      checkAuth();
   }, [checkAuth]);

   if (isCheckingAuth && !authUser) {
      return (
         <div className="flex items-center justify-center h-screen">
            <Loader className="size-10 animate-spin" />
         </div>
      );
   }

   return (
      <div className="flex flex-col items-center justify-center">
         <Toaster position="top-center" />
         <Routes>
            <Route
               path="/"
               element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
            />
            <Route
               path="/signup"
               element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
            />
            <Route
               path="/login"
               element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
            />
         </Routes>
      </div>
   );
}

export default App;
