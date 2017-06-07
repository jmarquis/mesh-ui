import "./NoteList.less"

import React, { Component } from "react"
import autobind from "autobind-decorator"

import SearchField from "components/SearchField"

@autobind
export default class NoteList extends Component {

  state = {
    searchFieldValue: ""
  }

  render() {
    const { searchFieldValue } = this.state
    return (
      <section className="NoteList">

        <header>
          <SearchField
            value={searchFieldValue}
            onChange={this.handleSearchFieldValueChange}
            onClear={this.handleSearchFieldClear}
          />
          <button type="button">+</button>
        </header>

        <ol>
          <li>
            <a href="#">
              <h3>Upcoming trips</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Qua tu etiam inprudens…</p>
            </a>
          </li>
          <li>
            <a href="#">
              <h3>Upcoming trips</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Qua tu etiam inprudens…</p>
            </a>
          </li>
          <li>
            <a href="#">
              <h3>Upcoming trips</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Qua tu etiam inprudens…</p>
            </a>
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
