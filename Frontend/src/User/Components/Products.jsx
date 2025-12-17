import React, { useEffect, useState } from 'react';
import './Products.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../Context/StoreContext';
import Nav from '../Men/Nav';
import Footer from '../Men/Footer';

const Products = () => {

  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { searchTerm } = useStore();
  const [filteredData, setFilteredData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(`${URL}/product/getProduct`);
      setData(response.data);
      setFilteredData(response.data);
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
      setFilteredData(filtered);
    }
  }, [searchTerm, data]);

  const handleViewProduct = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Nav />

      <div className="search-results-container">
        <div className="search-results-header">
          <h1>Search Results</h1>
          {searchTerm && <p>Results for: <span>"{searchTerm}"</span></p>}
          <p className="result-count">{filteredData.length} products found</p>
        </div>

        <div className="search-results-content">
          {filteredData.length === 0 ? (
            <div className="no-results">
              <p>No products found matching "{searchTerm}"</p>
              <button onClick={() => navigate("/")}>Back to Home</button>
            </div>
          ) : (
            <div className="search-items-grid">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="search-item-card"
                  onClick={() => handleViewProduct(item.id)}
                >
                  <div className="search-item-image">
                    <img
                      src={`${URL}/Uploads/${item.image}`}
                      alt={item.name}
                    />
                  </div>
                  <div className="search-item-details">
                    <p className="search-item-name">{item.name}</p>
                    <span className="search-item-price">${item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;