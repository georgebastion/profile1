import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials= () =>{
    return(
        <div className="header_socials">
            <a href="https://linkedin.com" target='_blank'><AiOutlineInstagram/></a>
            <a href="https://github.com/georgebastion" target='_blank'><AiFillGithub/></a>
            <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
        </div>
    )
}

export default HeaderSocials;