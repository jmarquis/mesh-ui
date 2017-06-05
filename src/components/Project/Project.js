import "./Project.less"

import React, { Component } from "react"

import ProjectMenu from "ProjectMenu"
import List from "List"

export default class Project extends Component {

  render() {
    return (
      <div className="Project">
        <ProjectMenu />
        <List id={1} />
      </div>
    )
  }

}
