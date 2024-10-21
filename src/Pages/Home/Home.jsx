import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import OverviewAndValues from '../../Components/OverviewAndValues/OverviewAndValues'
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct'
import Blog from '../../Components/Blog/Blog'
import Footer from '../../Components/Footer/Footer'
import CTA from '../../Components/CTA/CTA'
import Testimonials from '../../Components/Testimonials/Testimonials'
import AboutUs from '../About Us/AboutUs'

const Home = () => {
  return (
    <>
    <Navbar />
    <AboutUs />
    <Hero />
    <OverviewAndValues />
    <FeaturedProduct />
    <Blog />
    <Testimonials />
    <CTA />
    <Footer />
    </>
  )
}

export default Home
