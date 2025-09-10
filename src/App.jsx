import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/index.jsx'
import Footer from './components/footer/index.jsx'
import Home from './pages/home/index.jsx'
import About from './pages/about/index.jsx'
import Services from './pages/services/index.jsx'
import Contact from './pages/contact/index.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App