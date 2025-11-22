import React from "react";
import './Cart.css';
import Nav from "../Men/Nav";
import Footer from "../Men/Footer";
import { useNavigate } from "react-router-dom";
import delivery from '../../assets/delivery.svg';
import pay1 from '../../assets/visa.png';
import pay2 from '../../assets/mastercard.png';
import pay3 from '../../assets/paypal.png';
import pay4 from '../../assets/amex.png';
import pay5 from '../../assets/visa-electron.png';
import sample from '../../assets/cl6.avif';

const Cart = () => {
    const navigate = useNavigate();

    const cartItems = [
        { name: "Weekday boxy oversized fit hoodie with dragon graphic print in black", image: sample, price: "92.00", color: "Black", size: "M", quantity: "1" },
        { name: "ASOS DESIGN relaxed fit t-shirt with vintage wash", image: sample, price: "25.00", color: "Grey", size: "L", quantity: "2" },
        { name: "Nike Club fleece joggers in navy", image: sample, price: "60.00", color: "Navy", size: "M", quantity: "1" },
        { name: "Adidas Originals Trefoil hoodie", image: sample, price: "75.00", color: "Green", size: "XL", quantity: "1" },
        { name: "Pull&Bear oversized shirt in check print", image: sample, price: "45.00", color: "Red/Black", size: "M", quantity: "1" },
        { name: "Topman slim fit stretch jeans", image: sample, price: "50.00", color: "Blue", size: "32", quantity: "1" },
        { name: "Bershka cargo pants with pocket detail", image: sample, price: "48.00", color: "Khaki", size: "30", quantity: "2" },
        { name: "Hollister logo print hoodie in white", image: sample, price: "62.00", color: "White", size: "L", quantity: "1" },
        { name: "Zara knitted sweater with ribbed texture", image: sample, price: "55.00", color: "Beige", size: "M", quantity: "1" },
        { name: "Puma Essentials small logo t-shirt", image: sample, price: "22.00", color: "Black", size: "S", quantity: "3" },
        { name: "Uniqlo ultra light padded jacket", image: sample, price: "89.00", color: "Olive", size: "XL", quantity: "1" }
    ];

    const sizes = ["S", "M", "L", "XL"];
    const quantities = Array.from({ length: 10 }, (_, i) => i + 1);


    return (
        <>
            <Nav />
            <div className="cart">
                <div className="cart-left">
                    <div className="cart-left-top">
                        <p>MY BAG</p>
                    </div>
                    <div className="cart-left-items">
                        <div className="cart-products">
                            <div className="cart-products-image">
                                <img src={sample} alt="" />
                            </div>
                            <div className="cart-products-details">
                                <h4>$92.00 <span>✕</span></h4>
                                <p>Weekday boxy oversized fit hoodie with dragon graphic print in black</p>
                                <div className="cart-product-spec">
                                    <p>Black</p>
                                    <h5>|</h5>
                                    <select name="size">
                                        {sizes.map(size => (
                                            <option key={size} value={size}>{size}</option>
                                        ))}
                                    </select>
                                        <h5>|</h5>
                                    <select name="quantity">
                                        {quantities.map(q => (
                                            <option key={q} value={q}>{q}</option>
                                        ))}
                                    </select>
                                </div>
                                <button>Save for later</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-left-bottom">
                        <div className="cart-left-bottom-icon">
                            <img src={delivery} />
                        </div>
                        <div className="cart-left-bottom-des">
                            <p>FREE* STANDARD DELIVERY</p>
                            <h4>Fastest delivery options available to most countries.</h4>
                            <h5>More info</h5>
                        </div>
                    </div>
                </div>
                <div className="cart-right">
                    <div className="checkout-box">
                        <div className="checkout-box-head">
                            <p>TOTAL</p>
                        </div>
                        <div className="sub-total">
                            <div className="sub-total-section">
                                <h4>Sub-Total</h4>
                                <p>$631.00</p>
                            </div>
                            <div className="sub-total-section">
                                <h4>Delivery</h4>
                                <p>FREE</p>
                            </div>
                        </div>
                        <div className="checkout-btn">
                            <button>CHECKOUT</button>
                        </div>
                        <div className="accepted-cards">
                            <h4>WE ACCEPT:</h4>
                            <div className="accepted-cards-img">
                                <img src={pay1} />
                                <img src={pay2} />
                                <img src={pay3} />
                                <img src={pay4} />
                                <img src={pay5} />
                            </div>
                            <p>Got a discount code? Add it in the next step.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart