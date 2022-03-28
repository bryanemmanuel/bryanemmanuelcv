import React from 'react'
import "./testimonials.css"
import Avatar1 from "../../assets/avatar1.jpg"
import Avatar2 from "../../assets/avatar2.jpg"
import Avatar3 from "../../assets/avatar3.jpg"
import Avatar4 from "../../assets/avatar4.jpg"


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination,Navigation } from "swiper";

const data =[
  {
    avatar:Avatar1,
    name:'Bryan',
    review:'ahjsdkjadahjksdhakshdk  jahskjdhakjshdajkshdkjahsjkdhak jshdkjahsdkjahksjdasasdasdasdas'
    

  }
  ,

  {
    avatar:Avatar2,
    name:'Emma',
    review:'ahjsdkjadahjksdhakshdkjahs kjdhakjshdajkshdk jahsjkdhakjshdkjahsdkjahksjdas',

  }
  ,

  {
    avatar:Avatar3,
    name:'Lira',
    review:'ahjsdkjadahjksdha kshdkjahskjdhakjshdajkshdkjahsjkdh akjshdkjahsdkjahksjdas',

  }
  ,

  {
    avatar:Avatar4,
    name:'Kira',
    review:'ahjsdkjadahjksdhakshd kjahskjdhakjshdajkshdkjahsjk dhakjshdkjahsdkjahksjdas',

  }
  ,
]





const Testimonials = () => {
  return (
    <section id='testimonials'>
      
  
      <h5>Review from CLient</h5>
      <h2>Testimonials</h2>
           <Swiper className='container testimonial__container' 
           
             // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
 
    
           >
        
            
            {
              data.map(({avatar,name,review},index) => {
                return(
                  <SwiperSlide className='testimonial'>
                  <div className='client__avatar'> 
                      <img src={avatar} alt="Avatart" />
                  </div>


                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}
                  </small>
              </SwiperSlide>
                )
              })
            }

            
           </Swiper>
      
      
    </section>
  )
}

export default Testimonials