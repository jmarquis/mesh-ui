import "./Space.less"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { Route, Switch } from "react-router-dom"

import Menu from "components/Menu"
import List from "components/List"

export default class Space extends Component {

  static propTypes = {
    match: PropTypes.object
  }

  render() {
    const { match } = this.props
    return (
      <div className="Space">
        <Menu />
        <Switch>
          <Route exact path={match.url} render={() => <div>no list</div>} />
          <Route path={`${match.url}/:listId`} component={List} />
        </Switch>
      </div>
    )
  }

}
