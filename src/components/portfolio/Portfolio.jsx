import React from 'react'
import './portfolio.css'
import CH from '../../assets/CH.png'
import HP from '../../assets/HP.png'
import EUD from '../../assets/eydoxos.JPG'
import BMI from '../../assets/bmi1.JPG'
import REF from '../../assets/Refunds.png'
import SER from '../../assets/Servicer1.JPG'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Most Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={CH} alt='' id="ch" />
          </div>
          <h3>Chain-Health v2.0.1</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/G979/Chain-Health_v2.0.1" className='btn first'>Github</a>
            <a href="https://dribbble.com/shots/21756164-Chain-Health-v2-0-1" className='btn btn-primary second'>Mini Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={HP} alt='' id='hp' />
          </div>
          <h3>Health-Petition v1.0.2</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/G979/Health-Petition-1.0.3" className='btn first'>Github</a>
            <a href="https://dribbble.com/shots/21756510-Health-Petition-v1-0-2" className='btn btn-primary second'>Mini Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={EUD} alt='' id='eu' />
          </div>
          <h3>Eudoxus Portal Screen</h3>
          {/* <div className="portfolio__item-cta">
            <a href="" className='btn'>Github Repository - Not Available</a>
            <a href="" className='btn btn btn-primary'>Portfolio Shots - Not Available</a>
          </div> */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={REF} alt='' id='re' />
          </div>
          <h3>EC Refunds Panel</h3>
          {/* <div className="portfolio__item-cta">
            <a href="" className='btn'>Github Repository - Not Available</a>
            <a href="" className='btn btn btn-primary'>Portfolio Shots - Not Available</a>
          </div> */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={SER} alt='' id='ser' />
          </div>
          <h3>EC Servicer Panel</h3>
          {/* <div className="portfolio__item-cta">
            <a href="" className='btn'>Github Repository - Not Available</a>
            <a href="" className='btn btn btn-primary'>Portfolio Shots - Not Available</a>
          </div> */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={BMI} alt='' id="bmi" />
          </div>
          <h3>BMI Calculator</h3>
          {/* <div className="portfolio__item-cta">
            <a href="" className='btn'>Github Repository - Not Available</a>
            <a href="https://dribbble.com/shots/21759517-BMI-Calculator" className='btn btn btn-primary'>Portfolio Shots</a>
          </div> */}
        </article>

      </div>
    </section>
  )
}

export default Portfolio;
