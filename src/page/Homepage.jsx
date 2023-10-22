import React from 'react';
import MyNavbar from '../component/Navbar';
import HomeContent from '../component/HomeContent';
import MyFooter from '../component/MyFooter';

const Homepage = () => {
  return (
    <div style={{ background: 'rgb(250, 250, 250)', height: 'max-content' }}>
      <MyNavbar />
      <HomeContent />
      <MyFooter />
    </div>
  );
}

export default Homepage;
