import React from 'react';
import "./buttons.css";
import { Link } from 'react-router-dom';

const Buttons = () => {
  return (
   <div className='buttons'>
   <Link to='./booking' > <button>Book your Cabin</button> </Link>
   <Link to='./query' > <button>Ask your Query</button></Link>
   </div>
  );
};



export default Buttons;
