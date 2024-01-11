import React from 'react';
import Footer from '../footer/Footer';
import Slider from '../slider/Slider';
import Header from '../header/Header';
import HomeCover from '../home_cover/HomeCover';

// Home component displaying the main sections of the homepage
const Home = () => {
  return (
    <div>
      {/* Header section */}
      <Header />

      {/* Main cover section */}
      <HomeCover />

      {/* Slider section */}
      <Slider />

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default Home;
