import React from 'react';
import AVT1 from '../../assets/lk.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'
import { Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './testimonials.css'

const data = [
  {
    key: 1,
    avatar: AVT1,
    name: 'Leonidas Kallipolitis',
    profession: "Chief Technology Officer",
    company:"AEGIS IT RESEARCH",
    review: "I am acquainted with Mr. Vasilakis since I was the technical supervisor of his thesis on 'Blockchain smart contract system for secure health data sharing' "+
    "at the Technical University of Crete's, School of Electrical and Computer Engineering. Mr. Vassilakis immediately got familiar with the background of Blockchain technology "+
    "Mr. Vassilakis immediately got familiar with the background of Blockchain technology as part of his Thesis, frequently discovering the requisite bibliography on his own. "+ 
    "He also researched and became acquainted with smart contract concepts, as well as the challenges that medical information systems face today in terms of the preservation and "+ 
    "exchange of sensitive personal data. In addition, while designing the prototype system, he investigated several technologies and tools to enable diverse use cases. "+
    "Based on the foregoing, I feel Mr. Vassilakis has good theoretical and programming skills to deal with open challenges. He can examine, study, and assimilate bibliographies "+
    "in order to obtain relevant information from it. At the same time, he is a kind individual who is cooperative and dependable in his outcomes."+
    "As a result, I endorse Mr. Vassilakis as a trustworthy individual who can contribute to projects and create outcomes as an IT specialist."
  },
  {
    key: 2,
    avatar: AVT2,
    name: 'Argyrios Chronopoulos',
    profession: "Head of the IT Department",
    company:"Elta Courier",
    review: "Mr. Vasilakis and I both worked at ELTA Courier, where he was the Front-End Developer and I was the Head of the IT Department. "+
    "Our relationship was excellent throughout our collaboration, and the necessary work was accomplished to help our company grow in the sector of information technology.  "+
    "George was primarily in charge of the company's Front End Development, but he was also effective when requested to assist with day-to-day support challenges between us and our clients,  "+
    "as well as other IT tasks. As a result, I believe Mr. Vasilakis can not only create software programs exceptionally successfully and quickly as a developer, but also aid with day-to-day "+ 
    "difficulties related to a company's proper operation. He is also a cooperative person who works remarkably well in groups. Finally, I endorse Mr. Vasilakis as a trustworthy individual who  "+
    "can contribute to projects and generate results as a Front-End Developer."
  },
  {
    key: 3,
    avatar: AVT3,
    name: 'Third Name',
    profession: "",
    company:"",
    review: "Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, "+
    "tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? "
  },
  {
    key: 4,
    avatar: AVT4,
    name: 'Fourth Name',
    profession: "",
    company:"",
    review: "Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. "
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Refferences from IT Specialists</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, profession, company, review, key}, index) => {
            return (
              <SwiperSlide className="testimonial" key={key}>
                <div className="manager__avatar">
                  <img src={avatar} alt='First Avatar' />
                </div>
              <h5 className='manager__name'>{name}</h5>
              <h5 className='manager__name'>{profession}</h5>
              <h5 className='manager__name'>{company}</h5>
              <small className='manager__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials;