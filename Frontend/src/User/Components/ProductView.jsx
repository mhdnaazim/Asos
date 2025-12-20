import React, { useEffect, useState } from 'react';
import './ProductView.css';
import Nav from '../Men/Nav';
import Footer from '../Men/Footer';
import delivery from '../../assets/delivery.svg';
import outlineFav from '../../assets/outlineHeart.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useStore } from '../../Context/StoreContext';

const ProductView = () => {
  const URL = import.meta.env.VITE_API_URL;
  const { handleFetchCartCount } = useStore();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isAdded, setIsAdded] = useState(false);
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const handleFetchProduct = async () => {
    try {
      const res = await axios.get(`${URL}/product/getProductDetail/${id}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);

  const handleAddtoCart = async () => {
    try {
      await axios.post(`${URL}/cart/addToCart`, {
        name: data.name,
        userid: loggedUser.userid,
        image: data.image,
        price: data.price,
        color: data.color,
        size: data.size,
        quantity: 1
      });
      handleFetchCartCount();
      setIsAdded(true)

    } catch (error) {
      console.log(error);
    };
  };

  const handleCheckCart = async () => {
    try {
      const res = await axios.get(`${URL}/cart/getCart`);

      const alreadyAdded = res.data.some(
        (item) => item.name === data.name
        // OR use item.productId === id (BEST PRACTICE)

      );

      if (alreadyAdded) {
        setIsAdded(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data.name) {
      handleCheckCart();
    }
  }, [data]);

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
              <button
                onClick={handleAddtoCart}
                disabled={isAdded}
                className={isAdded ? 'added' : ''}
              >
                {isAdded ? 'ADDED' : 'ADD TO BAG'}
              </button>
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
