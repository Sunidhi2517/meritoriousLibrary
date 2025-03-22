import React from 'react';
import "./contact.css";
import { Link } from 'react-router-dom';





const Contact = () => {
  return (
   <div className='contact'>
     
<h4>Contact:</h4>
<button className="card">91933 00055</button> 
<h4>email:</h4>
<button className="card">
<Link onClick={() => window.location = 'mailto:meritoriouslibrary@gmail.com'}>

  meritoriouslibrary@gmail.com
  </Link>

  </button> 
<h4>location:</h4>
<button className="card">Opposite Dr. Ashok Hospital, Near Madanjit Kothi, Sangrur-148001(Pb.)</button>


   
   </div>
  );
};



export default Contact;
