import React from "react"
import Resume from "./Resume"
import HeaderSocials from "./HeaderSocials"
import Me from "../../assets/me.png"
import "./header.css"




const Header = () => {
  return (
    <header>
       <div className="container header__container">
          <h5>HELLO I'M</h5>
          <h1>Kira</h1>  
          <h5 className="text-light">Front end developer</h5>
          <Resume />
         <HeaderSocials/>

         <div className="me">
            <img src={Me} alt="me" />  
         </div>
         
          <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
      

    </header>
  )
}

export default Header