import React from "react"
import { Link } from "react-router-dom"
import "./career-page.css"

class CareerPage extends React.Component {

  render() {
    return (

  <div className="careerPageContainer">
    <div className="heroImage"><img src="/images/heroImage.svg" /></div>
      <div className="hero-text">
        <img src="/images/joinUs!.svg" />
        <Link to="/jobs">
        <p>Your journey starts here!</p>
      </Link>
    </div>


    <div className="intro-container">
        <div className="intro-text">
            <h2>Helping our clients communicate</h2>
            <p> Our belief is that communication takes place between people, increasing knowledge and encouraging action. For companies to be successful, they need employees, customers, suppliers and the public to know as much as possible about what the company does, how they do it and what they stand for.</p>
        </div>
        <div className="intro-text">
            <h2>This is Comprend</h2>
            <p>We are a team of 80+ consultants in Stockholm and London. If you’re a curious and creative developer, designer, UX specialist, project manager or strategist and passionate about digital communication – get in touch to explore our world! Check out our jobs to see what new colleagues we are looking for right now.</p>
        </div>
        <div className="intro-text">
          <h2>We know how</h2>
          <p>We understand the complex environment that large companies, listed companies and organisations operate in. We add more than 20 years of experience of digital corporate communication backed by research and insight, when working together with you to transform and manage your communication.</p>
        </div>
      </div>
  </div>
    )
  }

}

export default CareerPage
