import React from 'react';
import './SignUp.css';
import asos from '../../assets/asos.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { paperClasses } from '@mui/material';
import axios from 'axios';

const Login = () => {

  const URL = import.meta.env.VITE_API_URL
  console.log("URL is:", URL);
  
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${URL}/auth/logUser`, formData);
      const data = response.data;
      console.log(response.data);
      
      if(data.usertype === "Admin"){
        navigate("/dashboard")
      } else if(data.interest === "Womenswear"){
        navigate("/women")
      } else{
        navigate("/")
      }

    } catch (error) {
      alert("Invalid Email or Password")
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}))
  }

  return (
    <>
      <div className="signup-container">
        <div className="signup-inputs">
          <div className="signup-top">
            <img src={asos} onClick={() => navigate("/")}/>
            <p>LOGIN</p>
          </div>
          <input type="text" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
          <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} />
          <button onClick={handleLogin}>LOGIN</button>
          <h4>Don't have an account?   <span onClick={() => navigate("/signUp")}>SignUp</span></h4>
        </div>
      </div>
    </>
  )
}

export default Login;
