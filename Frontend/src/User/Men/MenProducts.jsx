import React, { useEffect, useState } from 'react';
import './MenProducts.css';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../Context/StoreContext';

const MenProducts = () => {

  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { searchTerm } = useStore();
  const [filteredData, setFilteredData] = useState([])

  const getProducts = async () => {
    try {
      const response = await axios.get(`${URL}/product/getProduct`);
      setData(response.data);
      setFilteredData(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.price.toString().includes(searchTerm)
      );
      setFilteredData(filtered)
    }
  }, [searchTerm, data])

  const handleViewProduct = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Nav />

      <div className="men-item-container">
        {searchTerm && filteredData.length === 0 ? (
          <div className="no-results">
            <p>No products found matching "{searchTerm}"</p>
          </div>
        ) : (
          <div className="men-items">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="men-item-card"
                onClick={() => handleViewProduct(item.id)}
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
        )}
      </div>

      <Footer />
    </>
  );
};

export default MenProducts;