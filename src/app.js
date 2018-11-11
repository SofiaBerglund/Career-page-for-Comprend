import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import ReactDOM from "react-dom"
import Header from "./components/header/header"
import JobOpeningsPage from "./pages/jobopenings-page/jobopenings-page"
import JobDetailsPage from "./pages/jobdetails-page/jobdetails-page"
import CareerPage from "./pages/career-page/career-page"
import ColleaguesPage from "./pages/colleagues-page/colleagues-page"
import Footer from "./components/footer/footer"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={CareerPage} />
          <Route path="/jobs" exact component={JobOpeningsPage} />
          <Route path="/jobs/:id" component={JobDetailsPage} />
          <Route path="/colleagues" component={ColleaguesPage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
