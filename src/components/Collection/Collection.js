import "./Collection.less"

import React, { Component } from "react"

import NoteList from "components/NoteList"
import NoteEditor from "components/NoteEditor"

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
