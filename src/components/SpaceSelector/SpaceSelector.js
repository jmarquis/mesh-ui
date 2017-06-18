import "./SpaceSelector.less"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import autobind from "autobind-decorator"
import { connect } from "react-redux"

import CaretIcon from "icons/caret-down"

@withRouter
@connect(state => {

  const { spaces } = state

  const spacesArray = Object.keys(spaces).map(spaceId => ({
    id: spaceId,
    ...spaces[spaceId]
  }))

  return {
    spaces,
    spacesArray
  }

})
@autobind
export default class SpaceSelector extends Component {

  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    spaces: PropTypes.object,
    spacesArray: PropTypes.array
  }

  render() {
    const selectedSpaceId = this.props.match.params.spaceId
    const { spaces, spacesArray } = this.props
    if (!spacesArray.length) return null
    return (
      <div className="SpaceSelector">
        { spaces[selectedSpaceId] && spaces[selectedSpaceId].name }
        <CaretIcon />
        <select value={selectedSpaceId} onChange={this.handleChange}>
          { spacesArray.map(space => <option key={space.id} value={space.id}>{space.name}</option>) }
        </select>
      </div>
    )
  }

  handleChange(event) {
    const { history } = this.props
    history.push(`/${event.target.value}`)
  }

}
