import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../Context/StoreContext";
import './Nav.css';
import india from '../../assets/in.png'
import logo from '../../assets/Logo.svg';
import search from '../../assets/searchIcon.svg'
import profile from '../../assets/profileIcon.svg';
import fav from '../../assets/fav.svg';
import cart from '../../assets/cart.svg';
import myProfile from '../../assets/profileIcon.svg';

const Nav = () => {

    const navigate = useNavigate();
    const { showSale, setShowSale, cartCount } = useStore();
    const [dropdown, setDropdown] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setShowSale(true);
    };

    const handleMouseLeave = () => {
        setShowSale(false);
    };

    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    const handleLogout = () => {
        localStorage.removeItem("loggedUser");
        navigate("/")
    }

    const handleProfile = () => {
        if (!loggedUser) {
            alert("Login first")
        } else {
            navigate("/profile")
        }
    }


    // Delay dropdown close when not hovering
    useEffect(() => {
        let timer;
        if (!isHovering) {
            timer = setTimeout(() => setDropdown(false), 500);
        }
        return () => clearTimeout(timer);
    }, [isHovering]);

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
                        <div onClick={() => navigate("/women")} className="section-left">
                            <p>WOMEN</p>
                        </div>
                        <div onClick={() => navigate("/")} className="section-right">
                            <p>MEN</p>
                        </div>
                    </div>
                    <div className="search-container">
                        <div className="searchbar">
                            <input type="text" placeholder="Search for items" />
                            <img src={search} />
                        </div>
                    </div>
                    <div className="nav-links">
                        <div
                            className="profile-icon-container"
                            onMouseEnter={() => {
                                setDropdown(true);
                                setIsHovering(true);
                            }}
                            onMouseLeave={() => {
                                setIsHovering(false);
                            }}>
                            <img src={profile} />

                            {dropdown && (
                                <div
                                    className="profile-dropdown"
                                    onMouseEnter={() => {
                                        setDropdown(true);
                                        setIsHovering(true)
                                    }}
                                    onMouseLeave={() => setIsHovering(false)}>

                                    <div className="profile-dropdown-top">
                                        {!loggedUser ? (
                                            <p onClick={() => navigate("/login")}>Login</p>
                                        ) : (
                                            <p onClick={handleLogout}>Logout</p>
                                        )}
                                    </div>
                                    <div className="profile-dropdown-btm">
                                        <div className="drp-section">
                                            <img src={myProfile} />
                                            <p onClick={handleProfile}>My Account</p>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>

                        <img title='Favourites' src={fav} />
                        <img onClick={() => navigate("/cart")} src={cart} />
                        <div className="cart-qty">
                            <p onClick={() => navigate("/cart")}>{cartCount}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Nav  */}
            <div className="ctgry-nav">
                <div className="category-nav-container">
                    <button
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={showSale ? "active-btn" : ""}
                    >Sale</button>
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

            {/* Category Tile */}
            <div
                className={`sale-tile ${showSale ? "active" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="sale-tile-container">
                    <div className="tile-section">
                        <h3>SHOP BY PRODUCT</h3>
                        <ul>
                            <li>SALE T-shirts</li>
                            <li>SALE Hoodies</li>
                            <li>SALE Jackets</li>
                            <li>SALE Lounge wear</li>
                            <li>SALE Shirts</li>
                            <li>SALE Shorts</li>
                            <li>SALE Skimwear</li>
                            <li>SALE Accessories</li>
                            <li>SALE Trainers</li>
                        </ul>
                    </div>

                    <hr />

                    <div className="tile-section">
                        <h3>SHOP BY SHOES</h3>
                        <ul>
                            <li>Adidas Originals Campus</li>
                            <li>Adidas Originals Gazelle</li>
                            <li>Adidas Originals Stan Smith</li>
                            <li>New Balance 530</li>
                            <li>New Balance 550</li>
                            <li>New Balance 574</li>
                            <li>ON Cloudmonster</li>
                            <li>Reebok Club Classic</li>
                            <li>Vans Old Skool</li>
                        </ul>
                    </div>

                    <hr />

                    <div className="tile-section">
                        <h3>SHOP BY CLOTHING</h3>
                        <ul>
                            <li>T-shirts & Vests</li>
                            <li>Hoodies & Sweatshirts</li>
                            <li>Jumpers</li>
                            <li>Jackets</li>
                            <li>Jeans</li>
                            <li>Joggers</li>
                            <li>Activewears</li>
                            <li>Loungewear</li>
                            <li>Cargo</li>
                        </ul>
                    </div>

                    <hr />

                    <div className="tile-section">
                        <h3>SHOP BY ACCESSORIES</h3>
                        <ul>
                            <li>New in</li>
                            <li>Selling Fast</li>
                            <li>Belts</li>
                            <li>Watches</li>
                            <li>Gifts</li>
                            <li>Ties</li>
                            <li>Beanies</li>
                            <li>Gloves</li>
                            <li>Scarves</li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Bottom Nav */}
            <div className="btm-nav">
                <p>FREE DELIVERY WORLDWIDE</p>
            </div>
        </>
    );
};

export default Nav;
