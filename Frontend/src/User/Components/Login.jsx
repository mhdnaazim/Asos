import React from 'react';
import './SignUp.css';
import asos from '../../assets/asos.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="signup-container">
        <div className="signup-inputs">
          <div className="signup-top">
            <img src={asos} />
            <p>LOGIN</p>
          </div>
          <input type="text" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>LOGIN</button>
          <h4>Don't have an account?   <span onClick={() => navigate("/signUp")}>SignUp</span></h4>
        </div>
      </div>
    </>
  )
}

export default Login;
