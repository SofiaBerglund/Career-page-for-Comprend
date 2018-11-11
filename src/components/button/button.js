import React from "react"

import "./button.css"

export default class Button extends React.Component {
  render() {
    return (
      <a href={this.props.link}>
        <button>{this.props.text}</button>
      </a>
    )
  }
}
