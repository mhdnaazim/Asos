import React from 'react';
import './MenBestSellers.css';
import './MenCollective.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import mbs1 from '../../assets/mbs1.avif'
import mbs2 from '../../assets/mbs2.avif'
import mbs3 from '../../assets/mbs3.avif'
import mbs4 from '../../assets/mbs4.avif'
import mbs5 from '../../assets/mbs5.avif'
import mbs6 from '../../assets/mbs6.avif'
import mbs7 from '../../assets/mbs7.avif'
import mbs8 from '../../assets/mbs8.avif'
import mbs9 from '../../assets/mbs9.avif'
import mbs10 from '../../assets/mbs10.avif'
import mbs11 from '../../assets/mbs11.avif'
import mbs12 from '../../assets/mbs12.avif'


const MenBestSellers = () => {

    const bestSellers = [
        { title: "Levi's Workwear Capsule reversible check borg and denim shacket in light wash", price: "206.00", image: mbs1 },
        { title: "Levi's tonal logo borg hoodie in mid blue", price: "95.00", image: mbs2 },
        { title: "Levi's tonal logo borg hoodie in black", price: "95.00", image: mbs3 },
        { title: "Levi's original batwing logo french terry crew sweatshirt", price: "87.00", image: mbs4 },
        { title: "Levi's 555 '96 relaxed straight jeans in indigo wash", price: "117.00", image: mbs5 },
        { title: "Levi's 511 slim jeans in dark wash", price: "143.00", image: mbs6 },
        { title: "adidas Original track top in denim", price: "135.00", image: mbs7 },
        { title: "ASOS COLLECTIVE AC-T-2572 signature fit super heavyweight hoodie in pale khaki", price: "100.00", image: mbs8 },
        { title: "The North Face Retro Nuptse puffer jacket", price: "498.00", image: mbs9 },
        { title: "Jack & Jones oversized thick ribbed jumper", price: "51.00", image: mbs10 },
        { title: "ASOS COLLECTIVE check overshirt in brown", price: "84.00", image: mbs11 },
        { title: "The North Face Sangro jacket in black", price: "242.00", image: mbs12 }
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
        <>
            <div className="men-sellers-container">
                <div className="men-sellers-head"></div>
                <div className="menCollective-content">
                    <div className="collective-cards-container">
                        <Slider {...settings}>
                            {bestSellers.map((item) => {
                                return (
                                    <div className="collective-card">
                                        <img src={item.image} />
                                        <div className="collective-card-des">
                                            <p>{item.title}</p>
                                            <h4>${item.price}</h4>
                                        </div>
                                    </div>
                                )
                            })}
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

export default MenBestSellers;
