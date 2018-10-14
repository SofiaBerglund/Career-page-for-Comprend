import React from "react"
import { Link } from "react-router-dom"
import "./career-page.css"

class CareerPage extends React.Component {

  render() {
    return (
      <div>
        <div className="hero">
          <div className="hero-text">
            <h1>Careers at Comprend</h1>
            <Link to="/jobs">
              <button type="button">Current job openings</button>
            </Link>
          </div>
        </div>
        <div className="body-text">
          <h2>At Comprend, we are always looking for great people and talents!</h2>
          <p>We are currently 80 consultants with skills in digital strategy, project management, UX, visual design, development, content and research – all with a passion for digital communication.</p>
          <p>We&apos;re located at offices in London and Stockholm. We work together with our partners Lundquist in Milan, as well as group partners in the H&H Group: Hallvarsson & Halvarsson, Intellecta Corporate, Jung Relations, Creo, Springtime, Hilanders, Tomorrow, Involve, Identx, Consilio och Bysted.</p>
          <p>If you&apos;re curious, creative and passionate about digital communication – <Link to="/jobs">check what positions we&apos;re looking for right now</Link>.</p>
        </div>
        <div className="image-block">
        <h2>Follow us on Instagram! #ComprendLife</h2>
          <div className="image-cropping-box">
            <img src="/images/insta-1.jpg" alt="comprend-instagram-image" />
          </div>
          <div className="image-cropping-box">
            <img src="/images/insta-2.jpg" alt="comprend-instagram-image" />
          </div>
          <div className="image-cropping-box">
            <img src="/images/insta-3.jpg" alt="comprend-instagram-image" />
          </div>
          <div className="image-cropping-box">
            <img src="/images/insta-4.jpg" alt="comprend-instagram-image" />
          </div>
          <div className="image-cropping-box">
            <img src="/images/insta-5.jpg" alt="comprend-instagram-image" />
          </div>
          <div className="image-cropping-box">
            <img src="/images/insta-6.jpg" alt="comprend-instagram-image" />
          </div>
          <div className="image-cropping-box">
            <img src="/images/insta-7.jpg" alt="comprend-instagram-image" />
          </div>
          <div className="image-cropping-box">
            <img src="/images/insta-8.jpg" alt="comprend-instagram-image" />
          </div>
        </div>
      </div>
    )
  }

}

export default CareerPage
