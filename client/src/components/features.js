import React from 'react';
import "./features.css";
import locker from './assets/locker.jpeg'
import dining from './assets/dining.jpeg'
import wifi from './assets/wifi.jpeg'
import ac from './assets/ac.jpeg'
import cabin from './assets/cabin.jpeg'
import camera from './assets/camera.jpeg'





const Features = () => {
  return (
   <div className='features'>
    <h3>exciting features</h3>
    <span>what we provide</span>
    <div className='features-flex'>
   <div className='card'>
    <p>Craving peace for your study time? Our<b> private cabins</b> provide a calm, silent escape.</p>
    <img src={cabin} alt='feature'></img>
   </div>
   <div className='card'>
   <img src={locker} alt='feature'></img>
    <p>Stay organized and worry-free with your own <b>personal locker </b>for all your essentials.</p>
    </div>

    <div className='card'>
    <p>Chill out in style with our <b>fully air-conditioned </b>study spaces, designed for ultimate comfort.</p>
    <img src={ac} alt='feature'></img>
   </div>

   <div className='card'>
   <img src={wifi} alt='feature' id='wifi' ></img>
    <p>Never worry about a lost connection or power failure — our <b>Wi-Fi and power backup systems </b>have you covered.</p>
   </div>

   <div className='card'>
    <p><b>24/7 Surveillance:</b>Our advanced CCTV cameras ensure round-the-clock security for your safety.</p>
    <img src={camera} alt='feature'></img>
   </div>
   <div className='card'>
    <img src={dining} alt='feature'></img>
    <p>When hunger strikes, our<b> dining room </b>is the place to refuel and relax between study sessions.</p>

   </div>
  

   </div>
   </div>
  );
};



export default Features;
