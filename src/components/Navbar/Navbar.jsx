import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdMenu } from 'react-icons/md'

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo"> 
      <img src={images.gericht} alt="geritch-logo"/>
    </div>
    <ul className="app__navbar-links"> 
      <li classname="p__opensans"> <a href="#home">Home</a></li>
      <li classname="p__opensans"> <a href="#about">About</a></li>
      <li classname="p__opensans"> <a href="#menu">Menu</a></li>
      <li classname="p__opensans"> <a href="#award">Awards</a></li>
      <li classname="p__opensans"> <a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
