import "./Menu.less"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import { NavLink } from "react-router-dom"

import SpaceSelector from "components/SpaceSelector"

import ListIcon from "icons/list"

@withRouter
export default class Menu extends Component {

  static propTypes = {
    match: PropTypes.object
  }

  render() {
    const { spaceId } = this.props.match.params
    return (
      <div className="Menu">
        <SpaceSelector />
        <ol>
          <li>
            <NavLink to={`/${spaceId}/1`}><ListIcon />story ideas</NavLink>
          </li>
          <li>
            <NavLink to={`/${spaceId}/2`}><ListIcon />to do</NavLink>
          </li>
          <li>
            <NavLink to={`/${spaceId}/3`}><ListIcon />journal</NavLink>
          </li>
          <li>
            <NavLink to={`/${spaceId}/4`}><ListIcon />random lists</NavLink>
          </li>
          <li>
            <NavLink to={`/${spaceId}/5`}><ListIcon />interview notes</NavLink>
          </li>
        </ol>
      </div>
    )
  }

}
