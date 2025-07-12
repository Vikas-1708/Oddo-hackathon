import { useState } from 'react'
import './App.css'
import Signup from './assets/components/Signup'
import Navbar from './assets/components/Navbar'
import Mainpage from './assets/components/Mainpage'
import Login from './assets/components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
