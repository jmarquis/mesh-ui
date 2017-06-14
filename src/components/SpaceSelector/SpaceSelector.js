import "./SpaceSelector.less"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import autobind from "autobind-decorator"

import CaretIcon from "icons/caret-down"

@withRouter
@autobind
export default class SpaceSelector extends Component {

  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object
  }

  render() {
    const selectedSpace = this.props.match.params.spaceId
    return (
      <div className="SpaceSelector">
        {selectedSpace === "a1234" ? "HRIS" : "Payments"}
        <CaretIcon />
        <select value={selectedSpace} onChange={this.handleChange}>
          <option value="a1234">HRIS</option>
          <option value="a5678">Payments</option>
        </select>
      </div>
    )
  }

  handleChange(event) {
    const { history } = this.props
    history.push(`/${event.target.value}`)
  }

}
