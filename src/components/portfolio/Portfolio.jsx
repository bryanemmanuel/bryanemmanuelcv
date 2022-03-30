import React from 'react'
import "./portfolio.css"
import Img1 from "../../assets/portfolio1.jpg"
import Img2 from "../../assets/portfolio2.jpg"
import Img3 from "../../assets/portfolio3.jpg"
import Img4 from "../../assets/portfolio4.jpg"
import Img5 from "../../assets/portfolio5.png"
import Img6 from "../../assets/portfolio6.jpg"


const data = [
{
  id:1,
  image:Img1,
  title:'Test 1',
  github:'github.com',
  demo:'github.com'
}
,
{
  id:2,
  image:Img2,
  title:'Test 2',
  github:'github.com',
  demo:'github.com'
}
,

{
  id:3,
  image:Img3,
  title:'Test 4',
  github:'github.com',
  demo:'github.com'
}

,
{
  id:4,
  image:Img4,
  title:'Test 1',
  github:'github.com',
  demo:'github.com'
}
,

{
  id:5,
  image:Img5,
  title:'Page 1',
  github:'github.com',
  demo:'github.com'
}
,

{
  id:6,
  image:Img6,
  title:'Test 1',
  github:'github.com',
  demo:'github.com'
}



]






const Portfolio = () => {
  return (
   
    <section id='portfolio'>

        <h5>My recent Work</h5>
         <h2>Portfolio</h2>
    
           <div className='container portfolio__container'>
              
              {
                data.map(({id,image,title,github,demo}) => { 
                      return(

                        <article key={id} className='portfolio__item'>
                               <div className='portfolio__item-image'>
                                 <img src={image} alt="This is a portfolio item title" />
                               </div>
                               <h3>{title}</h3>
                                <div className='portfolio__item-cv'>
                                    <a href={github} className='btn' target='black'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='black'>Live Demo</a>
                                </div>
                        </article>
                      )
                  
                })
              }

              
            </div>

    
    </section>
  )
}

export default Portfolio