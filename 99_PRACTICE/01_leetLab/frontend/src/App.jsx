import {Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'

function App() {

  let authUser = null
  return (
    <div className="flex flex-col items-center justify-center">
      <Routes>
        <Route path='/' element={authUser ? <HomePage/> : <Navigate to={'/login'} />}/>
        <Route path='/signup' element= {!authUser ? <SignUpPage/> : <Navigate to={"/"}/>}/>
        <Route path='/login' element= {!authUser ? <LoginPage/> : <Navigate to={"/"}/>} />
      </Routes>
    </div>
  )
}

export default App