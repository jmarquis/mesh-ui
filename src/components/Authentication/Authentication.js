import "./Authentication.less"

import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import autobind from "autobind-decorator"

import FieldGroup from "components/FieldGroup"
import Field from "components/Field"

import { authenticate } from "etc/auth"
import { log } from "etc/logger"

import Logo from "icons/logo"

@autobind
export default class Authentication extends Component {

  state = {
    emailAddress: "",
    password: ""
  }

  render() {
    const { emailAddress, password } = this.state
    return (
      <section className="Authentication">
        <form onSubmit={this.handleSubmit}>

          <figure>
            <Logo />
          </figure>

          <FieldGroup>

            <Field label="Email address">
              <input
                type="text"
                value={emailAddress}
                onChange={this.handleEmailAddressChange}
                placeholder="you@somewhere.com"
              />
            </Field>

            <Field label="Password">
              <input
                type="password"
                value={password}
                onChange={this.handlePasswordChange}
              />
            </Field>

          </FieldGroup>

          <button>Sign in</button>

          <p>Don't have a Mesh account? <NavLink to="/register">Sign up</NavLink></p>

        </form>
      </section>
    )
  }

  handleEmailAddressChange(event) {
    this.setState({
      emailAddress: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event) {
    const { emailAddress, password } = this.state
    event.preventDefault()
    authenticate(emailAddress, password).catch(error => {
      log("auth error", error)
    })
  }

}
