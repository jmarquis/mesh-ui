import "./List.less"

import React, { Component } from "react"

import ListPane from "components/ListPane"
import NotePane from "components/NotePane"

export default class List extends Component {

  render() {
    return (
      <section className="List">
        <ListPane />
        <NotePane />
      </section>
    )
  }

}
