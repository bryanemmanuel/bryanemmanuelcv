import React from 'react'
import CV from '../../assets/BryanEmmanuelPazCV.pdf'



const Resume = () => {
  return (
    <div className='resume'>
        <a href={CV} download className='btn-hover color-1'>Download CV   </a>
        <a href="#contact" className='btn-hover color-3'>Let's Talk </a>
        
    </div>
  )
}

export default Resume


