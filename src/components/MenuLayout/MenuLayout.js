import "./MenuLayout.less"

import React, { Component } from "react"

import Menu from "components/Menu"
import List from "components/List"

export default class MenuLayout extends Component {

  render() {
    return (
      <div className="MenuLayout">
        <Menu />
        <List id={1} />
      </div>
    )
  }

}
