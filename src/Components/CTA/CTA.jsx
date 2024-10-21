import React, { useState } from 'react'
import './CTA.css'
import { FaClock, FaEnvelope, FaHourglass, FaMailBulk, FaPhone} from 'react-icons/fa';
import { FaLocationDot} from 'react-icons/fa6';

const CTA = () => {

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch ('', {
          method: 'POST',
          headers: {
            'content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })

        if (response.ok) {
          setFormStatus('Thank you for reaching out! We will get back to you soon')
          setFormData({ name: '', company: '', email: '', message: '' })
        } else {
          setFormStatus('Something went wrong. Please try again.')
        }
      } catch (error) {
        setFormStatus('An error occurred. Please try again later.')
      }
    }


  return (
    <section className='Quality__contact-us-cta Component__padding'> 
      <div className='Quality__contact-col'>
        <h3 className='Quality__contact-title'>Send us a message <FaMailBulk style={{ marginLeft: '5px'}} />  </h3>
        <p className='Quality__contact-content'>Feel free to reach out through our contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our valued partners and clients in the cashew export and manufacturing industry. Whether you are curious about our latest innovations in processing, interested in our high-quality Ghanaian cashews for global markets, or have suggestions to improve our services, we are here to ensure the best experience for you and our community. Let's work together towards excellence in cashew exportation.</p>
        <ul className='Quality__contact-info'>
        <li className='Quality__contact-list'>
            <FaClock style={{ marginRight: '10px'}} /> Monday to Friday – 8:00 AM to 6:00 PM (GMT) 
          </li>
          <li className='Quality__contact-list'>
            <FaEnvelope style={{ marginRight: '10px'}} /> export@qualityfoodghana.com 
          </li>
          <li className='Quality__contact-list'>
            <FaPhone style={{ marginRight: '10px'}} /> +233 24 000 0000
          </li>
          <li className='Quality__contact-list'>
            <FaLocationDot style={{ marginRight: '10px'}} /> Drobo, Bono Region, Ghana 
          </li>

      </ul>
      </div>
      <div className="Quality__cta-content">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className='Quality__contact-form'>
          <div className="Quality__form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id='name'
              name='name' 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="Quality__form-group">
            <label htmlFor="company">Company:</label>
            <input 
              type="text" 
              id='company'
              name='company'
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="Quality__form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id='email'
              name='email'
              value={FormData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="Quality__form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
            name="message"
            id="message"
            value={FormData.message}
            onChange={handleChange}
            required></textarea>
          </div>
          <button type="submit" className="Quality__cta-button">Submit</button>

        </form>
        {formStatus && 
          <p className='Quality__form-status'>{formStatus}</p> }
      </div>
    </section>
  )
}

export default CTA
