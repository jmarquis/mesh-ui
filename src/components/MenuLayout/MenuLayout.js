import "./MenuLayout.less"

import React, { Component } from "react"

import Menu from "components/Menu"
import Collection from "components/Collection"

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
