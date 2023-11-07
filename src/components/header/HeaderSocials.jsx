import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/G979' target="_blank"><BsGithub /></a>
        <a href='https://www.facebook.com/george.vasilakis1' target="_blank"> <BsFacebook /></a>
        <a href='https://instagram.com' target="_blank"> <BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials