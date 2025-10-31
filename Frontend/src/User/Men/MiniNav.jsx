import React from "react";
import './MiniNav.css';
import india from '../../assets/in.png'

const MiniNav = () => {
    return (
        <>
        <div className="miniNav-container">
            <div className="miniNav-contents">
                <div className="miniNav-contents-left">
                    <p>Help & FAQs</p>
                </div>
                <div className="miniNav-contents-right">
                    <img src={india}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default MiniNav;