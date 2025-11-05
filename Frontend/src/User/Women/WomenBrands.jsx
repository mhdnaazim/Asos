import React from 'react';
import '../Men/MenBrands.css';
import wso1 from '../../assets/wso1.jpg';
import wso2 from '../../assets/wso2.png';
import wso3 from '../../assets/wso3.jpg';
import wso4 from '../../assets/wso4.jpg';
import wso5 from '../../assets/wso5.jpg';
import wso6 from '../../assets/wso6.jpg';

const WomenBrands = () => {
  return (
    <>
      <div className="men-brands-container">
              <div className="men-brands">
                  <img src={wso1}/>
                  <img src={wso2}/>
                  <img src={wso3}/>
                  <img src={wso4}/>
                  <img src={wso5}/>
                  <img src={wso6}/>
              </div>
            </div>
    </>
  )
}

export default WomenBrands;
