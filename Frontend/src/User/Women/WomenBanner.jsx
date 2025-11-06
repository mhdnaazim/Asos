import React from 'react';
import './WomenBanner.css';

const WomenBanner = () => {
  return (
    <>
      <div className={`men-banner ${showSale ? "blurred" : ""}`}></div>
    </>
  )
}

export default WomenBanner
