import React from 'react'
import './about.css'
import ME from '../../assets/1 (2).jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {BsFolderMinus} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUser className='about_icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
            </article>

            <article className='about_card'>
              <BsFolderMinus className='about_icon'/>
            <h5>Project</h5>
            <small>80+ Completed Project</small>
            </article>

          </div>

          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis tempore nostrum optio asperiores maxime blanditiis officiis. Eius veritatis odit doloribus nisi, autem maiores. Voluptates.</p>

          <a href="#contact" className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About