import "./Collection.less"

import React, { Component } from "react"

import NoteList from "NoteList"
import NoteEditor from "NoteEditor"

export default class Collection extends Component {

  render() {
    return (
      <section className="Collection">
        <NoteList />
        <NoteEditor />
      </section>
    )
  }

}
