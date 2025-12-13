import React, { useEffect, useState } from "react";
import "./Cart.css";
import Nav from "../Men/Nav";
import Footer from "../Men/Footer";
import delivery from "../../assets/delivery.svg";
import pay1 from "../../assets/visa.png";
import pay2 from "../../assets/mastercard.png";
import pay3 from "../../assets/paypal.png";
import pay4 from "../../assets/amex.png";
import pay5 from "../../assets/visa-electron.png";
import axios from "axios";
import { useStore } from "../../Context/StoreContext";

const Cart = () => {
    const URL = import.meta.env.VITE_API_URL;
    const [data, setData] = useState([]);
    const { handleFetchCartCount } = useStore();

    const handleGetCart = async () => {
        try {
            const res = await axios.get(`${URL}/cart/getCart`);
            const cartData = res.data.map((item) => ({
                ...item,
                quantity: Number(item.quantity),
            }));
            setData(cartData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetCart();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${URL}/cart/deleteFromCart/${id}`);
            handleGetCart();
            handleFetchCartCount();
        } catch (error) {
            console.log(error);
        }
    };

    const updateQuantity = async (id, newQty) => {
        // Convert to number and ensure it's at least 1
        const numQty = Number(newQty);
        if (numQty < 1) return;

        // Optimistic UI update (prevents glitches)
        setData((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: numQty } : item
            )
        );

        try {
            await axios.put(`${URL}/cart/updateQuantity/${id}`, {
                quantity: numQty,
            });
        } catch (error) {
            console.log(error);
            handleGetCart();
        }
    };

    return (
        <>
            <Nav />

            <div className="cart">
                <div className="cart-left">
                    <div className="cart-left-top">
                        <p>MY BAG</p>
                    </div>

                    <div className="cart-left-items">
                        {data.map((item) => (
                            <div className="cart-products" key={item.id}>
                                <div className="cart-products-image">
                                    <img
                                        src={`${URL}/Uploads/${item.image}`}
                                        alt={item.name}
                                    />
                                </div>

                                <div className="cart-products-details">
                                    <h4>
                                        ${item.price}
                                        <span onClick={() => handleDelete(item.id)}>✕</span>
                                    </h4>

                                    <p>{item.name}</p>

                                    <div className="cart-product-spec">
                                        <p>{item.color}</p>
                                        <h5>|</h5>
                                        <p>{item.size}</p>
                                        <h5>|</h5>
                                        <div className="qty-control">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    updateQuantity(item.id, Number(item.quantity) - 1)
                                                }
                                            >
                                                −
                                            </button>

                                            <input
                                                type="text"
                                                readOnly
                                                value={item.quantity}
                                                className="qty-input"
                                            />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    updateQuantity(item.id, Number(item.quantity) + 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button>Save for later</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-left-bottom">
                        <div className="cart-left-bottom-icon">
                            <img src={delivery} alt="delivery" />
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
                                <p>
                                    $
                                    {data
                                        .reduce(
                                            (sum, item) => sum + item.price * item.quantity,
                                            0
                                        )
                                        .toFixed(2)}
                                </p>
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
                                <img src={pay1} alt="visa" />
                                <img src={pay2} alt="mastercard" />
                                <img src={pay3} alt="paypal" />
                                <img src={pay4} alt="amex" />
                                <img src={pay5} alt="visa-electron" />
                            </div>
                            <p>Got a discount code? Add it in the next step.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Cart;