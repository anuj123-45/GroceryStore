import React,{useState}from 'react'
import './reg.css'
import axios from 'axios';

function signup() {
  const[user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
  })
const handleChange=(e)=>{

  const {name,value}=e.target
  setUser({
    ...user,
    [name]:value
  })
}

const register=()=>{
  const {name,email,password,reEnterPassword}=user;
  if(name && email && password && (password===reEnterPassword)){
  axios.post("http://localhost:9092/register",user)
  .then(response=>{response})
  }
  else {
    alert("Invalid Input");
  }
  
}

  return (
    <div className="register">
      {console.log("user", user)}
    <h1>Register</h1>
    <input type="text" name="name" value={user.name} placeholder="Your Name"  onChange={handleChange}/>
    <input type="email" name="email" value={user.email} placeholder="Your Email"  onChange={handleChange}/>
    <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}/>
    <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}/>
    <div className="button" onClick={register}>Register</div>
    <div>or</div>
    <div className="button">Login</div>
  </div>
  )
}

export default signup;