import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <div className="login-actions">
          <button type="submit" className="login-btn">Login</button>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>
        <div className="signup-link">
          <span>New here?</span>
          <a href="#">Sign Up</a>
        </div>
      </form>
    </div>
  )
}

export default Login