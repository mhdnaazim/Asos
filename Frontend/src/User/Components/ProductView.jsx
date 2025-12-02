import React from 'react';
import './ProductView.css';
import Nav from '../Men/Nav';
import Footer from '../Men/Footer';
import sample from '../../assets/cl1.avif';
import delivery from '../../assets/delivery.svg';
import outlineFav from '../../assets/outlineHeart.png';
import filledFav from '../../assets/filledHeart.png';

const ProductView = () => {
    return (
        <>
            <Nav />
            <div className="product-detail-container">
                <div className="product-detail">
                    <div className="detail-left">
                        <img src={sample} alt="" />
                    </div>
                    <div className="detail-right">
                        <p>Abercrombie & Fitch cropped wool blend jacquard jacket in black</p>
                        <h3>$222.00</h3>
                        <div className="discount-bar">
                            <h5>This item is excluded from discount codes.</h5>
                        </div>
                        <h4><span>COLOR:</span> BLACK</h4>
                        <h4><span>SIZE:</span> M</h4>
                        <div className="detail-btn">
                            <button>ADD TO BAG</button>
                            <div className="fav">
                                <img src={outlineFav} alt="" />
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
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductView;
