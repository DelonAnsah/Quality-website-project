import React from 'react'
import './OverviewAndValues.css'
import { FaBalanceScale, FaCheckCircle, FaLeaf, FaSeedling } from 'react-icons/fa'
import { MdEco, MdLocalShipping } from 'react-icons/md'


const OverviewAndValues = () => {
  const coreValues = [
    {
      name: 'Quality',
      description: 'We never compromise on the quality of our cashews.',
      icon: <FaCheckCircle style={{  color: '#F7951E' }} />,
    },
    {
      name: 'Sustainability',
      description: 'Supporting local farmers and eco-friendly practices.',
      icon: <FaSeedling style={{  color: '#F7951E' }} />,
    },
    {
      name: 'Integrity',
      description: 'Transparency and reliability in all business operations.',
      icon: <FaBalanceScale style={{ color: '#F7951E' }} />,
    
    },
    {
      name: 'Customer Satisfaction',
      description: 'Building long-term relationships with global clients.',
      icon: <MdLocalShipping style={{  color: '#F7951E' }} />,
    },
    {
      name: 'Social Responsibility',
      description: 'Engaging in community development and sustainability projects.',
      icon: <MdEco style={{  color: '#F7951E' }} />,
    },
    {
      name: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure excellence at every step.',
      icon: <FaLeaf style={{  color: '#F7951E' }} />,
    },
  ];

  return (
    <div className='Quality__overview_values Component__padding'>
     <section className="inner-container">
      <span className="Quality__overview_values_title-third">
        <div className="editable-text">
          Why choose us
        </div>
        </span>
        <h2 className="Quality__overview_values_title-primary">Company Overview</h2>
        <p className="Quality__overview_values_desc">
          Quality Food Distributors Ghana Ltd is a leading exporter of premium processed cashews, 
          committed to delivering the highest quality products to international markets. 
          Based in Drobo, Bono Region, the company prides itself on ethical sourcing, 
          state-of-the-art processing, and timely delivery of cashew nuts that meet global standards.
        </p>

        <h3 className="Quality__overview_values_title-secondary">Our Mission</h3>
        <p className="Quality__overview_values_desc">
          Our mission is to be a trusted partner in the global cashew supply chain, 
          delivering high-quality processed cashews while supporting sustainable farming practices 
          and contributing to the local Ghanaian economy.
        </p>
      </section>

      <section className="features-grid-corevlaues">
        <h2 className="Quality__overview_Corevalues_title-primary ">Core Values</h2>
        <ul className="Quality__overview_corevalues-features-grid">
          {coreValues.map((value, index) => (
            <li key={index} className="Quality__overview_corevalues-feature-item">
              <div className="Quality__overview_corevalues-feature-header">
                <span className="Quality__overview_corevalues-icon">{value.icon}</span>
                <strong className="Quality__overview_corevalues-feature-name">{value.name}</strong>
              </div>
              <dd className="Quality__overview_corevalues-feature-description">
                <span>{value.description}</span>
              </dd>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default OverviewAndValues
