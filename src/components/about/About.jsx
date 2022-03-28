import React from 'react'
import "./about.css"
import Me from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  return (
  <section id='about'>
    <h5>Get to know</h5>
    <h2>About Me</h2>
   
    <div className="container about__container">
       <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
       </div>


      <div className="about__content">
          <div className='about__cards'>
           
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
               <small>2+years of Freelancing</small>
            </article>
      
            <article className='about__card'>
               <FiUsers className='about__icon'/>
               <h5>Clients</h5>
                <small>50+</small>
             </article>
    
             <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
               <h5>Projects</h5>
               <small>80+ Complited</small>
             </article>
        
        </div>

    
        <p>
          asjdhjkjakshdkjahsdkjahksjdhkajshdkjhaksjdhkashdkashdkahsd
          akjhkdashjkkdhaksdhkajshdkahsdkahskdjhaksdhjkajksdhkaj
          asdoiasdoiausoiduaoiau.
        </p>
        <a href="#contact" className='btn btn-primaty'> Lets Talk </a>
      </div>

    
    </div>
  </section>
  )
}

export default About