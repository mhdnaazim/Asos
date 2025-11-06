import React from 'react';
import './SignUp.css';
import asos from '../../assets/asos.svg'

const SignUp = () => {
    return (
        <>
            <div className="signup-container">
                <div className="signup-inputs">
                    <div className="signup-top">
                        <img src={asos} />
                        <p>SIGNUP</p>
                    </div>
                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="password" placeholder='Confirm Password' />
                    <button>CONTINUE</button>
                </div>
            </div>
        </>
    )
}

export default SignUp;
