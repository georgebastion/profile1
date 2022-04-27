import React from 'react'
import './contact.css'

import {AiOutlineMail} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact= () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mud1jbg', 'template_7uval9u', form.current, 'pjPenMLRWAHv3ZFRB')
          e.target.reset();
      };
    return(
        <section id='contact'>
            <div className="contact_me">
                <div className="start_text">
                    <h5>Get in Touch</h5>
                    <h2>Contact Me</h2>
                </div>     
                <div className="container contact_details">
                    <div className="contact_links">
                        <div className="contact_link">
                            <AiOutlineMail className='contact_icon'/>
                            <h3>Email</h3>
                            <h5>georgebusiness@gmail.com</h5>
                            <a href="mailto:georgejacob437@gmail.com" target='_blank'>send message</a>
                        </div>
                        <div className="contact_link">
                            <FaFacebookMessenger className='contact_icon'/>
                            <h3>Facebook</h3>
                            <h5>georgebastion</h5>
                            <a href="https://facebook.com" target='_blank'>send message</a>
                        </div>
                        <div className="contact_link">
                            <BsWhatsapp className='contact_icon'/>
                            <h3>Whatsapp</h3>
                            <h5>georgebastion</h5>
                            <a href="https://whatsapp.com" target='_blank'>send message</a>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your full Name' required/>
                        <input type="email" name='email' placeholder='Your Email' required/>
                        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message </button>
                    </form>
                    
                </div>
            </div>
        </section>
    )
}
/*<div className="contact_form">
                        <textarea name="fname" className='tx' id="mg" cols="30" rows="2">Your Full Name</textarea>
                        <br></br>
                        <textarea name="email" className='tx' id="mg1" cols="30" rows="2">Your Email</textarea>
                        <br />
                        <textarea name="message" className='tx' id="mg2" cols="30" rows="5">Your Message</textarea>
                        <br />
                        <a href="" className="btn btn-primary">Send Message</a>
                    </div>

*/

export default Contact;