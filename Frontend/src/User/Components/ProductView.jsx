import React from 'react';
import './ProductView.css';
import Nav from '../Men/Nav';
import Footer from '../Men/Footer';
import sample from '../../assets/cl1.avif';
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
                        <h4><span>COLOR:</span> BLACK</h4>
                        <h4><span>SIZE:</span> M</h4>
                        <div className="detail-btn">
                            <button>ADD TO BAG</button>
                            <div className="fav">
                                <img src={outlineFav} alt="" />
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
