import React from "react"
import { Link } from "react-router-dom"
import Button from "../../components/button/button"
import Colleague from "../../components/colleague/colleague"
import "./jobdetails-info.css"

export default class JobDetailsInfo extends React.Component {

  state = {
    allJobListings: {},
    allColleagues: {}
  }

  componentDidMount() {
    const url = `http://hellotechnigo.comprendwebsites.net/api/jobs/${this.props.id}`
    fetch(url).then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        allJobListings: json
      })
    })
    fetch("http://hellotechnigo.comprendwebsites.net/api/users").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        allColleagues: json
      })
    })
  }

  render() {
    if (Object.keys(this.state.allJobListings).length > 0 && Object.keys(this.state.allColleagues).length > 0) {

      let quote;
      if (this.state.allJobListings.quote){
        quote =
        <p className="job-quote">
          <i class="fas fa-quote-left"></i>
          {this.state.allJobListings.quote}
          <i class="fas fa-quote-right"></i>
        </p>
      } else {
        quote = ""
      }

      return (
        <div>
          <div className="topText">
            <h1>{this.state.allJobListings.title}</h1>
            <p>{this.state.allJobListings.intro}</p>
          </div>
          <div className="top-image-box">
            <img src="https://www.comprend.com/files/pages/169/594257/dt/Home_02-ws-1920x800.jpg" alt="comprend interior" />
          </div>
          <div className="button-group">
            <Button
              text="Apply for this job"
              link={this.state.allJobListings.link} />
            <Button
              text="Share"
              link=""/>
          </div>
          <h3>Your Workday</h3>
          <p>{this.state.allJobListings.workday}</p>
          {quote}
          <div className="two-column">
            <div className="body-image-box"></div>
            <p className="column-text" ><h3>Who are you?</h3>{this.state.allJobListings.aboutYou}</p>
          </div>
          <br />
          <h3>Is Comprend the company for you?</h3>
          <p>{this.state.allJobListings.match}</p>
          <br /><br />
          <Link to="/colleagues">
            <h3>Meet some of the people at Comprend</h3>
          </Link>
          <div className="colleague-group">
            <Link to="/colleagues">
              <Colleague source={this.state.allColleagues[0].pictureUrl}
                name={this.state.allColleagues[0].name} />
            </Link>
            <Link to="/colleagues">
              <Colleague source={this.state.allColleagues[1].pictureUrl}
                name={this.state.allColleagues[1].name} />
            </Link>
            <Link to="/colleagues">
              <Colleague source={this.state.allColleagues[2].pictureUrl}
                name={this.state.allColleagues[2].name} />
            </Link>
          </div>
        </div>
        )
      } else {
      return (
      <div>Please wait while we find available jobs.</div>
      )
    }
  }
}
