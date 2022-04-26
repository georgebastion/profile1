import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/assets/avatar1.jpg'
import AVTR2 from '../../assets/assets/avatar2.jpg'
import AVTR3 from '../../assets/assets/avatar3.jpg'
import AVTR4 from '../../assets/assets/avatar4.jpg'

const data = [
    {
        image: AVTR1,
        name1:"Bridgit Amina",
        review:'Lorem ipsum dolor sit amet consecuteter adipising elit.Iutso quod am impedit soluta odio possimus! Quas sint dignissimos distinctio alias rerum laborum aperiam minus pariatur, totam, repellendus a volutatibus!',
    },
    {
        image: AVTR2,
        name1:"Bastion",
        review:'Lorem ipsum dolor sit amet consecuteter adipising elit.Iutso quod am impedit soluta odio possimus! Quas sint dignissimos distinctio alias rerum laborum aperiam minus pariatur, totam, repellendus a volutatibus!',
    },
    {
        image: AVTR3,
        name1:"De Rey",
        review:'Lorem ipsum dolor sit amet consecuteter adipising elit.Iutso quod am impedit soluta odio possimus! Quas sint dignissimos distinctio alias rerum laborum aperiam minus pariatur, totam, repellendus a volutatibus!',
    },
    {
        image: AVTR4,
        name1:"Lauryn",
        review:'Lorem ipsum dolor sit amet consecuteter adipising elit.Iutso quod am impedit soluta odio possimus! Quas sint dignissimos distinctio alias rerum laborum aperiam minus pariatur, totam, repellendus a volutatibus!',
    }
]
const Testimonials= () =>{
    return(
        <section id='testimonials'>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials_container">
            {   
                data.map(({image,name1,review}, {index})=>{
                    return(
                        <article key={index} className="testimonial">
                            <div className="client_avater">
                                <img src={image} alt="Avater" />
                            </div>
                            <h5 className='client_name'>{name1}</h5>
                            <small className="client_review">
                                {review}
                            </small>
                        </article>
                    )
                })
            }
            </div>
        </section>
    )
}

export default Testimonials;