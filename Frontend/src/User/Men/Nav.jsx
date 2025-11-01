import React from "react";
import './Nav.css';
import india from '../../assets/in.png'
import logo from '../../assets/Logo.svg';
import search from '../../assets/search icon.png'
import profile from '../../assets/profile.svg';
import fav from '../../assets/fav.svg';
import cart from '../../assets/cart.svg';

const Nav = () => {
    return (
        <>

        {/* First Nav  */}
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

                {/* Main Nav  */}
            <div className="nav-container">
                <div className="nav-contents">
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                    <div className="sections">
                        <div className="section-left">
                            <p>WOMEN</p>
                        </div>
                        <div className="section-right">
                            <p>MEN</p>
                        </div>
                    </div>
                    <div className="search-container">
                        <div className="searchbar">
                            <input type="text" placeholder="Search for items and brands"/>
                            <img src={search}/>
                        </div>
                    </div>
                    <div className="nav-links">
                        <img src={profile}/>
                        <img src={fav}/>
                        <img src={cart}/>
                    </div>
                </div>
            </div>

            {/* Categories Nav  */}
            <div className="ctgry-nav">
                <div className="category-nav-container">
                    <button>Sale</button>
                    <button>New in</button>
                    <button>Clothing</button>
                    <button>Shoes</button>
                    <button>Accessories</button>
                    <button>Gifting</button>
                    <button>Brands</button>
                    <button>Activewear</button>
                    <button>Grooming</button>
                    <button>Tailoring</button>
                    <button>Topman</button>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="btm-nav">
                <p>FREE DELIVERY WORLDWIDE</p>
            </div>
        </>
    )
}

export default Nav