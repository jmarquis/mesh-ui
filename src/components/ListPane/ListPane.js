import "./ListPane.less"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import { NavLink } from "react-router-dom"
import autobind from "autobind-decorator"
import { connect } from "react-redux"

import SearchField from "components/SearchField"

import AddIcon from "icons/plus"

@withRouter
@connect((state, props) => {

  const { lists, notes } = state
  const { match: { params: { listId } } } = props
  const currentList = lists[listId]

  const notesArray = Object.keys(notes).reduce((notesArray, noteId) => {
    if (noteId in currentList.notes) {
      notesArray.push({
        id: noteId,
        ...notes[noteId]
      })
    }
    return notesArray
  }, [])

  return {
    notesArray
  }

})
@autobind
export default class ListPane extends Component {

  static propTypes = {
    match: PropTypes.object,
    notesArray: PropTypes.array
  }

  state = {
    searchFieldValue: ""
  }

  render() {
    const { match, notesArray } = this.props
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
          {
            notesArray.map(note =>
              <li key={note.id}>
                <NavLink to={`${match.url}/${note.id}`}>
                  <h3>{note.title}</h3>
                  <p>{note.body}</p>
                </NavLink>
              </li>
            )
          }
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
