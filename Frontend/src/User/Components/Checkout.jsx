import React, { useEffect, useState } from "react";
import './Checkout.css';
import logo from '../../assets/Logo.svg';
import { useNavigate } from "react-router-dom";

import axios from "axios";
import card from '../../assets/credit-card.png';
import cod from '../../assets/cash-on-delivery.png';
import paypal from '../../assets/paypal.png';
import visa from '../../assets/visa.png';
import master from '../../assets/mastercard.png';

const Checkout = () => {
    const URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
    const storedUser = JSON.parse(localStorage.getItem("loggedUser"));

    const [showform, setShowForm] = useState(false);
    const [addressData, setAddressData] = useState([]);
    const [otherAddress, setOtherAddress] = useState(false)
    const [cartData, setCartData] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [paymentMode, setPaymentMode] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        district: "",
        state: "",
        pin: "",
        country: "",
        contact: ""
    });


    const getAddresses = async () => {
        try {
            const res = await axios.get(`${URL}/address/getAddress`);
            setAddressData(res.data);
            if (res.data.length > 0) {
                setSelectedAddress(res.data[0].id);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getCart = async () => {
        try {
            const res = await axios.get(`${URL}/cart/getCart`);
            const cartItems = res.data.map((item) => ({
                ...item,
                quantity: Number(item.quantity),
            }));
            setCartData(cartItems);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAddresses();
        getCart();
    }, []);

    const handleAddAddress = async () => {
        if (!formData.name || !formData.address || !formData.district || !formData.state || !formData.pin || !formData.country || !formData.contact) {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await axios.post(`${URL}/address/addAddress`, formData);
            if (response.status === 200) {
                setFormData({
                    name: "",
                    address: "",
                    district: "",
                    state: "",
                    pin: "",
                    country: "",
                    contact: ""
                });
                setShowForm(false);
                getAddresses();
            }
        } catch (error) {
            console.log(error);
            alert("Failed to add address");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const deleteAddress = async (id) => {
        try {
            await axios.delete(`${URL}/address/deleteAddress/${id}`);
            getAddresses();
            if (selectedAddress === id) {
                setSelectedAddress(null);
            }
        } catch (error) {
            console.log(error);
            alert("Failed to delete address");
        }
    };

    const calculateSubTotal = () => {
        return cartData
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toFixed(2);
    };

    const selectedAddressData = addressData.find((addr) => addr.id === selectedAddress);

    return (
        <>
            <div className="checkout">
                <div className="checkout-nav">
                    <img src={logo} alt="logo" />
                    <p>CHECKOUT</p>
                </div>

                <div className="checkout-container">
                    <div className="checkout-left">
                        <div className="delivery">
                            <div className="delivery-top">
                                <p>DELIVERY ADDRESS</p>
                                <button onClick={() => setShowForm(!showform)}>
                                    {showform ? "CANCEL" : "Add New Address"}
                                </button>
                            </div>

                            <div className="user-email">
                                <p>Email: <span>{storedUser?.email || "Not provided"}</span></p>
                            </div>

                            {showform && (
                                <div className="add-address-form">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        onChange={handleChange}
                                        value={formData.name}
                                    />
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        onChange={handleChange}
                                        value={formData.address}
                                    />
                                    <input
                                        type="text"
                                        name="district"
                                        placeholder="District"
                                        onChange={handleChange}
                                        value={formData.district}
                                    />
                                    <input
                                        type="text"
                                        name="state"
                                        placeholder="State"
                                        onChange={handleChange}
                                        value={formData.state}
                                    />
                                    <input
                                        type="text"
                                        name="pin"
                                        placeholder="Pin Code"
                                        onChange={handleChange}
                                        value={formData.pin}
                                    />
                                    <input
                                        type="text"
                                        name="country"
                                        placeholder="Country"
                                        onChange={handleChange}
                                        value={formData.country}
                                    />
                                    <input
                                        type="text"
                                        name="contact"
                                        placeholder="Contact Number"
                                        onChange={handleChange}
                                        value={formData.contact}
                                    />

                                    <div className="address-form-btm">
                                        <button className="save-btn" onClick={handleAddAddress}>
                                            SAVE ADDRESS
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className="address-section">
                                {addressData.length === 0 ? (
                                    <div className="no-address">
                                        <p>No Saved Address</p>
                                        <button onClick={() => setShowForm(true)}>ADD ADDRESS</button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="selected-address-display">
                                            {selectedAddressData && (
                                                <div className="primary-address">
                                                    <h3>Primary Address</h3>
                                                    <div className="address-details">
                                                        <p><strong>{selectedAddressData.name}</strong></p>
                                                        <p>{selectedAddressData.address}</p>
                                                        <p>{selectedAddressData.district}, {selectedAddressData.state}</p>
                                                        <p>{selectedAddressData.pin}, {selectedAddressData.country}</p>
                                                        <p>Contact: {selectedAddressData.contact}</p>
                                                    </div>
                                                    <button className="change-address-btn" onClick={() => setOtherAddress(true)}>
                                                        CHANGE ADDRESS
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        {otherAddress && (
                                            <>
                                                <div className="other-addresses">
                                                    <h4>Other Addresses</h4>
                                                    {addressData.map((item) => (
                                                        <div className="address-container" key={item.id}>
                                                            <div className="address-info">
                                                                <span>{item.name}</span>
                                                                <p>{item.address}</p>
                                                                <p>{item.district}, {item.state}</p>
                                                                <p>{item.pin}, {item.country}</p>
                                                                <p>Contact: {item.contact}</p>
                                                            </div>

                                                            <div className="address-container-btns">
                                                                <button className="select-btn" onClick={() => setSelectedAddress(item.id)} >
                                                                    SELECT
                                                                </button>
                                                                <button className="delete-btn" onClick={() => deleteAddress(item.id)} >
                                                                    DELETE
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="payment-type">
                            <div className="payment-type-top">
                                <h2>PAYMENT TYPE</h2>
                            </div>
                            <div className={`payment-mode ${paymentMode === "CARD" ? "active" : ""}`}
                                onClick={() => setPaymentMode("CARD")}
                            >
                                <img src={card} />
                                <h3>CREDIT CARD OR DEBIT CARD</h3>
                            </div>
                            <p>OR</p>
                            <div className={`payment-mode ${paymentMode === "PAYPAL" ? "active" : ""}`}
                                onClick={() => setPaymentMode("PAYPAL")}
                            >
                                <img src={paypal} />
                                <h3>PAYPAL OR UPI</h3>
                            </div>
                            <p>OR</p>
                            <div className={`payment-mode ${paymentMode === "COD" ? "active" : ""}`}
                                onClick={() => setPaymentMode("COD")}
                            >
                                <img src={cod} />
                                <h3>CASH ON DELIVERY</h3>
                            </div>
                        </div>

                        <div className="order-confirm-policy">
                            <p>By placing your order you agree to our <span>Terms & Conditions</span>, <span>privacy</span> and <span>returns policies</span> . You also consent to some of your data being stored by ASOS, which may be used to make future shopping experiences better for you.</p>
                        </div>
                    </div>

                    <div className="checkout-right">
                        <div className="order-summary">
                            <h3>ORDER SUMMARY</h3>

                            <div className="cart-items-checkout">
                                {cartData.length === 0 ? (
                                    <p className="empty-cart">Your cart is empty</p>
                                ) : (
                                    cartData.map((item) => (
                                        <div className="checkout-item" key={item.id}>
                                            <div className="item-image">
                                                <img
                                                    src={`${URL}/Uploads/${item.image}`}
                                                    alt={item.name}
                                                />
                                            </div>
                                            <div className="item-details">
                                                <p className="item-name">{item.name}</p>
                                                <p className="item-specs">
                                                    {item.color} | {item.size}
                                                </p>
                                                <p className="item-qty">Qty: {item.quantity}</p>
                                            </div>
                                            <div className="item-price">
                                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="checkout-summary">
                                <div className="summary-row">
                                    <span>Sub-Total</span>
                                    <span>${calculateSubTotal()}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Delivery</span>
                                    <span>FREE</span>
                                </div>
                                <div className="summary-row total">
                                    <span>TOTAL</span>
                                    <span>${calculateSubTotal()}</span>
                                </div>
                            </div>

                            <button className="place-order-btn" disabled={!selectedAddress || cartData.length === 0}>
                                PLACE ORDER
                            </button>
                        </div>
                    </div>
                </div>

                <div className="checkout-footer">
                    <p>ASOS Help</p>
                </div>
            </div>
        </>
    );
};

export default Checkout;