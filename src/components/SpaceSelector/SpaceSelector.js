import "./SpaceSelector.less"

import React, { Component } from "react"
import autobind from "autobind-decorator"

import CaretIcon from "icons/caret-down"

@autobind
export default class SpaceSelector extends Component {

  state = {
    selectedSpace: "1234"
  }

  render() {
    const { selectedSpace } = this.state
    return (
      <div className="SpaceSelector">
        {selectedSpace === "1234" ? "HRIS" : "Payments"}
        <CaretIcon />
        <select value={selectedSpace} onChange={this.handleChange}>
          <option value="1234">HRIS</option>
          <option value="5678">Payments</option>
        </select>
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      selectedSpace: event.target.value
    })
  }

}
