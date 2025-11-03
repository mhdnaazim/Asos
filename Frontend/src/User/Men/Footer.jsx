import React from 'react';
import './Footer.css';
import india from '../../assets/in.png';
import spain from '../../assets/es.png';
import germany from '../../assets/de.png'
import aus from '../../assets/au.png'
import france from '../../assets/fr.png'
import denmark from '../../assets/dk.png'
import italy from '../../assets/it.png'
import netherlands from '../../assets/nl.png'
import poland from '../../assets/pl.png'
import us from '../../assets/us.png'
import swedan from '../../assets/se.png'

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-container">
            <div className="footer-section">
              <p>HELP & INFORMATION</p>
              <ul>
                <li>Help</li>
                <li>Track order</li>
                <li>Delivery & returns</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div className="footer-section">
              <p>ABOUT ASOS</p>
              <ul>
                <li>About us</li>
                <li>Careers at ASOS</li>
                <li>Corporate responsibility</li>
                <li>Investor's site</li>
              </ul>
            </div>
            <div className="footer-section">
              <p>MORE FROM ASOS</p>
              <ul>
                <li>Mobile and ASOS apps</li>
                <li>Gift vouchers</li>
                <li>Black Friday</li>
                <li>ASOS x Thrift+</li>
              </ul>
            </div>
            <div className="footer-countries">
              <p>SHOPPING FROM:</p>
              <h5>You're in <img src={india} /> <hr /> <span>CHANGE</span></h5>
              <h5>Some of our International sites:</h5>
              <div className="country-images">
                <img src={spain} />
                <img src={germany} />
                <img src={aus} />
                <img src={france} />
                <img src={denmark} />
                <img src={italy} />
                <img src={netherlands} />
                <img src={poland} />
                <img src={us} />
                <img src={swedan} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <div className="footer-bottom-container-left">
              <p>© 2025 ASOS</p>
            </div>
            <div className="footer-bottom-container-right">
              <p>Privacy & Cookies</p>
              <hr />
              <p>Ts&Cs</p>
              <hr />
              <p>Accessibility</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
