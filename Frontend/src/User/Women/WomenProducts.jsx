import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Men/MenProducts.css';
import WomenNav from "./WomenNav";
import Footer from "../Men/Footer";
import axios from "axios";

const WomenProducts = () => {

  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(`${URL}/women/getWomens`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts()
  }, []);

  const handleViewWomen = (id) => {
    navigate(`/womenProductDetail/${id}`);
  };

  return (
    <>

      <WomenNav />

      <div className="men-item-container">
        <div className="men-items">
          {data.map((item) => (
            <div
              key={item.id}
              className="men-item-card"
              onClick={() => handleViewWomen(item.id)}
            >
              <img
                src={`${URL}/Uploads/${item.image}`}
                alt={item.name}
              />
              <p>{item.name}</p>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <Footer />

    </>
  )
}

export default WomenProducts;