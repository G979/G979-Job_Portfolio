import React from 'react'
import './footer.css'
import {BsFacebook, BsDribbble, BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>GV979</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Experience</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>Testimonials</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.facebook.com/george.vasilakis1"><BsFacebook /></a>
        {/* <a href="https://twitter.com"><BsTwitter /></a> */}
        <a href="https://dribbble.com/gv979"><BsDribbble /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; GV979 Eqator Copyrights. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer;
