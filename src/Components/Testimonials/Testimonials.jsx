import React from 'react'
import './Testimonials.css'
import testimonial1 from '../../assets/Testimonial1.jpg'
import testimonial2 from '../../assets/Testimonial2.jpg'
import testimonial3 from '../../assets/Testimonial3.jpg'
import testimonial4 from '../../assets/6.jpg'
import testimonial5 from '../../assets/Testimonial5.jpg'
import testimonial6 from '../../assets/Testimonial6.jpg'
import testimonial7 from '../../assets/Testimonial7.jpg'

const testimonials = [
  {
    body: "These cashews are the epitome of freshness and taste! My favorite snack.",
    author: "Gideon Say",
    handle: "@Gideonsay",
    image: testimonial1,
  },
  {
    body: "Unparalleled quality and swift service. I’m a loyal customer.",
    author: "Maureen Smith",
    handle: "@Maureensmith",
    image: testimonial2,
  },
  {
    body: "Consistently amazing! Quality Foods Distributors delivers excellence.",
    author: "Nana Johnson",
    handle: "@nanajohnson",
    image: testimonial3,
  },
  {
    body: "Ordering was a breeze, and the cashews arrived fresh and delicious!",
    author: "Nicole Palmer",
    handle: "@nicolepalmer",
    image: testimonial4,
  },
  {
    body: "Our go-to snack! Fantastic variety and quality, every single time.",
    author: "Esther Green",
    handle: "@Esthergreen",
    image: testimonial5,
  },
  {
    body: "I'm always impressed by their top-notch products and outstanding service.",
    author: "Moses White",
    handle: "@moseswhite",
    image: testimonial6,
  },
  {
    body: "Incredible flavor and great support. Couldn’t ask for more!",
    author: "Florence Ampah",
    handle: "@florenceAmpah",
    image: testimonial7,
  },
];


const Testimonials = () => {
  return (
    <div className='Quality__testimonials Component__padding'>
      <div className="Quality__testimonials_information">
        <span className="Quality__testimonials_title-secondary">
          <div className="editable-text">
            Testimonials from Around the Globe
          </div>
        </span>
        <h1 className="Quality__testimonials_title-primary">
          <div className="editable-text">
            What Our Customers Say
          </div>
        </h1>
    </div>
      
      <div className="Quality__testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="Quality__testimonial-card">
          <figure className='Quality__card-figure' >
            <blockquote className="Quality__testimonial-body">
              {testimonial.body}
            </blockquote>
            <div className="Quality__testimonial-author">
              <div className="Quality__testimonial-image-wrapper">
              <img 
                alt={testimonial.author} 
                className="author-image" 
                src={testimonial.image} 
                loading='lazy'
              />
              </div>
              <div className="author-info">
                <p className="author-name">{testimonial.author}</p>
                <p className="author-handle">{testimonial.handle}</p>
              </div>
            </div>
          </figure>
        </div>
      ))}
    </div>
    


    </div>
  )
}

export default Testimonials
