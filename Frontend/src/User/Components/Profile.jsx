import React, { useState } from 'react';
import './Profile.css';
import logo from '../../assets/Logo.svg';
import asos from '../../assets/asos.svg';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  // ---------------- DOB STATES -------------------
  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => 1950 + i);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(1);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const days = Array.from(
    { length: getDaysInMonth(selectedMonth, selectedYear) },
    (_, i) => i + 1
  );
  

  // ---------------- LOGOUT -------------------
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("loggedUser");
      navigate("/");
    }
  };

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
          <div className="profile-left">
            <div className="profile-details">
              <div className="profile-details-abb">
                <img src={asos} alt="" />
              </div>
              <div className="profile-details-name">
                <h4>{loggedUser?.email}</h4>
              </div>
            </div>

            <div className="profile-option-container">
              <div className="profile-option"><p>My Orders</p></div>
              <div className="profile-option"><p>My Details</p></div>
              <div className="profile-option"><p>Payment Methods</p></div>
              <div className="profile-option"><p>Contact Preferences</p></div>
              <div className="profile-option"><p>Need help?</p></div>
              <div className="profile-option"><p>Social Accounts</p></div>

              <div className="profile-option-signout">
                <p onClick={handleLogout}>Sign out</p>
              </div>
            </div>
          </div>

          {/* ---------- PROFILE RIGHT SECTION ---------- */}
          <div className="profile-right">
            <div className="profile-title">
              <h2>MY DETAILS</h2>
              <p>
                Feel free to edit any of your details below so your ASOS account is totally
                up to date. (* Indicates a required field).
              </p>
            </div>

            <div className="profile-form">
              <label>FIRST NAME*</label>
              <input type="text" placeholder="Mohd" />

              <label>LAST NAME*</label>
              <input type="text" placeholder="Naazim" />

              <label>EMAIL ADDRESS*</label>
              <input type="email" placeholder="n4zim04@gmail.com" />

              {/* ---------- DOB SELECT ---------- */}
              <label>DATE OF BIRTH*</label>
              <div className="dob-row">

                {/* Day */}
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(Number(e.target.value))}
                >
                  {days.map((day) => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>

                {/* Month */}
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(Number(e.target.value))}
                >
                  {months.map((month, index) => (
                    <option key={index} value={index}>{month}</option>
                  ))}
                </select>

                {/* Year */}
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(Number(e.target.value))}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>

              </div>

              <label>MOSTLY INTERESTED IN*</label>
              <div className="radio-row">
                <label className="radio-item">
                  <input type="radio" name="interest" />
                  Womenswear
                </label>
                <label className="radio-item">
                  <input type="radio" name="interest" defaultChecked />
                  Menswear
                </label>
              </div>

              <button className="save-btn">SAVE CHANGES</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Profile;
