import React from 'react'
import './styles.css'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="section">
          <h1 className="section-title">About Our Company</h1>
          
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2023, our company was born out of a passion for helping businesses 
                leverage technology to solve complex challenges and achieve sustainable growth.
              </p>
              <p>
                Our team of experts brings together decades of experience across various industries, 
                allowing us to provide comprehensive solutions tailored to your specific needs.
              </p>
              <p>
                We believe in building long-term partnerships with our clients, focusing on 
                delivering measurable results and continuous improvement.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>Company Image</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section">
          <h2 className="section-title">Our Values</h2>
          
          <div className="grid grid-3">
            <div className="card">
              <div className="card-body">
                <h3>Innovation</h3>
                <p>
                  We stay at the forefront of technology trends to provide cutting-edge solutions 
                  that give our clients a competitive advantage.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-body">
                <h3>Excellence</h3>
                <p>
                  We are committed to delivering the highest quality work, paying attention to 
                  every detail to ensure exceptional results.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-body">
                <h3>Integrity</h3>
                <p>
                  We build trust through transparency, honesty, and ethical practices in all 
                  our business relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section">
          <h2 className="section-title">Our Team</h2>
          
          <div className="grid grid-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="team-member">
                <div className="team-image">
                  <span>Team Member</span>
                </div>
                <h3>Team Member Name</h3>
                <p>Position</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About