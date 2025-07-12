import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <>
        <div className="navbar">
        <div className="logo">
            <div className="logo-img">image</div>
            <div className="logo-text">Skill Swap Platform</div>
        </div>
        
        <div className="login">
            <button className="login-btn-navbar">Login</button>
        </div>
        </div>
    </>
  )
}

export default Navbar