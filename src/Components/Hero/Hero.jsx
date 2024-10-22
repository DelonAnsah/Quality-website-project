import React from 'react'
import './Hero.css'
import heroImage from '../../assets/food.jpg'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
import { FaArrowRight } from 'react-icons/fa'


const Hero = () => {

  const features = [
    {
        number: "01",
        title: "Premium Quality",
        text: "Our cashews are sourced from the best farms, ensuring top-notch quality."
    },
    {
        number: "02",
        title: "Global Delivery",
        text: "We deliver our exceptional cashews to customers all over the world."
    },
    {
        number: "03",
        title: "Customer Satisfaction",
        text: "Our dedication to customer service is unmatched, ensuring a delightful experience."
    },
];


  return (
    <section className='Quality__Hero-section'>
      <div className="Quality__Hero-section-container">
        <div className="Quality__Hero-section-content-wrapper">
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="Quality__Hero-section-image-wrapper" style={{ transform: 'none', opacity: 1, objectFit: 'none', background: 'transparent'  }}>
              <img  src={heroImage} alt="Hero-image" loading='lazy'  className='Quality__Hero-section-image' style={{ backgroundColor: 'transparent' }}   />
            </div>
          </div>
          <div className="Quality__Hero-section-text-content">
            <div className="Quality__Hero-heading-section">
              <h1 className="Quality__Hero-section-title" style={{ opacity: 1, transform: 'none' }} >Harvested by Nature, Perfected by Tradition</h1>
              <div className="Quality__Hero-section-Customer-info" style={{ opacity: 1, transform: 'none' }}>
                <div className="Quality__Hero-section-custumer-stats">
                <p className="Quality__Hero-section-custumer-large-text">100+</p>
                <p className="Quality__Hero-section-customer-description">Satisfied Customers Globally</p>
                </div>
                <div className='Quality__Hero-section-avatars'>
                  <div className="Quality__Hero-section-avatar" style={{ zIndex: '10' }}>
                      <img src={avatar1} alt="" 
                      className='Quality__Hero-section-avatar-img'
                      style={{ backgroundColor: 'transparent' }} />
                    </div>
                    <div className="Quality__Hero-section-avatar" style={{ zIndex: '11' }} >
                      <img src={avatar2} alt="" 
                      className='Quality__Hero-section-avatar-img'
                      style={{ backgroundColor: 'transparent' }} />
                    </div>
                    <div className="Quality__Hero-section-avatar" style={{ zIndex: '12' }}>
                      <img src={avatar3} alt="" 
                      className='Quality__Hero-section-avatar-img'
                      style={{ backgroundColor: 'transparent' }} />
                    </div>
                    <div className="Quality__Hero-section-avatar" style={{ zIndex: '13' }}>
                    <img src={avatar4} alt="" 
                    className='Quality__Hero-section-avatar-img'
                    style={{ backgroundColor: 'transparent' }} />
                    </div>
                </div>
              </div>
                <div className="Quality__hero-cta-section"  style={{ opacity: 1, transform: 'none' }}>
                  <button className='Quality__hero-cta-section-explore'>
                    Explore Our Products
                    <FaArrowRight className="Hero-iconright"  />
                  </button>
                  <p className="Quality__hero-cta-section-explore-description">
                  Experience the taste of quality with : Quality Food Distributors Ghana Ltd. – your source for the freshest and most flavorful cashews.
                  </p>

                </div>
            </div>
          </div>

        </div>
      </div>
      <div className="Quality__hero-section-features-container">
            <div className="Quality__hero-section-features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="Quality__hero-section-feature-item">
                        <span>
                            <div className="Quality__hero-section-feature-number">{feature.number}</div>
                        </span>
                        <div className="Quality__hero-section-feature-details">
                            <span>
                                <div className="Quality__hero-section-feature-title">{feature.title}</div>
                            </span>
                            <span>
                                <div className="Quality__hero-section-feature-text">{feature.text}</div>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Hero
