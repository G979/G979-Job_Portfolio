import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import MEOW from '../../assets/meow.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hi! My name is,</h5>
        <h5>What? My name is</h5>
        <h5>Who? My name is</h5>
        <h1>George Vasilakis</h1>
        <h5 className='text-light'>Front End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={MEOW} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;
