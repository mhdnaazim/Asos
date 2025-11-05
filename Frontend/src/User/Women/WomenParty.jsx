import React from 'react';
import '../Men/MenCollective.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import wp1 from '../../assets/wp1.avif';
import wp2 from '../../assets/wp2.avif';
import wp3 from '../../assets/wp3.avif';
import wp4 from '../../assets/wp4.avif';

const WomenParty = () => {
    const womenParty = [
        { title: "Missyempire mesh insert bardot maxi dress in black", price: "57.00", image: wp1 },
        { title: "Mango slash neck long sleeve maxi dress in brown", price: "84.00", image: wp2 },
        { title: "4th & Reckless slinky ruched wrap shoulder detail long sleeve top in white", price: "64.00", image: wp3 },
        { title: "Topshop sequin wide leg trousers in black", price: "76.00", image: wp4 }
    ]

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
    return (
        <>
            <div className="menCollective-container">
                <div className="menCollective-head">
                    <div className="menCollective-head-left">
                        <p>The party preview</p>
                    </div>
                    <div className="menCollective-head-right">
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className="menCollective-content">
                    <div className="collective-cards-container">
                        <Slider {...settings}>
                            {womenParty.map((item, index) => (
                                <div className="collective-card" key={index}>
                                    <img src={item.image} alt={item.title} />
                                    <div className="collective-card-des">
                                        <p>{item.title}</p>
                                        <h4>${item.price}</h4>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="collectives-bottom">
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WomenParty
