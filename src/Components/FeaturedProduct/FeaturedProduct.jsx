import React from 'react';
import './FeaturedProduct.css';
import { Link } from 'react-router-dom';
import WholeCashew from '../../assets/Cashewwholee.jpg';
import CashewSplit from '../../assets/CashewSplit.jpg';
import CashewPieces from '../../assets/Cashewpieces.webp';

const FeaturedProduct = () => {

  const products = [
    {
      id: 1,
      name: 'Whole Cashews',
      description: 'Premium whole cashews, perfect for snacking or cooking.',
      imageUrl: WholeCashew,
      link: '/products',
    },
    {
      id: 2,
      name: 'Cashew Splits',
      description: 'High-quality split cashews for baking and cooking.',
      imageUrl: CashewSplit,
      link: '/products',
    },
    {
      id: 3,
      name: 'Cashew Pieces',
      description: 'Perfect for use in granola, trail mix, or salads.',
      imageUrl: CashewPieces,
      link: '/products',
    },
  ];

  return (
    <div className="Quality__featured-products Component__padding">
      <div className="Quality__featured-products-container">
        <div className="Quality__featured-products-info">
          <span className="Quality__featured-products_title-secondary">Crafted with Care</span>
          <h1 className="Quality__featured-products_title-primary">Cashew Connoisseurs</h1>
          <p>
            Welcome to Quality Food Distributors Ghana Ltd, where we are dedicated
            to bringing you the finest quality cashew products. Our journey began
            with a passion for sustainable and ethical practices, and today, we
            proudly offer a diverse range of cashew-based delicacies that are not
            only delicious but also packed with essential nutrients.
          </p>
        </div>

        <div className="Quality__featured-product-cards">
          {products.map((product) => (
            <div key={product.id} className="Quality__featured-products-card">
              <img
                src={product.imageUrl}
                alt={product.name}
                loading="lazy"
                className="Quality__featured-product-images"
              />
              <div className="Quality__featured-products-info">
                <h3 className="Quality__featured-product-names">{product.name}</h3>
                <p className="Quality__featured-products-description">{product.description}</p>
                <Link to={product.link} className="Quality__featured-product-links">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link to="/products" className="Quality__featured-product-view-more-link">
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
