import React, { useEffect, useState } from 'react';
import './MenBestSellers.css';
import './MenCollective.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MenBestSellers = () => {

    const URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
    const [bestSellers, setBestSellers] = useState([]);

    const getProduct = async () => {
        try {
            const res = await axios.get(`${URL}/product/getProduct`);
            setBestSellers(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct();
    }, []);

    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow prev-arrow" onClick={onClick}>
            <span>&#10094;</span>
        </div>
    );

    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow next-arrow" onClick={onClick}>
            <span>&#10095;</span>
        </div>
    );

    const settings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 2500,
        cssEase: "ease-in-out",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    const handleViewProduct = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <>
            <div className="men-sellers-container">
                <div className="menCollective-head">
                    <div className="menCollective-head-left">
                        <p>Best Sellers</p>
                    </div>
                    <div className="menCollective-head-right">
                        <button onClick={() => navigate("/menProducts")}>
                            SHOP NOW
                        </button>
                    </div>
                </div>
                <div className="menCollective-content">
                    <div className="collective-cards-container">
                        <Slider {...settings}>
                            {bestSellers.length > 0 ? (
                                bestSellers.map((item) => (
                                    <div 
                                        className="collective-card" 
                                        key={item.id}
                                        onClick={() => handleViewProduct(item.id)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img 
                                            src={`${URL}/Uploads/${item.image}`} 
                                            alt={item.name} 
                                        />
                                        <div className="collective-card-des">
                                            <p>{item.name}</p>
                                            <h4>${item.price}</h4>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="loading">
                                    <p>Loading products...</p>
                                </div>
                            )}
                        </Slider>
                    </div>
                    <div className="collectives-bottom">
                        <button onClick={() => navigate("/menProducts")}>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenBestSellers;