import "./NoteList.less"

import React, { Component } from "react"
import classNames from "classnames"
import autobind from "autobind-decorator"

import SearchIcon from "icons/magnifying-glass"

@autobind
export default class NoteList extends Component {

  state = {
    searchFocused: false
  }

  render() {
    const { searchFocused } = this.state
    return (
      <section className="NoteList">

        <header className={classNames({ focused: searchFocused })}>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            onFocus={this.handleSearchFocus}
            onBlur={this.handleSearchBlur}
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

  handleSearchFocus() {
    this.setState({
      searchFocused: true
    })
  }

  handleSearchBlur() {
    this.setState({
      searchFocused: false
    })
  }

}
