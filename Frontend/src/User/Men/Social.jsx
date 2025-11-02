import React from 'react';
import './Social.css';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import snap from '../../assets/snapchat.svg';
import pay1 from '../../assets/visa.png';
import pay2 from '../../assets/mastercard.png';
import pay3 from '../../assets/paypal.png';
import pay4 from '../../assets/amex.png';
import pay5 from '../../assets/visa-electron.png';


const Social = () => {
  return (
    <>
      <div className="social-container">
        <div className="social-left">
            <div className="social-left-logos">
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={snap}/>
            </div>
        </div>
        <hr className='social-line'/>
        <div className="social-right">
            <div className="social-right-logos">
                <img src={pay1}/>
                <img src={pay2}/>
                <img src={pay3}/>
                <img src={pay4}/>
                <img src={pay5}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Social;
