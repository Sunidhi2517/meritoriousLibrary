import React from 'react';
import {Link} from 'react-router-dom';
import "./header.css";
import logo from './assets/logo.jpeg'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='logo'></img>
     <Link to='./login'> <p >Login</p> </Link>
    </header>
  );
};



export default Header;
