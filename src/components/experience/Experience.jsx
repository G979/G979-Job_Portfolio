import React from 'react'
import './experience.css'
import { AiFillHtml5, AiFillApi } from 'react-icons/ai'
import { BsFiletypeSql, BsFiletypeXml } from 'react-icons/bs'
import { SiCss3, SiJavascript, SiBootstrap, SiReact, SiAngular, SiPython, SiWordpress, SiCplusplus } from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Practice</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiBootstrap className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiAngular className='experience__details-icon'/>
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__misc">
        <h3>Miscellaneous Software Skills</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFiletypeSql className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFiletypeXml className='experience__details-icon'/>
              <div>
                <h4>XML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillApi className='experience__details-icon'/>
              <div>
                <h4>API Platforms</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiWordpress className='experience__details-icon'/>
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCplusplus className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;
