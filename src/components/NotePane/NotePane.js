import React, { Component } from "react"
import PropTypes from "prop-types"

import { connect } from "react-redux"

@connect((state, props) => {

  const { notes } = state
  const { match: { params: { noteId } } } = props
  const note = notes[noteId]

  return {
    note
  }

})
export default class NotePane extends Component {

  static propTypes = {
    note: PropTypes.object
  }

  render() {
    const { note } = this.props
    if (!note) return null
    return (
      <section className="NotePane">
        {note.body}
      </section>
    )
  }

}
