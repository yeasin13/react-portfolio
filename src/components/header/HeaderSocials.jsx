import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>

    <a href="https://www.linkedin.com/in/md-yasin-748a95262/" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/yeasin13" target="_blank"><BsGithub/></a>
    <a href="https://www.facebook.com/yeasin89/" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials