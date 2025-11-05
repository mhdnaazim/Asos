import React from 'react';
import '../Men/MenBestSellers.css';
import '../Men/MenCollective.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ws1 from '../../assets/ws1.avif';
import ws2 from '../../assets/ws2.avif';
import ws3 from '../../assets/ws3.avif';
import ws4 from '../../assets/ws4.avif';
import ws5 from '../../assets/ws5.avif';
import ws6 from '../../assets/ws6.avif';
import ws7 from '../../assets/ws7.avif';
import ws8 from '../../assets/ws8.avif';
import ws9 from '../../assets/ws9.avif';
import ws10 from '../../assets/ws10.avif';
import ws11 from '../../assets/ws11.avif';
import ws12 from '../../assets/ws12.avif';

const WomenOff = () => {

    const womenSale = [
        {title: "Sister Jane diamonte button jacquired mini dress in red", oldPrice: "131.00", price: "98.00", image: ws1},
        {title: "adidas Originals essentials oversized hoodie in sage green", oldPrice: "70.00", price: "59.00", image: ws2},
        {title: "adidas Originals Premium Essentials jeans", oldPrice: "142.00", price: "106.00", image: ws3},
        {title: "adidas Originals Handball trainers in maroon and cream with gum sole", oldPrice: "142.00", price: "120.00", image: ws4},
        {title: "adidas Originals Firebird track top brown", oldPrice: "102.64", price: "82.11", image: ws5},
        {title: "New look slouch shoulder bag in burgundy", oldPrice: "45.78", price: "34.74", image: ws6},
        {title: "adidas Originals Firebird loose track top in black and red", oldPrice: "110.54", price: "93.96", image: ws7},
        {title: "Topshop elasticated waist poplin full midi skirt in green and yellow stripe", oldPrice: "60.01", price: "45.00", image: ws8},
        {title: "Liquor N Pocker oversized denim biker jacket co-ord panel in multi", oldPrice: "70.96", price: "55.27", image: ws9},
        {title: "adidas Originals denim track top in blue", oldPrice: "142.12", price: "120.80", image: ws10},
        {title: "Weekday oversized puffer coat in black", oldPrice: "14.44", price: "134.22", image: ws11},
        {title: "Topshop contrast suede varsity bomber jacket in multi", oldPrice: "116.85", price: "82.11", image: ws12}
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
      <div className="men-sellers-container">
                <div className="men-sellers-head"></div>
                <div className="menCollective-content">
                    <div className="collective-cards-container">
                        <Slider {...settings}>
                            {womenSale.map((item) => {
                                return (
                                    <div className="collective-card">
                                        <img src={item.image} />
                                        <div className="collective-card-des">
                                            <p>{item.title}</p>
                                            <h3> <span>${item.oldPrice}</span> ${item.price} </h3>
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

export default WomenOff
