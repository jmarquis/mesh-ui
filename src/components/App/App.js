import "./App.less"

import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import Space from "components/Space"

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <div>auth</div>} />
          <Route path="/:spaceId" component={Space} />
        </Switch>
      </div>
    )
  }

}
