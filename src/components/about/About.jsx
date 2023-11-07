import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import MEOW from '../../assets/meow2.jpeg'
import {BiNetworkChart} from 'react-icons/bi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {BsCode} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
      <h5> Get to Know me betta </h5>
      <h2> About me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={MEOW} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards"> 
            <article className="about__card">
                <BiNetworkChart className="about__icon" />
                <h5>Experience</h5>
                <small>3 Years Working</small>
            </article>

            <article className="about__card">
              <BsFillPersonLinesFill className="about__icon" />
              <h5>Clients</h5>
              <small>4 </small>
            </article>

            <article className="about__card">
              <BsCode className="about__icon" />
              <h5>Projects</h5>
              <small>5 </small>
            </article>
          </div>

            <p>
              A dedicated front end developer with just 3 years of experience in helping companies develop user-friendly web applications at, mostly, Angular and React.
              Seeking to apply my expertise in larger-scale projects, solving more complex problems and continuously learning from the experts.
            </p>

            <a href='#contact' className='btn btn-primary'>Talk to Me</a>
        </div>
      </div>
    </section>
  )
}

export default About;