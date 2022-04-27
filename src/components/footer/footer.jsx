import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const Footer= () =>{
    return(
        <footer>
            <a href="" className="footer_logo">Bastion</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experiece">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer_socials">
                <a href="https://linkedin.com" target='_blank'><AiOutlineInstagram/></a>
                <a href="https://github.com/georgebastion" target='_blank'><AiFillGithub/></a>
                <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
            </div>

            <div className="footer_copyrights">
                <small>&copy; George Bastion. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer;