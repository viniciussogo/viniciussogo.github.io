import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.logo} alt='app logo'/>
    </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About Me</a></li>
        <li className='p__opensans'><a href='#projects'>Projects</a></li>
        <li className='p__opensans'><a href='#myworld'>My World</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
  </nav>
);

export default Navbar;
