import React from "react"
import "./footer.css"
// import JobListItems from "./job-list-items"

export default class Footer extends React.Component {


  render() {

    return (
      <footer>

        <div className="footer-logo">
          <img src="/images/logo.png"/>
        </div>
        <div className="footer-navbar">
          <ul>
            <a href="">
              <li>&#169; 2014-2018 Comprend</li>
            </a>
            <a href="">
              <li>Privacy Notice</li>
            </a>
            <a href="">
              <li>Cookie Policy</li>
            </a>
            <a href="">
              <li>Terms of Use</li>
            </a>
            <a href="">
              <li>Subscribe to our newsletter</li>
            </a>
          </ul>
          <div className="socialmedia-icons">
            <a href="https://www.facebook.com/comprendcom/">
              <img src="/images/facebook.png" />
            </a>
            <a href="https://twitter.com/ComprendCom">
              <img src="/images/twitter.png" />
            </a>
            <a href="https://www.instagram.com/comprendlife/">
              <img src="/images/instagram.png" />
            </a>
            <a href="https://www.linkedin.com/company/comprend/">
              <img src="/images/linkedin.png" />
            </a>
          </div>
        </div>
        <p>Comprend is part H&H Group</p>

      </footer>
    )
  }
}
