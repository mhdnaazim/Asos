import React from 'react';
import WomenNav from './WomenNav';
import WomenBanner from './WomenBanner';
import WomenParty from './WomenParty';
import WomenNew from './WomenNew';
import WomenOff from './WomenOff';
import WomenBrands from './WomenBrands';
import Social from '../Men/Social';
import Footer from '../Men/Footer';

const WomenLanding = () => {
  return (
    <>
      <WomenNav />
      <WomenBanner />
      <WomenParty />
      <WomenNew />
      <WomenOff />
      <WomenBrands />
      <Social />
      <Footer />
    </>
  )
}

export default WomenLanding;
