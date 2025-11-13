import React, { useState } from 'react';
import './SignUp.css';
import asos from '../../assets/asos.svg';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate();
    const [interest, setInterest] = useState("");

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
                                <input
                                    type="radio"
                                    name='interest'
                                    value="Menswear"
                                    checked={interest === "Menswear"}
                                    onChange={(e) => setInterest(e.target.value)}
                                />
                                Menswear
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name='interest'
                                    value="Womenswear"
                                    checked={interest === "Womenswear"}
                                    onChange={(e) => setInterest(e.target.value)}
                                />
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
