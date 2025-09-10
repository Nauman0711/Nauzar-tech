import React from 'react'
import './styles.css'

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies for optimal performance and user experience.",
      icon: "💻"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications that provide seamless experiences across iOS and Android devices.",
      icon: "📱"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to enhance your business agility and reduce costs.",
      icon: "☁️"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design approaches that create intuitive and engaging digital experiences for your customers.",
      icon: "🎨"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to increase your online visibility and drive qualified traffic to your business.",
      icon: "📈"
    },
    {
      title: "Consulting",
      description: "Expert advice and strategic planning to help you make informed technology decisions for your business.",
      icon: "👔"
    }
  ]

  return (
    <div className="services">
      <div className="container">
        <div className="section">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            We offer a comprehensive range of services to help your business thrive in the digital age.
          </p>
          
          <div className="grid grid-3">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="card-body service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="section process-section">
          <h2 className="section-title">How We Work</h2>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discover</h3>
              <p>We learn about your business, goals, and challenges to understand your needs.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Design & Develop</h3>
              <p>We create tailored solutions and implement them using industry best practices.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Deliver & Support</h3>
              <p>We deploy the solution and provide ongoing support to ensure continued success.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services