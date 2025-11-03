import React from "react";
import './WomenNav.css';
import india from '../../assets/in.png'
import logo from '../../assets/Logo.svg';
import search from '../../assets/searchIcon.svg'
import profile from '../../assets/profile.svg';
import fav from '../../assets/fav.svg';
import cart from '../../assets/cart.svg';
import { useNavigate } from "react-router-dom";

const WomenNav = () => {

    const navigate = useNavigate()

    return (
        <>

            {/* First Nav  */}
            <div className="miniNav-container">
                <div className="miniNav-contents">
                    <div className="miniNav-contents-left">
                        <p>Help & FAQs</p>
                    </div>
                    <div className="miniNav-contents-right">
                        <img src={india} />
                    </div>
                </div>
            </div>

            {/* Main Nav  */}
            <div className="nav-container">
                <div className="nav-contents">
                    <div className="logo">
                        <img onClick={() => navigate("/")} src={logo} />
                    </div>
                    <div className="sections">
                        <div onClick={() => navigate("/women")} className="women-btn">
                            <p>WOMEN</p>
                        </div>
                        <div onClick={() => navigate("/")} className="men-btn">
                            <p>MEN</p>
                        </div>
                    </div>
                    <div className="search-container">
                        <div className="searchbar">
                            <input type="text" placeholder="Search for items and brands" />
                            <img src={search} />
                        </div>
                    </div>
                    <div className="nav-links">
                        <img src={profile} />
                        <img src={fav} />
                        <img src={cart} />
                    </div>
                </div>
            </div>

            {/* Categories Nav  */}
            <div className="ctgry-nav">
                <div className="category-nav-container">
                    <button>Sale</button>
                    <button>New in</button>
                    <button>Clothing</button>
                    <button>Face + Body</button>
                    <button>Dresses</button>
                    <button>Shoes</button>
                    <button>Accessories</button>
                    <button>Gifting</button>
                    <button>Brands</button>
                    <button>Activewear</button>
                    <button>Topshop</button>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="btm-nav">
                <p>FREE DELIVERY WORLDWIDE</p>
            </div>
        </>
    )
}

export default WomenNav;