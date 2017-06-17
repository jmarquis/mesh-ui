import "./App.less"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import { Route, Switch } from "react-router-dom"
import { connect } from "react-redux"

import auth from "etc/auth"

import Space from "components/Space"
import Authentication from "components/Authentication"

import { fetchUser } from "actions"

@withRouter
@connect(state => {
  const { user } = state
  return { user }
})
export default class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.any
  }

  componentDidMount() {
    const { dispatch } = this.props
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(fetchUser(user))
      } else {
        dispatch(fetchUser(false))
      }
    })
  }

  render() {
    const { user } = this.props
    return (
      <div className="App">
        {(() => {
          if (user) {
            return (
              <Switch>
                <Route exact path="/" render={() => <div>auth</div>} />
                <Route path="/:spaceId" component={Space} />
              </Switch>
            )
          } else if (user === false) {
            return <Authentication />
          } else {
            return <div>loading</div>
          }
        })()}
      </div>
    )
  }

}
