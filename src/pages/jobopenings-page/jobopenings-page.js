import React from "react"
import JobOpeningsList from "../../containers/jobopenings-list/jobopenings-list.js"
import "./jobopenings-page.css"

class JobOpeningsPage extends React.Component {

  render() {
    return (
     <div className="jobOpPageContainer">
      <div className="starWarsJobs">
        <img src="/images/jobopenings-image.svg" alt="join us" />
      </div>
      <div className="tableofPositions">
        <JobOpeningsList />
      </div>
     </div>

    )
  }

}

export default JobOpeningsPage
