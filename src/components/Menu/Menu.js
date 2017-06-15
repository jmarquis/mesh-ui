import "./Menu.less"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"

import { listenForListChanges } from "actions"

import SpaceSelector from "components/SpaceSelector"

import ListIcon from "icons/list"

@withRouter
@connect(state => {

  const { lists } = state

  const listsArray = Object.keys(lists).map(listId => ({
    id: listId,
    ...lists[listId]
  }))

  return {
    listsArray
  }

})
export default class Menu extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    match: PropTypes.object,
    listsArray: PropTypes.array
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(listenForListChanges())
  }

  render() {
    const { spaceId } = this.props.match.params
    const { listsArray } = this.props
    return (
      <div className="Menu">
        <SpaceSelector />
        <ol>
          {
            listsArray.map(list =>
              <li key={list.id}>
                <NavLink to={`/${spaceId}/${list.id}`}><ListIcon />{list.name}</NavLink>
              </li>
            )
          }
        </ol>
      </div>
    )
  }

}
