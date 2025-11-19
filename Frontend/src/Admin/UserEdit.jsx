import React, { useState } from "react";
import '../User/Components/SignUp.css';
import asos from "../assets/asos.svg";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const UserEdit = () => {

    const URL = import.meta.env.VITE_API_URL;
    const {id} = useParams()
    const [updatedUser, setUpdatedUser] = useState({
        email: "",
        password: "",
        interest: "",
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleFetchUser = async () => {
        try {
            const response = await axios.get(`${URL}/user/editUser/${id}`);
            setUpdatedUser({
                email: response.data.email,
                password: response.data.password,
                interest: response.data.interest
            })
            console.log("API Response:", response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSave = async () => {
        try {
            const response = await axios.put(`${URL}/user/updatedUser/${id}`, updatedUser);
            console.log(response);
            if(response.status === 200){
                alert("User Updated Successfully");
                navigate("/dashboard")
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleFetchUser()
    }, [])

    return (
        <>
            <div className="signup-container">
                <div className="signup-inputs">
                    <div className="signup-top">
                        <img src={asos} alt="logo" />
                        <p>EDIT USER</p>
                    </div>

                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={updatedUser.email}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        placeholder="New Password"
                        name="password"
                        value={updatedUser.password}
                        onChange={handleChange}
                    />

                    <div className="interested">
                        <h5>INTEREST:</h5>

                        <div className="interest-checkbox">
                            <label>
                                <input type="radio" name="interest" value="Menswear" checked={updatedUser.interest === "Menswear"} onChange={handleChange} />
                                Menswear
                            </label>

                            <label>
                                <input type="radio" name="interest" value="Womenswear" checked={updatedUser.interest === "Womenswear"} onChange={handleChange} />
                                Womenswear
                            </label>
                        </div>
                    </div>


                    <button onClick={handleSave}>UPDATE</button>
                </div>
            </div>
        </>
    );
};

export default UserEdit;
