import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header= () =>{
    return(
        <section>
            <header>
                <div className="container header_container">
                    <h5>Hello I'm</h5>
                    <h1>Bastion</h1>
                    <h5 className="text-light">FullStack Developer</h5>
                    <CTA />
                    <HeaderSocials/>
                    <div className="me">
                        <img src={ME} alt="" className="me" />
                    </div>
                    
                    <a href="#contact" className="scroll_down">scroll down</a>
                </div>
                
            </header>
        </section>
        )
}

export default Header;