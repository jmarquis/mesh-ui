import "./Menu.less"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"

import SpaceSelector from "components/SpaceSelector"

import ListIcon from "icons/list"

@withRouter
@connect((state, props) => {

  const { spaces, lists } = state
  const { match: { params: { spaceId } } } = props
  const currentSpace = spaces[spaceId]

  const listsArray = Object.keys(lists).reduce((listsArray, listId) => {
    if (listId in currentSpace.lists) {
      listsArray.push({
        id: listId,
        ...lists[listId]
      })
    }
    return listsArray
  }, [])

  return {
    listsArray
  }

})
export default class Menu extends Component {

  static propTypes = {
    match: PropTypes.object,
    listsArray: PropTypes.array
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
