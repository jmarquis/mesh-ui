import "./ListPane.less"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import { NavLink } from "react-router-dom"
import autobind from "autobind-decorator"

import SearchField from "components/SearchField"

import AddIcon from "icons/plus"

@withRouter
@autobind
export default class ListPane extends Component {

  static propTypes = {
    match: PropTypes.object
  }

  state = {
    searchFieldValue: ""
  }

  render() {
    const { match } = this.props
    const { searchFieldValue } = this.state
    return (
      <section className="ListPane">

        <header>
          <SearchField
            value={searchFieldValue}
            onChange={this.handleSearchFieldValueChange}
            onClear={this.handleSearchFieldClear}
          />
          <button type="button"><AddIcon /></button>
        </header>

        <ol>
          <li>
            <NavLink to={`${match.url}/1`}>
              <h3>Upcoming trips</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Qua tu etiam inprudens…</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/2`}>
              <h3>Upcoming trips</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Qua tu etiam inprudens…</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/3`}>
              <h3>Upcoming trips</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Qua tu etiam inprudens…</p>
            </NavLink>
          </li>
        </ol>

      </section>
    )
  }

  handleSearchFieldValueChange(event) {
    this.setState({
      searchFieldValue: event.target.value
    })
  }

  handleSearchFieldClear() {
    this.setState({
      searchFieldValue: ""
    })
  }

}
