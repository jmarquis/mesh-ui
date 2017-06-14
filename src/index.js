import "styles/base"

import React from "react"
import { render } from "react-dom"
import { AppContainer } from "react-hot-loader"
import { BrowserRouter as Router } from "react-router-dom"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import { Provider } from "react-redux"

import * as reducers from "reducers"

const store = createStore(combineReducers(reducers), applyMiddleware(
  thunk,
  createLogger({
    level: "info",
    collapsed: true,
    diff: true
  })
))

import App from "components/App"

const mountPoint = document.getElementById("app")

const renderApp = AppComponent => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <AppComponent />
        </Router>
      </Provider>
    </AppContainer>,
    mountPoint
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NewApp = require("./components/App").default
    renderApp(NewApp)
  })
}
