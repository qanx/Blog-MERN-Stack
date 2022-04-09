import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {

  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setErorr]=useState(false)

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
     const res = await axios.post('/auth/register', {
      username ,
       email,
        password
      });
      res.data&&window.location.replace("/login")
        
    
       
      }
      
     catch (error) {
      setErorr(true)
    }
   
  }



    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input onChange={e=>{setUsername(e.target.value)}} className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input onChange={e=>{setEmail(e.target.value)}} className="registerInput" type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input onChange={e=>{setPassword(e.target.value)}} className="registerInput" type="password" placeholder="Enter your password..." />
        {error&&<span>something worng</span>}
        <button type="submit" className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton"> <Link to="/login">Login</Link> </button>
    </div>
    )
}