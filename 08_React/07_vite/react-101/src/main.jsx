import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Message from './Message.jsx'
import SelectLanguage from './selectLanguage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Message /> */}
    <SelectLanguage/>
  </StrictMode>,
)
