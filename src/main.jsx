import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  HashRouter as Router, // Use HashRouter
  Routes,
  Route,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Products from './Pages/Products/Products.jsx';
import AboutUs from './Pages/About Us/AboutUs.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Services from './Pages/Services/Services.jsx';
import Home from './Pages/Home/Home.jsx';
import ContactUs from './Pages/Contact Us/ContactUs.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)
