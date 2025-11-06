import React from 'react';
import './MenBanner.css'
import { useStore } from '../../Context/StoreContext';

const MenBanner = () => {
      const { showSale, setShowSale } = useStore()
  return (
    <>
      <div className={`men-banner ${showSale ? "blurred" : ""}`}></div>
    </>
  )
}

export default MenBanner
