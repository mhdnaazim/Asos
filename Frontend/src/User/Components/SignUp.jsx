import React from 'react';
import './SignUp.css';
import asos from '../../assets/asos.svg';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="signup-container">
                <div className="signup-inputs">
                    <div className="signup-top">
                        <img src={asos} />
                        <p>SIGN UP</p>
                    </div>
                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="password" placeholder='Confirm Password' />
                    <div className="interested">
                        <h5>MOSTLY INTERESTED IN:</h5>
                        <div className="interest-checkbox">
                            <label>
                                <input type="checkbox" value="menswear" />
                                Menswear
                            </label>
                            <label>
                                <input type="checkbox" value="Womenswear" />
                                Womenswear
                            </label>
                        </div>
                    </div>
                    <button>CONTINUE</button>
                    <h4>Already Signed?   <span onClick={() => navigate("/login")}>Login</span></h4>
                </div>
            </div>
        </>
    )
}

export default SignUp;
