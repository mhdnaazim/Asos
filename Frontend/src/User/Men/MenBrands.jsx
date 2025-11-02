import React from 'react';
import './MenBrands.css';
import mb1 from '../../assets/mb1.png';
import mb2 from '../../assets/mb2.jpg';
import mb3 from '../../assets/mb3.jpg';
import mb4 from '../../assets/mb4.png';
import mb5 from '../../assets/mb5.png';
import mb6 from '../../assets/mb6.png';

const MenBrands = () => {
  return (
    <>
      <div className="men-brands-container">
        <div className="men-brands">
            <img src={mb1}/>
            <img src={mb2}/>
            <img src={mb3}/>
            <img src={mb4}/>
            <img src={mb5}/>
            <img src={mb6}/>
        </div>
      </div>
    </>
  )
}

export default MenBrands
