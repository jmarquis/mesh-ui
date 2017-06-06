import "./MenuLayout.less"

import React, { Component } from "react"

import Menu from "Menu"
import Collection from "Collection"

export default class MenuLayout extends Component {

  render() {
    return (
      <div className="MenuLayout">
        <Menu />
        <Collection id={1} />
      </div>
    )
  }

}
