import React from 'react'
import "./contact.css"
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

const form = useRef ()
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_7f9t0rp', 'template_zdkc8ue', form.current, 'hDUS3xyX3cOexq6Q_')
  
  e.target.reset()
  
};


  return (
    <section id='contact'>
      <h5> Get in Touch</h5>
      <h2>Contact Me</h2>

        <div className='container contact__container'>
            <div className='contact__options'>
               
                <article className='contact__option'>
                    <MdOutlineMail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>bryan.emmanuel.paz@gmail.com</h5>
                    <a href="mailto:bryan.emmanuel.paz@gmail.com">Send Message</a>
                </article>

                 <article className='contact__option'>
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    <h5>Bryan Emmanuel Paz</h5>
                    <a href="https://www.facebook.com/bryan.emmanuel.paz">Send Message</a>
                </article>

                <article className='contact__option'>
                    <MdOutlineMail className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+639087496959</h5>
                    <a href="https://api.whatsapp.com/send?phone=639087496959">Send Message</a>
                </article>
            </div>
            {/* End of contact */}
            <form ref={form} onSubmit={sendEmail}>
               <input type="text" name='name' placeholder='Your Full Name' required/>
               <input type="text" name='email' placeholder='Your Email' required/>
               <textarea name="message"  rows="7" placeholder='Your Message' required> </textarea>
               <button type='submit' className='btn btn-primary'>Send Message</button>
            
            </form>
        </div>


    </section>
  )
}

export default Contact