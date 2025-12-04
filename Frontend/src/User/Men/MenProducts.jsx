import React, { useEffect, useState } from 'react';
import './MenProducts.css';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const MenProducts = () => {

  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate()
    const [data, setData] = useState([])

    const getProducts = async () => {
        try {
            const response = await axios.get(`${URL}/product/getProduct`);
            setData(response.data);            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const handleViewProduct = () => {
        navigate(`/detail/:id`)
    }

    return (
        <>
            <Nav />
            <div className="men-item-container">
                <div className="men-items">
                    {data.map((item) => {
                    return(
                        <div
                         className="men-item-card"
                         onClick={handleViewProduct}
                         >
                        <img src={`${URL}/Uploads/${item.image}`} alt="" />
                        <p>{item.name}</p>
                        <span>${item.price}</span>
                    </div>
                    )
                })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MenProducts;
