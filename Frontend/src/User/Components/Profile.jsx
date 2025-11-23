import React from 'react';
import './Profile.css';
import logo from '../../assets/Logo.svg';

const Profile = () => {
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
                        <p>MN</p>
                    </div>
                    <div className="profile-details-name">
                        <p>Hi,</p>
                        <h4>Mohd Naazim</h4>
                    </div>
                </div>
                <div className="profile-option-container">
                    <div className="profile-option">
                        <p>My Orders</p>
                    </div>

                    <div className="profile-option">
                        <p>My Details</p>
                    </div>

                    <div className="profile-option">
                        <p>Payment Methods</p>
                    </div>

                    <div className="profile-option">
                        <p>Contact Preferences</p>
                    </div>

                    <div className="profile-option">
                        <p>Need help?</p>
                    </div>

                    <div className="profile-option">
                        <p>Social Accounts</p>
                    </div>

                    <div className="profile-option-signout">
                        <p>Sign out</p>
                    </div>
                </div>
            </div>
            <div className="profile-right">
                <div className="welcome1">
                    <p>WELCOME TO</p>
                </div>
                <div className="welcome2">
                    <p>YOUR ACCOUNT</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Profile;
