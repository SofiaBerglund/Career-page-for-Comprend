import React from "react"
import Colleague from "../../components/colleague/colleague"
import "./colleagues-page.css"

class ColleaguesPage extends React.Component {
  state = {
    allColleagues: []
  }

  componentDidMount() {
    fetch("http://hellotechnigo.comprendwebsites.net/api/users")
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          allColleagues: json
        })
      })
  }

  render() {
    if (this.state.allColleagues.length > 0) {
      return (
        <div className="colleaguesPageContainer">
          <h1>Meet Our People</h1>
          <div className="colleagues-container">
            {this.state.allColleagues.map(person => {
              if (person.visible) {
                return (
                  <Colleague
                    source={person.pictureUrl}
                    name={person.name}
                    title={person.title}
                  />
                )
              }
            })}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          It looks like all our colleagues are at lunch. Please try again later!
        </div>
      )
    }
  }
}

export default ColleaguesPage
