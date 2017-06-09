import "./Menu.less"

import React, { Component } from "react"

import SpaceSelector from "components/SpaceSelector"

import ListIcon from "icons/list"

export default class Menu extends Component {

  render() {
    return (
      <div className="Menu">
        <SpaceSelector />
        <ol>
          <li>
            <a href="#"><ListIcon />story ideas</a>
          </li>
          <li>
            <a href="#"><ListIcon />to do</a>
          </li>
          <li>
            <a href="#"><ListIcon />journal</a>
          </li>
          <li>
            <a href="#" className="active"><ListIcon />random lists</a>
          </li>
          <li>
            <a href="#"><ListIcon />interview notes</a>
          </li>
        </ol>
      </div>
    )
  }

}
