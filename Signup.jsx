import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'

function Signup() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    linkedin: '',
    github: '',
    fullname: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('http://localhost:5000/api/signup', form)
      alert(res.data.message)
    } catch (err) {
      alert(err.response?.data?.message || 'Something went wrong')
    }
  }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="input-group">
          <label htmlFor="username">Username*</label>
          <input type="text" id="username" name="username" value={form.username} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email ID*</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="linkedin">LinkedIn*</label>
          <input type="url" id="linkedin" name="linkedin" value={form.linkedin} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="github">GitHub*</label>
          <input type="url" id="github" name="github" value={form.github} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="fullname">Full Name*</label>
          <input type="text" id="fullname" name="fullname" value={form.fullname} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password*</label>
          <input type="password" id="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit" className="signup-btn">Sign Up</button>
        <div className="login-link">
          <span>Already have an account?</span>
          
          <a href="/login">Login</a>
        </div>
      </form>
    </div>
  )
}

export default Signup
