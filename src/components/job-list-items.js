import React from "react"

export default class JobListItems extends React.Component {
  state = {
    allJobListings: []
  }

  componentDidMount() {
    fetch("http://hellotechnigo.comprendwebsites.net/api/jobs")
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          allJobListings: json
        })
      })
  }
}
