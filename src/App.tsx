import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'


import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Login />} />
      </Routes>

    </div>
  )
}

export default App
