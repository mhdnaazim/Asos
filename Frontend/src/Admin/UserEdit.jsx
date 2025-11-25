import React, { useState } from "react";
import '../User/Components/SignUp.css';
import asos from "../assets/asos.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const UserEdit = () => {

    const URL = import.meta.env.VITE_API_URL;
    console.log("URL is:", URL);

    const navigate = useNavigate();
    const { id } = useParams()
    const [updatedUser, setUpdatedUser] = useState({
        email: "",
        password: "",
        interest: "",
        usertype: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleFetch = async () => {
        try {
            const response = await axios.get(`${URL}/user/editUser/${id}`);
            setUpdatedUser({
                email: response.data[0].email,
                password: response.data[0].password,
                interest: response.data[0].interest,
                usertype: response.data[0].usertype
            })
        } catch (error) {

        };
    };

    useEffect(() => {
        handleFetch()
    }, []);

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`${URL}/user/updatedUser/${id}`, updatedUser);
            if (response.status === 200) {
                alert("User Updated Successfully");
                navigate("/dashboard");
            } else {
                alert("error updating user");
            }
        } catch (error) {

        };
    };


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
                        type="text"
                        placeholder="New Password"
                        name="password"
                        value={updatedUser.password}
                        onChange={handleChange}
                    />

                    <div className="interested">
                        <h5>INTEREST:</h5>
                        <div className="interest-checkbox">
                            <label>
                                <input
                                    type="radio"
                                    name="interest"
                                    value="Menswear"
                                    checked={updatedUser.interest == "Menswear"}
                                    onChange={handleChange}
                                />
                                Menswear
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="interest"
                                    value="Womenswear"
                                    checked={updatedUser.interest == "Womenswear"}
                                    onChange={handleChange}
                                />
                                Womenswear
                            </label>
                        </div>
                    </div>

                    <div className="interested">
                        <h5>USER TYPE:</h5>
                        <div className="interest-checkbox">
                            <label>
                                <input
                                    type="radio"
                                    name="usertype"
                                    value="Admin"
                                    checked={updatedUser.usertype == "Admin"}
                                    onChange={handleChange}
                                />
                                Admin
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="usertype"
                                    value="User"
                                    checked={updatedUser.usertype == "User"}
                                    onChange={handleChange}
                                />
                                User
                            </label>
                        </div>
                    </div>

                    <button onClick={handleUpdate}>UPDATE</button>
                </div>
            </div>
        </>
    );
};

export default UserEdit;
