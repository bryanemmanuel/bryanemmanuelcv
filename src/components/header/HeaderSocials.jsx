import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://ph.linkedin.com/in/bryan-emmanuel-paz" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><BsGithub  /></a>
        <a href="https://www.instagram.com/emmanuel.domain/" target="_blank"><BsInstagram  /></a>
    </div>
  )
}

export default HeaderSocials


