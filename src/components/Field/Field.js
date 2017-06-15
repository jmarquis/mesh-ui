import "./Field.less"

import React, { Component, Children, cloneElement } from "react"
import PropTypes from "prop-types"
import uuid from "uuid/v4"

export default class Field extends Component {

  static propTypes = {
    label: PropTypes.string,
    children: PropTypes.node
  }

  state = {
    fieldId: uuid()
  }

  render() {
    const { label, children } = this.props
    const { fieldId } = this.state
    return (
      <div className="Field">
        <label htmlFor={fieldId}>{label}</label>
        {cloneElement(Children.only(children), { id: fieldId })}
      </div>
    )
  }

}
