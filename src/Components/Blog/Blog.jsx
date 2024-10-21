import React from 'react'
import './Blog.css'
import { Link } from 'react-router-dom'
import cashew1 from '../../assets/Blog1.webp'
import cashew2 from '../../assets/Blog5.png'
import cashew4 from '../../assets/Blog-4.jpg'
import cashew3 from '../../assets/Blog3.jpg'

const blogPosts = [
  {
    title: "The Future of Cashew Processing",
    image: cashew1,
    description: "Exploring the advancements in cashew processing technologies.",
    date: "October 12, 2024",
    link: "#",
  },
  {
    title: "Why Ghanaian Cashews are a Top Choice for Global Markets",
    image: cashew2,
    description: "Understanding why Ghanaian cashews are in high demand across global markets.",
    date: "October 5, 2024",
    link: "#",
  },
  {
    title: "The Journey of a Cashew – From Farm to Export",
    image: cashew3,
    description: "Follow the journey of cashews from local farms to international markets.",
    date: "July 30, 2024",
    link: "#",
  },
  {
    title: "Health Benefits of Cashews",
    image: cashew4,
    description: "Discover the surprising health benefits of cashews for a balanced diet.",
    date: "August 10, 2024",
    link: "#",
  },
];

const Blog = () => {

  return (
    
    <section className='Quality__blog'>
      <h2 className='Quality__blog-title'>Latest Blog Posts</h2>
      <div className="Quality__blog-container">
        {blogPosts.map((post, index) => (
          <div className="Quality__blog-post " key={index}>
            <img src={post.image} alt={post.title} className="Quality__blog-post-image" />
            <div className="Quality__blog-post-content">
            <h3 className="Quality__blog-post-title">{post.title}</h3>
              <p className="Quality__blog-post-description">{post.description}</p>
              <p className="Quality__blog-post-date">{post.date}</p>
              <Link to={post.link} className="Quality__blog-post-link"> Read More <span>→</span></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog
