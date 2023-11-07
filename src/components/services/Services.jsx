import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>At My</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design and implementation of user interactions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using digital tools in accordance with best practices and standards</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adaptive and creative solutions to UI/UX design problems</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Producing high-quality UX design solutions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designing UI elements and tools</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adhering to style standards on typography and graphic design</p>
            </li>
          </ul>
        </article>
                                                      {/* END OF UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creation and Maintenance of websites and eshops</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Improvement the technical aspects of a website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Applications' Integration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Correspondence with users</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML,JavaScript and CSS usage to enhance the site's capabilities</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Test web applications</p>
            </li>
          </ul>
        </article>
                                            {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Photoshop</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Video Editing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Social Media Strategy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blogs that explore various topics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Soap and XMl creation and understanding.</p>
            </li>
          </ul>
        </article>
                                        {/* Content Creation */}
      </div>
    </section>
  )
}

export default Services;
