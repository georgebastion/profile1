import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/assets/avatar1.jpg'
import AVTR2 from '../../assets/assets/avatar2.jpg'
import AVTR3 from '../../assets/assets/avatar3.jpg'
import AVTR4 from '../../assets/assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

            <Swiper className="container testimonials_container" modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={60}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>
            {   
                data.map(({image,name1,review}, {index})=>{
                    return(
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client_avater">
                                <img src={image} alt="Avater" />
                            </div>
                            <h5 className='client_name'>{name1}</h5>
                            <small className="client_review">
                                {review}
                            </small>
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </section>
    )
}

export default Testimonials;