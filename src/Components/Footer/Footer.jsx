import React from 'react'
import './Footer.css'
import logo from '../../assets/gericht.png'
import { FiFacebook } from 'react-icons/fi'
import { BsTwitterX } from 'react-icons/bs'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'


const Footer = () => {

  const footerLinks = [
    {
      title: " Company Information",
      links: [
        {
          name: "About Us",
          link: "/about",
        },
        {
          name: "Our Vision",
          link: "# ",
        },
        {
          name: "Certifications ",
          link: " #",
        },
        {
          name: "Sustainability ",
          link: "# ",
        },
      ],
    },
    {
      title: "Legal & Policies",
      links: [
        {
          name: "Privacy Policy",
          link: "#",
        },
        {
          name: "Terms and Conditions",
          link: "#",
        },
        {
          name: "Cookie Policy",
          link: " #",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          name: "Blog",
          link: "/blog",
        },
        {
          name: "Grade Types",
          link: "#",
        },
      ],
    },
  ]

  return (

    <footer className='Quality__footer'>
      <div className='Quality__footer-information'>
        <div  className='Quality__footer-logo-information' >
          <img src="#" alt="Logo" className='Quality__footer-logo' />
          <p className='Quality__footer-logo-vision'> Leading exporter of premium processed cashews. Based in Drobo, Bono Region, we are committed to ethical sourcing, sustainability, and quality.</p>
        </div>
    
      <div className='Quality__footer-links'>
        {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className='Quality__footer-links-content'>
              <h4 className='Quality__footer-links-title'>{footerLink.title}</h4>
              <ul className='Quality__footer-links-list' >
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className='Quality__footer-links-list-name' >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='Quality__footer-copyright-container'>
        <p className='Quality__footer-copyright'>
           <span style={{ marginRight: '16px' }}> Copyright &copy;</span>{new Date().getFullYear()} Quality Food Distributors Ghana Ltd. All rights reserved.
        </p>
        <div className='Quality__footer-socialmedia-container'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FiFacebook style={{ width: '21px', height: '21px', cursor: 'pointer', marginRight: '1.5rem' }}/>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <BsTwitterX style={{ width: '21px', height: '21px', cursor: 'pointer', marginRight: '1.5rem' }}/>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin style={{ width: '21px', height: '21px', cursor: 'pointer', marginRight: '1.5rem' }} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram  style={{ width: '21px', height: '21px', cursor: 'pointer' }}/>
            </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
