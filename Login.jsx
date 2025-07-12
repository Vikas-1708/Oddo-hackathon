import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  const [form, setForm] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/api/login', form)
      alert(res.data.message)
      // You can redirect or store user info here
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username*</label>
          <input type="text" id="username" name="username" value={form.username} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password*</label>
          <input type="password" id="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="login-btn">Login</button>
        <div className="signup-link">
          <span>Don't have an account?</span>
          <Link to="/">Signup</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
