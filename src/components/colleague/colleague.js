import React from "react"
import "./colleague.css"

export default class Colleague extends React.Component {
  reserveFaceUrls = [
    "/images/face-1.png",
    "/images/face-2.png",
    "/images/face-3.png",
    "/images/face-4.png",
    "/images/face-5.png",
    "/images/face-6.png"
  ]

  render() {
    return (
      <div className="colleague-block">
        <div className="image-block">
          <img
            className="colleague-image"
            src={this.props.source}
            alt={this.props.name}
          />
          <img
            className="colleague-image-sw"
            src={this.reserveFaceUrls[Math.floor(Math.random() * 6)]}
          />
        </div>
        <p className="colleague-name">{this.props.name}</p>
        <p className="colleague-title">{this.props.title}</p>
      </div>
    )
  }
}
