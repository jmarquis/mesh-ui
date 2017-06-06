import "./NoteList.less"

import React, { Component } from "react"

export default class NoteList extends Component {

  render() {
    return (
      <section className="NoteList">

        <header>
          <input type="text" placeholder="Search" />
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

}
