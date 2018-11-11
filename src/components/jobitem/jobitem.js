import React from "react"
import "./jobitem.css"
import { Link } from "react-router-dom"

export default class JobItem extends React.Component {
  render() {
    return (
      <div className="jobContainer">
        <Link to={`/jobs/${this.props.id}`}>
          <table>
            <tr>
              <td>{this.props.title}</td>
              <td>{this.props.department}</td>
              <td>{this.props.city}</td>
            </tr>
          </table>
        </Link>
      </div>
    )
  }
}
