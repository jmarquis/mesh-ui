import "./Menu.less"

import React, { Component } from "react"

import SpaceSelector from "components/SpaceSelector"

export default class Menu extends Component {

  render() {
    return (
      <div className="Menu">
        <SpaceSelector />
      </div>
    )
  }

}
