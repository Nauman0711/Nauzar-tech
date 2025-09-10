import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Innovative Solutions for Your Business</h1>
            <p className="hero-subtitle">
              We help businesses grow with cutting-edge technology and strategic expertise.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">Our Services</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We deliver exceptional results through our unique approach and expertise
          </p>
          
          <div className="grid grid-3">
            <div className="card">
              <div className="card-body">
                <div className="feature-icon">💻</div>
                <h3>Fast Results</h3>
                <p>We deliver quick and efficient solutions to boost your business performance.</p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-body">
                <div className="feature-icon">🔒</div>
                <h3>Secure Solutions</h3>
                <p>Your data's security is our top priority with enterprise-grade protection.</p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-body">
                <div className="feature-icon">👥</div>
                <h3>Expert Team</h3>
                <p>Our skilled professionals have years of experience in diverse industries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-subtitle">
              Let's discuss how we can help you achieve your business goals.
            </p>
            <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home