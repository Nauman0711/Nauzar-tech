import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Company<span>Name</span></h3>
            <p className="footer-description">
              Providing innovative solutions for your business needs since 2023.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <address className="footer-address">
              <p>123 Business Ave, Suite 100</p>
              <p>New York, NY 10001</p>
              <p>Email: info@company.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CompanyName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer