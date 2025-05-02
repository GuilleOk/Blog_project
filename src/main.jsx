import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { LoginContextProvider } from './contexts/LoginContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </BrowserRouter>,
)
