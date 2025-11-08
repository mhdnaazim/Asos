import React from 'react';
import './WomenBanner.css';
import { useStore } from '../../Context/StoreContext';

const WomenBanner = () => {
        const { showSale, setShowSale } = useStore()
  
  return (
    <>
      <div className={`women-banner ${showSale ? "blurred" : ""}`}></div>
    </>
  )
}

export default WomenBanner;
