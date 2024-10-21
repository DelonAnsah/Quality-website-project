import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLine } from 'react-icons/ri'
import {  FaArrowRight } from 'react-icons/fa'


const Navlinks = ({ closeMenu }) => (
  <>
    <li onClick={closeMenu}><Link to="/home">Home</Link></li>
    <li onClick={closeMenu}><Link to="/about">About Us</Link></li>
    <li onClick={closeMenu}><Link to="/products">Products</Link></li>
    <li onClick={closeMenu}><Link to="/services">Services</Link></li>
    <li onClick={closeMenu}><Link to="/blog">Blog</Link></li>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleCloseMenu = () => {
    setToggleMenu(false);
  }

  return (
    <div className='Quality__navbar component__padding'>
      <div className="Quality__navbar-logo">
        <img src="" alt="Logo" loading='lazy' />
      </div>
      <ul className="Quality__navbar-links">
      <Navlinks />
      <button className='Navbar-btn'>Contact Us  <FaArrowRight className='navbar-iconright'  /></button>
      </ul>
     
     
      <div className="Quality__navbar-small-screen">
        <GiHamburgerMenu 
        color=' #000' 
        fontSize={27} 
        onClick={() => setToggleMenu(true) } 
        />

        {toggleMenu && (
          <div className='Quality__navbar-smallscreen_overlay flex__center slide-bottom'>
          <RiCloseLine 
          fontSize={27}
          className='overlay__close' 
          onClick={handleCloseMenu}
          />
          <ul className="Quality__navbar-smallscreen_links">
            <Navlinks closeMenu={handleCloseMenu} />
            <button  className='Navbar-btn'  style={{ marginBottom: '1rem' }}>Contact Us   <FaArrowRight className='navbar-iconright'  /></button>
          </ul>
        </div>
        )}
         
      </div> 
    </div>
  )
}

export default Navbar
