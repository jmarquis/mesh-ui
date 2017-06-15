import "./FieldGroup.less"

import React, { Component } from "react"
import PropTypes from "prop-types"

export default class FieldGroup extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props
    return (
      <div className="FieldGroup">
        {children}
      </div>
    )
  }

}
