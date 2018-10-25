import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import JobItem from "../../components/jobitem/jobitem"
import "./jobopenings-list.css"

export default class JobOpeningsList extends React.Component {

  state = {
    allJobListings: [],
    allDepartments: [],
    valueDepartment: "All",
    valueCity: "All"
  }

  componentDidMount() {
    fetch("http://hellotechnigo.comprendwebsites.net/api/jobs").then((response) => {
      return response.json()
    }).then((json) => {
      this.allJobListings = json
      this.fetchDepartments()
    })
  }

  fetchDepartments = () => {
    fetch("http://hellotechnigo.comprendwebsites.net/api/departments").then((response) => {
      return response.json()
    }).then((json) => {
      this.allDepartments = json
      let depts = {}
      this.allDepartments.forEach((item) => {
        depts[item.id] = item.name
      })
      const updatedList = this.allJobListings.map((job) => {
        job.departmentName = depts[job.department]
        return job
      })
      this.setState({
        allJobListings: this.allJobListings,
        allDepartments: this.allDepartments,
        updatedJobListings: updatedList
      })
    })
  }

  handleDepartmentChange = (event) => {
    this.setState({
      valueDepartment: event.target.value
    })
  }

  handleCityChange = (event) => {
    this.setState({
      valueCity: event.target.value
    })
  }

  // Maps over all jobs to create an array of cities, then reduces this array to just containing unique cities
  uniqueCities = () => Array.from(new Set(this.state.allJobListings.map((job) => {
      return job.city
  })))

  render() {

    if (this.state.allDepartments.length > 0) {
      return (
        <div className="jobOpeningsList">
          <div className="filter-buttons">
            <p>Filter by department and city</p>
            <select value={this.state.valueDepartment} onChange={this.handleDepartmentChange} >
              <option value="All">All</option>
              {this.state.allDepartments.map((department) => {
                return (<option value={department.name}>{department.name}</option>
                )
              })}
            </select>
            <select value={this.state.valueCity} onChange={this.handleCityChange} >
              <option value="All">All</option>
              {
              this.uniqueCities()
              .map((city) => {
                return (<option value={city}>{city}</option>
                )
              })
            }
            </select>
          </div>

          <div className= "jobOpeningsListItem">

            {this.state.updatedJobListings
              .filter((job) => {
                if(this.state.valueDepartment === "All") {
                  return true
                } else {
                return job.departmentName === this.state.valueDepartment
                }
              })
              .filter((job) => {
                if(this.state.valueCity === "All") {
                  return true
                } else {
                return job.city === this.state.valueCity
                }
              })
              .map((item) => {
              return (
                  <JobItem
                  id={item.id}
                  title={item.title}
                  department={item.departmentName}
                  city={item.city}
                  />
              )
            })}
          </div>
        </div>
        )
      } else {
      return <div>Loading...</div>
    }
  }
}
