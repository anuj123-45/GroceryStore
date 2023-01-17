import React,{useState} from "react";
import './login.css'
import axios from  'axios';
import {Link,useNavigate} from 'react-router-dom';

function Login({setLoginUser}) {

const navigate=useNavigate();
  const[user,setUser]=useState({
    email:"",
    password:"",
  
  })
const handleChange=(e)=>{

  const {name,value}=e.target
  setUser({
    ...user,
    [name]:value
  })
}
const login=()=>{
  axios.post("http://localhost:9092/login",user)
  .then(res=>{
    alert(res.data.message);
    setLoginUser(res.data.user);
    navigate("/home");
  
  })
}
  return (
    <div className="login">
      {console.log("user",user)}
      <h1>Login</h1>
      <input type="email" name="email" placeholder="Enter your email" onChange={handleChange}/>
      <input type="password" name="password" placeholder="Enter your password" onChange={handleChange}/>
      <div className="button" onClick={login}>Login</div>
      <div>or</div>
      <div className="button" ><Link to="/register" style={{color:"white",textDecoration:"none"}}>Register</Link></div>
    </div>
   
  );
}

export default Login;
