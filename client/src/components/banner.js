import React from 'react';
import "./banner.css";
import banner from './assets/banner.png'
const Banner = () => {
  return (
   <div className='banner'>
  <img src={banner} alt='banner'></img>
   </div>
  );
};



export default Banner;