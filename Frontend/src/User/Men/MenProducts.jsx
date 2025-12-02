import React, { useEffect, useState } from 'react';
import './MenProducts.css';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';


const MenProducts = () => {

  const URL = import.meta.env.VITE_API_URL;
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

    return (
        <>
            <Nav />
            <div className="men-item-container">
                <div className="men-items">
                    {data.map((item) => {
                    return(
                        <div className="men-item-card">
                        <img src={item.image} alt="" />
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
