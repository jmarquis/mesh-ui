import "./App.less"

import React, { Component } from "react"

import MenuLayout from "MenuLayout"

export default class App extends Component {

  render() {
    return (
      <div className="App">
        {(() => {
          if (true) { // authenticated
            return (
              <MenuLayout id="1" />
            )
          } else {
            return (
              <div>authentication</div>
            )
          }
        })()}
      </div>
    )
  }

}
