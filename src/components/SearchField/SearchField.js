import "./SearchField.less"

import React, { Component, PropTypes } from "react"
import autobind from "autobind-decorator"
import classNames from "classnames"

import SearchIcon from "icons/magnifying-glass"
import ClearIcon from "icons/x"

@autobind
export default class SearchField extends Component {

  static propTypes = {
    value: PropTypes.string,
    onClear: PropTypes.func
  }

  state = {
    focused: false
  }

  render() {
    const { value, onClear, ...otherProps } = this.props
    const { focused } = this.state
    return (
      <div className={classNames("SearchField", { focused, hasValue: !!value })} onClick={this.handleClick}>
        <input
          type="text"
          placeholder="Search"
          ref={input => this.input = input}
          value={value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...otherProps}
        />
        <SearchIcon />
        <button type="button" onClick={this.handleClearClick}><ClearIcon /></button>
      </div>
    )
  }

  handleFocus() {
    this.setState({
      focused: true
    })
  }

  handleBlur() {
    this.setState({
      focused: false
    })
  }

  handleClick() {
    this.input.focus()
  }

  handleClearClick() {
    const { onClear } = this.props
    this.input.blur()
    onClear()
  }

}
