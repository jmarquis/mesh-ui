import "./List.less"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { Route } from "react-router-dom"

import ListPane from "components/ListPane"
import NotePane from "components/NotePane"

export default class List extends Component {

  static propTypes = {
    match: PropTypes.object
  }

  render() {
    const { match } = this.props
    return (
      <section className="List">
        <ListPane />
        <Route path={`${match.url}/:noteId`} component={NotePane} />
      </section>
    )
  }

}
