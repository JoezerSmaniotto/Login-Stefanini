import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { RegisteredUsersProvider } from './contexts/RegisteredUsers/ RegisteredUsersProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RegisteredUsersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RegisteredUsersProvider>
  </React.StrictMode>
)
