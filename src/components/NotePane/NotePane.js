import "./NotePane.less"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import autobind from "autobind-decorator"
import { Editor, EditorState } from "draft-js"

@connect((state, props) => {

  const { notes } = state
  const { match: { params: { noteId } } } = props
  const note = notes[noteId]

  return {
    note
  }

})
@autobind
export default class NotePane extends Component {

  static propTypes = {
    note: PropTypes.object
  }

  state = {
    editorState: EditorState.createEmpty()
  }

  render() {
    const { note } = this.props
    if (!note) return null
    return (
      <section className="NotePane">
        {/* <header>{note.title}</header>
        {note.body} */}
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </section>
    )
  }

  onChange(editorState) {
    this.setState({ editorState })
  }

}
