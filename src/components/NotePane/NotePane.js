import "./NotePane.less"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import autobind from "autobind-decorator"
import { Editor, EditorState } from "draft-js"

import { updateNote } from "actions"

@connect((state, props) => {

  const { notes } = state
  const { match: { params: { noteId } } } = props
  const note = notes[noteId]

  return {
    noteId,
    note
  }

})
@autobind
export default class NotePane extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    noteId: PropTypes.number,
    note: PropTypes.object
  }

  render() {
    const { note } = this.props
    if (!note) return null
    return (
      <section className="NotePane">
        {/* <header>{note.title}</header>
        {note.body} */}
        <Editor editorState={note.editorState || EditorState.createEmpty()} onChange={this.onChange} />
      </section>
    )
  }

  onChange(editorState) {
    const { dispatch, noteId } = this.props
    dispatch(updateNote(noteId, { editorState }))
  }

}
