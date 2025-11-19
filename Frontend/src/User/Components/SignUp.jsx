import React, { useState } from 'react';
import './SignUp.css';
import asos from '../../assets/asos.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        interest: ""
    });

    const handleSave = async () => {

        if (user.password !== user.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post(`${URL}/user/addUser`, {
                email: user.email,
                password: user.password,
                interest: user.interest
            });

            if (response.status === 200) {
                alert("Registration Successful");
                navigate("/login");
            } else if (response.status === 202) {
                alert("Email already Registered");
            } else {
                alert("Registration Failed");
                return;
            }
        } catch (error) {
            console.log(error);
        }

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <div className="signup-container">
                <div className="signup-inputs">
                    <div className="signup-top">
                        <img src={asos} alt="logo" />
                        <p>SIGN UP</p>
                    </div>

                    <input
                        type="text"
                        placeholder='Email'
                        onChange={handleChange}
                        name='email'
                        value={user.email}
                    />

                    <input
                        type="password"
                        placeholder='Password'
                        onChange={handleChange}
                        name='password'
                        value={user.password}
                    />

                    <input
                        type="password"
                        placeholder='Confirm Password'
                        onChange={handleChange}
                        name='confirmPassword'
                        value={user.confirmPassword}
                    />

                    <div className="interested">
                        <h5>MOSTLY INTERESTED IN:</h5>
                        <div className="interest-checkbox">

                            <label>
                                <input
                                    type="radio"
                                    name="interest"
                                    value="Menswear"
                                    checked={user.interest === "Menswear"}
                                    onChange={handleChange}
                                />
                                Menswear
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="interest"
                                    value="Womenswear"
                                    checked={user.interest === "Womenswear"}
                                    onChange={handleChange}
                                />
                                Womenswear
                            </label>

                        </div>
                    </div>

                    <button onClick={handleSave}>CONTINUE</button>

                    <h4>
                        Already Signed?
                        <span onClick={() => navigate("/login")}> Login</span>
                    </h4>
                </div>
            </div>
        </>
    )
}

export default SignUp;
