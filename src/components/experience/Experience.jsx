import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"




const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skill I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
          <div className='experience__frontend'>
              <h3>Frontend Development</h3>
              <div className='experience__content'>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4>HTML</h4>
                      <small className='text-light'>intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                   <div>
                      <h4>CSS</h4>
                      <small className='text-light'>intermediate</small>
                   </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4>JavaScript</h4>
                      <small className='text-light'>intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4>React</h4>
                      <small className='text-light'>intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4>Mungo</h4>
                      <small className='text-light'>intermediate</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4>Mungo</h4>
                      <small className='text-light'>intermediate</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4>Mungo</h4>
                      <small className='text-light'>intermediate</small>
                    </div>
                </article>

              
              </div>
          </div>

         
          <div className='experience__backend'>
          <h3>Backend Development</h3>
          <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                   <div>
                     <h4>MySQL</h4>
                      <small className='text-light'>intermediate</small>
                   </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4>Php</h4>
                      <small className='text-light'>intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4>MongoDB</h4>
                      <small className='text-light'>intermediate</small>
                    </div>
                </article>
                
          </div>



          {/* <div className='experience__backend'>
          <h3>Frontend  Development tool </h3>
          <article className='experience__details'>
                    <BsPatchCheckFill/>
                   <div>
                     <h4>Adobe Photoshop</h4>
                      <small className='text-light'>intermediate</small>
                   </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill/>
                    <div>
                      <h4>Adobe Illustrator</h4>
                      <small className='text-light'>intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill/>
                    <div>
                      <h4>Canva</h4>
                      <small className='text-light'>intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill/>
                    <div>
                      <h4>Figma</h4>
                      <small className='text-light'>intermediate</small>
                    </div>
                </article>
                
          </div> */}


      </div>

    

    </section>
  )
}

export default Experience