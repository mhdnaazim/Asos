import React, { useState, useEffect } from 'react';
import './Profile.css';
import logo from '../../assets/Logo.svg';
import asos from '../../assets/asos.svg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

const Profile = () => {

    const navigate = useNavigate();
    const { id } = useParams()
    const storedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const URL = import.meta.env.VITE_API_URL;

    // Which section is active in the left menu
    const [activeSection, setActiveSection] = useState("myAccount");

    // ---------------- USER STATE -------------------
    const [updatedUser, setUpdatedUser] = useState({
        name: "",
        email: "",
        password: "",
        interest: "",
        dob: "",
        usertype: ""
    });

    // ------------ DOB STATES -------------
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => 1950 + i);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedDay, setSelectedDay] = useState(1);

    const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    const days = Array.from({ length: getDaysInMonth(selectedMonth, selectedYear) }, (_, i) => i + 1);

    // ---------------- CHANGE HANDLER -------------------
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser(prev => ({ ...prev, [name]: value }));
    };

    // ---------------- ON LOAD PREFILL -------------------
    useEffect(() => {
        if (storedUser) {
            setUpdatedUser({
                name: storedUser.name || "",          // not stored in DB, only local
                email: storedUser.email,
                password: storedUser.password,
                interest: storedUser.interest,
                dob: storedUser.dob || "",
                usertype: storedUser.usertype
            });

            if (storedUser.dob) {
                const [yy, mm, dd] = storedUser.dob.split("-");
                setSelectedYear(Number(yy));
                setSelectedMonth(Number(mm) - 1);
                setSelectedDay(Number(dd));
            }
        }
    }, []);

    // ---------------- UPDATE USER -------------------
    const handleUpdate = async () => {

        const finalDOB = `${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;

        // do NOT send name to backend
        const updatedForBackend = {
            email: updatedUser.email,
            password: updatedUser.password,
            interest: updatedUser.interest,
            usertype: updatedUser.usertype,
            dob: finalDOB
        };

        try {
            const response = await axios.put(
                `${URL}/user/updatedUser/${storedUser.userid}`,
                updatedForBackend
            );

            if (response.status === 200) {
                alert("Profile Updated Successfully!");

                // Save everything (including name) locally
                localStorage.setItem("loggedUser", JSON.stringify({
                    ...storedUser,
                    ...updatedUser,
                    dob: finalDOB
                }));

                window.location.reload();
            }
        } catch (error) {
            console.log(error);
            alert("Error updating profile");
        }
    };


    // -------------- DELETE USER ---------------
    const handleDelete = async (id) => {
    console.log("Deleting user:", id);

    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (!confirmDelete) return;

    try {
        const response = await axios.delete(`${URL}/user/delUser/${id}`);
        console.log("Response:", response);

        if (response.status === 200) {
            alert("Account Deleted Successfully");
            localStorage.removeItem("loggedUser");
            navigate("/signUp");
        }

    } catch (error) {
        console.log("Delete error:", error);
        alert("Something went wrong while deleting your account");
    }
};


    // // ---------------- LOGOUT -------------------
    // const handleLogout = () => {
    //     if (window.confirm("Are you sure you want to logout?")) {
    //         localStorage.removeItem("loggedUser");
    //         navigate("/");
    //     }
    // };

    return (
        <>
            <div className="profile-container">
                <div className="profile-top">
                    <div className="profile-top-left">
                        <img src={logo} alt="" />
                    </div>
                    <div className="profile-top-right">
                        <p>MY ACCOUNT</p>
                    </div>
                </div>

                <div className="profile">

                    {/* LEFT SIDE */}
                    <div className="profile-left">
                        <div className="profile-details">
                            <div className="profile-details-abb">
                                <img src={asos} alt="" />
                            </div>
                            <div className="profile-details-name">
                                <h4>{updatedUser.name || updatedUser.email}</h4>
                            </div>
                        </div>

                        <div className="profile-option-container">
                            <div
                                className={`profile-option ${activeSection === "orders" ? "active" : ""}`}
                                onClick={() => setActiveSection("orders")}
                            >
                                <p>My Orders</p>
                            </div>

                            <div
                                className={`profile-option ${activeSection === "details" ? "active" : ""}`}
                                onClick={() => setActiveSection("details")}
                            >
                                <p>My Details</p>
                            </div>

                            <div
                                className={`profile-option ${activeSection === "payments" ? "active" : ""}`}
                                onClick={() => setActiveSection("payments")}
                            >
                                <p>Payment Methods</p>
                            </div>

                            <div
                                className={`profile-option ${activeSection === "contact" ? "active" : ""}`}
                                onClick={() => setActiveSection("contact")}
                            >
                                <p>Contact Preferences</p>
                            </div>

                            <div
                                className={`profile-option ${activeSection === "help" ? "active" : ""}`}
                                onClick={() => setActiveSection("help")}
                            >
                                <p>Need help?</p>
                            </div>

                            <div
                                className={`profile-option ${activeSection === "social" ? "active" : ""}`}
                                onClick={() => setActiveSection("social")}
                            >
                                <p>Social Accounts</p>
                            </div>

                            <div className="profile-option-signout" onClick={() => handleDelete(storedUser.userid)}>
                                <p>Delete Account</p>
                            </div>
                        </div>
                    </div>

                    {activeSection === "myAccount" ? (
                        <>
                            <div className="profile-right-default">
                                <div className="welcome1">
                                    <p>WELCOME TO</p>
                                </div>
                                <div className="welcome2">
                                    <p>YOUR ACCOUNT</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="profile-right">

                            {activeSection === "details" && (
                                <>
                                    <div className="profile-title">
                                        <h2>MY DETAILS</h2>
                                        <p>
                                            Feel free to edit your details below so your ASOS account stays up to date.
                                        </p>
                                    </div>

                                    <div className="profile-form">

                                        {/* FULL NAME */}
                                        <label>FULL NAME*</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={updatedUser.name}
                                            onChange={handleChange}
                                        />

                                        {/* EMAIL */}
                                        <label>EMAIL ADDRESS*</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={updatedUser.email}
                                            onChange={handleChange}
                                        />

                                        {/* PASSWORD */}
                                        <label>PASSWORD*</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={updatedUser.password}
                                            onChange={handleChange}
                                        />

                                        {/* DOB */}
                                        <label>DATE OF BIRTH*</label>
                                        <div className="dob-row">
                                            <select value={selectedDay} onChange={(e) => setSelectedDay(Number(e.target.value))}>
                                                {days.map(day => <option key={day} value={day}>{day}</option>)}
                                            </select>

                                            <select value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
                                                {months.map((m, index) => <option key={index} value={index}>{m}</option>)}
                                            </select>

                                            <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
                                                {years.map(y => <option key={y} value={y}>{y}</option>)}
                                            </select>
                                        </div>

                                        {/* INTEREST */}
                                        <div className="profile-interested">
                                            <h5>INTERESTED IN:*</h5>

                                            <div className="profile-interest-checkbox">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="interest"
                                                        value="Menswear"
                                                        checked={updatedUser.interest === "Menswear"}
                                                        onChange={handleChange}
                                                    />
                                                    Menswear
                                                </label>

                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="interest"
                                                        value="Womenswear"
                                                        checked={updatedUser.interest === "Womenswear"}
                                                        onChange={handleChange}
                                                    />
                                                    Womenswear
                                                </label>
                                            </div>
                                        </div>

                                        <button className="save-btn" onClick={handleUpdate}>SAVE CHANGES</button>
                                    </div>
                                </>
                            )}

                            {activeSection === "orders" && (
                                <div className="profile-title">
                                    <h2>MY ORDERS</h2>
                                    <p>You don't have any orders yet.</p>
                                </div>
                            )}

                            {activeSection === "payments" && (
                                <div className="profile-title">
                                    <h2>PAYMENT METHODS</h2>
                                    <p>You have not added any payment methods yet.</p>
                                </div>
                            )}

                            {activeSection === "contact" && (
                                <div className="profile-title">
                                    <h2>CONTACT PREFERENCES</h2>
                                    <p>Manage your email and notification settings here.</p>
                                </div>
                            )}

                            {activeSection === "help" && (
                                <div className="profile-title">
                                    <h2>HELP</h2>
                                    <p>Need help? Visit our help center or contact support.</p>
                                </div>
                            )}

                            {activeSection === "social" && (
                                <div className="profile-title">
                                    <h2>SOCIAL ACCOUNTS</h2>
                                    <p>Link your social media accounts here (coming soon).</p>
                                </div>
                            )}

                        </div>
                    )}

                </div>
            </div>
        </>
    );
};

export default Profile;
