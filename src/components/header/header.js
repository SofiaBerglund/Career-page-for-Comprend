import React from "react"
import { Link } from "react-router-dom"
import "./header.css"

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" />
          </Link>
        </div>
        <div className="header-navbar">
          <ul>
            <li>Our Services</li>
            <li>Blog</li>
            <li>Webranking</li>
            <li>Join Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="header-hamburger">
          <i className="fas fa-bars fa-2x" />
        </div>
      </header>
    )
  }
}
