import React from 'react';
import Slider from "react-slick";
import './MenCollective.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cl1 from '../../assets/cl1.avif';
import cl2 from '../../assets/cl2.avif';
import cl3 from '../../assets/cl3.avif';
import cl4 from '../../assets/cl4.avif';
import cl5 from '../../assets/cl5.avif';
import cl6 from '../../assets/cl6.avif';
import cl7 from '../../assets/cl7.avif';
import cl8 from '../../assets/cl8.avif';
import cl9 from '../../assets/cl9.avif';
import cl10 from '../../assets/cl10.avif';
import cl11 from '../../assets/cl11.avif';
import cl12 from '../../assets/cl12.avif';
import cl13 from '../../assets/cl13.avif';
import cl14 from '../../assets/cl14.avif';
import cl15 from '../../assets/cl15.avif';
import cl16 from '../../assets/cl16.avif';

const MenCollective = () => {
    const collectives = [
        { title: "ASOS COLLECTIVE wool blend overcoat in grey", price: "250.00", image: cl1 },
        { title: "ASOS COLLECTIVE relaxed chunky cord shirt co-ord in black", price: "76.00", image: cl2 },
        { title: "ASOS COLLECTIVE AC-T-2572 signature fit super heavyweight hoodie in pale khaki", price: "100.00", image: cl3 },
        { title: "ASOS COLLECTIVE oversized knitted wool jumper in ecru", price: "100.00", image: cl4 },
        { title: "ASOS COLLECTIVE wool blend overcoat in black", price: "250.00", image: cl5 },
        { title: "ASOS COLLECTIVE check overshirt in brown", price: "84.00", image: cl6 },
        { title: "ASOS COLLECTIVE knitted balloon jogger co-ord in charcoal", price: "76.00", image: cl7 },
        { title: "ASOS COLLECTIVE quilted shacket with wool in brown", price: "125.00", image: cl8 },
        { title: "ASOS COLLECTIVE nylon shacket co-ord in pale khaki", price: "100.00", image: cl9 },
        { title: "ASOS COLLECTIVE ACT-T-2573 signature fit super heavyweight scuba style fabric", price: "109.00", image: cl10 },
        { title: "ASOS COLLECTIVE oversized knitted wool and mohair mix jumper in brown", price: "125.00", image: cl11 },
        { title: "ASOS COLLECTIVE nylon shacket co-ord in black", price: "100.00", image: cl12 },
        { title: "ASOS COLLECTIVE AC-B-254 tapered barrel trouser in black", price: "76.00", image: cl13 },
        { title: "ASOS COLLECTIVE AC-B-2571 signature cuffed super heavyweight jogger", price: "92.00", image: cl14 },
        { title: "ASOS COLLECTIVE AC-T-251 signature fit long sleeve t-shirt in white", price: "43.00", image: cl15 },
        { title: "ASOS COLLECTIVE relaxed compact knit half polo co-ord in navy", price: "84.00", image: cl16 }
    ];

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
        <div className="menCollective-container">
            <div className="menCollective-head">
                <div className="menCollective-head-left">
                    <p>ASOS Collective</p>
                </div>
                <div className="menCollective-head-right">
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className="menCollective-content">
                <div className="collective-cards-container">
                    <Slider {...settings}>
                        {collectives.map((item, index) => (
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
    );
}

export default MenCollective;
