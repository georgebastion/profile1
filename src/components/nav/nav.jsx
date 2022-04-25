import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {BsTelephoneInbound} from 'react-icons/bs'
import {MdMiscellaneousServices} from 'react-icons/md'
import {GiSecretBook} from 'react-icons/gi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useState } from 'react'

const Nav= () =>{
    const [activeNav, setActiveNav] =useState('#')
    return(
        <nav>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome/></a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><BsFillPersonLinesFill/></a>
            <a href="#experiences" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><GiSecretBook/></a>
            <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services' ? 'active' : ''}><MdMiscellaneousServices/></a>
            <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><BsTelephoneInbound/></a>
            
        </nav>
    )
}

export default Nav;