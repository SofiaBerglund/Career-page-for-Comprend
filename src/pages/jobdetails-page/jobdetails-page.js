import React from "react"
import JobDetailsInfo from "../../containers/jobdetails-info/jobdetails-info"
import "./jobdetails-page.css"

class JobDetailsPage extends React.Component {

  render() {
    return (
      <div className="jobDePageContainer">
      <div className="jobDetails">
        <JobDetailsInfo id={this.props.match.params.id} />
      </div>  
      </div>
    )
  }

}

export default JobDetailsPage
