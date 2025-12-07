import React, { useEffect, useState } from 'react';
import './ProductView.css';
import Nav from '../Men/Nav';
import Footer from '../Men/Footer';
import delivery from '../../assets/delivery.svg';
import outlineFav from '../../assets/outlineHeart.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductView = () => {
  const URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  const [data, setData] = useState({});

  const handleFetchProduct = async () => {
    try {
      const res = await axios.get(`${URL}/product/getProductDetail/${id}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);


  return (
    <>
      <Nav />

      <div className="product-detail-container">
        <div className="product-detail">

          {/* LEFT */}
          <div className="detail-left">
            <img
              src={`${URL}/Uploads/${data.image}`}
              alt={data.name}
            />
          </div>

          {/* RIGHT */}
          <div className="detail-right">
            <p>{data.name}</p>
            <h3>${data.price}</h3>

            <div className="discount-bar">
              <h5>This item is excluded from discount codes.</h5>
            </div>

            <h4>
              <span>COLOR:</span> {data.color || 'BLACK'}
            </h4>

            <h4>
              <span>SIZE:</span> {data.size || 'M'}
            </h4>

            <div className="detail-btn">
              <button>ADD TO BAG</button>
              <div className="fav">
                <img src={outlineFav} alt="wishlist" />
              </div>
            </div>

            <div className="cart-left-bottom">
              <div className="cart-left-bottom-icon">
                <img src={delivery} alt="delivery" />
              </div>
              <div className="cart-left-bottom-des">
                <p>FREE* STANDARD DELIVERY</p>
                <h4>
                  Fastest delivery options available to most countries.
                </h4>
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
