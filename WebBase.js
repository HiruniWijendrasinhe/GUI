import React from "react";import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/WebBase.css"; 


 
function Login() { 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault(); 

    
    const validEmail = "lakshikahiruni20@gmail.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
      alert("Login Successful!");
      navigate("/Login");  
    } else {
      setErrorMessage("Invalid email or password!"); 
    }
  };

  return (
    <div className="container" >
        <div className="deco"></div>
      <div className="container2" style={{height: "100%", width: "60%", margin:"0"}}>
        
        <img src="../images/newbase-removebg-preview.png" alt="First task management image"  style={{height: "300px", width: "300px", display: "block"}} />
        <p>Your Productivity Partner-Organize tasks, track progress, and accomplish more effortlessly!</p>
        
      </div>
      
      <div className="container1" style={{height: "100%", width: "40%"}}>
        <img src="../images/TaskGen-removebg-preview.png" alt="Logo of App" style={{height: "250px", width: "250px"}} />
        
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="container3">
            <label>E-mail: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="container3">
            <label>Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </div>

          <div id="errorMessage" style={{color: "red", fontSize: "14px"}}>
            {errorMessage}
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
      <div className="deco"></div>
    </div>
  );
}

export default Login;

    
 